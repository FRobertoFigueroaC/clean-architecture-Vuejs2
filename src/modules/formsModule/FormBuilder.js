export class FormBuilder {
  constructor(h) {
    this.h = h;
    this.fields = [];
  }

  getForm(fields, text) {
    return this.h("div",{},[
      this.fields,
      this.setSubmit(text),
    ]);
  }
  setFields(fields) {
    this.fields.push(
      fields.map((f) => {
        return this.formInput(f);
      })
    );
  }
  setSubmit(text = "Guardar") {
    return this.h("div", {}, [
      this.h("br", {}),
      this.h("button", { class: "btn-primary", type: "submit" }, text),
      this.h("br", {}),
    ]);
  }

  formInput(field) {
    const type = field.type || "text";
    return this.h("div", {}, [
      this.h("label", {}, field.name),
      this.h("br", {}),
      this.h("input",{ class : {input:true}, domProps: {
          type: type,
          placeholder: field.name,
          name: field.name,
        }}),
    ]);
  }
}
