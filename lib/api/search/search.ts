import { AxiosPromise } from 'axios';
import { api as API, APIRoute, ISearchOptions, ISearchParameter } from '..';
import APIResponse from '../APIResponse';

class SearchAPI {
  constructor() {
    API.createEntity(APIRoute.SEARCH);
  }
  public search(
    model: string,
    parameters: ISearchParameter[],
    searchOptions: ISearchOptions
  ): AxiosPromise<APIResponse<any[]>> {
    return API.getEndpoint(APIRoute.SEARCH).getAll({
      params: {
        q: JSON.stringify(parameters),
        model,
        ...searchOptions,
      },
    });
  }
}

export const Search = new SearchAPI();
export default Search;
