import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // step 1: in the child componet who will receive the data should be decorated with @Input
  @Input()
  childFirstName: string = "";

  constructor() { }

}
