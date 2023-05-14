/** @format */

import React, { useState } from 'react';
import { Container, Button, Header } from 'semantic-ui-react';
import questions from './Questions';

const WouldYouRather = () => {
	// const [explode, setExplode] = useState(false);
	const questionNum = questions.length;
	const randomIndex = Math.floor(Math.random() * questionNum);
	return (
		<Container>
			<Button.Group size='massive'>
				<Button color='black'>{questions[randomIndex][0]}</Button>
				<Button.Or />
				<Button color='black'>{questions[randomIndex][1]}</Button>
			</Button.Group>
		</Container>
	);
};

export default WouldYouRather;
