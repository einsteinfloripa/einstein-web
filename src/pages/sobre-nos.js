import Head from 'next/head'

import AboutBanner from '../components/About/AboutBanner'
import AboutText2 from '../components/About/AboutText2'
import AboutVision from '../components/About/AboutVision'
import AboutValues from '../components/About/AboutValues'

export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | Sobre nós</title>
      </Head>
      <AboutBanner />
      <AboutText2 />
      <AboutVision />
      <AboutValues />
    </>
  )
}