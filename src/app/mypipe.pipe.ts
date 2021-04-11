import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountpipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: number, ...args: string[]): number {
    let finalPrice: number = 0;
    if (args[0].toLowerCase() === 'ipl20') {
      finalPrice = value * 0.8;
    } else {
      finalPrice = value * 0.95;
    }
    return finalPrice;
  }

}
