import { Tab } from '@headlessui/react'

import TeamOrgTab from './TeamOrgTab'
import TeamTeachTab from './TeamTeachTab'

function TeamTab() {
  return (
    <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-white" />
            </div>
            <div className="relative px-4 py-16 mt-20 flex flex-col items-center">
                <h1 className="text-blue-900 text-5xl font-semibold pb-5 text-center">Quem você quer conhecer?</h1>
                <Tab.Group>
                    <div className="relative flex flex-col md:flex-row items-center justify-center">
                        <Tab.List className="flex flex-col md:flex-row">
                            <Tab className="hidden transform motion-safe:hover:scale-110 px-8 py-2">
                                <div className="flex flex-col">
                                    <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                        <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Língua-Portuguesa.png" alt="Língua-Portuguesa" width="150" height="150" />
                                    </div>
                                    <span className="text-center">Língua Portuguesa e Literatura</span>
                                </div>
                            </Tab>
                            <Tab className={({ selected }) => {
                                if (selected) {
                                return 'rounded-md px-5 bg-blue-600 text-white font-semibold mx-2 mb-2 hover:bg-blue-50';
                                } else {
                                return 'rounded-md px-5 bg-blue-900 text-white font-semibold mx-2 mb-2 hover:bg-blue-50';
                                }
                            }}>
                               <span className="font-extrabold text-white text-3xl hover:text-blue-900">Docentes</span>
                            </Tab>
                            <Tab className={({ selected }) => {
                                if (selected) {
                                    return 'rounded-md px-5 bg-blue-600 text-white font-semibold mx-2 mb-2 hover:bg-blue-50';
                                } else {
                                    return 'rounded-md px-5 bg-blue-900 text-white font-semibold mx-2 mb-2 hover:bg-blue-50';
                                }
                            }}>
                               <span className="font-extrabold text-white text-3xl hover:text-blue-900">Organizadores</span>
                            </Tab>
                        </Tab.List>
                    </div>
                    <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
                        <Tab.Panels>
                            <Tab.Panel></Tab.Panel>
                            <Tab.Panel>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-8">
                                        <span className="block text-blue-900 text-3xl">Nossos Professores e Monitores são a alma do Einstein Floripa!</span>
                                    </h1>
                                    <div className="px-8 sm:px-16 md:px-32 pb-8">
                                        <p className="text-center">
                                            Com um corpo docente formado pelos melhores universitários das principais universidades de Florianópolis, cada professor e monitor assume o controle de uma disciplina diferente da qual possua conhecimento e afinidade, mesmo que sem ter formação específica naquela área. Um estudante de Engenharia pode lecionar uma aula de Física ou Matemática, enquanto um estudante de Medicina vai arrasar lecionando os conteúdos de Biologia. Essa equipe incrível é formada por mais de quarenta voluntários que estão gerando impacto direto para melhorar o cenário educacional Brasileiro.
                                        </p>
                                    </div>
                                </div>
                                <TeamTeachTab />
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-8">
                                        <span className="block text-blue-900 text-3xl">A equipe do Einstein é repleta de Universitários Incríveis!</span>
                                    </h1>
                                    <div className="px-8 sm:px-16 md:px-32 pb-8">
                                        <p className="text-center">
                                            Além dos professores e monitores trabalhando em sala de aula, temos dezenas de organizadores sendo responsáveis por todo o background do projeto, desde a captação de recursos até a gestão de pessoas. Esse time plaaneja estrategicamente os próximos passos da instituição, trabalhando voluntariamente para tornar tudo possível. São cinco departamentos e uma diretoria executiva que atuam em conjunto, complementando o esforço diário dos docentes e ajudando a transformar a vida de centenas de pessoas.
                                        </p>
                                    </div>
                                </div>
                                <TeamOrgTab />
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </div>
        </div>
    </div>
  )
}

export default TeamTab