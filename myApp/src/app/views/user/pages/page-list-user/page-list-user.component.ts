import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { UserRole } from 'src/app/shared/enums/user-role.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-user',
  templateUrl: './page-list-user.component.html',
  styleUrls: ['./page-list-user.component.scss']
})
export class PageListUserComponent implements OnInit {

  public headers: string[];
  //public users: Observable<User[]>;
  public user: User;
  public users: User[];

  public btn: BtnI;

  public title: string;
  public subtitle: string;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getById(localStorage.id).subscribe(
      data => {
        console.log(data);
        this.user = data;
        if(this.user.isAdmin()){
          this.userService.getAll().subscribe(datas => this.users = datas);
        } else {
          this.users = [this.user];
        }
      }
    );

    this.title = "Users"
    this.subtitle = "List of Users"
    this.headers = ['Nom', 'Role'];
    this.btn = {label: "Add user", route: "add"};

  }

}
