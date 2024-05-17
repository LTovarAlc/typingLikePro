import React, { useState, useEffect } from "react";
import "./stopWatch.css";

const Stopwatch = ({ start, stop }) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (start && !running) {
            setRunning(true);
        }

        if (running) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }

        if (stop && running) {
            clearInterval(timer);
            setRunning(false);
        }

        return () => clearInterval(timer);
    }, [running, start, stop]);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="stopwatch">
            <p>{formatTime(time)}</p>
        </div>
    );
};

export default Stopwatch;
