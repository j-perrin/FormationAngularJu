import { Component, OnInit } from '@angular/core';
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
  public users: User[];

  public btn: BtnI;


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.headers = ['Nom', 'Role'];
    this.btn = {label: "Add user", route: "add"};
    this.userService.user.subscribe(datas => {
      this.users = datas;
      console.log(this.users);
    });
  }

}
