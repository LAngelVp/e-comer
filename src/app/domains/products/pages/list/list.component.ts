import { Component, inject, signal } from '@angular/core';
import {ProductComponent} from '../../components/product/product.component'
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/Models/product.model';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
      id: Date.now(),
      title: 'product 1',
      price: 200,
      image: "https://picsum.photos/250/300?r=23",
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'product 2',
      price: 200,
      image: "https://picsum.photos/250/300?r=24",
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'product 3',
      price: 200,
      image: "https://picsum.photos/250/300?r=25",
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'product 1',
      price: 200,
      image: "https://picsum.photos/250/300?r=23",
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'product 2',
      price: 200,
      image: "https://picsum.photos/250/300?r=24",
      creationAt: new Date().toISOString()
      },
      {
      id: Date.now(),
      title: 'product 3',
      price: 200,
      image: "https://picsum.photos/250/300?r=25",
      creationAt: new Date().toISOString()
      }
   ];
   this.products.set(initProducts);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
