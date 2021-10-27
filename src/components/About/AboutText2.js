function AboutText2() {
    return (
        <div className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-50" />
            </div>
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="hidden lg:flex pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="self-center rounded-xl lg:absolute lg:left-0 lg:h-auto lg:w-full"
                    src="/images/alunos.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div className="self-center bg-blue-900 rounded-xl lg:h-full w-full flex justify-center shadow-xl">
                  <div className="lg:w-5/6 py-10 px-8">
                      <h2 className="text-3xl font-extrabold tracking-tight text-blue-50">
                      Prazer somos o Einstein Floripa!
                      </h2>
                      <p className="mt-4 text-lg text-white">
                          Um curso pré-vestibular gratuito <strong>sem fins lucrativos</strong> voltado para pessoas de baixa renda da região da Grande Florianópolis. E juntos, ano após ano, conseguimos integrar cada vez mais esses alunos e alunas ao Ensino Superior.
                      </p>
                      <p className="mt-4 text-lg text-white">
                          Mais do que auxliar o cenário educacional brasileiro a ser mais democrático, proporcionamos oportunidades de aprendizado que resultam em crescimento pessoal e profissional em todos aqueles envolvidos com o projeto.
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
        </div>
    )
}

export default AboutText2