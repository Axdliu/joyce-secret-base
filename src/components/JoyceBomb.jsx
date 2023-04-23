/** @format */

import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
import bomb3 from '../images/bomb3.webp';
import Countdown from 'react-countdown';

const JoyceBomb = () => {
	return (
		<Container>
			<div style={{ marginTop: '7em', zIndex: 999, position: 'relative' }}>
				<Header as='h1'>
					<Countdown date={Date.now() + 10000} />
				</Header>
			</div>
			<div style={{ marginTop: '-7em', zIndex: 1, position: 'relative' }}>
				<Image src={bomb3} />
			</div>
		</Container>
	);
};

export default JoyceBomb;
