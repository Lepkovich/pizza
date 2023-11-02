import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit{

  private observable: Observable<string>

  constructor(public cartService: CartService) {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('hello');
      }, 2000)
    })
  }
  ngOnInit() {
    this.observable.subscribe((param:string) => {
      console.log(param )
    })
  }
}
