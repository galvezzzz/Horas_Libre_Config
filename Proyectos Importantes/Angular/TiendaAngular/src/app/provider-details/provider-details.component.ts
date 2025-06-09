import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Provider } from '../provider';
import { providers } from '../provider';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-details',
  imports: [NgIf],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent implements OnInit {

  listaProveedores: Provider | undefined;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const providerId = Number(this.route.snapshot.params['id']);

    // Find the product that correspond with the id provided in route.
    this.listaProveedores = providers.find(product => product.id === providerId);
  }


}
