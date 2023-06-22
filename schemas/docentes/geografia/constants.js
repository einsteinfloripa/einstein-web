import { BaseFields } from "../../constants";

export class GeografiaFields extends BaseFields {
  subject = {
    ...this.subject,
    readOnly: true,
    initialValue: "Geografia",
  };

  role = {
    ...this.role,
    options: {
      list: ["Frente A", "Frente B"],
    },
  };

  constructor() {
    super();
  }
}
