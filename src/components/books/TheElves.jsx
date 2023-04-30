/** @format */

import React from 'react';
import { Message } from 'semantic-ui-react';

const TheElves = () => {
	return (
		<Message>
			<Message.Header>The Elves</Message.Header>
			<h4>Written,illustrated By Joyce Yang</h4>
			<div
				style={{
					textAlign: 'left',
					marginTop: '1em',
					height: '450px',
					overflowY: 'scroll',
				}}>
				<p>Coming up...</p>
			</div>
		</Message>
	);
};

export default TheElves;
