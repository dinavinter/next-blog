import React, {useState} from "react";
import ReactPlayer from "react-player";
import PostLayout from "../components/PostLayout";
import {Motion} from "./Motion";
import {PostText} from "./PostText";


export default function Post({children, video, text}) {

    const [active, setActive] = useState('text')
    let goToVideo = <div className={"minimize"} onClick={() => {
        setActive('video')
    }}/>


    const textDisplay = active === 'text' ? 'block' : 'none';
    return <PostLayout>
        <div id="video_box" className={'center active timeout'}>

            {/*<Text title={children[0]} subtitle={children.slice(1, children.length-2)} />*/}
            <Motion>
                <div id={`video-text`}
                     className={`left align-left video_overlays ${active === 'text' ? 'active' : ''} timeout`}
                     style={{display: textDisplay, 'verticalAlign': "center"}}>
                    <PostText text={text}/>
                </div>

            </Motion>
            <Motion
                id={`video-player`}
                className={'center active timeout'}
            >
                <div>
                    <a href={video}>Watch In YouTube</a>
                    <ReactPlayer className={`${active === 'video' ? 'active' : ''} timeout`}
                                 style={{display: textDisplay}}
                                 url={`https://www.youtube.com/watch?v=${video}&html5=true`}
                    />

                </div>


            </Motion>

        </div>
    </PostLayout>

}

 