/** @format */

import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { Container, Button } from 'semantic-ui-react';

// https://embiem.github.io/react-canvas-draw/
const DrawingPad = () => {
	const [saveableCanvas, setSaveableCanvas] = useState(false);
	return (
		<Container>
			<Button
				onClick={() => {
					saveableCanvas.eraseAll();
				}}>
				Erase
			</Button>
			<CanvasDraw ref={(canvasDraw) => setSaveableCanvas(canvasDraw)} />
		</Container>
	);
};

export default DrawingPad;
