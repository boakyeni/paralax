import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics/index.js'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);
  return ( 
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
   )
}

export default MyApp
