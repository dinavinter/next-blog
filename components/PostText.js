import React from "react";

export function PostText({text}){
    return text && <div>
        {text.map(t=> t.title?  <span className={"center align-center"}><h1
                className="minor align-center">{t.text}</h1></span> :
            <span><h3>{t.text}</h3></span>
        )}
    </div>
}