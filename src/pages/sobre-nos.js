import Head from 'next/head'

import AboutBanner from '../components/AboutBanner'
import AboutText from '../components/AboutText'
import AboutVision from '../components/AboutVision'
import AboutValues from '../components/AboutValues'

export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | Sobre nós</title>
      </Head>
      <AboutBanner />
      <AboutText />
      <AboutVision />
      <AboutValues />
    </>
  )
}