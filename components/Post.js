import React, {useState} from "react";
import ReactPlayer from "react-player";
import PostLayout from "../components/PostLayout";

export default function Post({children, video, title}) {

    const [active, setActive] = useState('text')
    let goToVideo = <div className={"minimize"} onClick={() => {
        setActive('video')
    }}/>


    const textDisplay = active === 'text' ? 'block' : 'none';
    return <PostLayout>
        <div id="video_box"  className={'center active timeout'}>
          
            <div id={`video-text`}
                 className={`left align-left video_overlays ${active === 'text' ? 'active' : ''} timeout`}
                 style={{display: textDisplay, 'verticalAlign': "center"}}>
                {/*<TextLoop  springConfig={{ stiffness: 200, damping: 10 }} mask={true} interval={2000} >*/}
                {children}
                {/*</TextLoop>*/}
                {/*{goToVideo}*/}
            </div>
            
            
            <article
                id={`video-player`}
                className={'center active timeout'}
            >
                <div >
                    <a href={video}>Watch In YouTube</a>
                    <ReactPlayer className={`${active === 'video' ? 'active' : ''} timeout`}
                                 style={{display: textDisplay}}
                                 url={`https://www.youtube.com/watch?v=${video}&html5=true`}
                    />

                </div>
           

            </article>

            <article className={'video_bg active timeout'}/>
        </div>
    </PostLayout>

}

 