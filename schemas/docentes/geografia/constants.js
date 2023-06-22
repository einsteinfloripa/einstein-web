import { BaseFields } from "../../constants";

export class GeografiaFields extends BaseFields {
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
      list: ['A', 'B'],
    },
    validation: (Rule) => Rule.required(),
  };

  role = {
    ...this.role,
    options: {
      list: ["Professor", "Monitor"],
    },
  };



  constructor() {
    super();
  }
}
