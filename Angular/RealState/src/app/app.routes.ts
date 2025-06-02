import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details'
    },
    {
      path: 'propiedades/:id',
      component: PropiedadesComponent,
      title: 'Propiedades'
    },
  ];
  
  export default routeConfig;
  
