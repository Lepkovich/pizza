import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  products: ProductType[] = [];

  public addToCart(title: string): void {
    //logic
  }
}
