import {motion} from "framer-motion";
import React from "react";

export function Motion({isLeftAligned, children}) {
    return (
        <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{
                delay: 0.3,
            }}
            className={`${
                isLeftAligned ? "has-text-left-desktop" : "has-text-right-desktop"
            } mb-6`}
        >
            {children}
        </motion.div>
    );
}