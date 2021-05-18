import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'
import React from "react";
import Link from "next";
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
                <faGem />
            </div>
        </div> 
        
            <nav>
                <ul>
                    <li><a href="/post/about"> About </a ></li>
                    <li><a href="/post/groups">Groups</a></li>
                    <li><a href="/post/captcha">Captcha</a></li>
                    <li><a href="/post/consent">Consent</a></li>
                    <li><a href="/post/idx">IDX</a></li>
                    <li><a href="/post/ato">ATO</a></li>
                    <li><a href="/post/nss">NSS</a></li>
                    <li><a href="/post/oauth">OAuth</a></li>
                    <li><a href="/post/liteUi">Lite</a></li>
                    <li><a href="/post/gai">GAI</a></li>
                    <li><a href="/post/fido">Fido</a></li>

                </ul>
            </nav>
       
    </header>
)

 

 

 
