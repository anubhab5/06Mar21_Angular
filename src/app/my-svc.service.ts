import { Injectable } from '@angular/core';
import { Svc2Service } from './svc2.service';

@Injectable({
  providedIn: 'root'
})
export class MySvcService {

  private myAge: number = 110;

  public getMyAge() {
    return this.myAge;
  }

  constructor(private svc2: Svc2Service) { }
}
