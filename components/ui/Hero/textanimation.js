import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const words = ['Data', 'Livestock', 'Inventory', 'Network','Stock','Insurance','Securization', 'Mortgage'];

export default function TextAnimation() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const timeoutRef = useRef(null);

    // Clean up the existing timer before starting a new one
    const resetTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimer();

        // Define a new timer
        timeoutRef.current = setTimeout(() => {
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 8000); // adjust time here

        // Clean up the timer if the component is unmounted
        return resetTimer;
    }, [currentWordIndex]);

    const currentWordArray = words[currentWordIndex].split('');

    return (
        <Wrapper key={currentWordIndex}>
            {currentWordArray.map((letter, index) => (
                <span key={index} style={{ animationDelay: `${index / 10}s`, animationDuration: `${8000}ms` }}>{letter}</span>
            ))}
        </Wrapper>
    );
}

const animation = keyframes`
    0% {opacity: 0;transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(10deg); filter: blur(10px);}
    25% {opacity: 1;transform: translateY(0px) skewY(0deg) skewX(0deg) ; filter: blur(0px);}
    75% {opacity: 1;transform: translateY(0px) skewY(0deg) skewX(0deg) ;filter: blur(0px);}
    100% {opacity: 0;transform: translateY(100px) skewY(10deg) skewX(10deg) rotateZ(10deg) ; filter: blur(10px);}
`;

const Wrapper = styled.span`
    display:inline-block;
    span {
        display:inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 8s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);

        /* Add gradient effect */
        background: -webkit-linear-gradient(45deg, #152B52,  #153762, #7167B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;