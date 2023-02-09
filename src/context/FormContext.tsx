import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { fetchUser } from '../api/fetchUser';
import { IUser } from '../typings/user';
import { IFormContext } from '../typings/form';

const formContextInitialValues: IFormContext = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
    phone: '',
    travelReason: undefined,
    termsAndConditions: undefined,
  },
  setUser: () => {},
  isLoading: true,
  isError: false,
};

const FormContext = createContext<IFormContext>(formContextInitialValues);

export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUser()
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isError,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
