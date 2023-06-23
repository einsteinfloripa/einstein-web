import { DocentesBaseFields } from "../../constants";

export class LinguagensFields extends DocentesBaseFields {
  subject = {
    ...this.subject,
    options: {
      list: ["Português", "Literatura", "Redação"],
    },
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

const fields = new LinguagensFields();

export const linguagens = {
  name: "linguagens",
  title: "Docente (Linguagens)",
  type: "document",
  fields: [...fields.fields],
};
