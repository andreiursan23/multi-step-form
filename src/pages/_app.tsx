import type { AppProps } from 'next/app';
import { FormProvider } from '../context/FormContext';

import '../styles/globals.css';
import '../styles/buttons.css';
import '../styles/radioInput.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}
