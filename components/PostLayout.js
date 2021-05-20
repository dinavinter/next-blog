import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from "../styles/Home.module.css";
import {BlogNav} from "./Layout/BlogNav";

let close = <Link href="/">
    <div className={"close"}/>
</Link>;

const PostLayout = (props) => {
    const [loaded, setLoaded] = useState(false)
    const {pageTransitionReadyToEnter, children} = props

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            pageTransitionReadyToEnter()
            setLoaded(true)
        }, 2000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [pageTransitionReadyToEnter])

    if (!loaded) return null

    return (
        <div id="main" style={loaded ? {display: 'flex'} : {display: 'none'}}>

            <main className={"main"}>

                <article
                    className={'active timeout'}
                >
                    {children}
                    {close}
                </article>
            </main>
            <header id="header">
                <BlogNav/>

            </header>
        </div>

    )
}

PostLayout.propTypes = {
    pageTransitionReadyToEnter: PropTypes.func,
}

PostLayout.defaultProps = {
    pageTransitionReadyToEnter: () => {
    },
}

PostLayout.pageTransitionDelayEnter = true

export default PostLayout;

export function withPostLayout(Component) {
    Component.Layout = PostLayout
    return Component
}