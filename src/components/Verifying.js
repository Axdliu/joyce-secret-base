import React, { useState } from 'react'
import { Card, Button, Checkbox } from 'semantic-ui-react'

const Verifying = () => {
    const [warning, setWarning] = useState();
    const [agree, setAgree] = useState(false)
    const [done, setDone] = useState(false)
    const [option, setOption] = useState(0)

    const results = [
        'Your a ROBOT! Your secret plan is to take over the WORLD!',
        'You are 100% human not even 0.0001 robot.You are a normal person.'
    ]

    const styleSet = [
        { color: "red" },
        { color: "green" }
    ]

    return (<Card.Group>
        <Card>
            {!done && <Card.Content>
                <Card.Header>Verify If You are a Human!</Card.Header>
                <Card.Description>
                    <Checkbox
                        checked={agree}
                        onClick={
                            () => setAgree(!agree)
                        }
                        label={{
                            children: 'I am 100% confident that I am a real human NO lie.'
                        }} />
                </Card.Description>
                <Button color='blue' onClick={() => {
                    if (agree) {
                        setDone(true)
                    } else {
                        setWarning(true)
                    }
                }
                }>Verify</Button>
            </Card.Content>}
            {done && <Card.Content>
                <Card.Description >
                    <div style={styleSet[option]}>{results[option]}</div>
                </Card.Description>
                <Button color='blue' onClick={() => {
                    setDone(false);
                    setWarning(false);
                    setAgree(false);
                    setOption(Math.floor(Math.random() * 2));
                }
                }>Restart</Button>
            </Card.Content>}
        </Card>
    </Card.Group >)
}

export default Verifying
