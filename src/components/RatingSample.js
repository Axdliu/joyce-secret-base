import React from 'react'
import { Rating, Segment } from 'semantic-ui-react'

const RatingSample = () => (
    <Segment.Group>
        <Segment>
            <div>
                <Rating maxRating={25} defaultRating={3} icon='star' size='mini' />
                <br />
                <br />

                <Rating maxRating={15} defaultRating={3} icon='star' size='tiny' />
                <br />
                <br />

                <Rating maxRating={34} defaultRating={3} icon='star' size='small' />
                <br />
                <br />

                <Rating maxRating={5} defaultRating={3} icon='star' />
                <br />
                <br />

                <Rating maxRating={5} defaultRating={3} icon='star' size='large' />
                <br />
                <br />

                <Rating maxRating={9} defaultRating={3} icon='star' size='huge' />
                <br />
                <br />

                <Rating maxRating={10} defaultRating={3} icon='star' size='massive' />
                <br />
                <br />
            </div>
            <div>
                <Rating maxRating={17} defaultRating={3} icon='heart' size='mini' />
                <br />
                <br />

                <Rating maxRating={20} defaultRating={3} icon='heart' size='tiny' />
                <br />
                <br />

                <Rating maxRating={31} defaultRating={3} icon='heart' size='small' />
                <br />
                <br />

                <Rating maxRating={14} defaultRating={3} icon='heart' />
                <br />
                <br />

                <Rating maxRating={11} defaultRating={3} icon='heart' size='large' />
                <br />
                <br />

                <Rating maxRating={21} defaultRating={3} icon='heart' size='huge' />
                <br />
                <br />

                <Rating maxRating={10} defaultRating={3} icon='heart' size='massive' />
                <br />
                <br />
            </div>

        </Segment>
    </Segment.Group>
)
export default RatingSample
