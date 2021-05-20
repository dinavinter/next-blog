import React from "react";
import Post from "../../components/Post"

export default function OAuth() {
    return <Post  
        title={'OAuth Story'} 
        video={'AFERwLEjuPc'}
        text={[
            {text: 'OIDC standardization', title: true},
            {text: 'Why cant I use standard clients to integrate with Gigya?', speak: true},
            {text: 'How can support mobile scenarios?', speak: true},
        ]}>
 
    </Post>

}