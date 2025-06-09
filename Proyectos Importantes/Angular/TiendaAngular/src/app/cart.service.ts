import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  private cartCount = new BehaviorSubject<number>(0);
  cont$ = this.cartCount.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.cartCount.next(this.items.length);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}