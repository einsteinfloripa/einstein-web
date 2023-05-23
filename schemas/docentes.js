export const docentes = {
  name: "docentes",
  title: "Docentes",
  type: "document",
  fields: [
    {
      name: "nome",
      title: "Nome",
      type: "string",
    },
    {
      name: "frente",
      title: "Frente",
      type: "string",
      list: [
        {
          title: "Física",
          value: "fisica",
        },
        {
          title: "Química",
          value: "quimica",
        },
      ],
    },
  ],
};
