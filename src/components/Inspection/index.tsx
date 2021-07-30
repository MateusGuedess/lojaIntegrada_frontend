import React, { useState } from 'react';
import { useMutation  } from '@apollo/client'

import { RESET_ATTEMPT } from '../../api/queries'

import { Container, Button } from './styles';

interface Props {
    setInspection: any
}

function Inspection({setInspection}: Props): JSX.Element {
    const [ email, setEmail] = useState("")
    const [handleReset, { data }] = useMutation(RESET_ATTEMPT,
        { variables: { email: email }})

    async function changeEmail(email: string) {
        await setEmail(email)
        await handleReset()
    }

    if(data) {
        console.log(data)
    }

  return (
        <Container>
            <div className="card">
                
                <h1>Acessos:</h1>
                <button onClick={(e) => setInspection(false)} className="quit">x</button>

                <div className="accounts">
                    <span>
                        email: 'teuguedes@outlook.com'
                    </span>
                    <span>
                        password: 'senhamateus'
                    </span>
                    <Button onClick={e => changeEmail('teuguedes@outlook.com')}>Reset Block</Button>
                </div> 
                <div className="accounts">
                    <span>
                        email: 'gabriela@outlook.com'
                    </span>
                    <span>
                        password: 'senhagabriela'
                    </span>
                    <Button onClick={e => changeEmail('gabriela@outlook.com')}>Reset Block</Button>
                </div> 
                <div className="accounts">
                    <span>
                        email: 'felipe@outlook.com
                    </span>
                    <span>
                        password: 'senhaluana'
                    </span>
                    <Button onClick={e => changeEmail('felipe@outlook.com')}>Reset Block</Button>
                </div> 
                <div className="accounts">
                    <span>
                        email: 'felipe@outlook.com'
                    </span>
                    <span>
                        password: 'senhafelipe'
                    </span>
                    <Button onClick={e => changeEmail('felipe@outlook.com')}>Reset Block</Button>
                </div> 

            </div>
        </Container>
  );
}

export default Inspection;
