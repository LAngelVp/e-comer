import { Component, Inject, Input, SimpleChange, SimpleChanges, inject, signal } from '@angular/core';
import {ProductComponent} from '@products/components/product/product.component'
import { CommonModule } from '@angular/common';
import { Product } from '@shared/Models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/Models/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  // Injeccion de dependencias para la API.
  private productService = inject(ProductService);
  categories = signal<Category[]>([]);

  private categoryService = inject(CategoryService);


  @Input() category_id?: string;

  // Un buen punto para mandar a llamar el API.
  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id'];
    if (category_id){
      this.getProducts()
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: () => {

      }
    })
  }
  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: () => {

      }
    })
  }
}
