import React from 'react'
import Head from 'next/head'
import rocktseatLogo from '../assets/rocketseat.svg'
import img from '../assets/img (1).jpeg'
import img2 from '../assets/img (2).jpeg'
import img3 from '../assets/img (3).jpeg'
import img4 from '../assets/img (4).jpeg'
import img5 from '../assets/img (5).jpeg'
import img6 from '../assets/img (6).jpeg'
import img7 from '../assets/img (7).jpeg'
import img8 from '../assets/img (8).jpeg'
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
        <figure>
        <img src={img} alt="oben logo" />
        </figure>
        <figure>
        <img src={img2} alt="oben logo" />
        </figure>
        <figure>
        <img src={img3} alt="oben logo" />
        </figure>
        <figure>
        <img src={img4} alt="oben logo" />
        </figure>
        <figure>
        <img src={img5} alt="oben logo" />
        </figure>
        <figure>
        <img src={img6} alt="oben logo" />
        </figure>
        <figure>
        <img src={img7} alt="oben logo" />
        </figure>
        <figure>
        <img src={img8} alt="oben logo" />
        </figure>
      
      </main>
    </Container>
  )
}
export default Home
