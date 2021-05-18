import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
let close =<a href={"/"} > <div className="close" ></div></a>;

const PostLayout = (props) => {
    const [loaded, setLoaded] = useState(false)
    const { pageTransitionReadyToEnter, children } = props
   
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
        <div id="main" style={{display: 'flex'}} >
            <article  
                 className={ 'active timeout'  }
        >         
            {children}
            {close}
        </article>
        </div>
    )
}

PostLayout.propTypes = {
    pageTransitionReadyToEnter: PropTypes.func,
}

PostLayout.defaultProps = {
    pageTransitionReadyToEnter: () => {},
}

PostLayout.pageTransitionDelayEnter = true

 export default PostLayout;

export function withPostLayout (Component){
    Component.Layout = PostLayout
    return Component
}