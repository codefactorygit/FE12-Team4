import { Component, OnInit } from '@angular/core';
import { customersAll } from '../customers';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = customersAll;
  
  constructor() { }

  ngOnInit(): void {
  }

}
