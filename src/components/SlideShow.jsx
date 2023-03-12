/** @format */

import React, { Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
// https://im.ge/upload/?lang=en
class SlideShow extends Component {
	render() {
		const images = [
			{
				original: 'https://i.328888.xyz/2023/03/05/G7eNc.jpeg',
				thumbnail: 'https://i.328888.xyz/2023/03/05/G7eNc.jpeg',
			},
			{
				original: 'https://i.328888.xyz/2023/03/05/G7zhA.jpeg',
				thumbnail: 'https://i.328888.xyz/2023/03/05/G7zhA.jpeg',
			},
			{
				original: 'https://i.328888.xyz/2023/03/05/G7GHN.jpeg',
				thumbnail: 'https://i.328888.xyz/2023/03/05/G7GHN.jpeg',
			},
			{
				original: 'https://i.328888.xyz/2023/03/05/G7deV.jpeg',
				thumbnail: 'https://i.328888.xyz/2023/03/05/G7deV.jpeg',
			},
			{
				original: 'https://i.328888.xyz/2023/03/05/G7Skb.jpeg',
				thumbnail: 'https://i.328888.xyz/2023/03/05/G7Skb.jpeg',
			},
		];

		return (
			<div>
				<ImageGallery items={images} showIndex={true} lazyLoad={true} />
			</div>
		);
	}
}

export default SlideShow;
