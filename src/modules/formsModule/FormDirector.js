export class FormDirector {
  persons(builder) {
    const fields = [
      { name: "Person Name", type: "text" },
      { name: "Profession", type: "text" },
      { name: "Address", type: "text" },
      { name: "Age", type: "number" },
    ];
    builder.setFields(fields);
    builder.setSubmit("Save Person");
  }
  cars(builder) {
    const fields = [
      { name: "Brand", type: "text" },
      { name: "Model", type: "text" },
      { name: "Doors number", type: "number" },
      { name: "Year", type: "text" },
    ];
    builder.setFields(fields);
    builder.setSubmit("Save Car");
  }
  pets(builder) {
    const fields = [
      { name: "Name", type: "text" },
      { name: "Breed", type: "text" },
      { name: "age", type: "number" },
    ];

    builder.setFields(fields);

    builder.setSubmit("Save Pet");

  }
}
