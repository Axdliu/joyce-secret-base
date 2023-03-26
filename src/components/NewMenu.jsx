/** @format */

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';

export default class MenuExampleLabeledIcons extends Component {
	state = { activeItem: 'gamepad' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
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
					color={'blue'}
					name='gamepad'
					active={activeItem === 'gamepad'}
					onClick={this.handleItemClick}>
					<Icon name='gamepad' />
					Games
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
		);
	}
}
