import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  constructor(private cartService: CartService, //класс общего с product-card.component сервиса
              private activatedRoute: ActivatedRoute) { //класс для подписки на Observable
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  ngOnInit(): void {
    // if(this.cartService.product-card) {
    //   this.formValues.productTitle = this.cartService.product-card; //использовали сервис cartService для передачи параметра
    // }

    const productParam = this.activatedRoute.snapshot.queryParamMap.get('product'); //сделали snapshot
    if (productParam) {
      this.formValues.productTitle = productParam; //передали значение снэпшота в поле
    }
    // this.activatedRoute.queryParams.subscribe((params) => { //колл-бэк функция с одним параметром
    //   if(params['product-card']) {
    //     this.formValues.productTitle = params['product-card']; //передали параметр product-card в URLe
    //   }
    // })
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
