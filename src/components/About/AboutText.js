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
                      Prazer, somos o Einstein Floripa!
                      </h2>
                      <p className="mt-4 text-lg text-white">
                        Proporcionamos um <strong>curso pré-vestibular</strong> gratuito e sem fins lucrativos, voltado para pessoas de baixa renda da região da Grande Florianópolis. Trabalhamos juntos, ano após ano, de modo a viabilizar o acesso de cada vez mais alunos e alunas ao ensino superior de qualidade.
                      </p>
                      <p className="mt-4 text-lg text-white">
                        Mais do que <strong>aumentar a democracia no cenário educacional brasileiro</strong>, proporcionamos oportunidades de aprendizado que resultam em <strong>crescimento pessoal e profissional</strong> para todos aqueles envolvidos com o projeto.
                      </p>
                      <p className="mt-4 text-lg text-white">
                        O nosso cursinho é imerso no ambiente universitário. Nossa equipe é constituída através do recrutamento e desenvolvimento de <strong>estudantes universitários excepcionais</strong>, das mais diversas áreas da graduação.
                      </p>
                      <p className="mt-4 text-lg text-white">
                        Formamos organizadores, professores e monitores que <strong>trabalham voluntariamente</strong> para realizar o sonho de cada um de nossos alunos: cursar uma universidade de qualidade.
                      </p>
                      <p className="mt-4 text-lg text-white">
                        Desse modo, voltamos nossos esforços para <strong>dar oportunidade aos alunos</strong> de baixa renda da região de Florianópolis, fornecendo melhores oportunidades de <strong>acesso ao ensino superior</strong>.
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