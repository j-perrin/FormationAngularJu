import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Client } from '../../models/client.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation: ViewEncapsulation.None // Pour ne pas faire l'encapsulation des parents, on garde notre css table-light.
})
export class TableLightComponent implements OnInit {

  // @Input() public collectionOrder : Order[];
  // @Input() public collectionClient : Client[];
  @Input() public headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
