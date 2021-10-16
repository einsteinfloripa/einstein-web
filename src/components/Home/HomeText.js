function HomeText() {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-50" />
                </div>
                <div className="relative">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pt-8 lg:pb-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div className="flex flex-col justify-center">
                            <img
                                className="w-40 self-center"
                                src="/images/logoEinstein.png"
                                alt="logo Einstein"
                            />
                            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 text-center">
                                Prazer somos o Einstein Floripa!
                            </h2>
                        </div>
                        <div>
                            <div className="flex justify-end">
                                <img
                                    className="absolute w-full inset-y-32 left-4 "
                                    src="/images/Somos-o-Einstein-Floripa.png"
                                    alt="aulão Einstein"
                                />
                                <div className="bg-white rounded-xl h-full w-5/6 flex my-12 justify-end">
                                    <div className="w-4/6 py-10 pr-8 pl-24 justify-betweenflex flex-col ">
                                        <p className="mt-4 text-2xl text-blue-900 text-right">
                                        Somos constituídos de uma equipe repleta de
                                        <strong> universitários determinados</strong>, imersos numa experiência
                                        de constante aprendizado, ampliando suas
                                        <strong> possibilidades pessoais e profissionais</strong>.
                                        </p>
                                        <p className="mt-4 text-2xl text-blue-900 text-right">
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
        </div>
    )
}

export default HomeText