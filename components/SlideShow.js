import React from "react";


export const Slide = ({children, timeout}) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
                setIndex(index => index + 1);
               
            },
            timeout // every 3 seconds
        );
       
        const active = index % children.length;

        if (active >= children.length) {
            clearTimeout(intervalId);
        }
        
        return () => clearTimeout(intervalId);
    }, []);

    const active = index % children.length;
   

    return (
        <div>


            <div className={'timeout'}>
                {children[index % children.length]}
            </div>

            {children.filter((child, i) => i !== active).map((child, i) => {
                return (

                    <div>
                        {child}
                    </div>)
            })}


        </div>


    );
};