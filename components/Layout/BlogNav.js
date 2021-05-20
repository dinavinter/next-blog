import React from "react";
import Link from "next/link";
import About from "../../pages/post/about";
import Groups from "../../pages/post/groups";
import Captcha from "../../pages/post/captcha";
import IDX from "../../pages/post/idx";
import GAI from "../../pages/post/gai";
import Fido from "../../pages/post/fiddo";
import NSS from "../../pages/post/nss";
import OAuth from "../../pages/post/oauth";
import Consent from "../../pages/post/consent";
import LiteUi from "../../pages/post/lite";
import ATO from "../../pages/post/ato";

export const BlogNav = () => (


    <nav>
        <ul>

            <li>
                <Link href="/post/about">
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href="/post/groups">
                    <a>Groups</a>
                </Link>
            </li>
            <li>
                <Link href="/post/captcha">
                    <a>Captcha</a>
                </Link>
            </li>

            <li>
                <Link href="/post/idx">
                    <a>IDX</a>
                </Link>
            </li>
            <li>
                <Link href="/post/gai">
                    <a>GAI</a>
                </Link>
            </li>
            <li>
                <Link href="/post/fiddo">
                    <a>Fido</a>
                </Link>
            </li>

            <li>
                <Link href="/post/ato">
                    <a>ATO</a>
                </Link>
            </li>
            <li>
                <Link href="/post/nss">
                    <a>NSS</a>
                </Link>
            </li>
            <li>
                <Link href="/post/oauth">
                    <a>OAuth</a>
                </Link>
            </li>
            <li>
                <Link href="/post/consent">
                    <a>Consent</a>
                </Link>
            </li>
            <li>
                <Link href="/post/lite">
                    <a>Lite</a>
                </Link>
            </li>

        </ul>

    </nav>

);


export const usePosts = () => [
    {
        title: 'About',
        href: "/post/about",
        render: About,
        id: "about"
    },
    {
        title: 'Groups',
        href: "/post/groups",
        render: Groups,
        id: "groups"
    },
    {
        title: 'Captcha',
        href: "/post/captcha",
        render: Captcha,
        id: "captcha"
    },
    {
        title: 'IDX',
        href: "/post/idx",
        render: IDX,
        id: "idx"
    },
    {
        title: 'GAI',
        href: "/post/gai",
        render: GAI,
        id: "gai"
    },
    {
        title: 'Fido',
        href: "/post/fiddo",
        render: Fido,
        id: "fiddo"

    },
    {
        title: 'ATO',
        href: "/post/ato",
        render: ATO,
        id: "ato"
    }, {
        title: 'NSS',
        href: "/post/nss",
        render: NSS,
        id: "nss"
    }, {
        title: 'OAuth',
        href: "/post/oauth",
        render: OAuth,
        id: "oauth"
    }, {
        title: 'Consent',
        href: "/post/consent",
        render: Consent,
        id: "consent"
    }, {
        title: 'Lite',
        href: "/post/lite",
        render: LiteUi,
        id:"lite"
    }
] ;

 




 

 

 
