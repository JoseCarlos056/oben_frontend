import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import vetorlogin from '../assets/logooben2.svg'
import Login from './login/login'
import Register from './login/register'
const Home: React.FC = () => {
  const [login, setLogin] = useState(true)
  return (
    <Container>
      <Head>
        <title>Oben - Login</title>
      </Head>

      <main>
        <div className="first-panel">
          <img src={vetorlogin} alt="" />
        </div>
        <div className="auth-panel">
          <div className="login-container">
            <div className="change-input">
              <h3>Login</h3>
              <div></div>
              <h3>Cadastro</h3>
            </div>
            {login ? (
              <Login setLogin={setLogin} />
                ) : (
              <Register setLogin={setLogin} />
                )}
          </div>
          <p className="copyright">
            Copyright © All Rights Reserved - Intelligence
          </p>
        </div>
      </main>
    </Container>
  )
}
export default Home
