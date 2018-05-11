import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { FoodListComponent } from './food-list/food-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'food-list',
    component: FoodListComponent
  },



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
