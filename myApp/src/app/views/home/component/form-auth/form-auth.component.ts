import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent implements OnInit {

  //@Input() user = new User();
  @Output() clicked: EventEmitter<User> = new EventEmitter();

  private user = new User();
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: [this.user.password],
      username: [this.user.username],
    })
  }

  public onSubmit(): void{
    this.clicked.emit(this.form.value);
  }
}
