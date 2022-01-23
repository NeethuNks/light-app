import React, { useState } from "react";

function Light (props){
    
    var [color, setcolor] = useState ('gray');
    const changeValue = () => {
        console.log(props.value);

        (props.value === "OFF" ) ? setcolor("orange") : setcolor("gray");
        props.changeValue();
    }
   
    return(
        <div>
            <div className="light">
                <div className="circle" style={{backgroundColor : color}}></div>

                <button className="button" onClick={changeValue}>
                    {props.value}
                </button>
            </div>
        </div>
    );
}

export default Light;
