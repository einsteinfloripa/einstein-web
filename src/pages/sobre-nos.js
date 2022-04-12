import Head from 'next/head'
import { useContext } from "react";

import BirthdayContext from "./Contexts/BithdayContext";
import AboutBanner from '../components/About/AboutBanner'
import AboutText from '../components/About/AboutText'
import AboutVision from '../components/About/AboutVision'
import AboutValues from '../components/About/AboutValues'
import BannerBithday from './Birthday/Banner/'

export default function Home() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);
  return (
    <>
      <Head>
        <title>Einstein Floripa | Sobre nós</title>
      </Head>
      {isBirthday ? <BannerBithday /> : <></>}
      <AboutBanner />
      <AboutText />
      <AboutVision />
      <AboutValues />
    </>
  )
}