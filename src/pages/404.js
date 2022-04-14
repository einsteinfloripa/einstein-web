import Link from 'next/link';

function Custom404() {
  return (
    <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="flex-shrink-0 my-auto py-16 sm:py-32">
        <p className="font-rubik text-sm font-semibold text-blue-500 uppercase tracking-wide">
          Erro 404
        </p>
        <h1 className="font-rubik mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Página não encontrada!
        </h1>
        <div className="mt-4">
          <Link href="/">
            <a className="font-rubik text-base font-medium text-blue-500 hover:text-blue-400">
            <span aria-hidden="true"> &larr;</span>Voltar para Home
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Custom404;
