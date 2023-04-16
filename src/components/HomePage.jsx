/** @format */

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Riddle from './Riddle';
import JoyceBomb from './JoyceBomb';

export default class HomePage extends Component {
	state = { activeItem: 'gamepad' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<>
				<Menu icon='labeled'>
					<Menu.Item
						name='riddle'
						color={'purple'}
						active={activeItem === 'riddle'}
						onClick={this.handleItemClick}>
						<Icon name='magic' />
						Riddles
					</Menu.Item>

					<Menu.Item
						color={'red'}
						name='bomb'
						active={activeItem === 'bomb'}
						onClick={this.handleItemClick}>
						<Icon name='bomb' />
						Bomb Timer
					</Menu.Item>
				</Menu>
				<Riddle />
				<JoyceBomb />
			</>
		);
	}
}
