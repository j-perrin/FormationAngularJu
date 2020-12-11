import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';
import { OrdersService } from '../../order/services/orders.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection: Observable<Client[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.url}clients`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new Client(obj);
        })
      })
    );
  }

  // Getters and Setters
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Client[]>){
    this.pCollection = col;
  }

  public getClientById(id:string | null): Observable<Client>{
    return this.http.get<Client>(`${this.url}clients/${id}`).pipe(
      map( data => {
        return new Client(data)
      })
    )
  }

  // Update
  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${client.id}`, client).pipe(
      map(datas => {
        return new Client(datas);
      })
    )
  }
  public changeClientState(client: Client, state: StateClient){
    const obj = new Client({...client});
    obj.state = state;
    return this.update(obj);
  }

  public showClientWithCaLessThan(maxCa: number): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.url}clients/`).pipe(
      map(datas => datas
        .filter(data => data.ca < maxCa)
        .map(filterdata => new Client(filterdata))
        )
    )
  }

  public add(client: Client): Observable<Client>{
    return this.http.post<Client>(`${this.url}clients`, client).pipe(
      map(datas => {
        return new Client(datas);
      })
    )
  }

}
