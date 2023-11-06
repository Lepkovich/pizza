import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
              // private http: HttpClient,
              private productService: ProductService,
              // private cartService: CartService,
              private router: Router
  ) {
  }

  products: ProductType[] = [];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/'])
          }
        }
      )
  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title; //мы использовали сервис cartService для хранения параметра
  //   // this.router.navigate(['/order']); //просто перенаправили на /order
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}}); //передали название как URL-параметр
  // }
}
