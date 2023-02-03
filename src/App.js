import React, { useState } from 'react';
import FrontSection from './pages/FrontSection';
import GlobalStyle from './styles/GlobalStyles';
import About from './components/About';
import Frame from './components/Frame';

import './App.css';
import styled from 'styled-components';

const StyledApp = styled.div`
	overflow: hidden;
`;

const StyledButton = styled.div`
	z-index: 999;
	position: absolute;
	text-align: center;
	right: -25px;
	transform: translate(-50px, -50vh) rotate(90deg);
	white-space: nowrap;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: url('images/pointer.png'), 30 30, pointer;
	mix-blend-mode: difference;

	@media (min-width: 1024px) {
		transform: translate(-50px, -47vh) rotate(90deg);
	}
`;

const StyledMenu = styled.div`
	width: 50px;
	height: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transform: rotate(-90deg);

	span {
		background-color: #fff;
		width: 100%;
		height: 2px;
		transition: 0.2s ease-in-out;
	}
	span:nth-child(1) {
		width: ${(props) =>
				props.shrinkMenu && !props.toggledMenu ? '70%' : '50%'}
			${(props) => props.toggledMenu && '0'};
		height: 2px;
		transform: ${(props) =>
			props.toggledMenu
				? 'translate(-7px, 25px) rotate(45deg)'
				: 'translate(0, 0)'};
	}
	> span:nth-child(2) {
		width: ${(props) => (props.shrinkMenu ? '50%' : '100%')};
		display: ${(props) => (props.toggledMenu ? 'none' : 'block')};
		height: 2px;
	}
	span:nth-child(3) {
		width: ${(props) =>
			props.shrinkMenu && props.toggledMenu ? '100%' : '20%'};
		height: 2px;
		height: 2px;
		transform: ${(props) =>
			props.toggledMenu
				? 'translate(-7px, -23px) rotate(135deg)'
				: 'translate(0, 0)'};
	}
`;

const StyledTextMenu = styled.div`
	position: absolute;
	width: 100%;
	top: 15px;
	left: -33px;
	color: #fff;
	text-align: center;
	transform: rotate(90deg);

	span {
		font-size: 10px;
		background-color: transparent;
	}
`;

const StyledSections = styled.div`
	padding: 0;
	overflow: hidden;
	height: 100%;

	@media (min-width: 768px) {
		padding: 50px 0;
	}
	@media (min-width: 1024px) {
		padding: 50px 0;
	}
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
					onMouseEnter={() => (!isClicked ? setIsHover(true) : null)}
					onMouseLeave={() => (!isClicked ? setIsHover(false) : null)}
				>
					<StyledMenu shrinkMenu={isHover} toggledMenu={isClicked}>
						<span />
						<span />
						<span />
						<StyledTextMenu>
							{!isClicked ? (
								<>
									<span>M</span>
									<span>E</span>
									<span>N</span>
									<span>U</span>
								</>
							) : (
								<>
									<span>C</span>
									<span>L</span>
									<span>O</span>
									<span>S</span>
									<span>E</span>
								</>
							)}
						</StyledTextMenu>
					</StyledMenu>
				</StyledButton>
			</StyledSections>
		</StyledApp>
	);
}

export default App;
