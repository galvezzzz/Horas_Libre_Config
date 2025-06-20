import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../product';

@Component({
  selector: 'app-product-details',
  imports: [NgIf, CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    // First get the product id from the current route.
    const productId = Number(this.route.snapshot.params['id']);
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }

  avisarStock(product: Product) {
    window.alert('Se te avisara cuando vuelva a haber disponibilidad de este producto');
  }
}
