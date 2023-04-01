import Head from "next/head";

import AboutBanner from "../components/About/AboutBanner";
import AboutText from "../components/About/AboutText";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Einstein Floripa | Sobre nós</title>
      </Head>
      <AboutBanner />
      <AboutText />
      <AboutVision />
      <AboutValues />
    </div>
  );
}
