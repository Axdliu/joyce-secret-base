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
				for (let i = 0; i < 90; i++) {
					const angle = 0.26 * i;
					const x = (7 + 8.8 * angle) * Math.trunc(angle);
					const y = (0.1 + 7 * angle) * Math.imul(angle);
					ctx.lineTo(x, y);
				}
				ctx.stroke();
				ctx.closePath();
			}}
		/>
	);
};
