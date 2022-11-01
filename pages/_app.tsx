import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import { useEffect, useState } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics/index.js'
import SizeObserver from '../utils/size-observer';
import _ from "lodash";
import {Stripe} from "stripe";
import {RecoilRoot} from "recoil"
import {Toaster} from "react-hot-toast"


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  

  return ( 
    <SizeObserver>
    <ScrollObserver>
      <RecoilRoot>
        <Toaster position="bottom-center"/>
      <Component {...pageProps} />
      </RecoilRoot>
    </ScrollObserver>
    </SizeObserver>
   )
}

export default MyApp
