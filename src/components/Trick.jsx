/** @format */

import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import parrot from '../images/parrot.gif';

const Emoji = () => {
	return (
		<Segment.Group>
			<Segment>
				<div>
					<Button
						size='mini'
						onClick={() => window.alert('Computer Virus Attacks!')}>
						Click Me!
					</Button>
					<Button size='tiny' onClick={() => window.alert('Haha, fooled you!')}>
						Click Me!
					</Button>
					<Button
						size='small'
						onClick={() =>
							window.alert('You got hacked by an evil computer genius!')
						}>
						Click Me!
					</Button>
					<Button size='medium'>Click Me!</Button>
					<Button size='large'>Click Me!</Button>
					<Button size='big'>Click Me!</Button>
					<Button size='huge'>Click Me!</Button>
					<Button size='massive'>Click Me!</Button>
				</div>
			</Segment>
		</Segment.Group>
	);
};

export default Emoji;
