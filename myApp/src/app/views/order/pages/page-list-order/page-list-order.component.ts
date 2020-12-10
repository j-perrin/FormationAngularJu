import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  //public orders: Order[];
  public orders: Observable<Order[]>;
  public headers: string[];
  public states: string[]= Object.values(StateOrder);
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  public btnFilter: BtnI;
  public filterSwitch: boolean = false;

  public title: string;
  public subtitle: string;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.title ="Orders";
    this.subtitle = "List of Orders";
    this.headers = ['Type', 'Client', 'Nb. jours', 'Total HT', 'Total TTC', 'Etat']
    this.btnRoute = {label:'Add an order', route:'add'};
    this.btnHref = {label:'Go to Google', href:'http://www.google.fr'};
    this.btnAction = {label:'Open popup', action:true};
    this.btnFilter = {label:'Filter', action:true};


    this.orders = this.orderService.collection;
  }

  public stateChange(order: Order, event:any):void {
    console.log(event);
    this.orderService.changeState(order, event.target.value).subscribe(data => {
      console.log("Before", order.state);
      order.state = data.state;
      console.log("After", order.state);
    })
  }

  public openPopup(): void{
    console.log("Test open popup!")
  }

  public filterCancel():void{
    if(!this.filterSwitch){
      this.orders = this.orderService.getFilterByState(StateOrder.CANCEL);
    } else {
      this.orders = this.orderService.collection;
    }
    this.filterSwitch = !this.filterSwitch;
  }

}
