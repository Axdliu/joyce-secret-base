/** @format */

import React, { useState } from 'react';
import TheShadow from './books/TheShadow';
import FlirdTheBird from './books/FlirdTheBird';
import TheElves from './books/TheElves';
import theShadow from '../images/theShadow.png';
import elves from '../images/elves.png';
import flirdTheBird from '../images/flirdTheBird.png';
import { Container, Image, Grid, Header } from 'semantic-ui-react';

const JoyceBook = () => {
	const [showBook, setShowBook] = useState(false);
	const [showBook2, setShowBook2] = useState(false);
	const [showBook3, setShowBook3] = useState(false);
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
								}}
							/>
							<Header as='h4'>The Elves</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			{showBook && <TheShadow />}
			{showBook2 && <FlirdTheBird />}
			{showBook3 && <TheElves />}
		</div>
	);
};

export default JoyceBook;
