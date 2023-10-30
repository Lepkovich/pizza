import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  constructor(private cartService: CartService, //класс общего с product.component сервиса
              private activatedRoute: ActivatedRoute) { //класс для подписки на Observable
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  ngOnInit(): void {
    // if(this.cartService.product) {
    //   this.formValues.productTitle = this.cartService.product; //использовали сервис cartService для передачи параметра
    // }

    this.activatedRoute.queryParams.subscribe((params) => { //колл-бэк функция с одним параметром
      if(params['product']) {
        this.formValues.productTitle = params['product']; //передали параметр product в URLe
      }
    })
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
