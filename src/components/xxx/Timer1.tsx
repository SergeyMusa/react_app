import React from "react";
import { useRef, useEffect } from 'react';

export const Timer1 = (props) => {
    const timerRef = useRef(null);

    // таймер срабатывает по клику
    const startTimer = () => {
        timerRef.current = setTimeout(() => {
            console.log(' Timer1 ');
        }, props.timerProps);
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current); // очистка таймера
    }, []);

        return (
            <div>
                <h4>{'1_'+timerRef.current}</h4>
                <button onClick={startTimer}>Start timer {props.timerProps/1000} sec</button>
            </div>
    )
}