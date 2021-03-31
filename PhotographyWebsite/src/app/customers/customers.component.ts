import { Component, OnInit } from '@angular/core';
import { customersAll } from '../customers';

// importing MatTabsModule to implement dynamic tabs & animations
import { MatTabsModule, MatTabLabel, MatTabGroup } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
