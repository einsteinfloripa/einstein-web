const member = [
    {
        name: 'Djonys Dalmy de Oliveira',
        role: 'Diretor',
        course: 'Sistemas da Informação (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/djonys.png',
    },
    {
        name: 'Luiza Kataoka P. de Oliveira',
        role: 'Assessora',
        course: 'Engenharia de Materiais (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/luiza.png',
    },
    {
        name: 'Pedro Henrique Fernandes',
        role: 'Assessor',
        course: 'Engenharia Eletrônica (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/pedro.png',
    },
    {
        name: 'Eduardo Battisti Leites',
        role: 'Assessor',
        course: 'Engenharia de Produção Elétrica (UFSC)',
        imageUrl:
            'https://einsteinfloripa.com.br/images/eduardo.png',
    },
  ]

function Vale(){
 return (
    <div className="flex flex-col justify-center items-center">
        <p className="text-justify pb-20 w-9/12">
            O Vale do Silício é responsável por melhorar a experiência Einsteiniana por meio da Tecnologia e Inovação.  O departamento utiliza linguagens como Python e JavaScript para o desenvolvimento de aplicações Web, correção de simulados e análise de dados. A experiência do Vale garante uma diversidade de oportunidades aos seus membros, que trabalham com múltiplos aspectos da tecnologia, desde desenvolvimento web, até fundamentos de ciência de dados.
        </p>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {member.map((eisteiniano) => (
            <li key={eisteiniano.name} className="h-96 w-72">
                <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center">
                    <div>
                        <img className="object-cover shadow-lg rounded-lg h-64 w-64 grayscale" src={eisteiniano.imageUrl} alt="" />
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
export default Vale