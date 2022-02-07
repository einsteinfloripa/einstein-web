import Head from 'next/head'
import PSOTeach from '../../components/PS/PSTeach'



export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | PS Docentes</title>
      </Head>
      <PSOTeach />
    </>
  )
}