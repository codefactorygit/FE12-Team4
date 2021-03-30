import { Component, OnInit } from '@angular/core';
import { weddings } from '../testimonials_weddings';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  weddings = weddings;

  constructor() {}

  ngOnInit(): void {}
}
