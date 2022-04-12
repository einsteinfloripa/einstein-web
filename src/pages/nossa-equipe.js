import Head from 'next/head'
import { useContext } from "react";

import BirthdayContext from "./Contexts/BithdayContext";
import TeamTab from '../components/Team/TeamTab'
import BannerBithday from './Birthday/Banner'


export default function Home() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);
  return (
    <>
      <Head>
        <title>Einstein Floripa | Nossa Equipe</title>
      </Head>
      {isBirthday ? <BannerBithday /> : <></>}
      <TeamTab />
    </>
  )
}
