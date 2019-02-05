import { IAccount } from '../account/IAccount';
import { ITeam } from '../team/ITeam';
import { HackerStatus } from './HackerStatus';
import { JobInterest } from './JobInterest';

export interface IHacker {
  [key: string]: any;
  id: string;
  accountId: string | IAccount; // for querying account as well
  status: HackerStatus;
  school: string;
  degree: string;
  // no enum for these
  gender?: string;
  needsBus?: boolean;
  application: {
    portfolioURL: {
      // gcloud bucket link
      resume?: string;
      github?: string;
      dropler?: string;
      personal?: string;
      linkedIn?: string;
      other?: string;
    };
    jobInterest: JobInterest;
    // array of mongoose ids referencing different skills
    skills?: string[];
    // any miscelaneous comments that the user has
    comments?: string;
    // "Why do you want to come to our hackathon?"
    essay?: string;
  };
  ethnicity: string[];
  major: string;
  graduationYear: number;
  codeOfConduct: boolean;
  teamId?: string | ITeam;
}
