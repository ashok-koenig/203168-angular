import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: true
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit: number=50, readMore: string = '...'): string | null {
    if(!value){
      return null;
    }
    return value.substring(0, limit)+ readMore    
  }
}
