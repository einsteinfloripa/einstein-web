export const faculdades = [
  {
    title: "UFSC",
    value: "UFSC",
  },
  {
    title: "UDESC",
    value: "UDESC",
  },
];

export class BaseFields {
  name = {
    name: "name",
    title: "Nome",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  image = {
    name: "image",
    title: "Foto",
    type: "image",
    validation: (Rule) => Rule.required(),
  };

  birthDate = {
    name: "birthday",
    title: "Data de Nascimento",
    type: "date",
    validation: (Rule) => Rule.required(),
  };

  subject = {
    name: "subject",
    title: "Matéria",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  role = {
    name: "role",
    title: "Frente",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  course = {
    name: "course",
    title: "Curso",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  faculdade = {
    name: "faculdade",
    title: "Faculdade",
    type: "string",
    options: {
      list: [...faculdades],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {}

  get fields() {
    return [
      this.name,
      this.image,
      this.birthDate,
      this.subject,
      this.role,
      this.course,
      this.faculdade,
    ];
  }

  set subject(subject) {
    this.subject = subject;
  }
  set role(role) {
    this.role = role;
  }
}
