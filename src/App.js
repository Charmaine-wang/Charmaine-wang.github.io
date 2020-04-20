import React, { useState } from 'react';
import FrontSection from './pages/FrontSection';
import SecondSection from './pages/SecondSection';
import Modal from './components/Modal';
import './App.css';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	top: 100%;
	z-index: 999;
	right: 0;
	margin: 0 10px;
	/* justify-content: center; */
	position: fixed;
	text-align: center;
	transform: rotate(90deg);
	white-space: nowrap;
	h3 {
		padding: 2px 4px;
		margin: 0;
		position: absolute;
		right: 0;
		background-color: #0000ff;
		color: #fff;
	}
`;

function App() {
	const [isClicked, setClicked] = useState(false);

	return (
		<div className="App">
			<StyledWrapper onClick={() => setClicked(!isClicked)}>
				<h3>Web developer</h3>
			</StyledWrapper>
			<Modal isActive={isClicked} />
			<FrontSection isActive={isClicked} />
			<SecondSection />
		</div>
	);
}

export default App;
