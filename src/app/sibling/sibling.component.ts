import { Component, OnInit } from '@angular/core';
import { MySvcService } from '../my-svc.service';
import { Svc2Service } from '../svc2.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
  providers: [Svc2Service]
})
export class SiblingComponent implements OnInit {

  firstName = "jack";
  lastName = "SNOW"

  currentDate = new Date();

  sliceDemo = 'abcdefghi';

  cartValue: number = 100;

  mySalary = 122.2345;

  studentList = [
    {
      name: "john"
    },
    {
      name: "jack"
    },
    {
      name: "mary"
    },
    {
      name: "eve"
    }
  ];

  toUpperCase(data) {
    return data.toUpperCase();
  }


  // private svc2 = new Svc2Service();
  // private mySvc = new MySvcService(this.svc2);

  // constructor() { }
  constructor(private mySvc: MySvcService) { }

  ngOnInit(): void {
  }

  quickCall() {
    alert(this.mySvc.getMyAge())
  }

}