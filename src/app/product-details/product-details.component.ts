import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import {NewCartService} from '../cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private newCartService: NewCartService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.product = products[+params.get('productId')];
  });
  }

  addToCart(product) {
    // this.cartService.addToCart(product);
    this.newCartService.addToCart(product)
    window.alert('Your product has been added to the cart!');
  }

}