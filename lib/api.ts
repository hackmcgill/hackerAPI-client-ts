import Endpoint from './endpoint';
/**
 * Inspired by https://github.com/FrancescoSaverioZuppichini/API-Class
 */

class API {
  private url: string;
  private endpoints: { [id: string]: Endpoint } = {};

  constructor() {
    this.endpoints = {};
    this.url = 'http://localhost:3000';
  }
  public setURL(url: string) {
    this.url = url;
    for (const key in this.endpoints) {
      if (this.endpoints.hasOwnProperty(key)) {
        this.endpoints[key].baseURL = url;
      }
    }
  }

  /**
   * Create and store a single entity's endpoints
   * @param {string} name name of the resource
   */
  public createEntity(name: string): void {
    this.endpoints[name] = this.createBasicCRUDEndpoints(name);
  }
  /**
   * Create and store multiple entities' endpoints.
   * @param arrayOfEntity names of the resources.
   */
  public createEntities(arrayOfEntity: string[]): void {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }
  /**
   * Get the endpoint object as created by the name
   * @param {String} name name of the entity
   */
  public getEndpoint(name: string): Endpoint {
    return this.endpoints[name];
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   */
  private createBasicCRUDEndpoints(name: string): Endpoint {
    const endpoints = new Endpoint(name, this.url, name);
    return endpoints;
  }
}
const api = new API();
export { api };
