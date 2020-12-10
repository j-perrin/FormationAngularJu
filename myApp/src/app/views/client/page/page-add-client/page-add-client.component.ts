import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {


  public title: string;
  public subtitle: string;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.title ="Clients";
    this.subtitle = "Add a client";
  }

  public addClient(client: Client):void{
    this.clientService.add(client).subscribe(data => {
      console.log(data)
      this.router.navigate(["clients"]);
    });
  }
}
