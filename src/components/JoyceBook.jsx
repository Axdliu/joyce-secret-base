/** @format */

import React, { useState } from 'react';
import TheShadow from './books/TheShadow';
import theShadow from '../images/theShadow.png';
import { Container, Image, Grid, Header } from 'semantic-ui-react';

const JoyceBook = () => {
	const [showBook, setShowBook] = useState(false);
	return (
		<div>
			<Container>
				<Grid celled>
					<Grid.Row>
						<Grid.Column width={3}>
							<Image src={theShadow} onClick={() => setShowBook(true)} />
							<Header as='h4'>The Shadow</Header>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			{showBook && <TheShadow />}
		</div>
	);
};

export default JoyceBook;
