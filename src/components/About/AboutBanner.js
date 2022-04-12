function AboutBanner() {
  return (
    <main>
      <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:pt-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-aboutbg-pattern" />
          </div>
          <div className="flex flex-col relative px-4 py-6 sm:px-6 sm:py-24 lg:py-8 lg:px-8">
            <div className="flex mt-10 align-middle">
              <div className="w-4/6 h-full self-center bg-transparent rounded-xl py-8">
                <h1 className="text-center font-semibold tracking-tight sm:text-5xl lg:text-3xl">
                  <span className="text-blue-900 lg:text-3xl sm:text-2xl">
                    Cerca de{" "}
                  </span>
                  <span className="text-blue lg:text-3xl sm:text-2xl">
                    85%{" "}
                  </span>
                  <span className="text-blue-900 lg:text-3xl sm:text-2xl">
                    dos estudantes brasileiros estão em escolas públicas
                  </span>
                </h1>
              </div>
              <div className="lg:h-full self-center px-10">
                <img src="/images/x.png" alt="versus" />
              </div>
              <div className="w-4/6 h-full pl-2 self-center py-3 bg-transparent rounded-xl">
                <h1 className="text-center font-semibold tracking-tight sm:text-5xl lg:text-3xl">
                  <span className="text-blue-900 lg:text-3xl sm:text-2xl">
                    Nas universides de maior perfomance do país,
                  </span>
                  <span className="text-blue lg:text-3xl sm:text-2xl">
                    {" "}
                    70%{" "}
                  </span>
                  <span className="text-blue-900 lg:text-3xl sm:text-2xl">
                    universitários vieram de escolas particulares
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-blue-900" />
          </div>
          <div className="flex flex-col relative px-4 pb-6 sm:px-6 sm:pb-24 lg:pb-8 lg:px-8">
            <div className="w-4/6 justify-center self-center md:mt-0">
              <img src="/images/maos_tocando.png" alt="Mãos dadas" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutBanner;
