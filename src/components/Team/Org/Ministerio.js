import dayjs from "dayjs";

const day = dayjs().locale("pt-br").format("DD/MM");
const member = [
  {
    name: "Vicente Cassol Silva ",
    role: "Gestor",
    course: "Engenharia de Produção Mecânica (UFSC)",
    birthday: "28/04",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/aniversarios/vicente.png"
        : "https://einsteinfloripa.com.br/images/org/vicente.png";
    },
  },
  {
    name: "Pietro Braga Figueiredo",
    role: "Assessor",
    course: "Economia (UFSC)",
    birthday: "10/04",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
        : "https://einsteinfloripa.com.br/images/org/pietro.png";
    },
  },
  /*{
		name: "Mauricio Wendhausen Becker",
		role: "Assessor",
		course: "Direito (UFSC)",
		birthday: "",
		get isBirthday() {
			return day === this.birthday;
		},
		get imageUrl() {
			return this.isBirthday
				? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
				: "https://einsteinfloripa.com.br/images/org/gabriela.png";
		},
	},*/
  {
    name: "Camila Zambom",
    role: "Assessora",
    course: "Relações Internacionais (UFSC)",
    birthday: "10/04",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/aniversarios/karim.png"
        : "https://einsteinfloripa.com.br/images/org/camila.png";
    },
  },
];

function Ministerio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-justify pb-20 w-9/12">
        O Ministério atua na área jurídica e financeira para garantir que o
        projeto continue impactando mais vidas, com maturidade e
        responsabilidade. Os ministros gerem os recursos financeiros e
        patrimoniais, são responsáveis pelo planejamento orçamentário, aprovando
        e controlando entradas e saídas, e difundindo sua importância entre as
        demais áreas. Também elaboram e redigem contratos, e possibilitam que o
        Einstein esteja sempre alinhado com a legislação vigente, permitindo uma
        maior segurança jurídica.
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
                  className={`object-cover shadow-lg rounded-lg h-64 w-64 ${
                    eisteiniano.isBirthday ? "" : "grayscale"
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
export default Ministerio;
