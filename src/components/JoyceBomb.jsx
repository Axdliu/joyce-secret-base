/** @format */

import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import bomb3 from '../images/bomb3.webp';
import bomb4 from '../images/bomb4.png';

const JoyceBomb = () => {
	return (
		<Container>
			<Image src={bomb3} fluid />
			<Image src={bomb4} fluid />
		</Container>
	);
};

export default JoyceBomb;
