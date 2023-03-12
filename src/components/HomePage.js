/** @format */

import React, { useState } from 'react';
import { Container, Button, Image, Embed } from 'semantic-ui-react';
import myImage from '../images/whale3.jpg';
import whaleVideo from "../video/whaleVideo.mp4";
import whaleSong from '../sound/whaleSong.wav';
import SlideShow from './SlideShow';
import Hint from './Hint';

const HomePage = () => {
	const [showAnswer, setShowAnswer] = useState(false);
	const [showHint, setShowHint] = useState(false);
	const [playSound, setPlaySound] = useState(false);
	const imageArray = [];
	return (
		<>
			<div >
				<Container text>
					<h1>Joyce!</h1>
					<h4>Riddle</h4>
					<Container text>
						<p>A bundle of <span style={{ color: "red" }}>Blubber</span></p>
						<p>a sight for <span style={{ color: "orange" }}>Landlubbers</span></p>
						<p>I wave with a slap-happy <span style={{ color: "yellow" }}>Tail</span></p>
						<p>A saltwater  <span style={{ color: "blue" }}>Fountain</span></p>
						<p>just sprayin' and <span style={{ color: "green" }}>spoutin' </span></p>
						<p>look out! Thar I blow! I'm a ...</p>
					</Container>
					<Container>
						<Hint />
					</Container>
					<Container>
						{/* <Button onClick={() => setShowHint(true)} style={{ color: 'rgba(7, 255, 255)', backgroundColor: "black" }}>Give me a hint</Button> */}
						<Button onClick={() => setShowAnswer(true)} style={{ color: "violet", backgroundColor: "black" }}>Show me the answer</Button>
					</Container>
					{/* {playSound &&
						<audio controls>
							<source src={whaleSong} type="audio/wav" />
							Your browser does not support the audio element.
						</audio>} */}

					{/* {showAnswer && <video controls src={whaleVideo} type="video/mp4" />} */}
					{/* {showHint &&
						<p>I am the largest mammal and I am endangered some of us are already extinct</p>} */}
					{/* {showAnswer && <Image src={myImage} fluid />} */}

				</Container>

				{/* <Footer version={global.appVersion} /> */}
			</div>
			{showAnswer &&
				<div>
					<Container text2>
						<SlideShow slideArray={imageArray} />
					</Container>
				</div>}
		</>
	);
};

export default HomePage;
