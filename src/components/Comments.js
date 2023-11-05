import React, { useState } from 'react'
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'

const Comments = () => {
    const [words, setWords] = useState(['Welcome to comment!'])

    return (
        <Segment.Group>
            <Segment>
                <Comment.Group>
                    <Header as='h3' dividing>
                        Comments
                    </Header>

                    <Comment>
                        {/* <Comment.Avatar src='/images/avatar/small/matt.jpg' /> */}
                        <Comment.Content>
                            {/* // <Comment.Author as='a'>Matt</Comment.Author>
                        // <Comment.Metadata>
                        //     <div>Today at 5:42PM</div>
                        // </Comment.Metadata> */}
                            <Comment.Text>{words[0]}</Comment.Text>
                            {/* // <Comment.Actions>
                        //     <Comment.Action>Reply</Comment.Action>
                        // </Comment.Actions> */}
                        </Comment.Content>
                    </Comment>

                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>
            </Segment>
        </Segment.Group>
    )
}

export default Comments