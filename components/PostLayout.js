import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import {BlogNav} from "./Layout/BlogNav";
import {motion} from "framer-motion";
import {Col} from "react-bootstrap";

let close = <Link href="/">
    <div className={"close"}/>
</Link>;

 
 
const PostLayout = (props) => {
    const [loaded, setLoaded] = useState(true)
    const {  children} = props

 
    return (
        <div id="main" style={loaded ? {display: 'flex'} : {display: 'none'}}> 
                    {children}
                    {close} 
             <header id="header">
                <BlogNav/> 
            </header>
        </div>

    )
}
 

 
export default PostLayout;

export function withPostLayout(Component) {
    Component.Layout = PostLayout
    return Component
}