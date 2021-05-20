import React from "react";
import Post from "../../components/Post"
import {PostText} from "../../components/PostText";
import {Col} from "react-bootstrap";

export default function ATO() {
    return <Post
        title={'ATO Dashboard'}
        video={'80AeL0m0X8s'}
        text={[
            {text: 'Do you really protect me?', speak: true, title: true},
            {text: 'I want to see!', speak: true},
        ]}>
    </Post>

}
 