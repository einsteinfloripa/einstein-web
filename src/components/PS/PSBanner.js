function PSBanner () {
  return (
      <>
        <div className="relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-home-pattern" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center font-extrabold tracking-tight">
                    <span className="block text-blue-900 lg:text-5xl text-2xl">
                        Bem-vindo(a) à página de Processos Seletivos!
                    </span>
                </h1>
            </div>
        </div>
        </div>
        <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-900" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
                <h2 className="text-justify font-semibold tracking-tight">
                    <span className="block text-white lg:text-4xl text-2xl">
                      Aqui você encontra as principais informações, avisos e links do processo. Recomendamos que antes de se inscrever leia com atenção nosso edital para entender por completo como serão as etapas, de modo a estar preparado(a) para cada uma delas. 
                    </span>
                    <span className="block text-white lg:text-4xl text-2xl mt-10">
                      Além disso, este ano estamos disponibilizando o Manual do Candidato, um documento no qual explicamos o Processo Seletivo com uma linguagem descontraída e tiramos as principais dúvidas que podem surgir.
                    </span>
                    <span className="block text-white lg:text-4xl text-2xl mt-10">
                      Boa sorte!
                    </span>
                </h2>
            </div>
        </div>
        </div>
      </>
  )}

export default PSBanner