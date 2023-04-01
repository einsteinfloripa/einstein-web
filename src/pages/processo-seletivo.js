import Head from "next/head";
import { useContext } from "react";

import PSBanner from "../components/PS/PSBanner";
import PSOptions from "../components/PS/PSOptions";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Einstein Floripa | Processos Seletivos</title>
      </Head>
      <PSBanner />
      <PSOptions />
    </div>
  );
}
