import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

export const BlogNav = () => (
    <header id="header">
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>2021 Q1 Blog</h1>
                <p className={styles.description}>

                    <code className={styles.code}>Explore 2021 Q1 hot features</code>
                </p>
                <faGem/>
            </div>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="post/groups">
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
                    <Link href="/post/idx">
                        <a>IDX</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/liteUi">
                        <a>Lite</a>
                    </Link>
                </li>

            </ul>

        </nav>

    </header>
)

 

 

 
