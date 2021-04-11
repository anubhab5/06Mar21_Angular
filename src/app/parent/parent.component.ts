import { Component, OnInit } from '@angular/core';
import { MySvcService } from '../my-svc.service';
import { Svc2Service } from '../svc2.service';
import { IStudent } from './student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // template: `
  //   <h1>This is parent. and is working from inside the ts file</h1>
  // `,
  styleUrls: ['./parent.component.css'],
  providers: []
})
export class ParentComponent {

  product;

  firstName: string = "JOHN SNOW";
  myMarks: number = 12;
  isPassed: boolean = true;

  // 39 > 
  studentList: Array<IStudent> = [
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

  constructor(private mySvc: MySvcService) {
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

  childEvntEmitterListener(data) {
    this.product = data;
  }

  buttonClicked() {
    // this.mySvc.getMyAge();
    alert(this.mySvc.getMyAge());
  }

}
