import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'quotation',
    standalone: true
})
export class QuotationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value){
      return value.replace(/&quot;/g, '"');
    }
    return null;
  }

}
