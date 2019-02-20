import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { CustomerService } from '../shared/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  invalid = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService : CustomerService) { }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      customer_Id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    if(this.loginForm.controls.customer_Id.value == 'I19002' && this.loginForm.controls.password.value == 'password') {
      console.log('login');
      this.customerService.setCustomerId(this.loginForm.get('customer_Id').value);
      
      this.router.navigate(['customer/general']);  
        
    }else {
      this.invalid=true;
    }
    
  }

}
