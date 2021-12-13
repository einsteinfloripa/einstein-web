import Link from 'next/link'

function PSOptions() {
  return (
    <div className="relative pt-16 pb-24 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
        <div className="relative">
        <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="relative px-4 w-6/12">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl pb-10">
                <span className="block text-blue-900">Eu quero ser</span>
                </h1>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="mt-6">
                    <div className="flex justify-center">
                        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                            <Link href="processo-seletivo/alunos">
                              <li  className="h-72 w-72">
                                  <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-12/12 flex flex-col items-center hover:bg-blue-900 hover:text-white transition">
                                      <div>
                                          <img className="object-cover shadow-lg rounded-lg h-64 w-64" src="/images/psalunos.png" alt="" />
                                      </div>

                                      <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                                              <div className="font-medium text-sm text-center">
                                              <h3 className="text-2xl pb-4">Aluno</h3>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                            </Link>
                            <Link href="em-breve">
                              <li  className="h-96 w-72">
                              <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-12/12 flex flex-col items-center hover:bg-blue-900 hover:text-white transition">
                                      <div>
                                          <img className="object-cover shadow-lg rounded-lg h-64 w-64" src="/images/psdocentes.png" alt="" />
                                      </div>

                                      <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                                              <div className="font-medium text-sm text-center">
                                              <h3 className="text-2xl pb-4">Docente</h3>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                            </Link>
                            <Link href="em-breve">
                              <li  className="h-96 w-72">
                              <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-12/12 flex flex-col items-center hover:bg-blue-900 hover:text-white transition">
                                      <div>
                                          <img className="object-cover shadow-lg rounded-lg h-64 w-64" src="/images/psorg.png" alt="" />
                                      </div>

                                      <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                                              <div className="font-medium text-sm text-center">
                                              <h3 className="text-2xl pb-4">Organizador</h3>
                                          </div>
                                      </div>
                                  </div>
                              </li>
                            </Link>
                        </ul>
                    </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default PSOptions