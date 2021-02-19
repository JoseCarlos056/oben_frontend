import React, { Dispatch, SetStateAction, useState } from 'react'
import Router from 'next/router'
import { User, Lock, ArrowRight } from 'styled-icons/fa-solid'
import { Facebook, Google, Twitter } from 'styled-icons/boxicons-logos'
import api from '../../services/axios'

interface IProps {
  setLogin: Dispatch<SetStateAction<boolean>>
}

const Login: React.FC<IProps> = props => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disable, setDisable] = useState<boolean>(false)
  const signIn = () => {
    if (!email || !password) {
      return window.alert('Preencha todos os campos !')
    }
    setDisable(true)
    api
      .post('/auth', {
        email,
        password
      })
      .then(response => {
        console.log(response.data)
        const { user, token } = response.data
        localStorage.user = JSON.stringify(user)
        localStorage.token = token
        Router.push('/home')
      })
      .catch(e => {
        console.log(e)
        window.alert('Ocorreu um erro.')
        return setDisable(false)
      })
  }
  return (
    <>
      <h2>Login</h2>
      <div className="input">
        <i>
          <User />
        </i>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => {
            setEmail(e.currentTarget.value)
          }}
        />
      </div>
      <div className="input">
        <i>
          <Lock />
        </i>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => {
            setPassword(e.currentTarget.value)
          }}
        />
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
        <button onClick={signIn} disabled={disable}>
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
