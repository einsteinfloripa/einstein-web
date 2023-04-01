import Head from "next/head";

import Donation from "../components/Donation/Donation";

export default function Apoie() {
  return (
    <div className='overflow-x-hidden'>
      <main>
        <Head>
          <title>Einstein Floripa | Apoie</title>
        </Head>
        <Donation />
      </main>
    </div>
  );
}
