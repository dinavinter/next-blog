import '../styles/globals.css'
import '../styles/main.scss'
import {AnimateSharedLayout} from "framer-motion"


import {PageTransition} from 'next-page-transitions'
import React from "react";
import {withBoomIdp} from "../components/gigya/boomBuyIdp";
import {Head, Html} from "next/document";
import {BlogNav} from "../components/Layout/BlogNav";

import Loader from '../components/Loader'

const TIMEOUT = 400


function MyApp({Component, pageProps}) {
    return <div>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>

}

function AppWithTransition({Component, pageProps}) {
    console.log(JSON.stringify(pageProps));
    return <>
        <div className={`body`}> 
            <AnimateSharedLayout>
                <div id="wrapper">
                    <Component {...pageProps} />
                </div> 
            </AnimateSharedLayout> 
     
            <div id="bg"/>

        </div>
     </>

}

export default withBoomIdp(AppWithTransition);
