import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../shared/service/customer.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalForm: FormGroup;
  formLabel: string = "General Info";
  cities = ['Guindy', 'T.Nagar', 'Anna Nagar'];
  states = ['Tamil Nadu', 'kerala', 'Andhra pradesh'];
  countries = ['India', 'USA', 'UK'];
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    console.log('general');
    this.generalForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(1)]],
      dob: ['', Validators.required],
      age: [''],
      address: ['', [Validators.required, Validators.maxLength(56), Validators.minLength(2)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]]
    });
    this.toSetAge();
  }

  //to set age automatically for the customer
  toSetAge() {
    const ageControl = this.generalForm.get('age');
    this.generalForm.get('dob').valueChanges.subscribe(
      (birthDate: Date) => {
        console.log(birthDate);
        let birth = new Date(birthDate);
        let today = new Date();
        let year = today.getFullYear() - birth.getFullYear();
        ageControl.setValue(year);
      }
    )
  }
  onSubmit() {
    console.log('validated');
    console.log(this.generalForm.value);
    this.customerService.setGeneralInfo(this.generalForm.value);
    this.router.navigate(['customer/contact']);
  }

}
