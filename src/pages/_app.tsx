import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import Nav from '../components/Nav/Nav';

function MyApp({ Component, pageProps: { session, pageProps } }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Nav session={session} />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
