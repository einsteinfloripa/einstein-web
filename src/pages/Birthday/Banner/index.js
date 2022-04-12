import { useContext, useLayoutEffect } from "react";

import BirthdayContext from "../../../pages/Contexts/BithdayContext";
import fireworks from "./fireworks";

function BannerBithday() {
	const { birthPerson } = useContext(BirthdayContext);
	useLayoutEffect(() => {
		fireworks();
	}, []);
	return (
		<>
			<div className='conteiner'>
				<h1 className='text'>{`Feliz Aniversário, ${birthPerson}!`}</h1>
				<canvas id='birthday'></canvas>
			</div>
		</>
	);
}

export default BannerBithday;
