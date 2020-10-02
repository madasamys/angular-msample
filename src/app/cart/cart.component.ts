import { Component, OnInit } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {  
   items;
  constructor(
    private cartServicce: CartService
  ) { }

  ngOnInit() {
    // this.items = this.cartService.getItems();
    this.items = this.cartServicce.getItems();
  }

}