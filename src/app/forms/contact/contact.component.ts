import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../shared/service/customer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  formLabel: string ="Contact Info";
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      emailId: ['',[Validators.required,Validators.pattern(this.emailRegEx)]],
      emailPriority: ['',[Validators.required]],
      phone: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(2)]],
      phonePriority: ['',[Validators.required]]
    })
  }
  onSubmit() {
    console.log('contact');
    console.log(this.contactForm.value);
    this.customerService.setContactInfo(this.contactForm.value);
    this.router.navigate(['customer/identity']);
  }

}
