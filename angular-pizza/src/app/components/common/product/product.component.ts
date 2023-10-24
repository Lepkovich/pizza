import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output, SimpleChanges,
  ViewChild,
} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../../services/cart-product.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [CartProductService]
  // encapsulation: ViewEncapsulation.None
})


export class ProductComponent implements  OnChanges{
  @Input() product: ProductType;
  // @Input() product: ProductType = {} as ProductType; - один из работающих вариантов инициализации
  // @Input() product!: ProductType;  - или так

  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(TitleComponent)  //декоратор дочернего компонента
  private titleComponent!: TitleComponent; //присваиваем локальной переменной экземпляр класса TitleComponent

  @ViewChild('elem')
  private elem!: ElementRef

  constructor(public cartProductService: CartProductService ) {
    this.product = {
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

    addProductToCart() {
      this.addToCartEvent.emit(this.titleComponent.toUpper());
      this.cartProductService.count++; //увеличили кол-во конкретного продукта в корзине
    }
}
