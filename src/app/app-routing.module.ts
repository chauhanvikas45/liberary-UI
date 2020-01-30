import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LeftNavInventoryComponent } from './left-nav-inventory/left-nav-inventory.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'services', component: ServicesComponent },
{ path: 'inventory', component: InventoryComponent },
{ path: 'left-nav-inventory', component: LeftNavInventoryComponent },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
