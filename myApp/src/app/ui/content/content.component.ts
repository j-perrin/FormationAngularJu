import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private router: Router) {
    this.open = false;
  }

  ngOnInit(): void {
  }

  public switch(): void{
    this.open = !this.open;
  }

  public connexion(): void{
    if(localStorage.id){
      // localStorage.removeItem("userConnected");
      // localStorage.removeItem("userRole");
      // localStorage.removeItem("username");
      localStorage.clear();
      this.router.navigate(["/home"]);
    }
    // else {
    //   localStorage.userConnected = 'true';
    // }
    console.log("Click on connexion icon")
  }
}
