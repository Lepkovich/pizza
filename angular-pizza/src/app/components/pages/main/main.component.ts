import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Observable} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  private observable: Observable<number>;

  constructor(public cartService: CartService) {
    this.observable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
      setTimeout(() => {
        observer.error('world');
      }, 5000);
    })
  }

  ngOnInit() {
    this.observable.subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1: ', param);
        },
        error: (error: string) => {
          console.log('ERROR! ' + error);
        }
      }
    );
  }

  test() {
    this.observable.subscribe((param: number) => {
      console.log('subscriber 2 : ', param);
    });
  }
}
