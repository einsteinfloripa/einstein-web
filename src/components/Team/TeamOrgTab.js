import { Tab } from '@headlessui/react'

function TeamOrgTab() {
    return (
      <Tab.Group>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.List>
                <div className="justify-center items-center">
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img  src="http://einsteinfloripa.com.br/wp-content/uploads/2016/07/Embaixada-do-Amor.png" alt="Embaixada do Amor" width="200" height="200" />
                            </div>
                            <span className="text-center">Embaixada do Amor</span>
                            <span className="text-center">[Gestão de pessoas]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/2016/07/Golddiggers.png" width="200" height="200"/>
                            </div>
                            <span>Times Square</span>
                            <span>[Captação de recursos e Marketing]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/2016/07/Hogwarts.png" width="200" height="200" />    
                            </div>
                            <span>Hogwarts</span>
                            <span>[Ensino]</span>
                        </div>
                    </Tab>
                </div>
                <div className="flex justify-between">
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/2016/07/Matrix.png" width="200" height="200" />
                            </div>
                            <span>Vale do Silício</span>
                            <span>[T.I.]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/banco.png" width="215" height="200" />
                            </div>
                            <span>Ministério</span>
                            <span>[Financeiro e Jurídico]</span>
                        </div>
                    </Tab>
                    <Tab className="transform motion-safe:hover:scale-110 px-8">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center w-200 h-200 mx-auto bg-transparente text-blue-900 sm:w-200 sm:h-200">
                                <img class="imgtran" src="http://einsteinfloripa.com.br/wp-content/uploads/Capital.png" width="200" height="200" />
                            </div>
                            <span>Capital</span>
                            <span>[Diretoria Administrativa]</span>
                        </div>
                    </Tab>
                </div>
            </Tab.List>
        </div>
        <div className="relative flex flex-col md:flex-row sm:items-center sm:justify-center">
            <Tab.Panels>
                <Tab.Panel>Embaixada do Amor [Gestão de pessoas]</Tab.Panel>
                <Tab.Panel>Times Square [Captação de recursos e Marketing]</Tab.Panel>
                <Tab.Panel>Hogwarts [Ensino]</Tab.Panel>
                <Tab.Panel>Vale do Silício [T.I.]</Tab.Panel>
                <Tab.Panel>Ministério [Financeiro e Jurídico]</Tab.Panel>
                <Tab.Panel>Capital [Diretoria Administrativa]</Tab.Panel>
            </Tab.Panels>
        </div>
      </Tab.Group>
    )
  }

export default TeamOrgTab