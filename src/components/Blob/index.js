import React, { useEffect, useRef, useMemo } from 'react';
import { TweenLite } from 'gsap/dist/gsap';

import styled from 'styled-components';

const StyledCircle = styled.circle`
	/* background: black; */
`;

const Blob = (props) => {
	const circle = useRef(null);

	useEffect(() => {
		moveMe(circle.current);
	}, []);

	const useRandomInt = (from, to) =>
		useMemo(() => Math.floor(Math.random() * (to + 1 - from)) + from, [
			from,
			to,
		]);

	const moveMe = (target) => {
		TweenLite.to(target, Math.random() * 6, {
			x: Math.random() * 300,
			y: Math.random() * 300,
			onComplete: moveMe,
			onCompleteParams: [target],
		});
	};

	// moveMe(circle.current);
	return (
		<StyledCircle
			ref={circle}
			cx={useRandomInt(0, window.innerWidth / 2)}
			cy={useRandomInt(0, window.innerHeight / 2)}
			r={useRandomInt(25, 100)}
			fill="#fff"
		/>
	);
};
export default Blob;
