import { IRoute } from './IRoute';

export interface IRole {
  name: string;
  routes: IRoute[];
  id?: string;
  _id?: string;
}
