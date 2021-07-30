import React, { useEffect, useState } from 'react';
import danger from '../../assets/danger.png'
import warning from '../../assets/warning.png'
import success from '../../assets/checked.png'
import { Container } from './styles';

interface Props {
    message: string
    type: "notification" | "content" 
    icon?: "danger" | "success" |  "warning"
}


function Modal ({message, icon, type}: Props): JSX.Element  {
  const [incomeMessage, setMessage] = useState('')
  
  useEffect(() => {
      if (message.includes("User Not Found status"))
        setMessage("User not found")
        
      if(message.includes("User Blocked"))
        setMessage("User Blocked")

      if(message.includes("Wrong Password attempts"))
        setMessage(`Wrong Password... attempts ${message.split(":")[1]}`)

      if(message.includes("Log in with success"))
        setMessage(message)

  }, [])
  
  if(!incomeMessage) return <></>

  function handleIcon() {
    if(icon === "danger") return danger
    if(icon === "warning") return warning
    if(icon === "success") return success
  }

  
  return (
    <Container>
      <section>
        <button onClick={() => setMessage('')}>x</button>
        <span><img src={handleIcon()} alt="danger"/>{incomeMessage}</span>
      </section>
    </Container>
  );
}

export default Modal;

