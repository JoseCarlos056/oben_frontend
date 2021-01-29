import React from 'react'
import Head from 'next/head'
import rocktseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Oben - Página Inicial</title>

      </Head>
      <header>
        <img src={rocktseatLogo} alt="oben logo" />
        <a onClick={()=>{
          window.location.href = '/'
        }}>Sair</a>
      </header>
      <main>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
       <div></div>
      </main>
    </Container>
  )
}
export default Home
