import { UserType } from './UserType';

export interface IAccount {
  accountType: UserType;
  confirmed: boolean;
  // The first name of the user
  firstName: string;
  // The last name of the user
  lastName: string;
  // The email of the user
  email: string;
  // The dietary restrictions for the user
  dietaryRestrictions: string[];
  // The shirt size
  shirtSize: string;
  // The password
  password: string;
  // The user's phone number
  phoneNumber: string;
  // The birthdate
  birthDate: string;
  // The preferred pronoun
  pronoun: string;
  // The database id (if new, leave blank / make '')
  id: string;
  _id?: string;
}
