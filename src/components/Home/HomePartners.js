function HomePartners() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative px-4 ">
          <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-1">
            <span className="block text-blue-900 text-12xl  mb-1">
              Empresas parceiras
            </span>
          </h1>
        </div>

        <div className="flex">
          <div className="relative px-4 py-2 ">
            <div className="flex flex-row pt-10 justify-center">
              <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 border-r-4 border-white">
                <a href="https://www.bixtecnologia.com/" target="_blank">
                  <img
                    className="w-30"
                    src="/images/parceiros/bix.png"
                    alt="BIX Tecnologia"
                  />
                </a>
              </h1>

              <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 border-r-4 border-white">
                <a href="https://www.pipefy.com/pt-br/" target="_blank">
                  <img
                    className="w-30"
                    src="/images/parceiros/pipefy.png"
                    alt="Pipefy"
                  />
                </a>
              </h1>

              <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 border-r-4 border-white">
                <a href="https://gogood.com.br/" target="_blank">
                  <img
                    className="w-30"
                    src="/images/parceiros/gogood.png"
                    alt="Gogood"
                  />
                </a>
              </h1>
              <h1 className="text-center text-2xl tracking-tight sm:text-5xl lg:text-6xl px-8 border-r-4 border-white">
                <a href="http://www.mugelato.com.br/" target="_blank">
                  <img
                    className="w-18"
                    src="/images/parceiros/mugelato.png"
                    alt="Mugelato"
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePartners;
