/** @format */

import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import Riddle from './Riddle';
import JoyceBomb from './JoyceBomb';
import JoyceBook from './JoyceBook';
import WouldYouRather from './WouldYouRather';
import FoodDrop from './FoodDrop';
import parrot from '../images/parrot.gif';

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

					<Menu.Item
						color={'teal'}
						name='book'
						active={this.state.activeItem === 'book'}
						onClick={() => this.handleItemClick('book')}>
						<Icon name='book' />
						Book
					</Menu.Item>

					<Menu.Item
						color={'green'}
						name='would'
						active={this.state.activeItem === 'would'}
						onClick={() => this.handleItemClick('would')}>
						<Icon name='bug' />
						Would you rather
					</Menu.Item>

					<Menu.Item
						color={'yellow'}
						name='food'
						active={this.state.activeItem === 'food'}
						onClick={() => this.handleItemClick('food')}>
						<Icon name='food' />
						Food
					</Menu.Item>

					<Menu.Item
						color={'pink'}
						name='joke'
						active={this.state.activeItem === 'joke'}
						onClick={() => this.handleItemClick('joke')}>
						{/* <Icon name='smile outline' /> */}
						<img
							style={{ paddingBottom: '5px' }}
							src={parrot}
							alt='loading...'
						/>
						Emoji
					</Menu.Item>
				</Menu>
				{this.state.activeItem === 'riddle' && <Riddle />}
				{this.state.activeItem === 'bomb' && <JoyceBomb />}
				{this.state.activeItem === 'book' && <JoyceBook />}
				{this.state.activeItem === 'would' && <WouldYouRather />}
				{this.state.activeItem === 'food' && <FoodDrop />}
				{this.state.activeItem === 'joke' && <div />}
			</>
		);
	}
}
