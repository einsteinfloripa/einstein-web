import dayjs from "dayjs";

const day = dayjs().locale("pt-br").format("DD/MM");
const member = [
  {
    name: "Sthefany Gabrielle Melo Martins",
    role: "Assessora",
    course: "Jornalismo (UFSC)",
    birthday: "03/11",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/org/sthe.png"
        : "https://einsteinfloripa.com.br/images/org/sthe.png";
    },
  },
  {
    name: "Fabricia Soledade Silva",
    role: "Assessora",
    course: "Engenharia Eletrônica (UFSC)",
    birthday: "28/10",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/org/fabricia-soledade.png"
        : "https://einsteinfloripa.com.br/images/org/fabricia-soledade.png";
    },
  }
];

function Times() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-justify pb-20 w-9/12">
        Times Square é o departamento de marketing e captação de recursos do
        Einstein Floripa. A área de Marketing promove a imagem da instituição,
        gerencia a identidade visual e planeja a comunicação com o público
        externo. É responsável também por produzir conteúdos para divulgações
        internas e externas, além de gerenciar as mídias sociais. Por outro
        lado, a área de Captação de Recursos é responsável por buscar empresas e
        firmar parcerias, captar doações e realizar eventos de arrecadação, de
        modo a conseguir capital político e financeiro que garantam a
        sustentabilidade da instituição.
      </p>
      <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {member.map((eisteiniano) => (
          <li key={eisteiniano.name} className="h-96 w-72 relative">
            {eisteiniano.isBirthday ? (
              <div className="conteiner-cake">
                <div className="cake">
                  <div className="candle">
                    <div className="fire"></div>
                    <div className="fire"></div>
                    <div className="fire"></div>
                    <div className="fire"></div>
                    <div className="fire"></div>
                  </div>
                  <div className="frosting"></div>
                  <div className="bizcocho"></div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center">
              <div>
                <img
                  className={`object-cover shadow-lg rounded-lg h-64 w-64 ${eisteiniano.isBirthday ? "" : "grayscale"
                    }`}
                  src={eisteiniano.imageUrl}
                  alt=""
                />
              </div>

              <div className="space-y-1 xl:flex xl:items-center xl:justify-between">
                <div className="font-medium text-sm text-center">
                  <h3 className="text-xl">{eisteiniano.name}</h3>
                  <p className="text-blue text-center">{eisteiniano.role}</p>
                  <p className="text-center">{eisteiniano.course}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Times;
