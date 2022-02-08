const member = [
    {
        name: 'Ana Carolina G. Niehues',
        subject: 'Matemática A',
        role: 'Professora',
        course: 'Engenharia de Alimentos (UFSC)',
        imageUrl:
          '/images/membros/matematica/ana.jpg',
    },
    {
        name: 'Gabriel Duarte G. P. Orleans',
        subject: 'Matemática A',
        role: 'Monitor',
        course: 'Engenharia Elétrica (UFSC)',
        imageUrl:
          '/images/membros/matematica/gabriel.jpg',
    },
    {
      name: 'Matheus Bateli Neumann',
      subject: 'Matemática B',
      role: 'Professor',
      course: 'Engenharia Elétrica (UFSC)',
      imageUrl:
        '/images/membros/matematica/matheus.png',
    },
    {
        name: 'Angelo A. da Silveira Lara',
        subject: 'Matemática B',
        role: 'Monitor',
        course: 'Engenharia de Controle e Automação (UFSC)',
        imageUrl:
          '/images/membros/matematica/angelo.png',
    },
    {
        name: 'Guilherme Beck Lemos',
        subject: 'Matemática C',
        role: 'Professor',
        course: 'Engenharia Elétrica (UFSC)',
        imageUrl:
          '/images/membros/matematica/guilherme.png',
    },
    {
        name: 'Bruno Bernardes Aldegheri',
        subject: 'Matemática D',
        role: 'Professor',
        course: 'Engenharia Mecânica(UFSC)',
        imageUrl:
          '/images/membros/matematica/bruno.jpg',
    },
    {
        name: 'Pedro Lehn V. Guimarães',
        subject: 'Matemática D',
        role: 'Monitor',
        course: 'Engenharia Civil (UFSC)',
        imageUrl:
          '/images/membros/matematica/pedro.png',
    },
  ]

function Math(){
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
export default Math