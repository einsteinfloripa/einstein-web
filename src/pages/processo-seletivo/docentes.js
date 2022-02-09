import Head from 'next/head'
import PSTeach from '../../components/PS/PSTeach'



export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | PS Docentes</title>
      </Head>
      <PSTeach />
    </>
  )
}