import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MySvcService } from '../my-svc.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  productList = [
    {
      prodName: "Phone",
      prodPrice: 200,
      unit: "AUD"
    },
    {
      prodName: "Laptop",
      prodPrice: 2000,
      unit: "AUD"
    },
    {
      prodName: "IPod",
      prodPrice: 100,
      unit: "AUD"
    },
    {
      prodName: "Table",
      prodPrice: 50,
      unit: "AUD"
    }
  ];

  // step 1: in the child componet who will receive the data should be decorated with @Input
  @Input()
  childFirstName: string = "";

  // Step 1
  @Output()
  childDataEventEmitter = new EventEmitter();

  constructor(private mySvc: MySvcService) { }

  // step 2
  // emit the data you want to pass to the parent using the emit function over the eventEmitter variable created
  buttonClicked(product) {
    this.childDataEventEmitter.emit(product);

  }


  callMeInChildToUnderstandSvc() {
    alert(this.mySvc.getMyAge());
  }

}
