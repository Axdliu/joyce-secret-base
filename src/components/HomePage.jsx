/** @format */

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Riddle from './Riddle';
import JoyceBomb from './JoyceBomb';

export default class HomePage extends Component {
	state = { activeItem: 'riddle' };

	handleItemClick = (name) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<>
				<Menu icon='labeled'>
					<Menu.Item
						name='riddle'
						color={'purple'}
						active={this.state.activeItem === 'riddle'}
						onClick={() => this.handleItemClick('riddle')}>
						<Icon name='magic' />
						Riddles
					</Menu.Item>

					<Menu.Item
						color={'red'}
						name='bomb'
						active={this.state.activeItem === 'bomb'}
						onClick={() => this.handleItemClick('bomb')}>
						<Icon name='bomb' />
						Bomb Timer
					</Menu.Item>
				</Menu>
				{this.state.activeItem === 'riddle' && <Riddle />}
				{this.state.activeItem === 'bomb' && <JoyceBomb />}
			</>
		);
	}
}
