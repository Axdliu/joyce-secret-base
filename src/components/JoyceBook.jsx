/** @format */

import React, { useState } from 'react';
import TheShadow from './books/TheShadow';
import FlirdTheBird from './books/FlirdTheBird';
import TheElves from './books/TheElves';
import Enchanced from './books/Enchanced';
import MiaAdventure from './books/MiaAdventure';
import theShadow from '../images/theShadow.png';
import elves from '../images/elves.png';
import flirdTheBird from '../images/flirdTheBird.png';
import enchanced from '../images/enchanced.png';
import mia from '../images/mia.png';
import { Container, Image, Grid, Header } from 'semantic-ui-react';

const JoyceBook = () => {
	const [showBook, setShowBook] = useState(false);
	const [showBook2, setShowBook2] = useState(false);
	const [showBook3, setShowBook3] = useState(false);
	const [showBook4, setShowBook4] = useState(false);
	const [showBook5, setShowBook5] = useState(false);
	return (
		<div>
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
								}}
							/>
							<Header as='h4'>The Enchanted Forest Adventure</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			{showBook && <TheShadow />}
			{showBook2 && <FlirdTheBird />}
			{showBook3 && <TheElves />}
			{showBook4 && <MiaAdventure />}
			{showBook5 && <Enchanced />}
		</div>
	);
};

export default JoyceBook;
