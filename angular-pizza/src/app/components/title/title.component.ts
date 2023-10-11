import {Component, ContentChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'custom-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input()  title: string = '';
  @ContentChild('second')
  private second!: ElementRef;

  ngAfterViewInit() {
    console.log(this.second);
  }

  toUpper() {
    return this.title.toUpperCase()
  }

  toLower() {
    return this.title.toLowerCase()
  }
}
