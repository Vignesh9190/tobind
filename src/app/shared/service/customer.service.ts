import { Injectable } from '@angular/core';
import { Customer,CustomerGeneralInfo, CustomerContactInfo, CustomerIdentityInfo, CustomerIncomeInfo } from "../model/form";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public customer: Customer = new Customer();
  constructor() { }

  getGeneral() : CustomerGeneralInfo {
    var customerGeneralInfo: CustomerGeneralInfo = {
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        dob: this.customer.dob,
        age: this.customer.age,
        address: this.customer.address,
        city: this.customer.city,
        state: this.customer.state,
        country: this.customer.country,
        zipcode: this.customer.zipcode
    };
    return customerGeneralInfo;
  }

  getData() : Customer {
    return this.customer;
  }

  setGeneralInfo(data: CustomerGeneralInfo) {
    this.customer.firstName = data.firstName;
    this.customer.lastName = data.lastName;
    this.customer.dob = data.dob;
    this.customer.age = data.age;
    this.customer.address = data.address;
    this.customer.city = data.city;
    this.customer.state = data.state;
    this.customer.country = data.country;
    this.customer.zipcode = data.zipcode;
  } 

  setContactInfo(data: CustomerContactInfo){
    this.customer.emailId1 = data.emailId1;
    this.customer.emailPriority1 = data.emailPriority1;
    this.customer.emailId2 = data.emailId2;
    this.customer.emailPriority2 = data.emailPriority2;
    this.customer.phone1 = data.phone1;
    this.customer.phonePriority1 = data.phonePriority1;
    this.customer.phone2 = data.phone2;
    this.customer.phonePriority2 = data.phonePriority2;

  }

  setIdentityInfo(data: CustomerIdentityInfo) {
    this.customer.proofType = data.proofType;
    this.customer.proofNumber = data.proofNumber;
  }

  setIncomeInfo(data: CustomerIncomeInfo){
    this.customer.annualIncome = data.annualIncome;
    this.customer.monthlyIncome = data.monthlyIncome;
  }

  setCustomerId(data){
    this.customer.customerId = data;
    console.log(data);
  }

}
