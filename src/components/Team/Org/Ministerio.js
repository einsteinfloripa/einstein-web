const member = [
    {
        name: 'Laísa Ágathe Dacroce',
        role: 'Diretora',
        course: 'Relações Internacionais (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/org/laisa.png',
    },
    {
        name: 'Pietro Braga Figueiredo',
        role: 'Assessor',
        course: 'Economia (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/org/pietro.png',
    },
    {
        name: "Gabriela Sant'Anna Virtuoso",
        role: 'Assessora',
        course: 'Direito (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/org/gabriela.png',
    },
    {
        name: "Camila Zambom",
        role: 'Assessora',
        course: 'Relações Internacionais (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/org/camila.png',
    }
  ]

function Ministerio(){
 return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-justify pb-20 w-9/12">
            O Ministério atua na área jurídica e financeira para garantir que o projeto continue impactando mais vidas, com maturidade e responsabilidade. Os ministros gerem os recursos financeiros e patrimoniais, são responsáveis pelo planejamento orçamentário, aprovando e controlando entradas e saídas, e difundindo sua importância entre as demais áreas. Também elaboram e redigem contratos, e possibilitam que o Einstein esteja sempre alinhado com a legislação vigente, permitindo uma maior segurança jurídica.
        </p>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {member.map((eisteiniano) => (
            <li key={eisteiniano.name} className="h-96 w-72">
                <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center">
                    <div>
                        <img className="object-cover shadow-lg rounded-lg h-64 grayscale" src={eisteiniano.imageUrl} alt="" />
                    </div>

                    <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-sm text-center">
                            <h3 className="text-xl">{eisteiniano.name}</h3>
                                <p className="text-blue text-center">{eisteiniano.role}</p>
                                <p className="text-center">{eisteiniano.course}</p>
                        </div>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    </div>
 )
}
export default Ministerio