export class FormBuilder {
  constructor(h, vue) {
    this.h = h;
    this.vue = vue;
    this.fields = [];
    this.btn = undefined;
    this.form = {};
    this.rules = {};
    this.errors = [];
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
          this.rules[field.name] = field.rules;
          break;
        case "number":
          this.form[field.name] = 0;
          this.rules[field.name] = field.rules;
          break;
        case "date":
          this.form[field.name] = new Date();
          this.rules[field.name] = new Date();
          break;
        default:
          this.form[field.name] = "";
          this.rules[field.name] = field.rules;
          break;
      }
    });
  }

  // Validation form
  Submit(event) {
    event.preventDefault();

    if (this.validateForm()) {
      alert("Send data via API (check the console)");
      console.log('Form data', this.form);
    } else {
      alert("Validation error, show errors in DOM (check the console)");
      console.log('Show me in error list component (state based)', this.errors);
    }
  }
  validateForm() {
    const errors = [];
    Object.entries(this.form).forEach(([key, value]) => {
      const rulesOfField = this.rules[key];
      // Validate required
      if (rulesOfField !== undefined && Object.keys(rulesOfField).length > 0) {
        //validate require
        if (Object.keys(rulesOfField).includes("required") && !value) {
          errors.push({
            field:key,
            rule: "required",
            msg: `El campo ${key} es obligatorio`,
          });
        }
        // validate type
        // validate range
        // etc
      }
    });
    this.errors = errors;
    return (errors.length === 0);
  }

  // Events
  onInput(field, value) {
    this.form[field] = value;
  }

  // HTML Renders
  getHtml() {
    if (this.errors.length === 0) {
      return this.h("div", { class: "container mx-4" }, [
        this.h("form", { class: "row g-3 align-items-center justify-content-center mx-4" }, [this.fields, this.btn]),
      ]);
    } else {
      return this.h("div", { class: "container mx-4" }, [
        this.h("form", { class: "row g-3 align-items-center justify-content-center mx-4" }, [this.fields, this.btn]),
        this.h("div", { class: "row align-items-center justify-content-center mx-4 mt-4" },[
          this.errors.map(error => this.renderError(error))
        ]),
      ]);
    }
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
            click: () => this.Submit(event),
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

  renderError(error) {
    return this.h("div", { class: "alert alert-danger" }, error.msg);
  }
}
