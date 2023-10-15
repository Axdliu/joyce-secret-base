import React, { useState } from 'react'
import { Card, Button, Checkbox } from 'semantic-ui-react'

const CreateAccountTrick = () => {
    const [warning, setWarning] = useState();
    const [agree, setAgree] = useState(false)
    const [done, setDone] = useState(false)
    return (<Card.Group>
        <Card>
            {!done && <Card.Content>
                <Card.Header>Create Account</Card.Header>
                <Card.Description >
                    {warning && <div>Error: Please sell us your sou... uh I mean agree to the TOS</div>}
                </Card.Description>
                <Card.Description style={{ textAlign: "left", fontWeight: "bold" }} >
                    <p>Name: Bob Bobson</p>
                    <p>Date of Birth: 1/1/11</p>
                    <p>Role: Unemployed</p>
                </Card.Description>
                <Card.Description>
                    <Checkbox
                        checked={agree}
                        onClick={
                            () => setAgree(!agree)
                        }
                        label={{
                            children: 'I agree to the TOS and henceforth agree to sell my soul to shady corp, forfeit my first born child to will of the corporation, and sign up for the newsletter.'
                        }} />
                </Card.Description>
                <Button color='blue' onClick={() => {
                    if (agree) {
                        setDone(true)
                    } else {
                        setWarning(true)
                    }
                }
                }>Create Account</Button>
            </Card.Content>}
            {done && <Card.Content>
                <Card.Description >
                    Thank you for selling your soul. Please tell your friends about us.
                </Card.Description>
                <Button color='blue' onClick={() => {
                    setDone(false);
                    setWarning(false);
                    setAgree(false);
                }
                }>Restart</Button>
            </Card.Content>}
        </Card>
    </Card.Group >)
}

export default CreateAccountTrick
