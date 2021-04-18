import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // https://jsonplaceholder.typicode.com/todos
  constructor(private http: HttpClient) { }

  getToDoList() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }

  getToDoItemById(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/" + id);
  }

  saveData(dataToSave) {
    return this.http.post("/todo/save", dataToSave);
  }

  updateData(id: number, data: any) {
    return this.http.put("/todo/" + id, data);
  }

  deleteById(id: number) {
    return this.http.delete("/todo/" + id);
  }

}
