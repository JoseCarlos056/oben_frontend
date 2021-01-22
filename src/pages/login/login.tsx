import React, { Dispatch, SetStateAction } from 'react'
import { User, Lock, ArrowRight } from 'styled-icons/fa-solid'
import { Facebook, Google, Twitter } from 'styled-icons/boxicons-logos'

interface IProps {
  setLogin: Dispatch<SetStateAction<boolean>>
}

const Login: React.FC<IProps> = props => {
  return (
    <>
      {' '}
      <h1>Bem vindo de volta!</h1>
      <p>
        Digite o seu email e senha cadastrados e continue upando seus arquivos
        com total segurança.
      </p>
      <h2>Login</h2>
      <div className="input">
        <i>
          <User />
        </i>
        <input type="text" placeholder="Nome" />
      </div>
      <div className="input">
        <i>
          <Lock />
        </i>
        <input type="password" placeholder="Senha" />
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
        Ainda não é cadastrado?{' '}
        <a
          onClick={() => {
            props.setLogin(false)
          }}
        >
          Criar conta
        </a>
      </p>
    </>
  )
}
export default Login
