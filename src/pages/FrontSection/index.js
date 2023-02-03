import React, { useRef } from 'react';
import BlendMode from '../../components/BlendMode';
import styled from 'styled-components';

const StyledFrontSection = styled.section`
	display: flex;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	margin-bottom: 0;
	position: relative;
	overflow: hidden;

	@media (min-width: 768px) {
		height: calc(100vh - 100px);
	}

	h1 {
		text-align: center;
		mix-blend-mode: difference;
		position: absolute;
		top: 100px;
		color: #fff;
		z-index: 111;
		padding: 0 50px;
		font-size: 66px;
		display: inline-block;
		white-space: pre-line;
		line-height: 68px;

		@media (min-width: 768px) {
			font-size: 86px;
		}

		@media (min-width: 1024px) {
			font-size: 126px;
			align-self: center;
		}
	}
`;

const FrontSection = (props) => {
	return (
		<StyledFrontSection {...props}>
			<h1>Charmaine Wang</h1>
			<BlendMode />
		</StyledFrontSection>
	);
};

export default FrontSection;
