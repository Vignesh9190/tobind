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
  loginForm: FormGroup; //object for form group class to track the value and state of its form controls
  submitted = false;
  invalid = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService : CustomerService) { }
  
  //reactive form is created using formgroup and formbuilder(using group method) to declare the form controls
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      customer_Id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  //action happens when user log in 
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.controls.customer_Id.value.length !== 0 && this.loginForm.controls.password.value.length !==0){
      if(this.loginForm.controls.customer_Id.value == 'I19002' && this.loginForm.controls.password.value == 'password') {
        console.log('login');
        this.customerService.setCustomerId(this.loginForm.get('customer_Id').value);
        this.router.navigate(['customer/general']);   
      }else {
        this.invalid=true;
      }
    } 
  }

}
