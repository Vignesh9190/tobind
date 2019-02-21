import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms"; 
import { CustomerComponent } from './customer.component';
import { GeneralComponent } from './forms/general/general.component';
import { ContactComponent } from './forms/contact/contact.component';
import { WizardComponent } from './forms/wizard/wizard.component';
import { IdentityComponent } from './forms/identity/identity.component';
import { IncomeComponent } from './forms/income/income.component';
import { ReviewComponent } from './forms/review/review.component';
import { DobvalidationDirective } from '../shared/directive/dobvalidation.directive';
import { NumbervalidationDirective } from '../shared/directive/numbervalidation.directive';
//import {NgxMaskModule} from 'ngx-mask';

//routes inside customer module
//customer component will have wizard and its child routes
const customerRoutes: Routes = [
  {
    path: '', component: CustomerComponent, children: [
      { path: 'general', component: GeneralComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'identity', component: IdentityComponent },
      { path: 'income', component: IncomeComponent},
      { path: 'review', component: ReviewComponent}
    ]
  },
];
@NgModule({
  declarations: //component should declare in any one module
  [
    CustomerComponent,
    GeneralComponent,
    ContactComponent,
    WizardComponent,
    IdentityComponent,
    IncomeComponent,
    ReviewComponent,
    DobvalidationDirective, //directive to perform date of birth validation
    NumbervalidationDirective  //directive to limit user to allow only number
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(customerRoutes),
    //NgxMaskModule.forRoot()
  ]
})
export class CustomerModule { }
