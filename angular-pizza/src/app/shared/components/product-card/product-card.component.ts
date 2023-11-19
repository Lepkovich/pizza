import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
  // encapsulation: ViewEncapsulation.None
})


export class ProductCardComponent implements  OnChanges{
  @Input() product: ProductType;
  // @Input() product-card: ProductType = {} as ProductType; - один из работающих вариантов инициализации
  // @Input() product-card!: ProductType;  - или так

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)  //декоратор дочернего компонента
  private titleComponent!: TitleComponent; //присваиваем локальной переменной экземпляр класса TitleComponent

  @ViewChild('elem')
  private elem!: ElementRef

  constructor(public cartProductService: CartProductService ) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      datetime: ''
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges', changes)
  }

  // ngAfterViewInit() {
  //     console.log(this.elem)
  //   }

    // addProductToCart() { <--вместо вызова этой функции сразу в шаблоне поменяли route и queryParams
    //   this.addToCartEvent.emit(this.titleComponent.toUpper());
    //   this.cartProductService.count++; //увеличили кол-во конкретного продукта в корзине
    // }
}
