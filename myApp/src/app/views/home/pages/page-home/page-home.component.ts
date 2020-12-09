import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public users: User[];
  public userDescription: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.userService.user.subscribe(datas => {
    this.users = datas
    console.log(this.users);
  });
  }


}
