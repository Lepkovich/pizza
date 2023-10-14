import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  transform(value: string, wordParts: string[]): string  {

    //принимаем описание пиццы как value и массив слов для фильтра как wordParts[]
    //фильтруем эти слова одно за одним в цикле forEach, подставляя их в регулярку и применяем к ним toUpperCase()
    //возвращаем назад скорректированное описание

    let result = value;

    wordParts.forEach(item => {
      result =  result.replace(new RegExp('[А-Яа-я]*' + item + '[а-я]*', 'g'), (match:string) => {
        return match.toUpperCase();
      })
    })
    return result;
  }

}
