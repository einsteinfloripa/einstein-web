import Link from 'next/link';
import Head from "next/head";
import { useContext } from "react";

import BirthdayContext from "./Contexts/BithdayContext";
import BannerBithday from './Birthday/Banner';

function Soon() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);
  return (
    <>
      <Head>
            <title>Einstein Floripa | Em breve</title>
      </Head>
      {isBirthday ? <BannerBithday /> : <></>}
      <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 my-auto py-16 sm:py-32">
          <p className="font-rubik text-sm font-semibold text-blue-500 uppercase tracking-wide">
            Em breve
          </p>
          <h1 className="font-rubik mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Página em construção
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
    </>
  );
}

export default Soon;
