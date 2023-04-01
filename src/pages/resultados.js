import Head from "next/head";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Einstein Floripa | Resultados</title>
      </Head>
      <div className='relative'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-home-pattern' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-24 lg:px-8'>
            <h1 className='text-center font-extrabold tracking-tight'>
              <span className='block text-blue-900 lg:text-5xl text-2xl'>
                Saiba mais sobre nossa atuação!
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-blue-900' />
          </div>
          <div className='relative px-10 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8'>
            <div className='relative px-4  sm:px-6 lg:px-8 pb-10'>
              <h1 className='text-blue lg:text-4xl text-2xl font-semibold tracking-tight'>
                Links úteis
              </h1>
              <div className='mt-6 flex justify-start flex-col'>
                <div className='mt-8'>
                  <a
                    href='https://drive.google.com/file/d/1Rn_inR0mt2N5Q3cmGFCfRAqPFkT5gppu/view?usp=sharing'
                    target='Starfall'
                    className='text-center text-2xl font-semibold inline-flex bg-blue-50 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-900 hover:bg-blue hover:text-white'
                  >
                    Relatório de impacto 2020
                  </a>
                </div>
                <div className='mt-8'>
                  <a
                    href='https://drive.google.com/file/d/1c_aQ_cTIieVKCjavtV0VvcyLUAvLo3DX/view?usp=sharing'
                    target='Starfall'
                    className='text-center text-2xl font-semibold inline-flex bg-blue-50 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-900 hover:bg-blue hover:text-white'
                  >
                    Relatório de impacto 2019
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
