const university = [
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
    title: "Cargo",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  course = {
    name: "course",
    title: "Curso",
    type: "string",
    validation: (Rule) => Rule.required(),
  };

  university = {
    name: "university",
    title: "Universidade",
    type: "string",
    options: {
      list: [...university],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {}

  get fields() {
    return Object.values(this);
  }

  set subject(subject) {
    this.subject = subject;
  }
  set role(role) {
    this.role = role;
  }
}

export class DocentesBaseFields extends BaseFields {
  role = {
    ...this.role,
    options: {
      list: ["Professor(a)", "Monitor(a)"],
    },
    validation: (Rule) => Rule.required(),
  };

  constructor() {
    super();
  }
}
