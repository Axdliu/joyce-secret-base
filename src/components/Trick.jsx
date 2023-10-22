/** @format */

import React, { useState } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import parrot from '../images/parrot.gif';
import CreateAccountTrick from './CreateAccountTrick';
import Verifying from './Verifying';

const Emoji = () => {
	const [showBlackScreen, setShowBlackScreen] = useState(false);

	const blackOutScreen = (duration) => {
		const element = document.documentElement;
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
		setShowBlackScreen(true);
		setTimeout(() => {
			setShowBlackScreen(false);
		}, duration);
	};

	return (
		<>
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
			<Segment.Group>
				<Segment>
					<div>
						<Button
							size='mini'
							onClick={() => window.alert('Computer Virus Attacks!')}>
							Click Me!
						</Button>
						<Button
							size='tiny'
							onClick={() => window.alert('Haha, fooled you!')}>
							Click Me!
						</Button>
						<Button
							size='small'
							onClick={() =>
								window.alert('You got hacked by an evil computer genius!')
							}>
							Click Me!
						</Button>
						<Button
							size='medium'
							onClick={() =>
								window.alert('You got controlled by the evil genius!')
							}>
							Click Me!
						</Button>
						<Button
							size='large'
							onClick={() =>
								window.alert('The evil genius hacked your friend!')
							}>
							Click Me!
						</Button>
						<Button
							size='big'
							onClick={() => window.alert('Computer shut down!')}>
							Click Me!
						</Button>
						<Button size='huge' onClick={() => window.alert('ERROR! ERROR!')}>
							Click Me!
						</Button>
						<Button
							size='massive'
							onClick={() =>
								window.alert(
									'Computer refresh! Oops deleted everything but homework! Yay!'
								)
							}>
							Click Me!
						</Button>
					</div>
				</Segment>
				<Segment>
					<CreateAccountTrick />
				</Segment>
				<Segment>
					<Verifying />
				</Segment>
				<Segment>
					<Button size='massive' onClick={() => blackOutScreen(10000)}>
						Restart?
					</Button>
				</Segment>
			</Segment.Group>
		</>
	);
};

export default Emoji;
