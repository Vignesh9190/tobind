import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerService } from '../../../shared/service/customer.service';
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
      monthlyIncome: ['', Validators.required],
      annualIncome: ['', Validators.required] 
    });
    this.calculateIncome();
  }

  calculateIncome(){
    console.log('Income reached');
    this.incomeForm.get('monthlyIncome').valueChanges.subscribe(
      (value: number) => {
        console.log(value);
        let annualInr = (value*12);
        this.incomeForm.get('annualIncome').setValue(annualInr);
      }
    )
  }
  onSubmit() {
    console.log('income');
    console.log(this.incomeForm.value);
    this.customerService.setIncomeInfo(this.incomeForm.value, this.incomeForm.status);
    this.router.navigate(['customer/review']);
  }

}
