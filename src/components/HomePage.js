import Link from 'next/link'

const results = {
  year: "2020",
  aprovados:"50",
  horasAula:"1260",
  vidasTransformadas:"200",
  horasTreinamento:"50",
  horasTrabalhadas:"45k",
}

function HomePage() {
    return (
      <main>
            <div className="relative">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue" />
                    <div className="absolute inset-x-0 bottom-0">
                      <div className="grid justify-center">
                        <img
                            className="lg:w-full md:w-96 w-80"
                            src="/images/banner_home.png"
                            alt="docente e aluno"
                          />
                      </div>
                    </div>
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center font-extrabold tracking-tight">
                      <span className="block text-yellow lg:text-6xl text-4xl">De Aluno para Aluno</span>
                      <span className="block text-yellow lg:text-5xl text-2xl">transformando a história</span>
                    </h1>
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <div className="flex flex-row justify-between">
                        <Link href="/">
                        <button className="lg:text-white md:text-white sm:text-white text-purple-800 bg-white lg:bg-transparent md:bg-transparent sm:bg-transparent border-l-4 lg:border-white md:border-white sm:border-white border-purple-800 px-3 py-2 lg:grid lg:justify-items-start hover:bg-purple-800 hover:text-white transition duration-150 ease-in-out lg:text-3xl sm:text-2xl">
                          <span className="block pb-2">Venha ser um</span>
                          <span className="block text-left">voluntário</span>
                        </button>
                      </Link>
                      <a href="https://app.pipefy.com/public/form/ydrD6spS" target="Starfall">
                        <button className="lg:text-white md:text-white sm:text-white text-purple-800 bg-white lg:bg-transparent md:bg-transparent sm:bg-transparent border-r-4 lg:border-white md:border-white sm:border-white border-purple-800 px-3 py-2 lg:grid lg:justify-items-end hover:bg-purple-800 hover:text-white transition duration-150 ease-in-out lg:text-3xl sm:text-2xl">
                          <span className="block pb-2">Venha ser um</span>
                          <span className="block text-right">aluno</span>
                        </button>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
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
          <div className="relative">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl pb-10">
                      <span className="block text-yellow text-10xl">Nosso impacto em {results.year}</span>
                    </h1>
                    <div className="flex flex-row pt-10 justify-center">
                      <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-purple-800">
                        <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.aprovados}</span>
                        <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">aprovados</span>
                      </h1>
                      <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72">
                        <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.horasAula}</span>
                        <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">horas aula</span>
                      </h1>
                    </div>
                    <div className="flex flex-row pt-10 justify-center">
                      <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-purple-800">
                        <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.vidasTransformadas}</span>
                        <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">vidas transformadas</span>
                      </h1>
                      <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-purple-800">
                        <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.horasTrabalhadas}</span>
                        <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">horas trabalhadas</span>
                      </h1>
                      <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72">
                        <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.horasTreinamento}</span>
                        <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">horas de treinamento</span>
                      </h1>
                    </div>
                  </div>
              </div>
            </div>
            <div className="relative pt-16 pb-32 overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
            <div className="relative">
              <div className="flex justify-center">
                <div className="relative px-4 w-6/12">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl pb-10">
                    <span className="block text-blue">E ai, quer ajudar a mudar a educação do Brasil?</span>
                  </h1>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-6">
                  <a
                    href="/apoie"
                    className="text-center text-4xl font-extrabold inline-flex bg-blue bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-white hover:bg-purple-800"
                  >
                    Seja um apoiador
                  </a>
                </div>
              </div>
            </div>
          </div>
    </main>
    )
  }
  
  export default HomePage