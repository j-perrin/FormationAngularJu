import { UserRole } from '../enums/user-role.enum';
import { UserI } from '../interfaces/user-i';

export class User implements UserI{
  id: number;
  username: string;
  password: string;
  role = UserRole.USER;

  description(){
    return `${this.username} is ${this.role}.`;
  }

  constructor(obj?: Partial<User>){
    if(obj){
      Object.assign(this, obj);
    }
  }
}