import React, { useState } from 'react';
import { useLazyQuery  } from '@apollo/client'

import { LOGIN } from '../../api/queries'

//components
import Modal from '../Modal'
import Inspection from '../Inspection'

//Styles
import { Container, Button } from './styles';

//imgs
import wallpaper from '../../assets/wallpaper.jpg'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import OffButton from '../../assets/inspection.png'

const Login: React.FC = () => {
  //state
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [empty, setEmpty] = useState<boolean>(false)
  const [inspection, setInspection] = useState<boolean>(false)
 //graphqlHooks
  const [handleLogin, { loading, data, error}] = useLazyQuery(LOGIN,
    { variables: { email: email, password: password}})

  if(loading) {
    //Faz nada
    console.log("LOADING")
  } 

  if(error) {
    console.log(error)
  }
  
  if(data) {
    //Faz nada
  }

  return (
    <Container>
      <button className="offButton" onClick={() => {
          setInspection(true)     
      }}>
        <img src={OffButton} alt="inspection"/>
      </button>

      {inspection && <Inspection setInspection={setInspection}/>}

      {error?.message && <Modal type="notification" message={error.message} icon="danger"/>}
      {data && <Modal type="notification" message="Log in with success" icon="success"/>}

      <img src={wallpaper} alt="login background" />
      <section className="login">
        <h2>Login to continue</h2>

        {empty && !email && <span className="empty">Please fill your e-mail</span>}
        <input name="email" onChange={(e) => setEmail(e.target.value)} type="text" />

        {empty && !password && <span className="empty" >Please fill your password</span>}
        <input name="password" onChange={(e) => setPassword(e.target.value)} type="password" />

        <div className="login_forgotPassword">
          <label>
            <input type="checkbox" />
            <span>remember me</span>
          </label>
          <a href="http://" onClick={event => {
            event.preventDefault()
            alert("Não Faz nada")
          }}>Forgot Password?</a>
        </div>

        <Button onClick={() => {
            if(!email || !password) {
              setEmpty(true)
              return
            }
            handleLogin()
        }}>Login</Button>

        <span className="login_signLabel">or signup using</span>
        <div className="login_signIcons">
          <a href="http://twitter.com.br" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
          <a href="http://twitter.com.br" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" /></a>
        </div>
      </section>
    </Container>
  );
}

export default Login;