import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    //this.collection = this.http.get<Order[]>(this.url + 'orders');
    this.collection = this.http.get<Order[]>(`${this.url}orders`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Order(obj);
        })
      })
    );
  }

  // Getters and Setters
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>){
    this.pCollection = col;
  }

  public getById(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}orders/${orderId}`).pipe(
      map(datas => {
        return new Order(datas);
      })
    )
  }

  public getById2(orderId: number): Observable<Order> {
    return this.http.get<Order>(`${this.url}orders?id=${orderId}`).pipe(
      map(datas => {
        return new Order(datas);
      })
    )
  }

  public getByState(state: StateOrder): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}orders?state=${state}`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Order(obj);
        })
      })
    )
  }

  // Update
  public update (order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}orders/${order.id}`, order).pipe(
      map(datas => {
        return new Order(datas);
      })
    )
  }

  public changeState (order: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({...order});
    obj.state = state;
    return this.update(obj);
  }

  public getFilterByState(state: StateOrder): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.url}orders`).pipe(
      map(datas => datas
        .filter(data => data.state === state)
        .map(filterdata => new Order(filterdata))
        )
    );
  }

}
