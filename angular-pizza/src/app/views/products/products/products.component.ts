import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;

  constructor(
              // private http: HttpClient,
              private productService: ProductService,
              // private cartService: CartService,
              private router: Router
  ) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false
        })
      )
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

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title; //мы использовали сервис cartService для хранения параметра
  //   // this.router.navigate(['/order']); //просто перенаправили на /order
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}}); //передали название как URL-параметр
  // }
}
