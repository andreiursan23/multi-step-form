import { IUser } from '../typings/user';
import { Result } from '../typings/confirmation';

// Converts data saved filling in the form to a displayable form
export const getUserData = (user: IUser): Result[] => {
  const result: Result[] = [];

  for (const [key, value] of Object.entries(user)) {
    result.push({
      title: key.replace(/([A-Z])/g, ' $1').toUpperCase(),
      value: value,
    });
  }

  return result;
};
