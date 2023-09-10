/** @format */

import React from 'react';
import { Message } from 'semantic-ui-react';

const CandyLand = () => {
	return (
		<Message>
			<Message.Header>The Magical Book</Message.Header>
			<h4>Written,illustrated By Joyce Yang</h4>
			<div
				style={{
					textAlign: 'left',
					marginTop: '1em',
					height: '450px',
					overflowY: 'scroll',
				}}>
				<p></p>
				<p></p>
				<p></p>
				<p></p>
			</div>
		</Message>
	);
};

export default CandyLand;
