import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/cart';
import { CartItem } from '../shared/CartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService) { 
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.art.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);       
    this.cartService.changeQuantity(cartItem.art.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}

