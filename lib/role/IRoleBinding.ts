import { IRole } from './IRole';

export interface IRoleBinding {
  accountId: string;
  id: string;
  roles: IRole[];
}
