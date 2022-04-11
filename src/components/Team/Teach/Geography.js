const member = [
    {
      name: 'Paulo Henrique Rosa',
      subject: 'Geografia B',
      role: 'Professor',
      course: 'Geografia (UFSC)',
      imageUrl:
        'https://einsteinfloripa.com.br/images/docentes/geography/paulo.png',
    },
    {
        name: 'Mateus Homem de Mello',
        subject: 'Geografia B',
        role: 'Monitor',
        course: 'Geografia (UFSC)',
        imageUrl:
          'https://einsteinfloripa.com.br/images/docentes/geography/matheus.png',
    },
  ]

function Geography(){
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
export default Geography