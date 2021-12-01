const member = [
    {
        name: 'João Victor Soares Vieira',
        subject: 'Química A',
        role: 'Professor',
        course: 'Farmácia (UFSC)',
        imageUrl:
          '/images/membros/quimica/joao.png',
    },
    {
        name: 'Pedro Graupen Figueiredo',
        subject: 'Química A',
        role: 'Monitor',
        course: 'Engenharia Química (UFSC)',
        imageUrl:
          '/images/membros/quimica/pedro.png',
    },
    {
      name: 'Angelise Zanella',
      subject: 'Química C',
      role: 'Professora',
      course: 'Química (UFSC)',
      imageUrl:
        '/images/membros/quimica/angelise.png',
    },
    {
        name: 'Aurora Lorini Letsch',
        subject: 'Química C',
        role: 'Monitora',
        course: 'Engenharia Química (UFSC)',
        imageUrl:
          '/images/membros/quimica/aurora.png',
    },
  ]

function Chemistry(){
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
export default Chemistry