import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor() {
    this.open = false;
  }

  ngOnInit(): void {
  }

  public switch(): void{
    this.open = !this.open;
  }

  public connexion(): void{
    if(localStorage.userConnected === 'true'){
      localStorage.removeItem("userConnected");
    }
    else {
      localStorage.userConnected = 'true';
    }
    console.log("Click on connexion icon")
  }
}
