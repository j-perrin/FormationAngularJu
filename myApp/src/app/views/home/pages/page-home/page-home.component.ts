import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public users: Observable<User[]>;
  public user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.user;
  }

  public authenticate(user: User):void {
    // this.userService.getByUsernameAndPassword(user).subscribe( data => {
    //   if(data.username === user.username && data.password === user.password){
    //     console.log('YES U R AUTHENTICATED')
    //   }
    // });
    this.user = user;
    this.userService.getByUsernameAndPassword(this.user).subscribe(data => {
      console.log(this.user)
      if(data.id){
        this.user = data;
        localStorage.id = this.user.id;
        this.router.navigate(["/orders"]);
      }
    });


    // this.userService.getAll().subscribe( datas => {
    //   datas.forEach(data => {
    //     if(data.username === user.username && data.password === user.password){
    //       localStorage.userConnected = 'true';
    //       localStorage.username = data.username;
    //       localStorage.userRole = data.role;
    //       this.router.navigate(["/orders"]);
    //     }
    //   });
    // });
  }

}
