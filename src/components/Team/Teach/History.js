const member = [
    {
        name: 'Maria Luiza Peres',
        subject: 'História A',
        role: 'Professora',
        course: 'História (UFSC)',
        imageUrl:
          '/images/membros/historia/marialuiza.png',
    },
    {
        name: 'Leandro Antonio Batista',
        subject: 'História A',
        role: 'Monitor',
        course: 'História (UDESC)',
        imageUrl:
          '/images/membros/historia/leandro.png',
    },
    {
      name: 'Pedro Luiz da Cunha',
      subject: 'História B',
      role: 'Professor',
      course: 'História (UFSC)',
      imageUrl:
        '/images/membros/historia/pedro.png',
    },
    {
        name: 'Liza Maria de Oliveira Parente',
        subject: 'História B',
        role: 'Monitora',
        course: 'Relações Internacionais (UFSC)',
        imageUrl:
          '/images/membros/historia/liza.png',
    },
    {
        name: 'Matheus Flores',
        subject: 'História C',
        role: 'Professor',
        course: 'História (UDESC)',
        imageUrl:
          '/images/membros/historia/matheus.png',
    },
    {
        name: 'Acácio Garcez Carneiro',
        subject: 'História C',
        role: 'Monitor',
        course: 'História (UFSC)',
        imageUrl:
          '/images/membros/historia/acacio.png',
    },
  ]

function History(){
 return (
    <div className="flex justify-center">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {member.map((eisteiniano) => (
            <li key={eisteiniano.name} className="h-96 w-72">
                <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center">
                    <div>
                        <img className="object-cover shadow-lg rounded-lg h-64 w-64" src={eisteiniano.imageUrl} alt="" />
                    </div>

                    <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-sm text-center">
                            <h3 className="text-xl">{eisteiniano.name}</h3>
                                <p className="text-blue-900 text-center">{eisteiniano.role} de {eisteiniano.subject}</p>
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
export default History