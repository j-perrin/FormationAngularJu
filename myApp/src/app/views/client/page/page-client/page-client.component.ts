import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.scss']
})
export class PageClientComponent implements OnInit {

  public client: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.collection.subscribe(datas => {
      this.client = datas
      console.log(this.client);
    });

  }

}
