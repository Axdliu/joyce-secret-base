/** @format */

import React, { useState } from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
import bomb3 from '../images/bomb3.webp';
import Countdown from 'react-countdown';
import Explosion from './Explosion';
import Explosion2 from './Explosion2';

// after explosion https://www.npmjs.com/package/react-confetti

const JoyceBomb = () => {
	const [explode, setExplode] = useState(false);
	const [explode2, setExplode2] = useState(false);
	const [timer, setTimer] = useState(true);
	return (
		<>
			{explode && <Explosion />}
			{explode2 && <Explosion2 />}
			{!explode && (
				<Container>
					<div style={{ marginTop: '7em', zIndex: 999, position: 'relative' }}>
						{timer && (
							<Header as='h1'>
								<Countdown
									date={Date.now() + 10000}
									onComplete={() => {
										setExplode(true);
										setTimer(false);
										setTimeout(() => {
											setExplode(false);
											setExplode2(true);
										}, '10000');

										setTimer(false);
										setTimeout(() => {
											setExplode2(false);
										}, '20000');
									}}
								/>
							</Header>
						)}
					</div>

					<div style={{ marginTop: '-7em', zIndex: 1, position: 'relative' }}>
						<Image src={bomb3} />
					</div>
				</Container>
			)}
		</>
	);
};

export default JoyceBomb;
