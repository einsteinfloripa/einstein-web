import { useRouter } from "next/router";

import { handlePipefyForm } from "../../utils/handlePipefyForm";

function PSTeach() {
  const { pathname } = useRouter();
  const linkEditalPS =
    "https://drive.google.com/file/d/1cyB66GIIunBgJNPlRIrhFEvPZVDjUxwU/view";
  const linkAccessPS = handlePipefyForm(pathname);

  return (
    <>
      <div className='relative'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-home-pattern' />
          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-24 lg:px-8'>
            <h1 className='font-extrabold tracking-tight text-center'>
              <span className='block text-2xl text-blue-900 lg:text-4xl'>
                Bem-vindo(a) à página de Processo Seletivo de Organizador!
              </span>
            </h1>
            <h1 className='mt-10 font-extrabold tracking-tight text-center'>
              <span className='block text-2xl text-blue-900 lg:text-4xl'>
                Nossas Inscrições estão abertas!
              </span>
            </h1>
            <div className='flex self-center justify-center mt-6'>
              <a
                href={!!linkAccessPS && linkAccessPS}
                target='Starfall'
                className='inline-flex px-4 py-2 text-4xl font-bold text-center text-white bg-blue-900 border border-transparent rounded-md shadow-sm bg-origin-border hover:bg-blue-50 hover:text-blue-900'
              >
                  {!!linkAccessPS ? "INSCREVA-SE" : "Em breve"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-blue-900' />
          </div>
          <div className='relative px-10 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8'>
            <h2 className='font-semibold tracking-tight text-justify'>
              <span className='block text-2xl text-blue lg:text-3xl'>
                O Einstein Floripa está com vagas abertas para organizadores!
              </span>
              <span className='block mt-10 text-2xl font-medium text-white'>
                Nosso cursinho pré-vestibular é construído por{" "}
                <strong>estudantes de graduação</strong> que atuam de maneira
                voluntária dentro do projeto. Somos docentes e organizadores
                comprometidos com a transformação do cenário do Ensino Superior
                no Brasil, voltados para a ampliação do acesso de todos à
                educação pública e de qualidade!
              </span>
              <span className='block my-10 text-2xl font-medium text-white '>
                O processo seletivo de organizadores é composto por três etapas,
                que serão realizadas de maneira online:
              </span>
            </h2>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-2xl text-blue-900 '>
                  <span className='text-blue'>1. Inscrições - </span> os
                  candidatos devem ler o edital na íntegra e preencher o
                  formulário com as informações solicitadas.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-2xl text-blue-900 '>
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
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-2xl text-blue-900 '>
                  <span className='text-blue'>3. Entrevistas - </span> ocorre
                  logo após a etapa 2, e é um momento para conhecermos melhor
                  nossos futuros organizadores! Serão avaliados o alinhamento
                  com a missão do projeto e o comprometimento com a atuação
                  dentro do cursinho.
                </span>
              </h2>
            </div>
            <h2 className='font-medium tracking-tight text-justify'>
              <span className='block mt-10 text-2xl text-white '>
                Com a aprovação em todas as etapas, seja bem vindo(a) à sua
                jornada no Einstein Floripa! Aos poucos serão passadas mais
                informações para que você comece a transformar a educação
                conosco!
              </span>
              <span className='block mt-10 text-2xl text-white '>
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
              <span className='block mt-10 text-2xl text-white '>
                Boa sorte!
              </span>
            </h2>
            <div className="mt-16">
              <h1 className='text-2xl font-semibold tracking-tight text-blue '>
                Links úteis
              </h1>
              <div className='flex flex-col justify-start mt-6'>
                <div>
                  <a
                    href={linkEditalPS}
                    target='Starfall'
                    className='inline-flex px-4 py-2 text-2xl font-semibold text-center text-blue-900 border border-transparent rounded-md shadow-sm bg-blue-50 bg-origin-border hover:bg-blue hover:text-white'
                  >
                    Edital do processo seletivo de organizadores 2025.1
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
