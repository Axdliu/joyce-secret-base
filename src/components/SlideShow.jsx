/** @format */

import React, { Component } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import whale1 from '../images/whale/whale1.jpg';
import whale2 from '../images/whale/whale2.jpg';
import whale3 from '../images/whale/whale3.jpg';
class SlideShow extends Component {
	render() {
		const images = [
			{
				original: whale1,
				thumbnail: whale1,
			},
			{
				original: whale2,
				thumbnail: whale2,
			},
			{
				original: whale3,
				thumbnail: whale3,
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
