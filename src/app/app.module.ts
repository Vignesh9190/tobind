import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms"; 
import { AppComponent } from './app.component';

const commonRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' }, //lazy loading for login module
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'} //lazy loading for customer module
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(commonRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
