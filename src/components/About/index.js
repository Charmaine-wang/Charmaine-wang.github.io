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
	@media (max-width: 576px) {
		width: 100vw;
	}
	@media (max-width: 768px) {
		width: 100%;
		transform: ${(props) =>
			props.isActive ? 'translate(0, 0)' : 'translate(100%, 0)'};
	}
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

	@media (max-width: 576px) {
		padding: 25px;
	}
	h1 {
		font-size: 38px;
		line-height: 36px;
		@media (max-width: 576px) {
			font-size: 26px;
			line-height: 26px;
		}
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

const StyledContactMobile = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	> div {
		display: flex;
		flex-direction: column;
	}

	> div > p {
		font-size: 12px;
	}

	> div > a {
		text-decoration: none;
		color: #000;
		font-size: 12px;
		font-weight: 700;
	}

	> a:first-of-type {
		margin-top: 10px;
	}

	@media (min-width: 768px) {
		display: none;
	}
`;

const About = (props) => {
	return (
		<StyledAbout {...props}>
			<StyledWrapper>
				<h1>
					Web developer looking forward to a rewarding career whitin web
					development. I've got a coprehensive knowledge and interest in design
					and developing the layout, visual apperance and responsive usability
					for the web.
				</h1>
				<StyledWrapperForProjects>
					<h5>School projects</h5>
					<div>
						<a
							className="linkToProject"
							href="https://github.com/Charmaine-wang/Fuzzy-memory"
						>
							<h1>Fuzzy Memory.</h1>
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
				<StyledContactMobile>
					<div>
						<p>mail: charmainewang424@hotmail.com</p>
						<p>tel: 0739656610</p>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/charmaine-wang-82517a17b/">
							GitHub
						</a>
						<a href="https://www.linkedin.com/in/charmaine-wang-82517a17b/">
							LinkedIn
						</a>
					</div>
				</StyledContactMobile>
			</StyledWrapper>
		</StyledAbout>
	);
};

export default About;
