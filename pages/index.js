import Head from 'next/head'
import ParticleEffect from "../components/particles";

import NavBar from '../components/navbar';
import Landing from '../components/landing';
import Cubs from '../components/about';
import Tech from '../components/tech';
import MintMap from '../components/mintmap';
import Roadmap from '../components/roadmap';
import Tesla from '../components/tesla';
import Team from '../components/team';
import Faq from '../components/faq';
import Footer from '../components/footer';




export default function Home() {
  return (
    <> 
    <Head>

      <meta property="og:title" content="TYGR NFT"/>
      <meta property="og:image" content="https://tygrnft.com/logo/logo-180x180.png"/>
      <meta property = "og:description" content = "TYGR Cub Alliance is a deflationary NFT collection on the Ethereum blockchain preparing for lift off!" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="TYGR NFT"/>
      <meta name="twitter:description" content="TYGR Cub Alliance is a deflationary NFT collection on the Ethereum blockchain preparing for lift off!" />
      <meta property="twitter:image" content="https://tygrnft.com/logo/logo-512x512.jpg"/>
      <meta property="twitter:image:alt" content="TYGR NFT"/>


      <link rel="icon" type="image/png" sizes="32x32" href="/logo/logo-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/logo/logo-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/logo/logo-180x180.png" />



      <title>TYGR Cub Alliance NFT</title>
       <meta name="keywords" content="tygr"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

         <link
            href="/fonts/Lucidity-Condensed.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
           <link
            href="/fonts/Poppins-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            href="/fonts/Poppins-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
            />
             <link
            href="/fonts/DS-DIGI.ttf"
            as="font"
            type="font/ttf"
            crossOrigin=""
            />

    </Head>
    
    <ParticleEffect></ParticleEffect>

    <NavBar/>
    <div className="d-flex flex-column h-100" id='full'>
      <Landing/>
      <Cubs/> 
      <Tech/> {/* fix width */}    
      <Team/>
      <MintMap/>
      <Roadmap/>
      <Tesla/>
      <Faq/>
      
    </div>
    <Footer/>
  
    </>
  )
}

