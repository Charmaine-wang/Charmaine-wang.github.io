import React, { useState } from 'react';
import FrontSection from './pages/FrontSection';
import GlobalStyle from './styles/GlobalStyles';
// import Pointer from 'images/pointer.png';
import About from './components/About';
import Frame from './components/Frame';

import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
	/* scroll-snap-type: mandatory;
	scroll-snap-points-y: repeat(100vh);
	scroll-snap-type: y mandatory;
	overflow-x: hidden; */
`;

const StyledButton = styled.div`
	z-index: 999;
	margin: 0 10px;
	position: absolute;
	text-align: center;
	right: 0;
	transform: translate(-50px, -50vh) rotate(90deg);
	white-space: nowrap;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: url('images/pointer.png'), 30 30, pointer;

	h5 {
		background-color: red;
		font-size: 28px;
		padding: 2px 4px;
		margin: 0;
		position: relative;
		right: 0;

		transition: all 0.2s ease-in-out;
		width: 120px;
		height: 50%;
		align-items: center;
		cursor: pointer;

		&:hover {
			transform: scale(1.3);
			color: #000;
		}
	}
`;

const StyledMenu = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: url('images/pointer.png'), 30 30, pointer;

	span {
		background-color: ${(props) => (props.shrinkMenu ? 'transparent' : '#fff')};
		width: 100%;
		height: 2px;
	}
`;

const StyledCross = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	position: relative;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	span {
		background-color: #000;
		position: fixed;
		width: 100%;
		height: 2px;
	}
	&:hover {
		transform: scale(1.3);
	}

	span:first-child {
		transform: translate(-7px, 23px) rotate(45deg);
	}

	span:last-child {
		transform: translate(-7px, 24px) rotate(135deg);
	}
`;

const StyledSections = styled.div`
	padding: 50px;
`;

function App(props) {
	const [isClicked, setClicked] = useState(false);
	const [isHover, setIsHover] = useState(false);

	return (
		<StyledApp {...props}>
			<GlobalStyle />
			<Frame hoverEffect={isHover} />
			<About isActive={isClicked} />
			<StyledSections>
				<FrontSection />
				<StyledButton
					onClick={() => {
						setClicked(!isClicked);
					}}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				>
					{isClicked && (
						<StyledCross>
							<span></span>
							<span></span>
						</StyledCross>
					)}
					{!isClicked && (
						// <h5>MENU</h5>
						<StyledMenu shrinkMenu={isHover}>
							<span />
							<span />
							<span />
						</StyledMenu>
					)}
					{!isClicked && isHover && <h5>MENU</h5>}
				</StyledButton>
			</StyledSections>
		</StyledApp>
	);
}

export default App;
