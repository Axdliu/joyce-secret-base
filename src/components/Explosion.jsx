/** @format */

import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export default () => {
	const { width, height } = useWindowSize();
	return (
		<Confetti
			width={width}
			height={height}
			drawShape={(ctx) => {
				ctx.beginPath();
				for (let i = 0; i < 40; i++) {
					const angle = 0.35 * i;
					const x = (0.2 + 1.5 * angle) * Math.cos(angle);
					const y = (0.2 + 1.5 * angle) * Math.sin(angle);
					ctx.lineTo(x, y);
				}
				ctx.stroke();
				ctx.closePath();
			}}
		/>
	);
};
