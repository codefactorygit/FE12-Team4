import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm = new FormGroup({
    fName: new FormControl('', [Validators.min(3) ,Validators.required]),
    lName: new FormControl('', [Validators.min(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    msg: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.contactForm.valid) {
      var contactInfo = this.contactForm.value;
      console.log(contactInfo);
      alert("Thank you for contacting us. We'll come back to you shortly!")
    } else {
      alert("You've either forgotten to fill all fields or you've entered wrong data. Please try again.")
    }
  }
}
