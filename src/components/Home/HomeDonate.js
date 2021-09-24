function HomeDonate() {
    return (
      <div className="relative pt-16 pb-32 overflow-hidden">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
          <div className="relative">
            <div className="flex justify-center">
              <div className="relative px-4 w-6/12">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl pb-10">
                  <span className="block text-blue-900">E ai, quer ajudar a mudar a educação do Brasil?</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-6">
                <a
                  href="/apoie"
                  className="text-center text-4xl font-extrabold inline-flex bg-blue-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-white hover:bg-blue-50 hover:text-blue-900"
                >
                  Seja um apoiador
                </a>
              </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default HomeDonate