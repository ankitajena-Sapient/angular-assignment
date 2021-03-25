import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss']
})
export class DynamicLoadingComponent implements OnInit {
  buttonArray: Array<number> = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.buttonArray.push(i);
    }
  }

  onContainerScroll(event: any): void{
      this.buttonArray.push(this.buttonArray.length + 1);
  }
  setAlert(index: number): void{
    alert( `Button ${index} is Clicked`);
  }

}
