import { Pipe, PipeTransform } from '@angular/core';
import { Order } from '../models/order.model';

@Pipe({
  name: 'jour'
})
export class JourPipe implements PipeTransform {

  transform(order: Order, ...args: any[]): any {
    if(order){
      if(order.nbJours > 1){
        return `${order.nbJours} jours`;
      }
      return `${order.nbJours} jour`;
    }
    return null;
  }

}
