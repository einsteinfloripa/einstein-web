import { DocentesBaseFields } from "../../constants";

export class QuimicaFields extends DocentesBaseFields {
  subject = {
    ...this.subject,
    readOnly: true,
    initialValue: "Química",
  };

  front = {
    name: "front",
    title: "Frente",
    type: "string",
    options: {
      list: ["A", "B", "C"],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {
    super();
  }
}

const fields = new QuimicaFields();

export const quimica = {
  name: "quimica",
  title: "Docente (Química)",
  type: "document",
  fields: [...fields.fields],
};
