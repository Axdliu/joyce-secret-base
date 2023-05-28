/** @format */

import React, { useState, useEffect } from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
import n1 from '../images/food/n1.png';
import m1 from '../images/food/1.png';
import m2 from '../images/food/2.png';
import m3 from '../images/food/3.png';
import m4 from '../images/food/4.png';
import m5 from '../images/food/5.png';
import m6 from '../images/food/6.png';
import m7 from '../images/food/7.png';
import m8 from '../images/food/8.png';
import m9 from '../images/food/9.png';
import m10 from '../images/food/10.png';
import m11 from '../images/food/11.png';
import m12 from '../images/food/12.png';
import m13 from '../images/food/13.png';
import m14 from '../images/food/14.png';
import m15 from '../images/food/15.png';
import m16 from '../images/food/16.png';
import m17 from '../images/food/17.png';
import m18 from '../images/food/18.png';
import m19 from '../images/food/19.png';
import m20 from '../images/food/20.png';
import m21 from '../images/food/21.png';
import m22 from '../images/food/22.png';
import m23 from '../images/food/23.png';
import doll from '../images/doll.png';

const App = () => {
	const [food, setFood] = useState(n1);
	const [position, setPosition] = useState({ left: 600, top: 0 });
	// const imageList = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12];
	const imageList = [
		n1,
		m1,
		m2,
		m3,
		m4,
		m5,
		m6,
		m7,
		m8,
		m9,
		m10,
		m11,
		m12,
		m13,
		m14,
		m15,
		m16,
		m17,
		m18,
		m19,
		m20,
		m21,
		m22,
		m23,
	];

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'ArrowLeft') {
				setPosition((prevPosition) => ({
					...prevPosition,
					left: Math.max(prevPosition.left - 10, 0),
				}));
			} else if (event.key === 'ArrowRight') {
				setPosition(
					(prevPosition) => ({
						...prevPosition,
						left: Math.min(prevPosition.left + 10, window.innerWidth - 30),
					}) // Adjust the '30' based on the letter size
				);
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	useEffect(() => {
		const generateLetter = () => {
			const rondomIndex = Math.floor(Math.random() * imageList.length);
			setFood(imageList[rondomIndex]);
			setPosition((prevPosition) => ({ ...prevPosition, top: 0 }));
		};

		const dropLetter = setInterval(() => {
			if (food === null) {
				generateLetter();
			} else {
				setPosition((prevPosition) => ({
					...prevPosition,
					top: prevPosition.top + 10,
				}));
			}
		}, 100);

		return () => {
			clearInterval(dropLetter);
		};
	}, [food]);

	useEffect(() => {
		if (food !== null && position.top >= window.innerHeight) {
			setFood(null);
		}
		if (
			food !== null &&
			position.top >= 360 &&
			position.top <= 410 &&
			position.left >= 630 &&
			position.left <= 700
		) {
			setFood(null);
		}
	}, [food, position]);

	return (
		<div>
			<div
				style={{
					position: 'absolute',
					top: `300px`,
					left: `600px`,
					maxWidth: '15%',
					height: 'auto',
				}}>
				<Image src={doll} />
			</div>

			<div
				style={{
					position: 'absolute',
					top: `${position.top}px`,
					left: `${position.left}px`,
				}}>
				{food && <Image src={food} />}
			</div>
		</div>
	);
};

export default App;
