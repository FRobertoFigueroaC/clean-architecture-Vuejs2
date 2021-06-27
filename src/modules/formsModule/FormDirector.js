export class FormDirector {
  persons(builder) {
    const fields = [
      { name: "Person Name", type: "text", rules: { required: true } },
      { name: "Profession", type: "text", rules: [] },
      { name: "Address", type: "text", rules: [] },
      { name: "Age", type: "number", rules: { required: true } },
    ];
    builder.setFields(fields);
    builder.setSubmit("Save Person");
  }
  cars(builder) {
    const fields = [
      { name: "Brand", type: "text", rules: { required: true } },
      { name: "Model", type: "text", rules: { required: true } },
      { name: "Doors number", type: "number" },
      { name: "Year", type: "text" },
    ];
    builder.setFields(fields);
    builder.setSubmit("Save Car");
  }
  pets(builder) {
    const fields = [
      { name: "Name", type: "text", rules: { required: true } },
      { name: "Breed", type: "text" },
      { name: "age", type: "number" },
    ];

    builder.setFields(fields);

    builder.setSubmit("Save Pet");

  }
}
