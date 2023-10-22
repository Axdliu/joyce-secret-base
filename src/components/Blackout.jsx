/** @format */

import React, { useState } from 'react';

const BlackScreenComponent = () => {
	const [showBlackScreen, setShowBlackScreen] = useState(false);

	const blackOutScreen = (duration) => {
		setShowBlackScreen(true);
		setTimeout(() => {
			setShowBlackScreen(false);
		}, duration);
	};

	return (
		<div>
			{showBlackScreen && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'black',
						zIndex: 9999,
					}}
				/>
			)}
			<h1>Welcome to My Website</h1>
			<p>This is some content on the page.</p>
			<button onClick={() => blackOutScreen(3000)}>
				Black out screen for 3 seconds
			</button>
		</div>
	);
};

export default BlackScreenComponent;
