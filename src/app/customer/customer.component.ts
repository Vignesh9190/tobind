import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../shared/service/customer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

//customer component to display nav items and its corresponding component view in a sam page
export class CustomerComponent implements OnInit {

  @Input() customer; //same object from service
  constructor(private customerService : CustomerService, private router: Router) { }

  ngOnInit() {
    this.customer = this.customerService.getData();
    console.log(this.customer);
  }

  sample(){
    this.router.navigate(['customer/identity']);
  }

}
