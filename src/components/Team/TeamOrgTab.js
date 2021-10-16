import { Tab } from '@headlessui/react'

import Embaixada from './Org/Embaixada'
import Times from './Org/Times'
import Hogwarts from './Org/Hogwarts'
import Vale from './Org/Vale'
import Ministerio from './Org/Ministerio'
import Capital from './Org/Capital'

function TeamOrgTab() {
    return (
      <Tab.Group>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.List>
                <div className="justify-center items-center">
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="/images/departamentos/capital.png" width="200" height="200" />
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Capital</span>
                            <span>[Diretoria Administrativa]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img  src="/images/departamentos/embaixada.png" alt="Embaixada do Amor" width="200" height="200" />
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Embaixada do Amor</span>
                            <span className="text-center">[Gestão de pessoas]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="/images/departamentos/times.png" width="200" height="200"/>
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Times Square</span>
                            <span>[Captação de recursos e Marketing]</span>
                        </div>
                    </Tab>
                </div>
                <div className="flex justify-between pt-10">
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="/images/departamentos/vale.png" width="200" height="200" />
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Vale do Silício</span>
                            <span>[T.I.]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="/images/departamentos/ministerio.png" width="215" height="200" />
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Ministério</span>
                            <span>[Financeiro e Jurídico]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="/images/departamentos/hogwarts.png" width="200" height="200" />    
                            </div>
                            <span className="text-center font-extrabold text-blue-900 text-lg">Hogwarts</span>
                            <span>[Ensino]</span>
                        </div>
                    </Tab>
                </div>
            </Tab.List>
        </div>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.Panels>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros da Capital</span>
                    </h1>
                    <Capital />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros da Embaixada do Amor</span>
                    </h1>
                    <Embaixada />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros da Times Square</span>
                    </h1>
                    <Times />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros do Vale de Silício</span>
                    </h1>
                    <Vale />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros do Ministerio</span>
                    </h1>
                    <Ministerio />
                </Tab.Panel>
                <Tab.Panel>
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl py-20">
                        <span className="block text-blue-900 text-3xl">Conheça os membros de Hogwarts</span>
                    </h1>
                    <Hogwarts />
                </Tab.Panel>
            </Tab.Panels>
        </div>
      </Tab.Group>
    )
  }

export default TeamOrgTab