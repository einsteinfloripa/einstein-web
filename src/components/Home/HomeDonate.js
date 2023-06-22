import Link from "next/link"

function HomeDonate() {
    return (
      <div className="relative pt-16 pb-24 overflow-hidden bg-white">
          <div className="relative">
          <div className="flex flex-col justify-center">
              <div className="flex justify-center">
                <div className="relative px-4 w-6/12">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl pb-10">
                  <span className="block text-blue-900">E aí, quer ajudar a mudar </span>
                  <span className="block text-blue-900">a educação do Brasil?</span>
                  </h1>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="mt-6 flex justify-center">
                  <Link
                    href="/apoie"
                    className="text-center text-5xl font-extrabold inline-flex bg-blue-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-white hover:bg-blue-50 hover:text-blue-900 w-11/12"
                  >
                    Seja um apoiador
                  </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
  }

  export default HomeDonate
