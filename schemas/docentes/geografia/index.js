import { DocentesBaseFields } from "../../constants";

export class GeografiaFields extends DocentesBaseFields {
  subject = {
    ...this.subject,
    readOnly: true,
    initialValue: "Geografia",
  };

  front = {
    name: "front",
    title: "Frente",
    type: "string",
    options: {
      list: ["A", "B"],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {
    super();
  }
}

const fields = new GeografiaFields();

export const geografia = {
  name: "geografia",
  title: "Docente (Geografia)",
  type: "document",
  fields: [...fields.fields],
};
