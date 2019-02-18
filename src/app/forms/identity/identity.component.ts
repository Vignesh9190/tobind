import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../shared/service/customer.service';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss']
})
export class IdentityComponent implements OnInit {
  identityForm: FormGroup;
  formLabel: string = "Identity Info";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.identityForm = this.formBuilder.group({
      proofType: ['', Validators.required],
      proofNumber: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(16)]]
    });
  }

  onSubmit() {
    console.log('identity');
    console.log(this.identityForm.value);
    this.customerService.setIdentityInfo(this.identityForm.value);
    this.router.navigate(['customer/income']);
  }

}
