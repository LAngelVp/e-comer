import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Product } from '@shared/Models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product !: Product;
  
  // img = 'https://picsum.photos/250/300/?r=' + Math.random()

  @Output() addToCart = new EventEmitter();

  addCartHandler(){
    this.addToCart.emit(this.product)
  }
}
