import { DatePipe } from '@angular/common';
import {Pipe, PipeTransform} from '@angular/core';
const datePipe = new DatePipe('en-US');

@Pipe({
  name: 'customTime',
})
export class CusTomTime implements PipeTransform {
  transform(myTimeStamp: string): string|null {
    return datePipe.transform(myTimeStamp, 'EEEE, d MMMM YYYY');;
  }
}
