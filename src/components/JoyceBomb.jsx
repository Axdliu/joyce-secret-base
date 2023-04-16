/** @format */

import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import myImage from '../images/bomb3.webp';

const JoyceBomb = () => {
	return (
		<Container>
			<Image src={myImage} fluid />
		</Container>
	);
};

export default JoyceBomb;
