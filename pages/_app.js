import '../styles/globals.css'
import '../styles/main.scss'
import {PageTransition} from 'next-page-transitions'
import Loader from '../components/Loader'

const TIMEOUT = 400

import React from "react";
import {withBoomIdp} from "../components/gigya/boomBuyIdp";
import {Head, Html} from "next/document";

function MyApp({Component, pageProps}) {
    return <div>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>

}

function AppWithTransition({Component, pageProps}) {
    return <>

        <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={<Loader/>}
            loadingDelay={500}
            loadingTimeout={{
                enter: TIMEOUT,
                exit: 0,
            }}
            loadingClassNames="loading-indicator"
        >
            <div className={`body`}>
                <div id="wrapper">
                    <Component {...pageProps} />
                </div>
                <div id="bg"/>

            </div>
        </PageTransition>
        <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </>

}

export default withBoomIdp(AppWithTransition);
