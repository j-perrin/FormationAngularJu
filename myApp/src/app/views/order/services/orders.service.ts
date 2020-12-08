import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    // backquote is for construction of a string with a variable
    this.collection = this.http.get<Order[]>(`${this.url}orders`);
    //this.collection = this.http.get<Order[]>(this.url + 'orders');
  }

  // Getters and Setters
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>){
    this.pCollection = col;
  }
}
