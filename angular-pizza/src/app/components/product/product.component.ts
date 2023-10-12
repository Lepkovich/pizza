import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output, SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {TitleComponent} from "../title/title.component";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
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

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: ''
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
    }
}
