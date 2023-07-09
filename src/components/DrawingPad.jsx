/** @format */

import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { Container, Button } from 'semantic-ui-react';

// https://embiem.github.io/react-canvas-draw/
const DrawingPad = () => {
	const [saveableCanvas, setSaveableCanvas] = useState();
	const [color, setColor] = useState('rgba(0, 0, 0, 1)');
	return (
		<Container>
			<div class='left-align'>
				<Button
					basic
					color='blue'
					content='Blue'
					onClick={() => {
						setColor('rgba(0, 117, 255, 0.5)');
					}}
				/>
				<Button
					basic
					color='yellow'
					content='Yellow'
					onClick={() => {
						setColor('rgba(255, 231, 20, 0.5)');
					}}
				/>
				<Button
					basic
					color='red'
					content='Red'
					onClick={() => {
						setColor('rgba(250, 3, 3, 0.5)');
					}}
				/>
				<Button
					onClick={() => {
						localStorage.setItem('savedDrawing', saveableCanvas.getSaveData());
					}}>
					Save
				</Button>
				<Button
					onClick={() => {
						saveableCanvas.eraseAll();
					}}>
					Erase
				</Button>
			</div>
			<CanvasDraw
				brushColor={color}
				ref={(canvasDraw) => setSaveableCanvas(canvasDraw)}
				saveData={localStorage.getItem('savedDrawing')}
			/>
		</Container>
	);
};

export default DrawingPad;
