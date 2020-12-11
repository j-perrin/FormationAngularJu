import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client.model';

@Pipe({
  name: 'totalClient'
})
export class TotalClientPipe implements PipeTransform {

  transform(order: Client, ...args: any[]): any {
    if (order) {
      if(args[0] === 'TTC'){
        //return client.totalTTC();
      }
      //return order.totalHT();
    }
    return null;
  }

}
