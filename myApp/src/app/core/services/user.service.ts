import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: Observable<User[]>;
  private url: string = environment.urlApi;

  constructor(private http: HttpClient) {
    this.userList = this.http.get<User[]>(`${this.url}orders`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new User(obj);
        })
      })
    );
  }

  get user(): Observable<User[]>{
    return this.userList;
  }
  set user(userList: Observable<User[]>){
    this.userList = userList;
  }


  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`).pipe(
      map(datas => {
        return datas.map(obj => {
          return new User(obj);
        })
      })
    )
  }

  public getByUsernameAndPassword(user: User): Observable<User>{
    return this.http.get<User>(`${this.url}users?username=${user.username}&password=${user.password}`)
    .pipe( map(data => {return new User(data)}))
  }
}
