import { BaseFields } from "../../constants";

export class LinguagensFields extends BaseFields {
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

  role = {
    ...this.role,
    options: {
      list: ["Professor(a)", "Monitor(a)"],
    },
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
