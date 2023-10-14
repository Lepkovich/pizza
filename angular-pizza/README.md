# Модуль 12. Фреймворк Angular
## УРОК №5. Компоненты
Перенесли в product.component.html часть кода, отвечающего за отрисовку продукта.

Перенесли в product.component.scss часть кода, отвечающие за стили продукта

Вставили в app.component.html компонент с циклом <product *ngFor="let product of products"></product>

Для передачи данных из родительского в дочерний использовали декоратор @Input

Настроили декоратор @Output для передачи значения из дочернего product.component.html  в родительский app.component.ts 

Создали событие Event Emitter в функции addProductToCart(), вызываемой по клику.

<product *ngFor="let product of products" [product]="product" (addToCartEvent)="addToCart($event, orderElement)"></product>

где $event - это отсылка к нашему слушателю emit(this.product) из функции addProductToCart(). Сама же функция addToCart() находится в родительском app.component.ts

Для параметра @Input настроили аксессоры (геттер и сеттер)

Получили product и значение title у него и передали дальше в upper case

Создали еще 1 вложенный дочерний компонент <custom-title> и провзаимодейстовали с его экземпляром через директиву @ViewChild

Настроили контентную проекцию и разместили элементы в дочерний компонент с помощью маркеров.

Использовали директиву @ContentChild для получения в дочернем компоненте ссылки на элемент


## УРОК №6. Директивы

Настроили встроенные директивы:

Атрибутные: ngModel, ngClass

Структурные - меняют DOM. Примеры: ngFor, ngIf

Создали кастомную атрибутную директиву coolInput и применили ее к нашим инпутам на странице.

Внутри директивы поменяли цвет бэкграунда инпута на желтый.

Настроили декоратор @HostListener для обработки событий focus и blur

Использовали декоратор @HostBinding для добавления и снятия класса к элементу

С помощью *ngIf then и else настроили замену картинки на дефолтную при отсутсвии картинки продукта.

Создали структурную директиву *isChicken, которая ищет и фильтрует продукты по части в описании 'кур'
## УРОК №7. Пайпы

Применили встроенный UpperCasePipe:
  <div class="product-text">{{product.description | uppercase}}</div>

Применили встроенный datePipe:

  <div>{{product.datetime | date}}</div>

Применили Internationalization (i18n)

Создали свой пайп chicken-description, который выберет из описания пиццы все куриные (используя regEx) и сделает их upperCase

Создали пайп word-upper, в который получаем wordParts (массив фильтров из корня любых ингридиентов), и все слова с этим корнем делаем upperCase

Создали пайп chicken-products, который применили к *ngFor="let product of products | chickenProducts"

В пайпе приняли массив продуктов и вернули новый массив, в который попали только те продукты, в title которых есть 'кур'



## УРОК №8. Сервисы и Dependency Injection
