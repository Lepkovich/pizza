import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit{

  @Input() coolInputDefaultBgColor: string = 'white';
  @Input() coolInputFocusBgColor: string = 'orange';


  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  @HostListener('focus') //при фокусе
  onFocus() {
    this.changeElementBgColor(this.coolInputFocusBgColor)

  }
  @HostListener('blur') //потеря фокуса
  onBlur() {
    this.changeElementBgColor(this.coolInputDefaultBgColor)
  }

  @HostListener('click', ['$event', '$event.target'])
  onClick(event: Event, target: HTMLElement) {
    console.log(target);
    console.log(event);
  }
  ngOnInit() {
    // this.rend.setStyle(this.el.nativeElement, 'background-color', 'yellow');
    this.rend.setAttribute(this.el.nativeElement, 'placeholder', this.el.nativeElement.getAttribute('placeholder') + '*' )
    // this.el.nativeElement.style.backgroundColor = 'yellow';

    // const text = this.rend.createElement('span');
    // this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
    // this.rend.setStyle(text, 'color', 'red');
    // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement))
  }

  changeElementBgColor(color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background-color', color);

  }
}
