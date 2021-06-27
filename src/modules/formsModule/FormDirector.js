export class FormDirector {
  persons(builder) {
    const fields = [
      { name: "Person Name" },
      { name: "Profession" },
      { name: "Address" },
      { name: "Age", type: "number" },
    ];
    builder.setFields(fields);
  }
  cars(builder) {
    const fields = [
      { name: "Brand" },
      { name: "Model" },
      { name: "Doors number", type: "number" },
      { name: "Year" },
    ];
    builder.setFields(fields);
    builder.setSubmit("Save Car");
  }
  pets(builder) {
    const fields = [
      { name: "Name" },
      { name: "Breed" },
      { name: "age", type: "number" },
    ];

    builder.setFields(fields);

    builder.setSubmit("Save Pet");

  }
}
