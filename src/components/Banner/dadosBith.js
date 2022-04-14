import dayjs from "dayjs";

const day = dayjs().locale("pt-br").format("DD/MM");
const member = [
	//Membros da Capital
	{
		name: "Vicente Cassol Silva ",
		role: "Presidente",
		course: "Engenharia de Produção Mecânica (UFSC)",
		birthday: "06/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Murillo Stein",
		role: "Diretor de Projetos/Hogwarts",
		course: "Engenharia Mecânica (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Laísa Ágathe Dacroce",
		role: "Diretora",
		course: "Relações Internacionais (UFSC)",
		birthday: "09/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Karim Cruz",
		role: "Diretora de Times Square/Embaixada",
		course: "Farmácia (UFSC)",
		birthday: "14/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Djonys Dalmy de Oliveira",
		role: "Diretor do Vale do Silício",
		course: "Sistemas da Informação (UFSC)",
		birthday: "06/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},

	//Membro da Embaixada
	{
		name: "Karim Cruz",
		role: "Diretora",
		course: "Farmácia (UFSC)",
		birthday: "14/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Carine Redivo Bonchristiani",
		role: "Assessora",
		course: "Psicólogia (UFSC)",
		birthday: "26/12",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Bruna Bastian da Costa",
		role: "Assessora",
		course: "Farmácia (UFSC)",
		birthday: "06/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Livia de Oliveira Botelho",
		role: "Assessora",
		course: "Engenharia de Materiais (UFSC)",
		birthday: "06/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Maitê Silveira Cardoso",
		role: "Assessora",
		course: "Relações Internacionais (UFSC)",
		birthday: "06/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	//Membros da Times
	{
		name: "Karim Cruz",
		role: "Diretora",
		course: "Farmácia (UFSC)",
		birthday: "14/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Sofia Sauer",
		role: "Assessora",
		course: "Relações Internacionais (UFSC)",
		birthday: "01/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Liliane Matsuzawa",
		role: "Assessora",
		course: "Design (IFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Giovana Karsten Tamanini",
		role: "Assessora",
		course: "Relações Internacionais (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	//Membros do Vale
	{
		name: "Djonys Dalmy de Oliveira",
		role: "Diretor",
		course: "Sistemas da Informação (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Luiza Kataoka P. de Oliveira",
		role: "Assessora",
		course: "Engenharia de Materiais (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Gabriel Viana Boaes",
		role: "Assessor",
		course: "Física (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Eduardo Battisti Leites",
		role: "Assessor",
		course: "Engenharia de Produção Elétrica (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	//Membros Ministerio
	{
		name: "Laísa Ágathe Dacroce",
		role: "Diretora",
		course: "Relações Internacionais (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
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
	},
	{
		name: "Gabriela Sant'Anna Virtuoso",
		role: "Assessora",
		course: "Direito (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Camila Zambom",
		role: "Assessora",
		course: "Relações Internacionais (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	//Membro Hogwarts
	{
		name: "Murillo Stein",
		role: "Diretor",
		course: "Engenharia Mecânica (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Maria Luiza Pierri",
		role: "Assessora",
		course: "Relações Internacionais (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Matheus Bateli Neumann",
		role: "Assessor",
		course: "Engenharia Elétrica (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
	{
		name: "Fernanda Clemente Hiramoto",
		role: "Assessora",
		course: "Farmácia (UFSC)",
		birthday: "10/04",
		get isBirthday() {
			return day === this.birthday;
		},
	},
];
export default member;
