import Head from 'next/head'
import { useContext } from "react";

import BirthdayContext from "./Contexts/BithdayContext";
import PSBanner from '../components/PS/PSBanner'
import PSOptions from '../components/PS/PSOptions'
import BannerBithday from './Birthday/Banner'



export default function Home() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);
  return (
    <>
      <Head>
        <title>Einstein Floripa | Processos Seletivos</title>
      </Head>
      {isBirthday ? <BannerBithday /> : <></>}
      <PSBanner />
      <PSOptions />
    </>
  )
}