const results = {
  year: "2020",
  aprovados:"50",
  horasAula:"1260",
  vidasTransformadas:"200",
  horasTreinamento:"50",
  horasTrabalhadas:"45k",
}

function HomeNumbers() {
    return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="absolute inset-0">
              <div className="absolute inset-0 bg-blue-900" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl pb-10">
                  <span className="block text-white text-10xl">Nosso impacto em {results.year}</span>
              </h1>
              <div className="flex flex-row pt-10 justify-center">
                  <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-white">
                      <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.aprovados}</span>
                      <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">aprovados</span>
                  </h1>
                  <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72">
                      <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.horasAula}</span>
                      <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">horas aula</span>
                  </h1>
              </div>
              <div className="flex flex-row pt-10 justify-center">
                  <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-white">
                      <span className="block text-white font-extrabold lg:text-10xl sm:text-5xl text-2xl">{results.vidasTransformadas}</span>
                      <span className="block text-white lg:font-medium sm:font-extrabold lg:text-3xl sm:text-2xl text-base">vidas transformadas</span>
                  </h1>
                  <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 w-72 border-r-4 border-white">
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
    )
}

export default HomeNumbers