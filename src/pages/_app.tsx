import 'styles/globals.css';

import { SWRConfig } from 'swr';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig value={{ provider: () => new Map() }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  );
}

export default MyApp;
