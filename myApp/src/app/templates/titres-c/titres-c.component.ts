import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titres-c',
  templateUrl: './titres-c.component.html',
  styleUrls: ['./titres-c.component.scss']
})
export class TitresCComponent implements OnInit {

  @Input() title:string;
  @Input() subtitle:string;

  constructor() { }

  ngOnInit(): void {
  }

}
