import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Sobre o Einstein', href: '/sobre-nos' },
    { name: 'Nossa equipe', href: '/equipe' },
    { name: 'Resultados', href: '/resultados' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'Apoie', href: '/apoie' },
  ],
}

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue fixed top-0 left-0 z-50 w-full">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="w-40 flex items-center justify-center">
                  <Link href="/">
                    <button>
                      <img
                        className="h-12 w-auto"
                        src="/images/logo.png"
                        alt="Workflow"
                      />
                    </button>
                  </Link>
                </div>
                <div className="felx hidden md:ml-6 md:flex md:space-x-8">
                  <Link href="/">
                    <button
                      className="flex-grow-0 my-3 bg-transparent hover:bg-purple-800 text-white hover:text-white py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium transition delay-150 duration-300 ease-in-out"
                    >
                      Home
                    </button>
                  </Link>
                  <Link href="/sobre-nos">
                    <a
                      className="flex-grow-0 my-3 bg-transparent hover:bg-purple-800 text-white hover:text-white py-2  border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium text-center transition delay-150 duration-300 ease-in-out"
                    >
                      Sobre Nós
                    </a>
                  </Link>
                  <Link href="/equipe">
                    <a
                      className="my-3 bg-transparent hover:bg-purple-800 text-white hover:text-white py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium text-center transition delay-150 duration-300 ease-in-out"
                    >
                      Nossa equipe
                    </a>
                  </Link>
                  <Link href="/resultados">
                    <a
                      className="my-3 bg-transparent hover:bg-purple-800 text-white hover:text-white py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium transition delay-150 duration-300 ease-in-out"
                    >
                      Resultados
                    </a>
                  </Link>
                  <Link href="/noticias">
                    <a
                      className="my-3 bg-transparent hover:bg-purple-800 text-white hover:text-white py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium transition delay-150 duration-300 ease-in-out"
                    >
                      Notícias
                    </a>
                  </Link>
                  <Link href="/apoie">
                    <a
                      className="my-3 bg-white hover:bg-purple-800 text-blue-700 hover:text-white py-2 border-2 border-white hover:border-transparent rounded-lg inline-flex items-center px-3 pt-1 text-sm font-medium transition delay-150 duration-300 ease-in-out"
                    >
                      Apoie
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-purple-50 border-purple-500 text-purple-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link href="/">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Home
              </a>
              </Link>
              <Link href="/sobre-nos">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Sobre o Einstein
              </a>
              </Link>
              <Link href="/equipe">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Nossa equipe
              </a>
              </Link>
              <Link href="/resultados">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Resultados
              </a>
              </Link>
              <Link href="/noticias">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Notícias
              </a>
              </Link>
              <Link href="/apoie">
              <a
                className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-right"
              >
                Apoie
              </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar