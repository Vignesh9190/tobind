import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../../shared/service/customer.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  @Input() customer;
  isGeneralFormValid: boolean = false;
  general: boolean =true; 
  contact: boolean = false;
  identity: boolean = false;
  income: boolean = false;
  review: boolean = false;
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.customer = this.customerService.getData();
    console.log(this.customer);
    this.contact = this.customer.generalFormStatus === 'VALID'? true: false;
  }
  generalClick(){
    this.router.navigate(['customer/general']);  
  }
  contactClick(){
    console.log("click function reached", this.customer.generalFormStatus);
    
    if(this.customer.generalFormStatus === 'VALID'){
      console.log("inside");
      this.isGeneralFormValid = true;
      this.router.navigate(['customer/contact']);   
    }
  }
  identityClick(){
    console.log("click function reached")
    if(this.customer.contactFormStatus === 'VALID'){
      this.identity = true;
      console.log("inside");
      this.isGeneralFormValid = true;
      this.router.navigate(['customer/identity']);   
    }
  }
  incomeClick(){
    console.log("click function reached")
    if(this.customer.identityFormStatus === 'VALID'){
      this.income = true;
      console.log("inside");
      this.isGeneralFormValid = true;
      this.router.navigate(['customer/income']);   
    }
  }
  reviewClick(){
    console.log("click function reached")
    if(this.customer.incomeFormStatus === 'VALID'){
      this.review = true;
      console.log("inside");
      this.isGeneralFormValid = true;
      this.router.navigate(['customer/review']);   
    }
  }
}
