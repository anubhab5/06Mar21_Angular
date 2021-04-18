import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toDoList = [];

  constructor(private todoSvc: TodoService) { }

  ngOnInit(): void {
    // this.getToDoItems();
    this.deleteData();
  }

  getToDoItems() { // observable will be returned
    this.todoSvc.getToDoList().subscribe((resp: any) => {
      this.toDoList = resp;
    },
      err => {
        debugger
      });
  }

  getItemById(id: number) {
    this.todoSvc.getToDoItemById(id)
      .subscribe(
        resp => {
          debugger
        },
        err => {
          debugger
        }
      )
  }

  saveTheData() {
    this.todoSvc.saveData({
      title: "go to market"
    })
      .subscribe(
        resp => {
          debugger
        },
        err => {
          debugger
        }
      )
  }

  updateData() {
    this.todoSvc.updateData(1, {
      title: "go to market right now"
    })
      .subscribe(
        resp => {
          debugger
        },
        err => {
          debugger
        }
      )
  }

  deleteData() {
    this.todoSvc.deleteById(1)
      .subscribe(
        resp => {
          debugger
        },
        err => {
          debugger
        }
      )
  }

}
