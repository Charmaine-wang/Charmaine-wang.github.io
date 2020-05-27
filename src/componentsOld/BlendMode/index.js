import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, TweenLite } from 'gsap';
import Blob from '../Blob';

import styled from 'styled-components';

const StyledBlendMode = styled.svg`
	display: flex;
	width: 100%;
	height: 100%;
	background: white;
	filter: blur(5px) contrast(100);
`;
const StyledBlobs = styled.svg`
	display: flex;
	width: 100%;
	height: 100%;
`;

const BlendMode = () => {
	return (
		<>
			<StyledBlendMode>
				<StyledBlobs>
					{[...new Array(40)].map((index) => (
						<Blob />
					))}
				</StyledBlobs>
				<filter id="high-contrast-filter">
					<feColorMatrix type="saturate" values="0" result="desat" />
					<feComponentTransfer>
						<feFuncR
							type="discrete"
							tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"
						/>
						<feFuncG
							type="discrete"
							tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"
						/>
						<feFuncB
							type="discrete"
							tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 .8 .9 1"
						/>
					</feComponentTransfer>
				</filter>
			</StyledBlendMode>
		</>
	);
};

export default BlendMode;
