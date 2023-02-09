import { IUserResponse } from '../typings/user';

export const fetchUser = (): Promise<IUserResponse> => {
  return new Promise((res) => {
    // replace (res) with (res, rej) to test case when fetch fails
    setTimeout(() => {
      res({
        data: {
          firstName: 'Pippo',
          lastName: 'Inzaghi',
          email: '',
          phone: '+352 123 456 789',
          address: '',
          city: '',
          state: '',
          postcode: '',
          country: 'Luxembourg',
        },
      });

      // Uncomment to test case when fetch fails
      // rej();
    }, 1500);
  });
};
