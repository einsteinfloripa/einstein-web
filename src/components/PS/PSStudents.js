import { useRouter } from "next/router";

import { handlePipefyForm } from "../../utils/handlePipefyForm";

function PSStudents() {
  const { pathname } = useRouter();
  const linkEditalPS =
    "https://drive.google.com/file/d/1PRVKS_IDLH3hk1NSw0k3QStJynvb0fdH/view?usp=sharing";
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
                Bem-vindo(a) à página de Processo Seletivo de Alunos!
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
              <span className='block text-white lg:text-4xl text-2xl'>
                Conquiste com o{" "}
                <span className='text-blue'>Einstein Floripa!</span>
              </span>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                Nossas Inscrições estão abertas!!
              </span>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                O processo seletivo do Projeto Einstein Floripa destina-se para
                alunos de baixa renda, que estão no último ano ou já finalizaram
                o Ensino Médio e procuram ingressar em um Ensino Superior de
                qualidade.
              </span>
              <span className='block text-white lg:text-4xl text-2xl my-10'>
                O caminho para ser Einsteiniano: Todo o Processo Seletivo será
                realizado de maneira online, em função das medidas de prevenção
                à Covid-19.
              </span>
            </h2>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>1.</span> Como primeiro passo, os
                  candidatos devem realizar a pré-inscrição, mas esta etapa
                  ainda não lhe torna um candidato, portanto, fique atento ao
                  seu e-mail, te lembraremos sobre a data de inscrição.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>2.</span> Assim que a inscrição
                  for liberada, os candidatos devem preencher o formulário com
                  seus dados pessoais e demais informações solicitadas.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>3.</span> Os aprovados na etapa de
                  inscrição receberão informações sobre a realização de uma
                  prova teórica virtual. Este teste engloba conhecimentos gerais
                  do ensino médio.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='text-justify font-semibold tracking-tight bg-white p-5 rounded-lg'>
                <span className='block text-blue-900 lg:text-4xl text-2xl'>
                  <span className='text-blue'>4.</span> Os aprovados na prova
                  teórica seguirão para a etapa final: a entrevista. Neste
                  momento, iremos conhecer um pouquinho mais sobre cada
                  candidato, analisaremos o perfil e também os documentos para
                  validação de renda. Não se preocupe, os entrevistadores
                  estarão recebendo todos de braços abertos!
                </span>
              </h2>
            </div>
            <h2 className='text-justify font-semibold tracking-tight'>
              <span className='block text-white lg:text-4xl text-2xl mt-10'>
                Passou na entrevista e está tudo {`"ok"`} com os seus documentos?!
                Bem-vindo ao Einstein Floripa!! Conquiste com a gente!!
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
          </div>
          <div className='relative px-4  sm:px-6 lg:px-8 pb-10'>
            <h1 className='text-blue lg:text-4xl text-2xl font-semibold tracking-tight'>
              Links úteis
            </h1>
            <div className='mt-6 flex justify-start flex-col'>
              <div className='mt-8'>
                <a
                  href='https://drive.google.com/file/d/18mHlvRSgH2Pei39UJo8u83TF8-KJDJqF/view?usp=sharing'
                  target='Starfall'
                  className='text-center text-2xl font-semibold inline-flex bg-blue-50 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-900 hover:bg-blue hover:text-white'
                >
                  Manual do Candidato
                </a>
              </div>
              <div className='mt-8'>
                <a
                  href={linkEditalPS}
                  target='Starfall'
                  className='text-center text-2xl font-semibold inline-flex bg-blue-50 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-blue-900 hover:bg-blue hover:text-white'
                >
                  Edital do processo seletivo de alunos de 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PSStudents;
