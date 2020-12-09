import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label: string;
  @Input() route: string;
  @Input() href: string;
  @Input() action: boolean;
  @Output() clicked : EventEmitter<any> = new EventEmitter();

  constructor() { }
/*   label: string;
  route?: string | undefined;
  href?: string | undefined;
  action?: boolean | undefined; */

  ngOnInit(): void {
  }

  public doAction(): void {
    this.clicked.emit();
  }

}
