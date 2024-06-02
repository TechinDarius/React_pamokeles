import { useEffect, useState } from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
//      useEffect(function,[dependencies])    
    // 1.useEffect(()=>{})              //Runs after every re-render
    // 2.useEffect(()=>{},[])           //Runs only on mount
    // 3.useEffect(()=>{},[value])      //Runs on mount + when value changes

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [count]);

    function addCount() {
        setCount(c => c + 1)
    }

    function suntractCount() {
        setCount(c => c - 1)
    }

    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);


    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p style={{ color: color }}>Count:{count}</p>
            <button onClick={addCount}>ADD</button>
            <button onClick={suntractCount}>SUBTRACT</button>
            <button onClick={changeColor}>Change Color</button>
            <br /><br /><br />
            <p>Window width: {width}px</p>
            <p>Window height: {height}px</p>

        </>
    );
}
export default MyComponent
