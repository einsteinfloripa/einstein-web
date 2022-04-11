const member = [
    {
        name: 'Leandro Antonio Batista',
        subject: 'História A',
        role: 'Professor',
        course: 'História (UDESC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/history/leandro.png',
    },
    {
        name: 'Éric Gabriel Kundlatsch',
        subject: 'História A',
        role: 'Monitor',
        course: 'História (UFSC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/history/eric.png',
    },
    {
      name: 'Liza Maria de Oliveira Parente',
      subject: 'História B',
      role: 'Professora',
      course: 'Relações Internacionais (UFSC)',
      imageUrl:
        'https://einsteinfloripa.com.br/images/docentes/history/liza.png',
    },
    {
        name: 'Lucca de Aguiar',
        subject: 'História B',
        role: 'Monitor',
        course: 'História (UFSC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/history/lucca.png',
    },
    {
        name: 'Acácio Garcez Carneiro',
        subject: 'História C',
        role: 'Professor',
        course: 'História (UFSC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/history/acacio.png',
    },
    {
        name: 'Marina de Oliveira Bortolatto',
        subject: 'História C',
        role: 'Monitora',
        course: 'História (UFSC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/history/marina.png',
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
                                <p className="text-blue text-center">{eisteiniano.role} de {eisteiniano.subject}</p>
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