import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms"; 
import { AppComponent } from './app.component';



//Router configuration
const commonRoutes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginModule' }, //lazy loading for login module
  { path: 'customer', loadChildren: './customer/customer.module#CustomerModule'} //lazy loading for customer module
];

//decorator to represent this class as a module
@NgModule({
  declarations: [ //to access the component in whole application
    AppComponent
  ],
  imports: [ //other angular module should declare here
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(commonRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent] // to kick start the initial view for the application
})
export class AppModule { }
