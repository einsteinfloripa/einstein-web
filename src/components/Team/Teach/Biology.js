const member = [
    {
        name: 'Pedro Lobato Indalêncio',
        subject: 'Biologia A',
        role: 'Professor',
        course: 'Ciências Biológicas (UFSC)',
        imageUrl:
          '/images/membros/biologia/pedro.png',
    },
    {
        name: 'Haniela Fernandes Martini',
        subject: 'Biologia A',
        role: 'Monitora',
        course: '(UFSC)',
        imageUrl:
          '/images/membros/biologia/haniela.png',
    },
    {
      name: 'Luana Azevedo Aime',
      subject: 'Biologia B',
      role: 'Professora',
      course: 'Ciências Biológicas (UFSC)',
      imageUrl:
        '/images/membros/biologia/luana.png',
    },
    {
        name: 'Marcelo Herinque Agostinho',
        subject: 'Biologia C',
        role: 'Professor',
        course: 'Medicina (UFSC)',
        imageUrl:
          '/images/membros/biologia/marcelo.png',
    },
  ]

function Biology(){
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
export default Biology