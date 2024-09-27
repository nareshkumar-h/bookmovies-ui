import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent implements OnInit {

  cartItems!: any[];

  constructor() {
    console.log('CartComponent');
  }
  ngOnInit(): void {
    const cartStr = localStorage.getItem("CART");
    if (cartStr) {
      this.cartItems = JSON.parse(cartStr);
    } else {
      this.cartItems = [];
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem("CART", JSON.stringify(this.cartItems));
  }

  clearCart() {
    localStorage.removeItem("CART");
    this.cartItems = []; //reset to empty
  }
}
