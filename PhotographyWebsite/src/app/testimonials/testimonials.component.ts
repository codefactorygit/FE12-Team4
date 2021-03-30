import { Component, OnInit } from '@angular/core';
import { weddings } from '../testimonials_weddings';
import { portraits } from '../testimonials_portraits';
import { travels } from '../testimonials_travels';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  weddings = weddings;
  portraits = portraits;
  travels = travels;

  constructor() {}

  ngOnInit(): void {}
}
