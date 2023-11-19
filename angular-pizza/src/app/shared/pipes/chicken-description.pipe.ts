import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    //трансформируем полученное из описания value, отделив слова по регулярке (все курицы)
    //вернув этих куриц в upperCase

    return value.replace(/([Кк]ур(?:иц|ин|о)[а-я]+)/g, (match:string) => {
      return match.toUpperCase();
    })
  }

}
