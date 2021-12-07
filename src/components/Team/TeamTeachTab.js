import { Tab } from '@headlessui/react'
import Biology from './Teach/Biology'
import Chemistry from './Teach/Chemistry'
import Geography from './Teach/Geography'
import History from './Teach/History'
import Humanities from './Teach/Humanities'
import Languages from './Teach/Languages'
import Math from './Teach/Math'
import Physics from './Teach/Physics'
import Portuguese from './Teach/Portuguese'



function TeamTeachTab() {
    return (
      <Tab.Group>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.List>
                <div className="flex justify-evenly flex-col sm:flex-row">
                    <Tab className="hidden transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/portugues.png" alt="Língua-Portuguesa" width="150" height="150" />
                            </div>
                            <span className="text-center"></span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/portugues.png" alt="Língua-Portuguesa" width="150" height="150" />
                            </div>
                            <span className="text-center">Língua Portuguesa e Literatura</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/estrangeiras.png" alt="Língua-Estrangeira" width="150" height="150" />
                            </div>
                            <span>Língua Estrangeira</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/matematica.png" alt="Matemática" width="150" height="150" />
                            </div>
                            <span>Matemática</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/biologia.png" alt="Biologia" width="150" height="150" />
                            </div>
                            <span>Biologia</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/historia.png" alt="História" width="150" height="150" />
                            </div>
                            <span>História</span>
                        </div>
                    </Tab>
                </div>
                <div className="flex justify-evenly flex-col sm:flex-row">
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/geografia.png" alt="Geografia e Atualidades" width="150" height="150" />
                            </div>
                            <span>Geografia e Atualidades</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/fisica.png" alt="Física" width="150" height="150" />
                            </div>
                            <span>Física</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/quimica.png" alt="Química" width="150" height="150" />
                            </div>
                            <span>Química</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img className="imgtran" src="/images/materias/humanidades.png" alt="Humanidades" width="150" height="150" />
                            </div>
                            <span>Humanidades</span>
                        </div>
                    </Tab>
                </div>

            </Tab.List>
        </div>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.Panels>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Língua Portuguesa e Literatura</span>
                    </h1>
                    <Portuguese />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Língua Estrangeira</span>
                    </h1>
                    <Languages />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Matemática</span>
                    </h1>
                    <Math />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Biologia</span>
                    </h1>
                    <Biology />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de História</span>
                    </h1>
                    <History />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Geografia e Atualidades</span>
                    </h1>
                    <Geography />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Física</span>
                    </h1>
                    <Physics />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Química</span>
                    </h1>
                    <Chemistry />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Humanidades</span>
                    </h1>
                    <Humanities />
                </Tab.Panel>
            </Tab.Panels>
        </div>
      </Tab.Group>
    )
  }

export default TeamTeachTab