import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label: string;
  @Input() route: string | undefined;
  @Input() href: string | undefined;
  @Input() action: boolean | undefined;
  @Output() clicked : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public doAction(): void {
    this.clicked.emit();
  }

}
