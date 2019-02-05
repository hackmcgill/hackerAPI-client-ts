import { IMemberName, ITeam } from '../';

export interface ITeamResponse {
  team: ITeam;
  members: IMemberName[];
}
