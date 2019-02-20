import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../../shared/service/customer.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  secondaryEmail: boolean = false;
  primaryEmail: boolean = true;
  primaryPhone: boolean = true;
  secondaryPhone: boolean = false;
  formLabel: string ="Contact Info";
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      emailId1: ['',[Validators.required,Validators.pattern(this.emailRegEx)]],
      emailPriority1: ['',[Validators.required]],
      emailId2: [''],
      emailPriority2: [''],
      phone1: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]],
      phonePriority1: ['',[Validators.required]],
      phone2: [''],
      phonePriority2: ['']
    })
  }
  onSubmit() {
    console.log('contact');
    console.log(this.contactForm.value);
    this.customerService.setContactInfo(this.contactForm.value);
    this.router.navigate(['customer/identity']);
  }
  addItem(){
    console.log('reached');
    this.secondaryEmail = true;
    this.primaryEmail = false;
    const emailId2Control = this.contactForm.get('emailId2');
    const emailPriority2Control = this.contactForm.get('emailPriority2');
    emailId2Control.setValidators([Validators.required,Validators.pattern(this.emailRegEx)]);
    emailPriority2Control.setValidators([Validators.required]);
  }
  removeItem(){
    console.log('remove');
    this.primaryEmail = true;
    this.secondaryEmail = false;
    const emailId2Control = this.contactForm.get('emailId2');
    const emailPriority2Control = this.contactForm.get('emailPriority2');
    emailId2Control.clearValidators();
    emailPriority2Control.clearValidators();
    emailId2Control.updateValueAndValidity();
    emailPriority2Control.updateValueAndValidity();
  }
  addPhone()
  {
    this.secondaryPhone = true;
    this.primaryPhone = false;
    const phone2Control = this.contactForm.get('phone2');
    const phonePriority2Control = this.contactForm.get('phonePriority2');
    phone2Control.setValidators([Validators.required,Validators.maxLength(10),Validators.minLength(2)]);
    phonePriority2Control.setValidators([Validators.required]);
  }
  removePhone(){
    this.primaryPhone = true;
    this.secondaryPhone = false;
    const phone2Control = this.contactForm.get('phone2');
    const phonePriority2Control = this.contactForm.get('phonePriority2');
    phone2Control.clearValidators();
    phonePriority2Control.clearValidators();
    phone2Control.updateValueAndValidity();
    phonePriority2Control.updateValueAndValidity();
  }

}
