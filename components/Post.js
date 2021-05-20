 import React, {useState} from "react";
import ReactPlayer from "react-player";
 import PostLayout from "../components/PostLayout";

export default function Post({children, video, title}) {

    const [active, setActive] = useState('text')
    let goToVideo = <div className={"minimize"} onClick={() => {
        setActive('video')
    }}/>
 
    
const textDisplay=active === 'text' ? 'block' : 'none';
    return <PostLayout><div>
        <div id="video_box" >
            <div id={`${video}-text`} className={`center align-center video_overlays ${active === 'text' ? 'active' : ''} timeout`}
                     style={{display:textDisplay, 'verticalAlign':"center"}}>
              {/*<TextLoop  springConfig={{ stiffness: 200, damping: 10 }} mask={true} interval={2000} >*/}
                    {children}
                {/*</TextLoop>*/}
                {/*{goToVideo}*/}
            </div>
 
            <div className={`${active === 'video' ? 'active' : ''} timeout`} style={{display:textDisplay}} >
                <a href={video}>Watch In YouTube</a>
                <ReactPlayer  className={`${active === 'video' ? 'active' : ''} timeout`} style={{display:textDisplay}}
                    url={`https://www.youtube.com/watch?v=${video}&html5=true`}
                />
              
            </div>
        </div>

    </div>
    </PostLayout>

}

 