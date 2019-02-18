import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../shared/service/customer.service';
@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  incomeForm: FormGroup;
  formLabel: string = "Income Info";
  constructor(private formBuilder: FormBuilder, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.incomeForm = this.formBuilder.group({
      annualIncome: ['', Validators.required],
      monthlyIncome: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('income');
    console.log(this.incomeForm.value);
    this.customerService.setIncomeInfo(this.incomeForm.value);
    this.router.navigate(['customer/review']);
  }

}
