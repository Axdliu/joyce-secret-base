/** @format */

import React from 'react';
import { Segment } from 'semantic-ui-react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './mapStyle.css';
const WorldMap = () => {
	const geoUrl =
		'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';
	return (
		<Segment.Group>
			<Segment>
				<ComposableMap>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography key={geo.rsmKey} geography={geo} fill={'#F6F0E9'} />
							))
						}
					</Geographies>
				</ComposableMap>
			</Segment>
		</Segment.Group>
	);
};

export default WorldMap;
