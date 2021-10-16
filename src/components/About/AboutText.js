function AboutText() {
    return (
      <main>
            <div className="relative pt-16 pb-24 overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-full bg-about-pattern" />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:py-16 lg:relative lg:h-full">
                    <div className="md:flex md:flex-col">
                      <div className="self-center bg-purple-800 rounded-xl lg:h-full lg:w-full w-4/6 flex justify-center">
                        <div className="lg:w-5/6 py-10 px-2 md:px-8 pb">
                            <h2 className="text-3xl font-extrabold tracking-tight text-yellow">
                            Prazer somos o Einstein Floripa!
                            </h2>
                            <p className="mt-4 text-lg text-white">
                                Um curso pré-vestibular gratuito sem fins lucrativos voltado para pessoas de baixa renda da região da Grande Florianópolis. E juntos, ano após ano, conseguimos integrar cada vez mais esses alunos e alunas ao Ensino Superior.
                            </p>
                            <p className="mt-4 text-lg text-white">
                                Mais do auxliar o cenário educacional brasileiro a ser mais democrático, proporcionamos oportunidades de aprendizado que resultam em crescimento pessoal e profissional em todos aqueles envolvidos com o projeto.
                            </p>
                            <p className="mt-4 text-lg text-white">
                                O nosso cursinho é imerso num ambiente universitário. Nossa equipe é constituída através do recrutamento e desenvolvimento de universitários excepcionais, das mais diversas áreas da graduação. Formam-se organizadores, professores e monitores que trabalham voluntariamente para realizar o sonho de cada um de seus alunos e alunas: cursar uma universidade de qualidade.
                            </p>
                            <p className="mt-4 text-lg text-white">
                            Desse modo, voltamos nossos esforços para dar oportunidade aos 
                            <strong> alunos de baixa renda</strong> da região da Grande Florianópolis, 
                            fornecendo melhores oportunidades de<strong> acesso ao ensino superior de qualidade</strong> .
                            </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 px-4 max-w-xl mx-auto sm:px-6 lg:pt-16 lg:max-w-none lg:mx-0 lg:px-0">
                    <div className="md:flex md:flex-col">
                        <img
                            src="/images/alunos.png"
                            alt="Alunos aprovados e docentes"
                        />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
  }
  
  export default AboutText