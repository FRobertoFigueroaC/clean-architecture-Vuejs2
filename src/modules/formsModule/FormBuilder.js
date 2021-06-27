export class FormBuilder {
  constructor(h, vue) {
    this.h = h;
    this.vue = vue;
    this.fields = [];
    this.btn = undefined;
    this.form = {};
  }

  // Form
  setFields(fields) {
    this.setFormData(fields);
    this.setFormHtml(fields);
  }

  setFormData(fields) {
    fields.forEach((field) => {
      const type = field.type || "text";

      switch (type) {
        case "text":
          this.form[field.name] = "";
          break;
        case "number":
          this.form[field.name] = 0;
          break;
        case "date":
          this.form[field.name] = new Date();
          break;
        default:
          this.form[field.name] = "";
          break;
      }
    });
  }

  // Validation form
  validateForm(event) {
    event.preventDefault();
    console.log(this.form);
    alert("Submit the form");
  }

  // Events
  onInput(field,value) {
    this.form[field] = value
  }

  // HTML Renders
  getHtml() {
    return this.h("div", { class: "container mx-4" }, [
      this.h(
        "form",
        { class: "row g-3 align-items-center justify-content-center mx-4" },
        [this.fields, this.btn]
      ),
    ]);
  }

  setFormHtml(fields) {
    this.fields.push(
      fields.map((f) => {
        return this.formInput(f);
      })
    );
  }

  setSubmit(text = "Save") {
    this.btn = this.h("div", {}, [
      this.h("br", {}),
      this.h(
        "button",
        {
          class: "btn btn-primary",
          type: "submit",
          on: {
            click: () => this.validateForm(event),
          },
        },
        text
      ),
      this.h("br", {}),
    ]);
  }

  formInput(field) {
    const type = field.type || "text";
    return this.h("div", { class: "col-6" }, [
      this.h("label", { class: "form-label", },
        field.name
      ),
      this.h("br", {}),
      this.h("input", {
        class: "form-control input",
        domProps: {
          value: this.form[field.name],
          type: type,
          placeholder: field.name,
          name: field.name,
        },
        on: {
          input: (event) => this.onInput(field.name, event.target.value),
        },
      }),
    ]);
  }
}
