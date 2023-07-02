import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent},
  { path: 'tag/:tag', component: HomeComponent},
  { path: 'art/:id', component: ArtDetailComponent},
  {path:'cart-page', component: CartPageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
