import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Injectable()

export class ProductService {

  private products: ProductType[] = [];


  constructor(private http: HttpClient) { }

  getTestProducts(): Observable<ProductType[]> { //тренировались в уроке
   let params = new HttpParams();
   params = params.set('extraField', 1)
   return this.http.get<{ data: ProductType[]}>('https://testologia.site/pizzas', {
     // observe: "response",
     // responseType: "json"
     // headers: new HttpHeaders({
     //   Authorization: 'auth-token'
     // }),
     // params: params
   })
     .pipe(
       tap(result => {
         console.log(result);
       }),
       map((result) => (result.data))
     )
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/pizzas');
  }

  getProduct(id:number): Observable<ProductType> {
   return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`);
  }

  createOrder(data: {product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-pizza`, data);
  }
}
