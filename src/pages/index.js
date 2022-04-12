import Head from "next/head";
import { useContext } from "react";

import BirthdayContext from "./Contexts/BithdayContext";
import HomeBanner from "../components/Home/HomeBanner";
import HomeText from "../components/Home/HomeText";
import HomeNumbers from "../components/Home/HomeNumbers";
import HomeDonate from "../components/Home/HomeDonate";
import HomePartners from "../components/Home/HomePartners";
import BannerBithday from "./Birthday/Banner";
import member from "./Birthday/Banner/dadosBith";

export default function Home() {
	const { isBirthday, setIsBirthday, setBirthPerson } = useContext(BirthdayContext);

	member.forEach((eisteiniano) => {
		if (eisteiniano.isBirthday) {
			const dividirNome = eisteiniano.name.split(" ");
			setIsBirthday(true);
			setBirthPerson(dividirNome[0]);
		}
	});
	return (
		<>
			<Head>
				<title>Einstein Floripa</title>
			</Head>
			{isBirthday ? <BannerBithday /> : <></>}
			<HomeBanner />
			<HomeText />
			<HomeNumbers />
			<HomeDonate />
			<HomePartners />
		</>
	);
}
