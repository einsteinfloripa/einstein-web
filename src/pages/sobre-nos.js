import Head from "next/head";
import { useContext } from "react";

import BirthdayContext from "../components/Contexts/BithdayContext";
import AboutBanner from "../components/About/AboutBanner";
import AboutText from "../components/About/AboutText";
import AboutVision from "../components/About/AboutVision";
import AboutValues from "../components/About/AboutValues";
import BannerBithday from "../components/Banner";
import member from "../components/Banner/dadosBith";

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
		<div className="overflow-x-hidden">
			<Head>
				<title>Einstein Floripa | Sobre nós</title>
			</Head>
			{isBirthday ? <BannerBithday /> : <></>}
			<AboutBanner />
			<AboutText />
			<AboutVision />
			<AboutValues />
		</div>
	);
}
