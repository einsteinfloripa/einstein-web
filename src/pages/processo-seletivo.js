import Head from 'next/head'
import PSBanner from '../components/PS/PSBanner'
import PSOptions from '../components/PS/PSOptions'



export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | Processos Seletivos</title>
      </Head>
      <PSBanner />
      <PSOptions />
    </>
  )
}