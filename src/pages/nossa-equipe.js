import Head from "next/head";
import { useContext } from "react";

import BirthdayContext from "../components/Contexts/BithdayContext";
import TeamTab from "../components/Team/TeamTab";
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
				<title>Einstein Floripa | Nossa Equipe</title>
			</Head>
			{isBirthday ? <BannerBithday /> : <></>}
			<TeamTab />
		</div>
	);
}
