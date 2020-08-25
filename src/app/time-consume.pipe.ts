import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConsume'
})
export class TimeConsumePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
    transform(value: any): number {
      const today: Date = new Date();
      const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const dateDifference = Math.abs(todayWithNoTime - value);
      const secondsInDay = 86400;
      const dateDifferenceSeconds = dateDifference * 0.001;
      const dateCounter = dateDifferenceSeconds / secondsInDay;
  
      if (dateCounter >= 1 && todayWithNoTime > value) {
        return dateCounter;
      } else {
        return 0;
      }
    }

}



