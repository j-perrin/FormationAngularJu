import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-user',
  templateUrl: './page-list-user.component.html',
  styleUrls: ['./page-list-user.component.scss']
})
export class PageListUserComponent implements OnInit {

  public headers: string[];
  public users: Observable<User[]>;

  public btn: BtnI;

  public title: string;
  public subtitle: string;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.title = "Users"
    this.subtitle = "List of Users"
    this.headers = ['Nom', 'Role'];
    this.btn = {label: "Add user", route: "add"};
    this.users = this.userService.user;
  }

  // ngOnDestroy(): void {

  // }

}
