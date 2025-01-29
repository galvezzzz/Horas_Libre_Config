import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { products } from '../product';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
}
