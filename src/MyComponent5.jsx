import React,{useState, useEffect} from "react";

function MyComponent5(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",hanldeResize);
        console.log("RESIZE WINDOW ADDED");
        return() => {
            window.removeEventListener("resize", hanldeResize);
            console.log("RESIZE WINDOW REMOVED");
        }   
    },[]);

    useEffect(() =>{
        document.title = `Size ${width} x ${height}`;
    },[width, height]);
    function hanldeResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    return(<>
            <p>WIdth : {width}px</p>
            <p>Height : {height}px</p>
           </>);
}
export default MyComponent5