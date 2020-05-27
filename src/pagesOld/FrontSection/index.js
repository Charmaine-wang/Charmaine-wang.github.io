import React, { useState } from 'react';
import BlendMode from '../../components/BlendMode'
import styled from 'styled-components';

const StyledFrontSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;
    margin-bottom: 0;

    h1 {
        mix-blend-mode: difference;
        position: absolute;
        top: 100px;
        color: #fff;
        z-index:111;
        font-size: 126px;
        line-height: 60px;
        display: ${props => (props.isActive ? "none" : "block")};
    }
`;



const FrontSection = (props) => {
    // const [isClicked, setClicked] = useState(false);
    return (
    <StyledFrontSection {...props}>
        <h1>Charmaine Wang</h1>
        <BlendMode />
      
    </StyledFrontSection>
    );
};

export default FrontSection;