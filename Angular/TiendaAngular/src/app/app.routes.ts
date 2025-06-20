import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        title: 'Inicio'
    },
    {
        path: 'products/:id',
        component: ProductDetailsComponent,
        title: 'Detalles Producto'
    },
	{
		path: 'cart',
		component: CartComponent,
		title: 'Carrito'
	},
    {
        path: 'providers/:id',
        component: ProviderDetailsComponent,
        title: 'Proveedor'
    },

];
