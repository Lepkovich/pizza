## МОДУЛЬ №12. УРОК №13
### Работа с HTTP

С помощью сервиса HttpClient в Angular настроил получение массива products компонента products.

>this.http.get(url).subscribe( data => {…} )>

Сделал утверждение "массив строк" для get запроса:
>this.http.get<string[]>(url).subscribe( data => {…} )>

В методе pipe применил функции map и tap:
>.pipe(tap((result) => {
console.log(result)
}),
map((result) => (result.data)),
)>

Правильный синтаксис retry:
> this.http.get(url).pipe( retry(5) ).subscribe( data => {…} )>

Настроил catchError в observable:
>this.http.get(url).pipe( catchError( error => {…} ) ).subscribe( data => {…} )>

Настроил передачу заголовков при запросе:
>this.http.get(url, { headers: new HttpHeaders( {…} ) } )>

Передал в product.service данные на сервер :
>this.http.post(url, params)>

Настроил interceptor в auth.interceptor

Настроил лоадер в компоненте products через переменную loader.


