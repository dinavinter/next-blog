import {GigyaProvider} from "./gigyaProvider";
import React from "react";
import {func} from "prop-types";

export function useBoomIdp() {
    return {
        apiKey: "3_WKO1lFJ4yMz4MtnHK0d5AqgOCaU3KdYerHvETiMWD5IZ9qv5ccQmyC7qkICVchrQ", 
        domain: "gigya.com"
    }
}

export function  BoomIdpProvider({children}) {
    const boomIdp = useBoomIdp();
    return <boomIdp {...boomIdp}>
        {children}
    </boomIdp>; 
}



export function withBoomIdp (Component ){
    Component.Layout = BoomIdpProvider
    return Component
}         