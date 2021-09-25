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
            <div className="relative px-4 py-16 mt-20">
                <Tab.Group>
                    <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
                        <Tab.List>
                            <Tab className={({ selected }) => {
                                if (selected) {
                                return 'px-5 bg-blue-600 hover:bg-magenta-800 transform motion-safe:hover:scale-110 text-white font-semibold mx-2 mb-2';
                                } else {
                                return 'px-5 bg-blue-900 hover:bg-magenta-800 transform motion-safe:hover:scale-110 text-white font-semibold mx-2 mb-2';
                                }
                            }}>
                               <span className="font-extrabold text-white text-3xl">Docentes</span>
                            </Tab>
                            <Tab className={({ selected }) => {
                                if (selected) {
                                return 'px-5 bg-blue-600 hover:bg-magenta-800 transform motion-safe:hover:scale-110 text-white font-semibold mx-2 mb-2';
                                } else {
                                return 'px-5 bg-blue-900 hover:bg-magenta-800 transform motion-safe:hover:scale-110 text-white font-semibold mx-2 mb-2';
                                }
                            }}>
                               <span className="font-extrabold text-white text-3xl">Organizadores</span>
                            </Tab>
                        </Tab.List>
                    </div>
                    <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-8">
                                        <span className="block text-blue-900 text-3xl">Nossos Professores e Monitores são a alma do Einstein Floripa!</span>
                                    </h1>
                                    <div className="px-32 pb-8">
                                        <p className="text-center">
                                            Com um corpo docente formado pelos melhores universitários de Floripa, cada professor e monitor assume o controle de alguma disciplina que possui conhecimento e afinidade. Um estudante de Engenharia pode lecionar uma aula de Física ou Matemática, enquanto um estudante de Medicina vai mandar muito bem nas aulas de Biologia.

                                            Essa equipe incrível é formada por mais de 40 voluntários que estão mudando a Educação no Brasil!
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
                                    <div className="px-32 pb-8">
                                        <p className="text-center">
                                            Além dos professores e monitores dando duro nas aulas, temos dezenas de organizadores responsáveis por todo o background do projeto, desde a captação de recursos até a divulgação dos resultados, eles trabalham voluntariamente para fazer tudo isso se tornar possível. São 6 departamentos que atuam em conjunto, onde seus esforços se complementam para mudar a vida de centenas de pessoas.
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