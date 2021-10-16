import { Tab } from '@headlessui/react'
import Math from './Teach/Math'



function TeamTeachTab() {
    return (
      <Tab.Group>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.List>
                <div className="flex justify-evenly">
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Língua-Portuguesa.png" alt="Língua-Portuguesa" width="150" height="150" />
                            </div>
                            <span className="text-center">Língua Portuguesa e Literatura</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Língua-Estrangeira.png" alt="Língua-Estrangeira" width="150" height="150" />
                            </div>
                            <span>Língua Estrangeira</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Matemática.png" alt="Matemática" width="150" height="150" />
                            </div>
                            <span>Matemática</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Biologia.png" alt="Biologia" width="150" height="150" />
                            </div>
                            <span>Biologia</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/História.png" alt="História" width="150" height="150" />
                            </div>
                            <span>História</span>
                        </div>
                    </Tab>
                </div>
                <div className="flex justify-evenly">
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Geografia-e-Atualidades.png" alt="Geografia e Atualidades" width="150" height="150" />
                            </div>
                            <span>Geografia e Atualidades</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Física.png" alt="Física" width="150" height="150" />
                            </div>
                            <span>Física</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Química.png" alt="Química" width="150" height="150" />
                            </div>
                            <span>Química</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8 py-2">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-150 h-150 mx-auto bg-transparente text-blue-900 sm:w-150 sm:h-150">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Humanidades-470x526.png" alt="Humanidades" width="150" height="150" />
                            </div>
                            <span>Humanidades</span>
                        </div>
                    </Tab>
                </div>

            </Tab.List>
        </div>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.Panels>
                <Tab.Panel>Língua Portuguesa e Literatura</Tab.Panel>
                <Tab.Panel>Língua Estrangeira</Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os docentes de Matemática</span>
                    </h1>
                    <Math />
                </Tab.Panel>
                <Tab.Panel>Biologia</Tab.Panel>
                <Tab.Panel>História</Tab.Panel>
                <Tab.Panel>Geografia e Atualidades</Tab.Panel>
                <Tab.Panel>Física</Tab.Panel>
                <Tab.Panel>Química</Tab.Panel>
                <Tab.Panel>Humanidades</Tab.Panel>
                </Tab.Panels>
        </div>
      </Tab.Group>
    )
  }

export default TeamTeachTab