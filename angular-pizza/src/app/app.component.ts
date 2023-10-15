import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ProductService]
})
export class AppComponent implements OnInit{
  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  lateData: Promise<string> | null = null;

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(()=>{
        resolve('Hello')
      }, 3000);
    })

    this.products = this.productService.getProducts()
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  };

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = title;
    this.cartService.count++; //увеличим на 1 кол-во товаров в корзине
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }
    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      address: '',
      phone: '',
    }
  }
}
