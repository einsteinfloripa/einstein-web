import dayjs from "dayjs";

const day = dayjs().locale("pt-br").format("DD/MM");
const member = [
	{
		name: "Fernando da Silva Rosa",
		subject: "Biologia A",
		role: "Professor",
		course: "Ecologia (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
		get imageUrl() {
			return this.isBirthday
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/docentes/biology/fernando.png";
		},
	},
	{
		name: "Beatriz Garcez",
		subject: "Biologia A",
		role: "Monitora",
		course: "Ciências Biológicas (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
		get imageUrl() {
			return this.isBirthday
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/docentes/biology/beatriz.png";
		},
	},
	{
		name: "Bruno Favero Schumacher",
		subject: "Biologia B",
		role: "Professor",
		course: "Ciências Biológicas (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
		get imageUrl() {
			return this.isBirthday
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/docentes/biology/bruno.png";
		},
	},
	{
		name: "Lucas Braga Albino",
		subject: "Biologia C",
		role: "Professor",
		course: "Farmácia (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
		get imageUrl() {
			return this.isBirthday
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/docentes/biology/lucas.png";
		},
	},
];

function Biology() {
	return (
		<div className='flex justify-center'>
			<ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
				{member.map((eisteiniano) => (
					<li key={eisteiniano.name} className='h-96 w-72 relative'>
						{eisteiniano.isBirthday ? (
							<div className='conteiner-cake'>
								<div className='cake'>
									<div className='candle'>
										<div className='fire'></div>
										<div className='fire'></div>
										<div className='fire'></div>
										<div className='fire'></div>
										<div className='fire'></div>
									</div>
									<div className='frosting'></div>
									<div className='bizcocho'></div>
								</div>
							</div>
						) : (
							<></>
						)}
						<div className='pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center'>
							<div>
								<img
									className={`object-cover shadow-lg rounded-lg h-64 w-64 ${
										eisteiniano.isBirthday ? "" : "grayscale"
									}`}
									src={eisteiniano.imageUrl}
									alt=''
								/>
							</div>

							<div className='space-y-1 xl:flex xl:items-center xl:justify-between'>
								<div className='font-medium text-sm text-center'>
									<h3 className='text-xl'>{eisteiniano.name}</h3>
									<p className='text-blue text-center'>
										{eisteiniano.role} de {eisteiniano.subject}
									</p>
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

export default Biology;
