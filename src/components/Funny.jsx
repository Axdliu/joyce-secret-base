/** @format */

import React, { useState } from 'react';
import { Container, Button, Image } from 'semantic-ui-react';
import pinata from '../images/Pinata.jpeg';
import puppy from '../images/puppyChicken.png';
import doggy from '../images/doggy.png';
import boxingDay from '../images/boxingDay.png';
import hotdog from '../images/hotdog.png';
import catSheriff from '../images/catSheriff.png';
import catBoss from '../images/catBoss.png';
import mHeart from '../images/mHeart.png';
import capCat from '../images/capCat.png';
import mTalk from '../images/mTalk.png';
import coolDog from '../images/coolDog.png';
import catEye from '../images/catEye.png';
import catDrink from '../images/catDrink.png';
import cuteRats from '../images/cuteRats.png';
import threeCats from '../images/threeCats.png';
import catSmell from '../images/catSmell.png';

// https://embiem.github.io/react-canvas-draw/
const Funny = () => {
	return (
		<>
			<Container>
				<Image src={doggy} />
			</Container>
			<Container>
				<Image src={cuteRats} />
			</Container>
			<Container>
				<Image src={catSmell} />
			</Container>
			<Container>
				<Image src={threeCats} />
			</Container>
			<Container>
				<Image src={boxingDay} />
			</Container>
			<Container>
				<Image src={hotdog} />
			</Container>
			<Container>
				<Image src={catSheriff} />
			</Container>
			<Container>
				<Image src={catBoss} />
			</Container>
			<Container>
				<Image src={mHeart} />
			</Container>
			<Container>
				<Image src={capCat} />
			</Container>
			<Container>
				<Image src={mTalk} />
			</Container>
			<Container>
				<Image src={coolDog} />
			</Container>
			<Container>
				<Image src={catEye} />
			</Container>
			<Container>
				<Image src={catDrink} />
			</Container>
			<Container>
				<Image src={puppy} />
			</Container>
			<Container>
				<Image src={pinata} />
			</Container>
		</>
	);
};

export default Funny;
