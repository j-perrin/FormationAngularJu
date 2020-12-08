import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-deco',
  templateUrl: './icon-deco.component.html',
  styleUrls: ['./icon-deco.component.scss']
})
export class IconDecoComponent implements OnInit {

  public powerOff = faPowerOff

  constructor() { }

  ngOnInit(): void {
  }

}
