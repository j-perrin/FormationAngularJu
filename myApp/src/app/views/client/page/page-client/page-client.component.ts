import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {


  public title: string;
  public subtitle: string;

  public headers: string[];
  public clients: Observable<Client[]>;
  public typeList: string[] = Object.values(StateClient);
  public filterSwitch: boolean = false;
  public btnFilter: BtnI;
  public btnRoute: BtnI;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.title = "Clients"
    this.subtitle = "List of Clients"

    this.btnFilter = {label:"Show little ca", action:true};
    this.btnRoute = {label:"Add client", route:"add"};
    this.headers = ['Type', 'Nom', 'Ca', 'Ca Total','Commentaire']
    this.filterSwitch = true;
    this.clients = this.clientService.collection;

  }

  public changeClientState(client: Client, event: any):void {
    console.log(event);
    this.clientService.changeClientState(client, event.target.value).subscribe( data => {
      client.state = data.state //useless I guess
    });
  }

  public filterCa():void{
    if(this.filterSwitch){
      this.btnFilter.label = '';
      this.clients = this.clientService.showClientWithCaLessThan(100000);
    } else {
      this.btnFilter.label = 'Réinitialise';
      this.clients = this.clientService.collection
    }
    this.filterSwitch = !this.filterSwitch;
  }

}
