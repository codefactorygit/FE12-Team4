import { Component, OnInit } from '@angular/core';
import {portfolio} from '../portfolio';


@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio = portfolio;
  

  constructor() { }

  ngOnInit(): void {
  }

}
