import React from "react";
import { useRef, useEffect } from 'react';

export const Timer = (props) => {
    const timerRef = useRef(null);

    // таймер срабатывает по клику
    const startTimer = () => {
        timerRef.current = setTimeout(() => {
            console.log('start current timeout');
        }, props.timerProps);
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current); // очистка таймера
    }, []);

        return (
            <button onClick={startTimer}>Start timer {props.timerProps/1000} sec</button>
    )
}