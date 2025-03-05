function PSBanner () {
  return (
      <>
        <div className="relative overflow-x-hidden">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-home-pattern" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:mt-14 lg:px-8">
                <h1 className="font-extrabold tracking-tight text-center">
                    <span className="block text-2xl text-blue-900 lg:text-4xl">
                        Bem-vindo(a) à página de Processos Seletivos!
                    </span>
                </h1>
            </div>
        </div>
        </div>
        <div className="relative">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-900" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
                <h2 className="font-semibold tracking-tight text-justify">
                    <span className="block text-2xl text-white lg:text-3xl">
                      Aqui você encontra as principais informações, avisos e links do processo. Recomendamos que antes de se inscrever leia com atenção nosso edital para entender por completo como serão as etapas, de modo a estar preparado(a) para cada uma delas. 
                    </span>
                    <span className="block mt-10 text-2xl text-white lg:text-3xl">
                      Além disso, este ano estamos disponibilizando o Manual do Candidato, um documento no qual explicamos o Processo Seletivo com uma linguagem descontraída e tiramos as principais dúvidas que podem surgir.
                    </span>
                    <span className="block mt-10 text-2xl text-white lg:text-3xl">
                      Boa sorte!
                    </span>
                </h2>
            </div>
        </div>
        </div>
      </>
  )}

export default PSBanner