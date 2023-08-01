import { User } from '../features/users/type/type';
export type State = {
  users: User[];
  error: string;
};
