import { Component, OnInit } from '@angular/core';
import { IStudent } from './student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // template: `
  //   <h1>This is parent. and is working from inside the ts file</h1>
  // `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  firstName: string = "JOHN SNOW";
  myMarks: number = 12;
  isPassed: boolean = true;

  // 39 > 
  studentList : Array<IStudent> = [
    {
      firstName: "Jack",
      lastName: "j",
      marks: 22
    },
    {
      firstName: "JOHN",
      lastName: "j",
      marks: 46
    },
    {
      firstName: "JANE",
      lastName: "j",
      marks: 12
    },
    {
      firstName: "JILL",
      lastName: "j",
      marks: 66
    }
  ];

  constructor() {
    console.log("Constructor is called");
  }

  getDetails() {
    this.isPassed = false;
    let data = this.sayHello();
    return data;
  }

  sayHello() {
    return "In Hello";
  }

}
