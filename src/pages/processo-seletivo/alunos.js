import Head from 'next/head'
import PSStudents from '../../components/PS/PSStudents'



export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa | PS Alunos</title>
      </Head>
      <PSStudents />
    </>
  )
}