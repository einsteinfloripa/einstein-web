const member = [
	{
		name: "Diana Hartmann",
		subject: "Matemática A",
		role: "Professora",
    course: "Engenharia de Alimentos (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/org/diana.png",
	},
	{
		name: "Marcelo Oliveira de Souza",
		subject: "Matemática A",
		role: "Monitor",
		course: "Engenharia de Alimentos (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/docentes/math/marcelo.png",
	},
	{
		name: "Pedro Pordeus Santos",
		subject: "Matemática B",
		role: "Professor",
		course: "Engenharia Eletrônica (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/docentes/math/pordeus.png",
	},
	{
		name: "André Pietrovski",
		subject: "Matemática B",
		role: "Monitor",
		course: "Engenharia Elétrica (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/docentes/math/andre.png",
	},
	{
		name: "Guilherme Beck Lemos",
		subject: "Matemática C",
		role: "Professor",
		course: "Engenharia Elétrica (UFSC)",
		imageUrl: "https://einsteinfloripa.com.br/images/docentes/math/guilherme.png",
	},
];

function Math() {
	return (
		<div className='flex justify-center'>
			<ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
				{member.map((eisteiniano) => (
					<li key={eisteiniano.name} className='h-96 w-72'>
						<div className='pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center'>
							<div>
								<img
									className='object-cover shadow-lg rounded-lg h-64 w-64'
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
export default Math;
