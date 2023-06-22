import { GeografiaFields } from "./constants";

const fields = new GeografiaFields();

export const geografia = {
  name: "geografia",
  title: "Docente (Geografia)",
  type: "document",
  fields: [...fields.fields],
};
