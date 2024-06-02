import { useState, useRef, useEffect } from "react";

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
            intervalIdRef.current = setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current);
            },10)
        }
        return()=>{clearInterval(intervalIdRef.current)};
    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/(1000)%60);
        let miliSeconds = Math.floor((elapsedTime%1000)/10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        miliSeconds = String(miliSeconds).padStart(2,"0");
        
        



        return `${hours}:${minutes}:${seconds}:${miliSeconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start()} className="start-button">start</button>
                <button onClick={stop()} className="stop-button">stop</button>
                <button onClick={reset()} className="reset-button">reset</button>
            </div>

        </div>
    );
}
export default StopWatch;

// Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
//     at renderWithHooks (react-dom.development.js:15498:15)
//     at mountIndeterminateComponent (react-dom.development.js:20103:13)
//     at beginWork (react-dom.development.js:21626:16)
//     at HTMLUnknownElement.callCallback2 (react-dom.development.js:4164:14)
//     at Object.invokeGuardedCallbackDev (react-dom.development.js:4213:16)
//     at invokeGuardedCallback (react-dom.development.js:4277:31)
//     at beginWork$1 (react-dom.development.js:27490:7)
//     at performUnitOfWork (react-dom.development.js:26596:12)
//     at workLoopSync (react-dom.development.js:26505:5)
//     at renderRootSync (react-dom.development.js:26473:7)