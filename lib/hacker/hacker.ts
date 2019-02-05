import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  api as API,
  APIRoute,
  HackerStatus,
  IHacker,
  IResumeResponse,
  IStatsResponse,
} from '..';
import APIResponse from '../APIResponse';

class HackerAPI {
  constructor() {
    API.createEntity(APIRoute.HACKER_CONFIRMATION);
    API.createEntity(APIRoute.HACKER_RESUME);
    API.createEntity(APIRoute.HACKER_SELF);
    API.createEntity(APIRoute.HACKER_STATS);
    API.createEntity(APIRoute.HACKER_EMAIL);
    API.createEntity(APIRoute.HACKER_CHECKIN);
    API.createEntity(APIRoute.HACKER);
    API.createEntity(APIRoute.HACKER_STATUS);
  }
  /**
   * Create an account.
   * @param hacker The account that you want to create
   * @param authToken If there is an authentication token associated with the account creation, then provide it here.
   */
  public async create(
    hacker: IHacker
  ): Promise<AxiosResponse<APIResponse<IHacker>>> {
    const config: AxiosRequestConfig = {};
    // return API.getEndpoint(Route.HACKER).create(hacker, { config });
    const value = await API.getEndpoint(APIRoute.HACKER).create(hacker, {
      config,
    });

    return value;
  }
  /**
   * Get the logged-in user's hacker information, if they have a hacker info.
   */
  public async getSelf(): Promise<AxiosResponse<APIResponse<IHacker>>> {
    const value = await API.getEndpoint(APIRoute.HACKER_SELF).getAll();
    return value;
  }
  /**
   * Get information about a hacker
   * @param id the ID of the hacker
   */
  public async get(id: string): Promise<AxiosResponse<APIResponse<IHacker>>> {
    const value = await API.getEndpoint(APIRoute.HACKER).getOne({ id });

    return value;
  }

  /**
   * Get information about a hacker
   * @param id the ID of the hacker
   */
  public async getByEmail(
    email: string
  ): Promise<AxiosResponse<APIResponse<IHacker>>> {
    const value = await API.getEndpoint(APIRoute.HACKER_EMAIL).getOne({
      id: email,
    });
    return value;
  }

  /**
   * Update a hacker information. In the future, we might want to relax the attributes being passed in
   * so that it's not the entirety of the Account object.
   * @param {IHacker} hacker
   */
  public update(hacker: IHacker): AxiosPromise {
    const value = API.getEndpoint(APIRoute.HACKER).patch(hacker, hacker);
    return value;
  }

  /**
   * Update's a hacker's status any status to any status of type HackerStatus
   * @param {String} id The id of the hacker to be updated
   * @param {HackerStatus} status The new status of the hacker
   */
  public updateStatus(id: string, status: HackerStatus): AxiosPromise {
    const value = API.getEndpoint(APIRoute.HACKER_STATUS).patch(
      { id },
      { status }
    );
    return value;
  }

  /**
   * Update's a hacker's status to checked-in if the hacker is accepted or confirmed.
   * @param {String} id The id of the hacker to be updated
   */
  public async checkin(id: string): Promise<AxiosResponse<APIResponse<{}>>> {
    const value = await API.getEndpoint(APIRoute.HACKER_CHECKIN).patch(
      { id },
      {}
    );
    return value;
  }

  /**
   * Allows an accepted hacker confirm attendance, and allow an confirmed hacker to unconfirm attendance.
   * @param id The id of the hacker
   * @param confirm Whether the hacker wishes to confirm their attendence or not.
   */
  public async confirm(
    id: string,
    confirm: boolean
  ): Promise<AxiosResponse<APIResponse<{}>>> {
    const value = await API.getEndpoint(APIRoute.HACKER_CONFIRMATION).patch(
      { id },
      { confirm }
    );

    return value;
  }

  /**
   * Downloads a hacker's resume
   * @param id The id of the hacker who the resume belongs to
   */
  public async downloadResume(
    id: string
  ): Promise<AxiosResponse<APIResponse<IResumeResponse>>> {
    const result = await API.getEndpoint(APIRoute.HACKER_RESUME).getOne({
      id,
    });
    return result;
  }

  public async uploadResume(
    id: string,
    resume: File
  ): Promise<AxiosResponse<APIResponse<{}>>> {
    const data = new FormData();
    data.append('resume', resume);
    const value = await API.getEndpoint(APIRoute.HACKER_RESUME).create(data, {
      subURL: id,
    });

    return value;
  }

  public async getStats(): Promise<AxiosResponse<APIResponse<IStatsResponse>>> {
    const value = await API.getEndpoint(APIRoute.HACKER_STATS).getAll();
    return value;
  }
}

export const Hacker = new HackerAPI();

export default Hacker;
