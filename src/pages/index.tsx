import React from 'react'
import Head from 'next/head'
import { User, Lock, ArrowRight } from 'styled-icons/fa-solid'
import { Facebook, Google, Twitter } from 'styled-icons/boxicons-logos'
import { Container } from '../styles/pages/Home'
import vetorlogin from '../assets/logooben2.svg'
const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className="first-panel">
          <img src={vetorlogin} alt="" />
        </div>
        <div className="auth-panel">
          <div className="change-input">
            <p>Login</p>
            <div></div>
            <p>Cadastro</p>
          </div>
          <h1>Bem vindo de volta!</h1>
          <h2>Login</h2>
          <div className="input">
            <p>
              <User />
              Nome
            </p>
            <input type="text" />
          </div>
          <div className="input">
            <p>
              <Lock />
              Senha
            </p>
            <input type="password" />
          </div>
          <div className="logIn">
            <div className="social-media">
              <ul className="list-social-media">
                <a className="link-social-media" href="/#">
                  <li className="item-social-media">
                    <Facebook />
                  </li>
                </a>
                <a className="link-social-media" href="/#">
                  <li className="item-social-media">
                    <Twitter />
                  </li>
                </a>
                <a className="link-social-media" href="/#">
                  <li className="item-social-media">
                    <Google />
                  </li>
                </a>
              </ul>
            </div>
            <button>
              <ArrowRight />
            </button>
          </div>
          <p className="suggest">
            Ainda não é cadastrado? <a>Criar conta</a>
          </p>
          <p className="copyright">
            Copyright © All Rights Reserved - Intelligence
          </p>
        </div>
      </main>
    </Container>
  )
}
export default Home
