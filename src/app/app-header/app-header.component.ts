import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    console.log("Programmatically");
    this.route.navigate([""]);
    // this.route.navigate(["products"]);
  }

}
