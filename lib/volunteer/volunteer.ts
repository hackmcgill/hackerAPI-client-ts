import { AxiosPromise } from 'axios';
import { api as API, APIRoute } from '../';
import APIResponse from '../APIResponse';
import { IVolunteer } from './IVolunteer';

class VolunteerAPI {
  constructor() {
    API.createEntity(APIRoute.VOLUNTEER);
  }
  /**
   * create a role.
   * @param volunteer The role you want to create.
   */
  public create(volunteer: IVolunteer): AxiosPromise<APIResponse<IVolunteer>> {
    return API.getEndpoint(APIRoute.VOLUNTEER).create(volunteer);
  }
  /**
   * get a volunteer.
   * @param volunteer The role you want to create.
   */
  public get(id: string): AxiosPromise<APIResponse<IVolunteer>> {
    return API.getEndpoint(APIRoute.VOLUNTEER).getOne({ id });
  }
}

export const Volunteer = new VolunteerAPI();
export default Volunteer;
