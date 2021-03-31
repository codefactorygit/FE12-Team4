import { Component, OnInit } from '@angular/core';
import {portfolioWeddings} from '../portfolio_weddings';
import {portfolioNatur} from '../portfolio_natur';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portWedd = portfolioWeddings;
  portNat = portfolioNatur;

  constructor() { }

  ngOnInit(): void {
  }

}
