import { DocentesBaseFields } from "../../constants";

export class MatematicaFields extends DocentesBaseFields {
  subject = {
    ...this.subject,
    readOnly: true,
    initialValue: "Matemática"
  };

  front = {
    name: "front",
    title: "Frente",
    type: "string",
    options: {
      list: ["A", "B", "C", "D"],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {
    super();
  }
}

const fields = new MatematicaFields();

export const matematica = {
  name: "matematica",
  title: "Docente (Matemática)",
  type: "document",
  fields: [...fields.fields],
};
