import { Component, OnInit } from '@angular/core';
import { testimonials } from '../testimonials';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  testimonials = testimonials;

  constructor() {}

  ngOnInit(): void {}
}
