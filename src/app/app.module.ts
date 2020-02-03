import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  //import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LeftNavInventoryComponent } from './left-nav-inventory/left-nav-inventory.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { MatSliderModule,MatToolbarModule,MatButtonModule,MatFormFieldModule,MatIconModule,
  MatInputModule,MatTableModule,MatChipsModule } from '@angular/material';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InventoryComponent,
    LeftNavInventoryComponent,
    EmployeeComponent,
    AddBookComponent
  

  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatChipsModule,
        FormsModule
        
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
