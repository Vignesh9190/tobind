import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms"; 

//Routing configuration for login child module
const loginRoutes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes) //to register the child routes
  ]
})
export class LoginModule { }
