import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../../shared/service/customer.service';
import { Customer } from 'src/app/shared/model/form';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  @Input() customer; //same object from service to retrive the data

  constructor(private customerService: CustomerService) { }

  //this will get the customer details from the service
  ngOnInit() {
    console.log('review');
    this.customer = this.customerService.getData();
    console.log(this.customer);
  }
  onSubmit() {
    alert('Saved');
  }

}
