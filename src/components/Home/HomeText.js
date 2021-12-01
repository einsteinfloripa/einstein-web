function HomeText() {
    return (
        <div className="relative">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-50" />
                </div>
                <div className="relative">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:pt-8 lg:pb-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div className="hidden sm:flex flex-col justify-center">
                            <img
                                className="w-40 self-center"
                                src="/images/logoEinstein.png"
                                alt="logo Einstein"
                            />
                            <h2 className="text-3xl font-extrabold tracking-tight text-blue-900 text-center">
                                Prazer, somos o Einstein Floripa!
                            </h2>
                        </div>
                        <div>
                            <div className="flex justify-end flex-col lg:flex-row">
                                <img
                                    className="hidden lg:flex lg:absolute w-full lg:inset-y-32 lg:left-4"
                                    src="/images/Somos-o-Einstein-Floripa.png"
                                    alt="aulão Einstein"
                                />
                                <div className="bg-white rounded-xl lg:h-full lg:w-5/6 flex my-12 lg:justify-end">
                                    <div className="lg:w-4/6 lg:py-10 lg:pr-8 lg:pl-24 px-8 py-8 justify-between flex flex-col ">
                                        <p className="lg:mt-4 lg:text-2xl text-blue-900 lg:text-right">
                                        Somos constituídos de uma equipe repleta de
                                        <strong> universitários determinados</strong>, imersos numa experiência
                                        de constante aprendizado, ampliando suas
                                        <strong> possibilidades pessoais e profissionais</strong>.
                                        </p>
                                        <p className="lg:mt-4 lg:text-2xl text-blue-900 lg:text-right">
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