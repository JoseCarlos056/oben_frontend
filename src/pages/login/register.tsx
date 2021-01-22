import React, { Dispatch, SetStateAction } from 'react'
import { User, Lock, ArrowRight, MailBulk } from 'styled-icons/fa-solid'
import { Facebook, Google, Twitter } from 'styled-icons/boxicons-logos'
interface IProps {
  setLogin: Dispatch<SetStateAction<boolean>>
}
const Register: React.FC<IProps> = props => {
  return (
    <>
      {' '}
      <h1>Bem vindo!</h1>
      <p>
        Digite o seu email e senha para efetuar o cadastro e suba seus arquivos
        com total segurança.
      </p>
      <h2>Cadastro</h2>
      <div className="input">
        <i>
          <User />
        </i>
        <input type="text" placeholder="Nome" />
      </div>
      <div className="input">
        <i>
          <MailBulk />
        </i>
        <input type="text" placeholder="Email" />
      </div>
      <div className="input">
        <i>
          <Lock />
        </i>
        <input type="password" placeholder="Senha" />
      </div>
      <div className="input">
        <i>
          <Lock />
        </i>
        <input type="password" placeholder="Senha de Emergência" />
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
        Já possui uma conta?{' '}
        <a
          onClick={() => {
            props.setLogin(true)
          }}
        >
          Fazer login.
        </a>
      </p>
    </>
  )
}
export default Register
