import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BtnComponent } from 'src/app/shared/components/btn/btn.component';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html',
  styleUrls: ['./page-view.component.scss']
})
export class PageViewComponent implements OnInit {

  public client: Client;
  public btnRoute: BtnI;

  public title:string;
  public subtitle:string;

  public headers:string[];

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.btnRoute = {label:"Retour", route:'/clients'};
    this.title = "Clients"
    this.subtitle = "List of Clients"

    this.headers = ['Nom', 'Comment', 'Ca', 'TVA','Total€', 'Total$']


    this.route.paramMap.subscribe(params => {
      if(params.get('id')){
        console.log(params.get('id'))

        this.clientService.getClientById(params.get('id')).subscribe(data => {
          this.client = data;
        })
      }
    })
  }

}
