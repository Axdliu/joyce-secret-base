/** @format */

import React, { useState } from 'react';
import TheShadow from './books/TheShadow';
import FlirdTheBird from './books/FlirdTheBird';
import TheElves from './books/TheElves';
import Enchanced from './books/Enchanced';
import MiaAdventure from './books/MiaAdventure';
import CandyLand from './books/CandyLand';
import theShadow from '../images/theShadow.png';
import elves from '../images/elves.png';
import bookshelf from '../images/bookshelf.png';
import flirdTheBird from '../images/flirdTheBird.png';
import enchanced from '../images/enchanced.png';
import candyLand from '../images/CandyLand.png';
import whiskers from '../images/Whiskers.png';
import magicalBook from '../images/MagicalBook.png';
import mia from '../images/mia.png';
import { Container, Image, Grid, Header } from 'semantic-ui-react';
import Whiskers from './books/Whiskers';

const JoyceBook = () => {
	const [showBook, setShowBook] = useState(false);
	const [showBook2, setShowBook2] = useState(false);
	const [showBook3, setShowBook3] = useState(false);
	const [showBook4, setShowBook4] = useState(false);
	const [showBook5, setShowBook5] = useState(false);
	const [showBook6, setShowBook6] = useState(false);
	const [showBook7, setShowBook7] = useState(false);
	const [showBook8, setShowBook8] = useState(false);
	return (
		<div>
			<div
				style={{
					zIndex: -1,
					position: 'relative',
					maxWidth: '110%',
					width: '120%',
					height: 'auto;',
					marginLeft: '-2em',
				}}>
				<Image fluid src={bookshelf} />
			</div>
			<div style={{ marginTop: '-65em' }}>
				<Container>
					<Grid celled>
						<Grid.Row>
							<Grid.Column width={3}>
								<Image
									src={theShadow}
									onClick={() => {
										setShowBook(true);
										setShowBook2(false);
										setShowBook3(false);
										setShowBook4(false);
										setShowBook5(false);
										setShowBook6(false);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>The Shadow</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Image
									src={flirdTheBird}
									onClick={() => {
										setShowBook(false);
										setShowBook2(true);
										setShowBook3(false);
										setShowBook4(false);
										setShowBook5(false);
										setShowBook6(false);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>Flird The Bird</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Image
									src={elves}
									onClick={() => {
										setShowBook3(true);
										setShowBook(false);
										setShowBook2(false);
										setShowBook4(false);
										setShowBook5(false);
										setShowBook6(false);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>The Elves</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Image
									src={mia}
									onClick={() => {
										setShowBook3(false);
										setShowBook(false);
										setShowBook2(false);
										setShowBook4(true);
										setShowBook5(false);
										setShowBook6(false);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>Mia and the Treacherous Adventure</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Image
									src={enchanced}
									onClick={() => {
										setShowBook3(false);
										setShowBook(false);
										setShowBook2(false);
										setShowBook4(false);
										setShowBook5(true);
										setShowBook6(false);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>The Enchanted Forest Adventure</Header>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row style={{ marginTop: '2em' }}>
							<Grid.Column width={3}>
								<Image
									src={candyLand}
									onClick={() => {
										setShowBook3(false);
										setShowBook(false);
										setShowBook2(false);
										setShowBook4(false);
										setShowBook5(false);
										setShowBook6(true);
										setShowBook7(false);
									}}
								/>
								<Header as='h4'>Candy Land</Header>
							</Grid.Column>
							<Grid.Column width={3}>
								<Image
									src={whiskers}
									onClick={() => {
										setShowBook3(false);
										setShowBook(false);
										setShowBook2(false);
										setShowBook4(false);
										setShowBook5(false);
										setShowBook6(false);
										setShowBook7(true);
									}}
								/>
								<Header as='h4'>Whiskers</Header>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
				{showBook && <TheShadow />}
				{showBook2 && <FlirdTheBird />}
				{showBook3 && <TheElves />}
				{showBook4 && <MiaAdventure />}
				{showBook5 && <Enchanced />}
				{showBook6 && <CandyLand />}
				{showBook7 && <Whiskers />}
			</div>
		</div>
	);
};

export default JoyceBook;
