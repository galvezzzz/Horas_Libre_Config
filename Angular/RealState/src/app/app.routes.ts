import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FormCasasComponent } from './form-casas/form-casas.component';

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
      path: 'form-casas',
      component: FormCasasComponent,
      title: 'Form casas'
    }
  ];
  
  export default routeConfig;
  
