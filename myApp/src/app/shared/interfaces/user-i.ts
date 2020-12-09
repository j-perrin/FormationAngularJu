import { UserRole } from '../enums/user-role.enum';

export interface UserI {
  id: number;
  username: string;
  password: string;
  role: UserRole;

  description(): string;

}
