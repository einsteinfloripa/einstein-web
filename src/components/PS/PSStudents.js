import { useRouter } from "next/router";

import { handlePipefyForm } from "../../utils/handlePipefyForm";

function PSStudents() {
  const { pathname } = useRouter();
  const linkEditalPS =
    "https://drive.google.com/file/d/1S7_PPqEG_Z7KkhGTC920LPfhTnetwogm/view?usp=sharing";
  const linkAccessPS = handlePipefyForm(pathname);

  return (
    <>
      <div className='relative'>
        <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='absolute inset-0'>
            <div className='absolute inset-0 bg-home-pattern' />
          </div>
          <div className='relative flex flex-col px-4 py-16 sm:px-6 sm:py-24 lg:pt-32 lg:pb-24 lg:px-8'>
            <h1 className='font-extrabold tracking-tight text-center'>
              <span className='block text-2xl text-blue-900 lg:text-3xl'>
                Bem-vindo(a) à página de Processo Seletivo de Alunos!
              </span>
            </h1>
            <h1 className='mt-10 font-extrabold tracking-tight text-center'>
              <span className='block text-2xl text-blue-900 lg:text-5xl'>
                Nossas Inscrições estão abertas!
              </span>
            </h1>
            <div className='flex self-center justify-center mt-6'>
              <a
                href={!!linkAccessPS && linkAccessPS}
                target='Starfall'
                className='inline-flex px-4 py-2 text-4xl font-bold text-center text-white duration-300 bg-blue-900 border border-transparent rounded-lg shadow-sm bg-origin-border hover:bg-blue-50 hover:text-blue-900'
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
              <span className='block text-2xl text-white lg:text-4xl'>
                Conquiste com o{" "}
                <span className='text-blue'>Einstein Floripa!</span>
              </span>
              
              <span className='block mt-10 mb-4 text-xl text-white lg:text-3xl'>
                  Para quem é o 
                <span className='text-blue'> Processo Seletivo?</span>
              </span>
              <span className='block text-xl text-white lg:text-2xl'>
                O processo seletivo do Projeto Einstein Floripa destina-se para
                alunos de baixa renda, que estão no último ano ou já finalizaram
                o Ensino Médio e procuram ingressar em um Ensino Superior de
                qualidade.
              </span>
              <span className='block mt-10 mb-8 text-xl text-white lg:text-4xl'>
                <span className='text-blue'>Etapas do Processo Seletivo</span>
              </span>
            </h2>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-xl text-blue-900 lg:text-2xl'>
                  <span className='text-blue'>1.</span> Assim que a inscrição
                  for liberada, os candidatos devem preencher o formulário com
                  seus dados pessoais e demais informações solicitadas.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-xl text-blue-900 lg:text-2xl'>
                  <span className='text-blue'>2.</span> Os aprovados na etapa de
                  inscrição receberão informações sobre a realização de uma
                  prova teórica presencial. Este teste engloba conhecimentos gerais
                  do ensino médio.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-xl text-blue-900 lg:text-2xl'>
                  <span className='text-blue'>3.</span> Os aprovados na prova
                  teórica seguirão para a proxima etapa: a validação dos documento.
                  Neste momento, iremos analisar os documentos de cada candidato.
                  Tudo isso sera feito a distância, de forma online.
                </span>
              </h2>
            </div>
            <div className='mb-10'>
              <h2 className='p-5 font-semibold tracking-tight text-justify bg-white rounded-lg'>
                <span className='block text-xl text-blue-900 lg:text-2xl'>
                  <span className='text-blue'>4.</span> Os aprovados
                  seguirão para a etapa final: a entrevista. Neste
                  momento, iremos conhecer um pouquinho mais sobre cada
                  candidato, analisaremos o perfil de cada um atravez de uma conversa presencial. 
                  Não se preocupe, os entrevistadores
                  estarão recebendo todos de braços abertos!
                </span>
              </h2>
            </div>
            <h2 className='font-semibold tracking-tight text-justify'>
              <span className='block mt-10 text-xl text-white lg:text-2xl'>
                Passou na entrevista e está tudo {`"ok"`} com os seus documentos?!
                Bem-vindo ao Einstein Floripa! Conquiste com a gente!
              </span>
              <span className='block mt-10 mb-4 text-xl text-white lg:text-2xl'>
                Para qualquer dúvida entre em contato com a gente, através das
                nossas redes sociais:
              </span>


              <div className="flex gap-1 lg:text-2xl md:text-xl sm:text-lg">
                <p className="text-white">
                  Instagram: 
                </p>
               <a
                  href='https://www.instagram.com/einsteinfloripa/'
                  className='text-blue'
                >
                   @einsteinfloripa
                </a>{" "}
              </div>
              
              
              <div className="flex gap-1 lg:text-2xl md:text-xl sm:text-lg">
                
              <p className="text-white">
                E-mail:
                
                </p>
              <a
                  href='mailto:ps.einsteinfloripa@gmail.com'
                  className='text-blue'
                >
                   processo.seletivo-alunos@einsteinfloripa.com.br
                </a>
              </div>



              
              <span className='flex justify-end mt-8 text-2xl text-white lg:text-4xl'>
                Boa sorte!
              </span>
            </h2>
          </div>
          <div className='relative px-4 pb-10 sm:px-6 lg:px-8'>
            <h1 className='text-2xl font-semibold tracking-tight text-blue lg:text-4xl'>
              Links úteis
            </h1>
            <div className='flex flex-col justify-start mt-6'>
              <div >
                <a
                  href='https://drive.google.com/file/d/1kwiwvkYhSHqXp9qk9hhn_nOINNPkcjcR/view?usp=sharing'
                  target='Starfall'
                  className='inline-flex px-4 py-2 text-2xl font-semibold text-center text-blue-900 border border-transparent rounded-md shadow-sm bg-blue-50 bg-origin-border hover:bg-blue hover:text-white'
                >
                  Manual do Aluno
                </a>
              </div>
              <div className='mt-8'>
                <a
                  href={linkEditalPS}
                  target='Starfall'
                  className='inline-flex px-4 py-2 text-2xl font-semibold text-center text-blue-900 border border-transparent rounded-md shadow-sm bg-blue-50 bg-origin-border hover:bg-blue hover:text-white'
                >
                  Edital do processo seletivo de alunos de 2025
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
