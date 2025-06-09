import { Component } from '@angular/core';
import { products } from '../products';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterLink } from '@angular/router';
import { Provider } from '@angular/core';
import { providers } from '../provider';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, NgIf, ProductAlertsComponent, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {

  providers = [...providers];
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
