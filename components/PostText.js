import React, {useEffect, useState} from "react";
import {useSpeechSynthesis} from 'react-speech-kit';

export function SpeakIcon({speaking}) {
    return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20"
                height="30" viewBox="0 0 32 32">
        <path className={`speak_icon ${speaking ? 'speaking' : ''}`}
              d="M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"/>
    </svg>

}

function VoiceView({voices}) {
    return <div>
        {voices.map(voice =>
            <div> ${voice.voiceURI} ${JSON.stringify(voice)}` 
            </div>)}

    </div>
}

export function PostSpeak({text, start}) {
    // const synthesize = useSynthesize();
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [voiceIndex, setVoiceIndex] = useState(null);
    const [toggle, setToggle] = useState(null);
    const onEnd = () => {

    };
    const {speak, cancel, speaking, supported, voices} = useSpeechSynthesis({
        onEnd,
    });

    // const voice = voices.filter(v=>v.voiceURI === "Microsoft David Desktop - English (United States)")[0];
    const voice = voices.filter(v => v.voiceURI === "Google UK English Male")[0];
    console.log(JSON.stringify(voices))
    useEffect(() => {
        speak({text: text, voice: voice});
        return () => cancel();
    }, [start, toggle]);
    
    const toggleSpeak = () => {
       setToggle(!toggle)
    }

 

    return text && <React.Fragment> 
        <VoiceView voices={voices} />
        <div> 
           <span> {toggle}</span>
                <SpeakIcon speaking={speaking} onClick={toggleSpeak}/>   
        </div>
    </React.Fragment>
}

export default function PostText({text}) {
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [voiceIndex, setVoiceIndex] = useState(null);
    const onEnd = () => {
        // You could do something here after speaking has finished
    };
    const {speak, cancel, speaking, supported, voices} = useSpeechSynthesis({
        onEnd,
    });

    const voice = voices[voiceIndex] || null;


    // useEffect(() => {
    //     let cancelList=[];
    //     text
    //         .filter(t => t.speak)
    //         .forEach(t => {
    //             const { cancel } =speak({text: t.text});
    //             cancelList.push(cancel);
    //         });
    //
    //     return () => cancelList.forEach(cancel=>cancel());
    // }, [synthesize]);

    function TextElement({title, text}) {
        return title ? <span id={text} className={"center align-center"}><h1
                className="minor align-center">{text}</h1></span> :
            <span id={text}><h3>{text}</h3></span>;
    }

    return text &&
        <div>
            <PostSpeak text={text.filter(t => t.speak).map(t => t.text).join('')}/>


            {text.map(t => <div id={t.text}>
                    <TextElement {...t} />

                </div>
            )}

        </div>
}