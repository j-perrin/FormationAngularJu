import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  public headers: string[];
  public clients: Client[];
  public typeList: string[] = Object.values(StateClient);

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.headers = ['Type', 'Nom', 'Ca', 'Ca Total','Commentaire']
    this.clientService.collection.subscribe(datas => {
      this.clients = datas
      console.log(this.clients);
    });

  }

  public changeClientState(client: Client, event: any):void {
    console.log(event);
    this.clientService.changeClientState(client, event.target.value).subscribe( data => {
      client.state = data.state //useless I guess
    });
  }

}
