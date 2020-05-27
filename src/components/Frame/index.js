import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTop = styled.div`
	z-index: 999;
	top: 0;
	position: fixed;
	display: flex;
	width: 100vw;
	height: 50px;
	background-color: #fff;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	> p {
		font-size: 10px;
	}
`;
const StyledRight = styled.div`
	right: 0;
	z-index: 999;
	position: fixed;
	display: flex;
	background-color: #fff;
	height: 100vh;
	width: 500px;
	transform: ${(props) =>
		props.hoverEffect ? 'translate(380px, 0)' : 'translate(450px, 0)'};

	transition: 0.2s ease-in-out;
	/* justify-content: center; */
	align-items: space-between;
	padding: 50px 0;
	> a {
		padding-left: 6px;
		font-size: 10px;
		color: black;
		text-decoration: none;
	}
`;
const StyledBottom = styled.div`
	bottom: 0;
	z-index: 999;
	position: fixed;
	display: flex;
	background-color: #fff;
	height: 50px;
	width: 100vw;
	justify-content: space-between;
	align-items: center;
	padding: 0 50px;
	> a {
		font-size: 10px;
		color: black;
		text-decoration: none;
	}
`;
const StyledLeft = styled.div`
	left: 0;
	z-index: 999;
	position: fixed;
	display: flex;
	background-color: #fff;
	height: 100vh;
	width: 50px;
	justify-content: center;
	align-items: flex-end;
	padding: 80px 0;

	> p {
		transform: rotate(270deg);
		font-size: 10px;
		white-space: pre;
	}
`;

const Frame = (props) => {
	return (
		<>
			<StyledTop>
				<p></p>
				<p>mail: charmainewang424@hotmail.com</p>
			</StyledTop>
			<StyledRight {...props}>
				<p></p>
			</StyledRight>
			<StyledBottom>
				<a href="https://www.linkedin.com/in/charmaine-wang-82517a17b/">
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/charmaine-wang-82517a17b/">
					LinkedIn
				</a>
			</StyledBottom>
			<StyledLeft>
				<p>tel: 0739656610</p>
				<p></p>
			</StyledLeft>
		</>
	);
};

export default Frame;
