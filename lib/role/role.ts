import { AxiosPromise } from 'axios';
import { api as API, APIRoute } from '../';
import APIResponse from '../APIResponse';
import { IRole } from './IRole';

class RoleAPI {
  constructor() {
    API.createEntity(APIRoute.ROLE);
  }
  /**
   * create a role.
   * @param role The role you want to create.
   */
  public create(role: IRole): AxiosPromise<APIResponse<IRole>> {
    return API.getEndpoint(APIRoute.ROLE).create(role);
  }
}

export const Role = new RoleAPI();
export default Role;
