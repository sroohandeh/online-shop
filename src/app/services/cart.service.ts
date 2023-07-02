import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { Art } from '../shared/art';
import { CartItem } from '../shared/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();
  
  addToCart(art: Art):void{
    let cartItem = this.cart.items.find(item => item.art.id === art.id);
    if(cartItem){
      this.changeQuantity(art.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(art));
  }

  removeFromCart(artId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.art.id != artId);
  }

  changeQuantity(artId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.art.id === artId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
