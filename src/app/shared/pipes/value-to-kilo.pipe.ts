import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueToKilo'
})
export class ValueToKiloPipe implements PipeTransform {

  transform(value: number): string {
    return (value/10) + 'Kg';
  }

}
