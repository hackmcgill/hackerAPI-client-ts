# hackerAPI-client-ts

Typescript client for [hackerAPI.](https://github.com/hackmcgill/hackerAPI)

## Installation

To install, use npm:

```bash
npm install @hackmcgill/hackerapi-client-ts
```

## Usage

At the entry-point of your code, you must provide the endpoint of the API:

```typescript
import { api as API } from '@hackmcgill/hackerapi-client-ts';
API.setURL('https://api.mchacks.ca');
```

Afterwards, you can use whichever resource you would like. For example, you can create an Account as such:

```typescript
import { Account } from '@hackmcgill/hackerapi-client-ts';
Account.create({
  accountType: UserType.HACKER;
  confirmed: true;
  firstName: 'John';
  lastName: 'Doe';
  email: 'john.doe@mchacks.ca';
  dietaryRestrictions: ['Halal', 'Vegetarian'];
  shirtSize: ShirtSize.XL;
  password: 'hunter2';
  phoneNumber: '1234567889';
  birthDate: '2008-09-15T15:53:00';
  pronoun: 'He / him';
  id: '';
});
```

Documentation on the different routes can be [found here.](https://docs.mchacks.ca/api/)

## Example usage

Usage in a real-life repository can be [found here.](https://github.com/hackmcgill/hackerAPI-frontend)

## Questions

If you have questions about how to use this, shoot an email to <devops@mchacks.ca>, or create an [Issue.](https://github.com/hackmcgill/hackerAPI-client-ts/issues)
