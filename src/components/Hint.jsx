/** @format */

import React, { Component } from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import AnimatedButton from './AnimatedButton';

export default class ButtonExampleAttachedEvents extends Component {
	state = {
		log: [],
		showHint: false,
		hintList: [
			'I am the largest mammal',
			'I eat plankton, shimps and small fishes',
			'Some of us have teeth and some of us do not',
			'Lots of people are hunting us down',
			'Our number has decreased',
			'I am endangered',
			'Some of us are already extinct',
		],
		i: 0,
	};

	handleClick = () => {
		const hint = this.state.hintList[this.state.i];
		this.updateLog(hint);
		this.setState(() => ({
			i: this.state.i + 1,
		}));
	};

	handleKeyPress = (e) => {
		if (e.charCode === 32 || e.charCode === 13) {
			// Prevent the default action to stop scrolling when space is pressed
			e.preventDefault();
			this.updateLog('You got the hint. Stop asking and guess!');
		}
	};

	updateLog = (message) =>
		this.setState((prevState) => ({
			log: [message, ...prevState.log],
			showHint: true,
		}));

	render() {
		const { log } = this.state;

		return (
			<Grid>
				<Grid.Column width={8}>
					<Segment attached='top'>
						<span style={{ color: 'violet' }}>Hint</span>
					</Segment>
					<Button
						inverted
						color='teal'
						attached='bottom'
						content='Click'
						onClick={this.handleClick}
						onKeyPress={this.handleKeyPress}
					/>
				</Grid.Column>
				<Grid.Column width={8}>
					{this.state.showHint && (
						<>
							<Segment>
								<pre style={{ height: 100, overflowY: 'scroll' }}>
									{log.map((e, i) => (
										<p key={i}>{e}</p>
									))}
								</pre>
							</Segment>
							<AnimatedButton />
						</>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}
