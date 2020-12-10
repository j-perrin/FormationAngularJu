import { Component, OnInit } from '@angular/core';
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

  public headers: string[];
  public clients: Client[];
  public typeList: string[] = Object.values(StateClient);
  public filterSwitch: boolean = false;
  public btnFilter: BtnI;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.btnFilter = {label:"Show little ca", action:true};
    this.headers = ['Type', 'Nom', 'Ca', 'Ca Total','Commentaire']
    this.filterSwitch = true;
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

  public filterCa():void{
    if(this.filterSwitch){
      this.btnFilter.label = '';
      this.clientService.showClientWithCaLessThan(100000).subscribe(datas => {
        this.clients = datas;
      })
    } else {
      this.btnFilter.label = 'Show little ca';
      this.clientService.collection.subscribe(datas => {
        this.clients = datas
      });
    }
    this.filterSwitch = !this.filterSwitch;
  }

}
