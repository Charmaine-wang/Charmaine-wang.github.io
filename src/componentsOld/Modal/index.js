import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
	display: ${(props) => (props.isActive ? 'flex' : 'none')};
	width: 90vw;
	height: 90vh;
	transform: translateX(5.5%);
	position: fixed;
	z-index: 2;
	top: 5%;
	flex-direction: column;
	background: #0000ff;
	animation: fade-in 0.2s ease-in-out;

	h2 {
		font-size: 96px;
		margin: 0;
		color: #fff;
	}

	p {
		font-size: 46px;
		margin: 0;
		color: #fff;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

// const StyledSecondtSection = styled.section`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     height: 100vh;
//     width: 100vw;
//     margin-bottom: 0;
//       div {
//         text-align: left;
//       }
//       a {
//         text-decoration: none;
//       }

//       h1 {
//         font-size: 86px;
//         margin: 0;
//         color: #fff;
//       }
// `;
const Modal = (props) => {
	return (
		<StyledModal {...props}>
			{/* <h2>About</h2> */}
			<p>
				My name is Charmaine. Web developer studying at Yrgo Gothenburg, Sweden.
			</p>
			{/* <StyledSecondtSection>
          <div>
            <a href="https://github.com/Charmaine-wang/SGN-frontend"><h1>Sgn.</h1></a>
            <a href="https://github.com/Charmaine-wang/workout"><h1>Workout.</h1></a>
            <a href="https://github.com/Charmaine-wang/photoify"><h1>Photoify.</h1></a>
            <a href="https://github.com/Charmaine-wang/webshop"><h1>E Commerce.</h1></a>
          </div>
          <div>
            <a href="https://github.com/Charmaine-wang/gameover"><h1>Game Over.</h1></a>
            <a href="https://github.com/Charmaine-wang/Fuzzy-memory"><h1>Fuzzy Memory.</h1></a>
            <a href="https://github.com/Charmaine-wang/klearning"><h1>Kultur Akademin.</h1></a>
          </div>
        </StyledSecondtSection> */}
		</StyledModal>
	);
};
export default Modal;
