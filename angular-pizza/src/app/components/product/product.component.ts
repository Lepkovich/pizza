import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {
  @Input() product: ProductType;
  // @Input() product: ProductType = {} as ProductType; - один из работающих вариантов инициализации
  // @Input() product!: ProductType; = {} as ProductType; - или так

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: ''
    }
  }

    addProductToCart(title: string) {
      this.addToCartEvent.emit(title);
    }
}
