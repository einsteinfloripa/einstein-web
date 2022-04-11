import dayjs from "dayjs";

const day = dayjs().locale("pt-br").format("DD/MM");
const aniversarios = ["06/04", "07/04", "08/04", "11/04", "09/04"];

const member = [
	{
		name: "Vicente Cassol Silva ",
		role: "Presidente",
		course: "Engenharia de Produção Mecânica (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/org/vicente.png",
	},
	{
		name: "Murillo Stein",
		role: "Diretor de Projetos/Hogwarts",
		course: "Engenharia Mecânica (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/org/murillo.png",
	},
	{
		name: "Laísa Ágathe Dacroce",
		role: "Diretora",
		course: "Relações Internacionais (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/org/laisa.png",
	},
	{
		name: "Karim Cruz",
		role: "Diretora de Times Square/Embaixada",
		course: "Farmácia (UFSC)",
		imageUrl:
			day === aniversarios[3]
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/org/karim.png",
	},
	{
		name: "Djonys Dalmy de Oliveira",
		role: "Diretor do Vale do Silício",
		course: "Sistemas da Informação (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/org/djonys.png",
	},
];

function Capital() {
	return (
		<div className='flex flex-col justify-center items-center'>
			<p className='text-justify pb-20 w-9/12'>
				A Capital, também conhecida como Diretoria Administrativa, é responsável
				por garantir o funcionamento e o crescimento do cursinho, por definir os
				direcionamentos estratégicos a cada ano e promover a disseminação dos
				valores Einsteinianos. Constituída por todos os diretores, um de cada
				departamento, e pelo(a) presidente, a Capital representa o Einstein
				Floripa interna e externamente, e por isso, também é responsável pelas
				decisões em última instância dentro do cursinho. As discussões e
				decisões são realizadas em reuniões semanais, que são abertas a todos os
				voluntários, organizadores, professores e monitores. É na Capital também
				que é decidido o Calendário Einsteiniano, com datas de processos
				seletivos, recessos escolares e outros eventos.
			</p>
			<ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
				{member.map((eisteiniano, index) => (
					<li key={eisteiniano.name} className='h-96 w-72'>
						<div className='pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center'>
							<div>
								<img
									className={`object-cover shadow-lg rounded-lg h-64 w-64 ${
										day === aniversarios[index] ? "" : "grayscale"
									}`}
									src={eisteiniano.imageUrl}
									alt=''
								/>
							</div>

							<div className='space-y-1 xl:flex xl:items-center xl:justify-between'>
								<div className='font-medium text-sm text-center'>
									<h3 className='text-xl'>{eisteiniano.name}</h3>
									<p className='text-blue text-center'>{eisteiniano.role}</p>
									<p className='text-center'>{eisteiniano.course}</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
export default Capital;
