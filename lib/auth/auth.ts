import { AxiosPromise, AxiosResponse } from 'axios';
import { api as API, APIRoute } from '..';
import APIResponse from '../APIResponse';
import { IRole } from '../role/IRole';

class AuthAPI {
  constructor() {
    API.createEntity(APIRoute.AUTH_LOGIN);
    API.createEntity(APIRoute.AUTH_LOGOUT);
    API.createEntity(APIRoute.AUTH_FORGOT_PASS);
    API.createEntity(APIRoute.AUTH_RESET_PASS);
    API.createEntity(APIRoute.AUTH_CONFIRM_ACCT);
    API.createEntity(APIRoute.AUTH_CHANGE_PASS);
    API.createEntity(APIRoute.AUTH_RESEND_CONF_EMAIL);
    API.createEntity(APIRoute.AUTH_ROLE);
    API.createEntity(APIRoute.AUTH_ROLEBINDING);
  }
  /**
   * Logs in a user to the API.
   * @param {String} email
   * @param {String} password
   */
  public login(email: string, password: string): AxiosPromise<APIResponse<{}>> {
    return API.getEndpoint(APIRoute.AUTH_LOGIN).create({ email, password });
  }
  /**
   * Logs out a user from the API
   * @returns {AxiosPromise<AxiosResponse>} a promise which resolves to a response
   */
  public async logout(): Promise<AxiosResponse<APIResponse<{}>>> {
    const value = await API.getEndpoint(APIRoute.AUTH_LOGOUT).getOne({
      id: '',
    });
    return value;
  }
  /**
   * Sends a request for a reset-password email.
   * @param {string} email
   */
  public forgotPassword(email: string): AxiosPromise {
    return API.getEndpoint(APIRoute.AUTH_FORGOT_PASS).create({ email });
  }
  /**
   * Reset a password given an authentication token (provided by API in email).
   * @param {string} password
   * @param {string} authToken
   */
  public async resetPassword(
    password: string,
    authToken: string
  ): Promise<AxiosResponse<APIResponse<{}>>> {
    const config = {
      headers: {
        'x-reset-token': authToken,
      },
    };
    const result = await API.getEndpoint(APIRoute.AUTH_RESET_PASS).create(
      { password },
      { config }
    );
    return result;
  }
  /**
   * Confirm an account using the given token.
   * @param token The confirmation token.
   */
  public async confirm(token: string): Promise<AxiosResponse<APIResponse<{}>>> {
    const result = await API.getEndpoint(APIRoute.AUTH_CONFIRM_ACCT).create(
      undefined,
      {
        subURL: token,
      }
    );
    return result;
  }

  /**
   * Change the password of the logged in user from an old password to a new password.
   * @param {string} oldPassword The current password of the user
   * @param {string} newPassword The new password of the user
   */
  public changePassword(
    oldPassword: string,
    newPassword: string
  ): AxiosPromise {
    const changePasswordObject = {
      oldPassword,
      newPassword,
    };
    return API.getEndpoint(APIRoute.AUTH_CHANGE_PASS).patch(
      { id: '' },
      changePasswordObject
    );
  }

  /**
   * Resends the confirmation email.
   */
  public resendConfirmationEmail(): AxiosPromise<APIResponse<{}>> {
    return API.getEndpoint(APIRoute.AUTH_RESEND_CONF_EMAIL).getAll();
  }

  /**
   * Get all of the roles of the API
   */
  public getRoles(): AxiosPromise<APIResponse<IRole[]>> {
    return API.getEndpoint(APIRoute.AUTH_ROLE).getAll();
  }

  public getRoleBindings(id: string): AxiosPromise<APIResponse<IRole[]>> {
    return API.getEndpoint(APIRoute.AUTH_ROLEBINDING).getOne({ id });
  }
}
export const Auth = new AuthAPI();
export default Auth;
