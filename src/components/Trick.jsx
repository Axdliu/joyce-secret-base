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
					<Button
						size='medium'
						onClick={() =>
							window.alert('You got controlled by the evil genius!')
						}>
						Click Me!
					</Button>
					<Button
						size='large'
						onClick={() => window.alert('The evil genius hacked your friend!')}>
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
		</Segment.Group>
	);
};

export default Emoji;
