import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Masthead from '../components/masthead'
import AboutUs from '../components/aboutUs'
import Skills from '../components/skills'
import Works from '../components/works'
import TrustedBy from '../components/trustedBy'
import ContactUs from '../components/contactUs'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>The DTLA BookClub</title>
        <meta name="description" content="The Downtown Los Angeles BookClub currated specifically for creatives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     <Masthead/>
     <AboutUs />
     <Skills />
     <Works />
     <TrustedBy />
     <ContactUs />
     <Footer />
    </div>
  )
}

export default Home
