import { useRouter } from "next/router";

import { handlePipefyForm } from "../../utils/handlePipefyForm";

function PSTeach() {
  const { pathname } = useRouter();
  const linkEditalPS =
    "https://drive.google.com/file/d/1lcsQZQ2kFm9gj-M97mr_ve5rGKXQe2Ty/view";
  const linkAccessPS = handlePipefyForm(pathname);

  return (
    <>
      <div className='relative'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-home-pattern' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-24 lg:px-8'>
            <h1 className='text-center font-extrabold tracking-tight'>
              <span className='block text-blue-900 lg:text-5xl text-2xl'>
                Bem-vindo(a) à página de Processo Seletivo de Organizador!
              </span>
            </h1>
            <div className='mt-6 self-center flex justify-center'>
              <a
                href={!!linkAccessPS && linkAccessPS}
                target='Starfall'
                className='text-center text-5xl font-bold inline-flex bg-blue-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-white hover:bg-blue-50 hover:text-blue-900'
              >
                {!!linkAccessPS ? "Seja um inscrito" : "Em breve"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-blue-900' />
          </div>
          <div className='relative px-10 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8'>
            <h2 className='text-justify font-semibold tracking-tight'>
              <span className='block text-blue lg:text-4xl text-2xl'>
                O Einstein Floripa está com vagas abertas para organizadores!
              </span>
              <span className='block text-white lg:text-4xl text-2xl mt-10 font-medium'>
                Nosso cursinho pré-vestibular é construído por{" "}
                <strong>estudantes de graduação</strong> que atuam de maneira
                voluntária dentro do projeto. Somos docentes e organizadores
                comprometidos com a transformação do cenário do Ensino Superior
                no Brasil, voltados para a ampliação do acesso de todos à
                educação pública e de qualidade!
              </span>
              <span className='block text-white lg:text-4xl text-2xl my-10 font-medium'>
                O processo seletivo de organizadores é composto por três etapas,
                que serão realizadas de maneira online:
              </span>
            </h2>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>1. Inscrições - </span> os
                  candidatos devem ler o edital na íntegra e preencher o
                  formulário com as informações solicitadas.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>
                    2. Case e Teste de raciocínio -{" "}
                  </span>{" "}
                  após a aprovação na primeira etapa, baseada no cumprimento dos
                  pré-requisitos para a atuação no projeto, os candidatos devem
                  elaborar um case com temas previamente delimitados e realizar
                  um teste de raciocínio no Mindsight.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>3. Entrevistas - </span> ocorre
                  logo após a etapa 2, e é um momento para conhecermos melhor
                  nossos futuros organizadores! Serão avaliados o alinhamento
                  com a missão do projeto e o comprometimento com a atuação
                  dentro do cursinho.
                </span>
              </h2>
            </div>
            <h2 className='text-justify font-medium tracking-tight'>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                Com a aprovação em todas as etapas, seja bem vindo(a) à sua
                jornada no Einstein Floripa! Aos poucos serão passadas mais
                informações para que você comece a transformar a educação
                conosco!
              </span>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                Para qualquer dúvida entre em contato com a gente, através das
                nossas redes sociais:{" "}
                <a
                  href='https://www.instagram.com/einsteinfloripa/'
                  className='text-blue'
                >
                  @einsteinfloripa
                </a>{" "}
                ou{" "}
                <a
                  href='mailto:ps.einsteinfloripa@gmail.com'
                  className='text-blue'
                >
                  ps.einsteinfloripa@gmail.com
                </a>
              </span>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                Boa sorte!
              </span>
            </h2>
            <div className='relative px-4  sm:px-6 lg:px-8 pb-10'>
              <h1 className='text-blue lg:text-4xl text-2xl font-semibold tracking-tight'>
                Links úteis
              </h1>
              <div className='mt-6 flex justify-start flex-col'>
                <div>
                  <a
                    href={linkEditalPS}
                    target='Starfall'
                    className='text-center text-2xl font-semibold inline-flex bg-blue-50 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-900 hover:bg-blue hover:text-white'
                  >
                    Edital do processo seletivo de organizadores 2024.2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PSTeach;
