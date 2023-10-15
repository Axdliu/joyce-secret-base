/** @format */

import React, { Component } from 'react';
import { Icon, Menu, Grid, Segment } from 'semantic-ui-react';
import Riddle from './Riddle';
import JoyceBomb from './JoyceBomb';
import JoyceBook from './JoyceBook';
import WouldYouRather from './WouldYouRather';
import FoodDrop from './FoodDrop';
import Emoji from './Emoji';
import Trick from './Trick';
import DrawingPad from './DrawingPad';
import WorldMap from './WorldMap';
import Funny from './Funny';
import RatingSample from './RatingSample';

export default class HomePage extends Component {
	state = { activeItem: 'riddle' };

	handleItemClick = (name) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<>
				<Grid>
					<Grid.Column width={2}>
						<Menu icon='labeled' vertical>
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
								Would you
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
								name='emoji'
								active={this.state.activeItem === 'emoji'}
								onClick={() => this.handleItemClick('emoji')}>
								<Icon name='smile outline' />
								Emoji
							</Menu.Item>

							<Menu.Item
								color={'brown'}
								name='canvas'
								active={this.state.activeItem === 'canvas'}
								onClick={() => this.handleItemClick('canvas')}>
								<Icon name='file alternate outline' />
								Drawing Pad
							</Menu.Item>

							{/* <Menu.Item
						color={'orange'}
						name='map'
						active={this.state.activeItem === 'map'}
						onClick={() => this.handleItemClick('map')}>
						<Icon name='map marker alternate' />
						Map
					</Menu.Item> */}

							<Menu.Item
								color={'orange'}
								name='funny'
								active={this.state.activeItem === 'funny'}
								onClick={() => this.handleItemClick('funny')}>
								<Icon name='like' />
								Funny
							</Menu.Item>
							<Menu.Item
								color={'violet'}
								name='trick'
								active={this.state.activeItem === 'trick'}
								onClick={() => this.handleItemClick('trick')}>
								<Icon name='chess queen' />
								Trick
							</Menu.Item>
							<Menu.Item
								color={'yellow'}
								name='rating'
								active={this.state.activeItem === 'rating'}
								onClick={() => this.handleItemClick('rating')}>
								<Icon name='star outline' />
								Rating
							</Menu.Item>
						</Menu>
					</Grid.Column>
					<Grid.Column stretched width={14}>
						{/* <Segment> */}
						{this.state.activeItem === 'riddle' && <Riddle />}
						{this.state.activeItem === 'bomb' && <JoyceBomb />}
						{this.state.activeItem === 'book' && <JoyceBook />}
						{this.state.activeItem === 'would' && <WouldYouRather />}
						{this.state.activeItem === 'food' && <FoodDrop />}
						{this.state.activeItem === 'emoji' && <Emoji />}
						{this.state.activeItem === 'canvas' && <DrawingPad />}
						{/* {this.state.activeItem === 'map' && <WorldMap />} */}
						{this.state.activeItem === 'funny' && <Funny />}
						{this.state.activeItem === 'trick' && <Trick />}
						{this.state.activeItem === 'rating' && <RatingSample />}
						{/* </Segment> */}
					</Grid.Column>
				</Grid>
			</>
		);
	}
}
