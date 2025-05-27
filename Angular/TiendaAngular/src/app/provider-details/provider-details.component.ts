import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Provider } from '../provider';
import { providers } from '../provider';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-provider-details',
  imports: [NgIf],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent{
  provider: Provider | undefined;

  constructor(

  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const productId = Number(this.route.snapshot.params['id']);

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productId);
  }


}
