import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<number> = [];
  gridView = false;
  constructor() { }

  ngOnInit(): void {
    this.products = Array(40).fill('').map((x, i) => i);
  }

  sort(): void{
    this.products.reverse();
  }

}
