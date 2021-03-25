import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  divsArray: Array<number>;
  constructor() { }

  ngOnInit(): void {
    this.divsArray = Array(4).fill('').map((x, i) => i);
  }

}
