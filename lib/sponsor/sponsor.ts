import { AxiosPromise, AxiosResponse } from 'axios';
import { APIResponse } from '..';
import { api as API, APIRoute } from '../';
import { ISponsor } from './ISponsor';

class SponsorAPI {
  constructor() {
    API.createEntity(APIRoute.SPONSOR);
    API.createEntity(APIRoute.SPONSOR_SELF);
  }
  /**
   * Create an account.
   * @param sponsor The sponsor that you want to create
   */
  public create(sponsor: ISponsor): AxiosPromise {
    return API.getEndpoint(APIRoute.SPONSOR).create(sponsor);
  }
  /**
   * Get the logged-in user's sponsor information, if they have a sponsor info.
   */
  public async getSelf(): Promise<AxiosResponse<APIResponse<ISponsor>>> {
    const value = await API.getEndpoint(APIRoute.SPONSOR_SELF).getAll();
    return value;
  }
  /**
   * Get information about a sponsor
   * @param id the ID of the sponsor
   */
  public get(id: string): AxiosPromise {
    return API.getEndpoint(APIRoute.SPONSOR).getOne({ id });
  }

  /**
   * Update sponsor information
   * @param sponsor The sponsor object with an id
   */
  public update(sponsor: ISponsor): AxiosPromise {
    const value = API.getEndpoint(APIRoute.SPONSOR).patch(sponsor, sponsor);
    return value;
  }
}
export const Sponsor = new SponsorAPI();
export default Sponsor;
