import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router) {
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  products: ProductType[] = [];

  public addToCart(title: string): void {
    this.cartService.product = title; //мы использовали сервис cartService для хранения параметра
    // this.router.navigate(['/order']); //просто перенаправили на /order
    this.router.navigate(['/order'], {queryParams: {product: title}}); //передали название как URL-параметр
  }
}
