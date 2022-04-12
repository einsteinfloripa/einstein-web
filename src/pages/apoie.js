import Head from "next/head";
import { useContext } from "react";

import Donation from "../components/Donation/Donation";
import BirthdayContext from "./Contexts/BithdayContext";
import BannerBithday from "./Birthday/Banner";

export default function Apoie() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);
  return (
    <>
      <main>
        <Head>
          <title>Einstein Floripa | Apoie</title>
        </Head>
        {isBirthday ? <BannerBithday /> : <></>}
        <Donation />
      </main>
    </>
  );
}
