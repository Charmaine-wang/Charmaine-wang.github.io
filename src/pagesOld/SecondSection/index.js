import React from 'react';
import styled from 'styled-components';

const StyledSecondSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    margin-bottom: 0;
    background-color: #0000ff;
      a {
        text-decoration: none;
      }

      h1 {
        font-size: 96px;
        margin: 0;
        /* color: #0000FF; */
        color: #fff
      }
`;

const SecondSection = () => {
    return (
    <StyledSecondSection>
        <a href="https://github.com/Charmaine-wang/Fuzzy-memory"><h1>Fuzzy Memory.</h1></a>
        <a href="https://github.com/Charmaine-wang/photoify"><h1>Photoify.</h1></a>
        <a href="https://github.com/Charmaine-wang/webshop"><h1>E Commerce.</h1></a>
        <a href="https://github.com/Charmaine-wang/SGN-frontend"><h1>Sgn.</h1></a>
        <a href="https://github.com/Charmaine-wang/gameover"><h1>Game Over.</h1></a>
        <a href="https://github.com/Charmaine-wang/klearning"><h1>Kultur Akademin.</h1></a>
        <a href="https://github.com/Charmaine-wang/workout"><h1>Workout.</h1></a>
    </StyledSecondSection>
    );
};

export default SecondSection;