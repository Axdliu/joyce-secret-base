/** @format */

import React from 'react';
import { Segment } from 'semantic-ui-react';
import parrot from '../images/parrot.gif';

const Emoji = () => {
	return (
		<Segment.Group>
			<Segment>
				<h1>👨 + 🚶‍♂️ = 🥭</h1>
				<h1>📘 + ✔ = 🔖</h1>
				<h1>🌙 + 🗝️ = 🐵</h1>
				<h1>👍🏼 + 👨🏼 = 🦸🏼‍♂️</h1>
				<h1>🧈 + 🪰 = 🦋</h1>
				<h1>🪆 + 📌 = 🐬</h1>
				<h1>D + 🔛 + 🗝️ = 🐴</h1>
				<h1>D + 👂🏼 = 🦌</h1>
				<h1>E + 🥅 = 🦅</h1>
				<h1>👔 + ⚙️ = 🐅</h1>
				<h1>😭 + 🐱 = 🦗</h1>
				<h1>🌧️ + O = 🦏</h1>
				<h1>🧶 + F = 🐺</h1>
				<h1>B + 👂🏼 = 🐻</h1>
				<h1>🤯 + 🌽 = 🍿</h1>
				<h1>🌊 + L = 🦭</h1>
				<h1>S + 💅🏼 = 🐌</h1>
				<h1>🗝️ + 👥 = 🥝</h1>
				<h1>🍫 + 🥛 + 🤝 = 🧋</h1>
				<h1>P + 👀 = 🥧</h1>
				<h1>⏳ + 😈 = 🥪</h1>
				<div style={{ display: 'inline' }}>
					<img style={{ paddingBottom: '5px' }} src={parrot} alt='loading...' />
					The End
				</div>
			</Segment>
		</Segment.Group>
	);
};

export default Emoji;
