import Head from "next/head";
import { useContext } from "react";

import Donation from "../components/Donation/Donation";
import BirthdayContext from "../components/Contexts/BithdayContext";
import BannerBithday from "../components/Banner";
import member from "../components/Banner/dadosBith";

export default function Apoie() {
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
			<main>
				<Head>
					<title>Einstein Floripa | Apoie</title>
				</Head>
				{isBirthday ? <BannerBithday /> : <></>}
				<Donation />
			</main>
		</div>
	);
}
