import dayjs from "dayjs";
import { useContext } from "react";

import BirthdayContext from "../../Contexts/BithdayContext";

const day = dayjs().locale("pt-br").format("DD/MM");
const member = [
  {
    name: "Matheus Bateli Neumann",
    role: "Presidente",
    course: "Engenharia Elétrica (UFSC)",
    birthday: "10/04",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/org/matheus.png"
        : "https://einsteinfloripa.com.br/images/org/matheus.png";
    },
  },
  {
    name: "Juliana Harumi Tsuji",
    role: "Diretora de Hogwarts",
    course: "Relações Internacionais (UFSC)",
    birthday: "07/10",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/org/harumi.png"
        : "https://einsteinfloripa.com.br/images/org/harumi.png";
    },
  },
  {
    name: "Larissa Mariah Maia",
    role: "Diretora da Embaixada",
    course: "Relações Internacionais (UFSC)",
    birthday: "19/01",
    get isBirthday() {
      return day === this.birthday;
    },
    get imageUrl() {
      // TODO: Add Larissa's image
      return this.isBirthday
        ? "https://einsteinfloripa.com.br/images/org/larissa-maia.png"
        : "https://einsteinfloripa.com.br/images/org/larissa-maia.png";
    },
  }
];

function Capital() {
  const { isBirthday, setIsBirthday } = useContext(BirthdayContext);

  member.forEach((eisteiniano) => {
    console.log(eisteiniano.isBirthday);
    if (eisteiniano.isBirthday) {
      setIsBirthday(true);
    }
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-justify pb-20 w-9/12">
        A Capital, também conhecida como Diretoria Administrativa, é responsável
        por garantir o funcionamento e o crescimento do cursinho, por definir os
        direcionamentos estratégicos a cada ano e promover a disseminação dos
        valores Einsteinianos. Constituída por todos os diretores, um de cada
        departamento, e pelo(a) presidente, a Capital representa o Einstein
        Floripa interna e externamente, e por isso, também é responsável pelas
        decisões em última instância dentro do cursinho. As discussões e
        decisões são realizadas em reuniões semanais, que são abertas a todos os
        voluntários, organizadores, professores e monitores. É na Capital também
        que é decidido o Calendário Einsteiniano, com datas de processos
        seletivos, recessos escolares e outros eventos.
      </p>
      <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {member.map((eisteiniano, index) => (
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

            <div className="pt-5 space-y-4 bg-white rounded-md drop-shadow-xl h-96 flex flex-col items-center ">
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
export default Capital;
