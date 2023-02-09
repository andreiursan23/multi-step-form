export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
  state: string;
  phone: string;
  travelReason?: 'personal' | 'business' | undefined;
  termsAndConditions?: boolean | undefined;
}

export interface IUserResponse {
  data: IUser;
}
