const member = [
    {
        name: 'Felipe Wöhlke Lopes',
        role: 'Diretor',
        course: 'Engenharia Mecânica (UFSC)',
        imageUrl:
            '/images/membros/hogwarts/felipe.png',
    },
    {
        name: 'Luisa Kazumi Maestrelli',
        role: 'Assessora',
        course: 'Engenharia de Produção Elétrica (UFSC)',
        imageUrl:
            '/images/membros/hogwarts/luisa.png',
    },
    {
        name: 'Maria Luiza Pierri',
        role: 'Assessora',
        course: 'Relações Internacionais (UFSC)',
        imageUrl:
            '/images/membros/hogwarts/mariaLuiza.png',
    },
    {
        name: 'Maria Eduarda Gonçalves',
        role: 'Assessora',
        course: 'Engenharia Sanitária e Ambiental (UFSC)',
        imageUrl:
            '/images/membros/hogwarts/mariaEduarda.png',
    },
  ]

function Hogwarts(){
 return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-justify pb-20 w-9/12">
        A qualidade de ensino que o Einstein proporciona é fruto do trabalho dos Bruxos que trabalham em Hogwarts, responsáveis desde a organização do calendário anual, atividades extraclasse de ensino, dinâmica de aulas, até gerenciamento da equipe de docentes. Através de diversos indicadores das atividades que medem a qualidade, buscamos analisá-los e trabalhar em melhorias para que possamos proporcionar a melhor experiência possível para os alunos!
        </p>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {member.map((eisteiniano) => (
            <li key={eisteiniano.name} className="h-96 w-72">
                <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center">
                    <div>
                        <img className="object-cover shadow-lg rounded-lg h-64" src={eisteiniano.imageUrl} alt="" />
                    </div>

                    <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                            <div className="font-medium text-sm text-center">
                            <h3 className="text-xl">{eisteiniano.name}</h3>
                                <p className="text-blue-900 text-center">{eisteiniano.role}</p>
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
export default Hogwarts