/** @format */

import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import whaleSong from '../sound/whaleSong.wav';

const AnimatedButton = () => {
	const [playSound, setPlaySound] = useState(false);
	return (
		<div>
			<Button animated='vertical' onClick={() => setPlaySound(true)}>
				<Button.Content visible>Listen</Button.Content>
				<Button.Content hidden>
					<Icon name='headphones' />
				</Button.Content>
			</Button>
			{playSound && (
				<audio controls>
					<source src={whaleSong} type='audio/wav' />
					Your browser does not support the audio element.
				</audio>
			)}
		</div>
	);
};

export default AnimatedButton;
