import React, { useState, useEffect, useRef } from 'react';
import { TweenLite } from "gsap";

import styled from 'styled-components';

const StyledCircle = styled.circle`
    /* background: black; */

`;


const Blob = (props) => {
    const circle = useRef(null);


    useEffect(() => {
        moveMe(circle.current);
    }, []);

    const getRandomIntBetween = (from, to) => {
        return (Math.floor(Math.random() * ((to + 1) - from)) + from)
    }

    const moveMe = (target) => {
        TweenLite.to(target, Math.random() * 6, { x: Math.random() * 300, y: Math.random() * 300, onComplete: moveMe, onCompleteParams: [target] })
    }
    return (
        <StyledCircle ref={circle} cx={getRandomIntBetween(0, window.innerWidth / 2)} cy={getRandomIntBetween(0, window.innerHeight / 2)} r={getRandomIntBetween(25, 100)} fill="black" />

    )
}
export default Blob
