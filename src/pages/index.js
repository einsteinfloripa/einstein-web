import Head from "next/head";
import { useContext } from "react";

import BirthdayContext from "../components/Contexts/BithdayContext";
import HomeBanner from "../components/Home/HomeBanner";
import HomeText from "../components/Home/HomeText";
import HomeNumbers from "../components/Home/HomeNumbers";
import HomeDonate from "../components/Home/HomeDonate";
import HomePartners from "../components/Home/HomePartners";
import BannerBithday from "../components/Banner";
import member from "../components/Banner/dadosBith";

export default function Home() {
  const { isBirthday, setIsBirthday, setBirthPerson } =
    useContext(BirthdayContext);

  // Funcionalidade de aniversário suspensa por enquanto
  // member.forEach((eisteiniano) => {
  // 	if (eisteiniano.isBirthday) {
  // 		const dividirNome = eisteiniano.name.split(" ");
  // 		setIsBirthday(true);
  // 		setBirthPerson(dividirNome[0]);
  // 	}
  // });
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Einstein Floripa</title>
      </Head>
      {isBirthday ? <BannerBithday /> : <></>}
      <HomeBanner />
      <HomeText />
      <HomeNumbers />
      <HomeDonate />
      <HomePartners />
    </div>
  );
}
