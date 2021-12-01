import Head from 'next/head'

import TeamTab from '../components/Team/TeamTab'


export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | Resultados</title>
      </Head>
      <TeamTab />
    </>
  )
}