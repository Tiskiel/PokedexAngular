import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cmToM'
})
export class CmToMPipe implements PipeTransform {

  transform(value: number): string {
    return (value / 10) + 'M'
  }

}
