import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      customer_Id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.loginForm.controls.customer_Id.value == 'I19002' && this.loginForm.controls.password.value == 'password') {
      console.log('login');
     this.router.navigate(['customer']);  
      window.alert('valid login');
        
    }else {
      window.alert('Invalid login');
    }
    
  }

}
