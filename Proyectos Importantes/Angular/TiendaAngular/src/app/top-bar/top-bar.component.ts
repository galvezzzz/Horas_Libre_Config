import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, NgIf],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {
  contCarrito: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cont$.subscribe(value => {
      this.contCarrito = value;
    });
  }
}
