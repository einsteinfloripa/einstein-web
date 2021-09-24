function HomeText() {
    return (
        <div className="relative pt-16 pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-full bg-hero-pattern" />
        <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            </div>
            </div>
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
                <div className="bg-purple-800 rounded-xl h-full w-full flex justify-center">
                <div className="w-5/6 py-10">
                    <h2 className="text-3xl font-extrabold tracking-tight text-yellow">
                    Prazer somos o Einstein Floripa!
                    </h2>
                    <p className="mt-4 text-lg text-white">
                    Somos constituídos de uma equipe repleta de
                    universitários determinados, imersos numa experiência
                    de constante aprendizado, ampliando suas
                    possibilidades pessoais e profissionais.
                    </p>
                    <p className="mt-4 text-lg text-white">
                    Desse modo, voltamos nossos esforços para dar oportunidade aos 
                    <strong> alunos de baixa renda</strong> da região da Grande Florianópolis, 
                    fornecendo melhores oportunidades de<strong> acesso ao ensino superior de qualidade</strong> .
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default HomeText