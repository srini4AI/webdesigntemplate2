import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import { PageLoader } from '../components/pageLoader';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState<boolean>(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
   });

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);
  });

  return  <>{loading ? (<PageLoader />) :(<Component {...pageProps} /> )}</>;
}
export default MyApp
