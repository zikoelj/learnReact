import React, {useState, useEffect, useRef} from "react";
import { unstable_batchedUpdates } from "react-dom";

function MyComponent6(){


    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);



    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";

    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "red";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "blue";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click Me 1!
            </button><br/>
            <input ref={inputRef1}/><br/>

            <button onClick={handleClick2}>
                Click Me 2!
            </button><br/>
            <input ref={inputRef2}/><br/>

            <button onClick={handleClick3}>
                Click Me 3!
            </button><br/>
            <input ref={inputRef3}/><br/>
        </div>
        
        
        );
}
export default MyComponent6