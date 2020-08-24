import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConsume'
})
export class TimeConsumePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
