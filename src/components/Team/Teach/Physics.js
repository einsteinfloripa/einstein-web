const member = [
    {
        name: 'Ana Júlia Antunes Souza',
        subject: 'Física A',
        role: 'Professora',
        course: 'Engenharia Química (UFSC)',
        imageUrl:
          '/images/membros/fisica/ana.png',
    },
    {
        name: 'Ana Clara Rinaldi',
        subject: 'Física A',
        role: 'Monitora',
        course: 'Engenharia Mecânica (UFSC)',
        imageUrl:
          '/images/membros/fisica/anar.png',
    },
    {
      name: 'Luiz Cláudio Macedo Januário',
      subject: 'Física B',
      role: 'Professor',
      course: 'Engenharia Mecânica (UFSC)',
      imageUrl:
        '/images/membros/fisica/luiz.png',
    },
    {
        name: 'Gabriel Viana',
        subject: 'Física B',
        role: 'Monitor',
        course: 'Física (UFSC)',
        imageUrl:
          '/images/membros/fisica/gabriel.png',
    },
    {
        name: 'Jeferson Cansi Pedroso',
        subject: 'Física C',
        role: 'Professor',
        course: '(UFSC)',
        imageUrl:
          '/images/membros/fisica/marcelo.png',
    },
    {
        name: 'Vitor Wahlheim Gagliardi',
        subject: 'Física C',
        role: 'Monitor',
        course: 'Física (UFSC)',
        imageUrl:
          '/images/membros/fisica/vitor.png',
    },
  ]

function Physics(){
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
export default Physics