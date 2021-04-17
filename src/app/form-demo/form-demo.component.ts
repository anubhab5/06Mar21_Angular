import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  contactForm = this.fb.group({
    myName: ['', Validators.required],
    myEmail: ['abc@xyz.com'],
    phone: ['987'],
    gender: ['m']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitData() {
    debugger
    this.contactForm.value
  }

}
