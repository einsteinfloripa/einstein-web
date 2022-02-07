import Head from 'next/head'
import PSOrg from '../../components/PS/PSOrg'



export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | PS Organizadores</title>
      </Head>
      <PSOrg />
    </>
  )
}