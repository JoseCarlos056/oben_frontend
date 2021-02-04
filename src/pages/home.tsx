import React from 'react'
import Head from 'next/head'
import rocktseatLogo from '../assets/rocketseat.svg'
import img from '../assets/img.jpg'
import img2 from '../assets/img.jpg'
import img3 from '../assets/img2.jpg'
import img4 from '../assets/img.jpg'
import img5 from '../assets/rocketseat.svg'
import img6 from '../assets/img.jpg'
import img7 from '../assets/img3.jpg'
import img8 from '../assets/img.jpg'
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
        <div className="masonry">
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
        </div>
        
      
      </main>
    </Container>
  )
}
export default Home
