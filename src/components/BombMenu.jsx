/** @format */

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';

export default class MenuExampleLabeledIcons extends Component {
	state = { activeItem: 'gamepad' };

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<Menu inverted icon='labeled'>
				<Menu.Item
					name='riddle'
					color={'purple'}
					active={activeItem === 'riddle'}
					onClick={this.handleItemClick}>
					<Icon name='magic' color='yellow' />
					Bomb
				</Menu.Item>
			</Menu>
		);
	}
}
