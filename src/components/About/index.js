import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
	right: 0;
	z-index: 999;
	position: fixed;
	display: flex;
	background-color: #fff;
	height: 100vh;
	width: 700px;
	transform: ${(props) =>
		props.isActive ? 'translate(0, 0)' : 'translate(700px, 0)'};
	transition: 0.3s ease-in-out;
`;
const StyledWrapper = styled.div`
	position: relative;
	z-index: 99;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	height: 100%;
	width: 100%;
	padding: 50px;

	h1 {
		font-size: 38px;
		line-height: 36px;
	}
`;
const StyledWrapperForProjects = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	padding: 50px;

	> div > .linkToProject {
		text-decoration: none;
		color: #000;
	}
`;

const StyledLine = styled.div``;

const About = (props) => {
	return (
		<StyledAbout {...props}>
			<StyledWrapper>
				<h1>
					Graduated web developer looking forward to a rewarding career whitin
					web development. I've got a coprehensive knowledge and interest in
					design and developing the layout, visual apperance and responsive
					usability of the website.
				</h1>
				<StyledWrapperForProjects>
					<h5>School projects</h5>
					<div>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/Fuzzy-memory"
						>
							<h1>Fuzzy Memory.</h1>
							<StyledLine className="line" />
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/photoify"
						>
							<h1>Photoify.</h1>
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/webshop"
						>
							<h1>E Commerce.</h1>
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/SGN-frontend"
						>
							<h1>Sgn.</h1>
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/gameover"
						>
							<h1>Game Over.</h1>
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/klearning"
						>
							<h1>Kultur Akademin.</h1>
						</a>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/workout"
						>
							<h1>Workout.</h1>
						</a>
					</div>
				</StyledWrapperForProjects>
			</StyledWrapper>
		</StyledAbout>
	);
};

export default About;
