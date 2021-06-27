<script>
import { FormBuilder } from "../FormBuilder";
import { FormDirector } from "../FormDirector";
export default {
  name: "FormBuilder",
  props: ["formMethod"],
  render(h) {
    const director = new FormDirector();
    const builder = new FormBuilder(h);
    director[this.formMethod](builder);
    return builder.getForm();
  },
};
</script>

<style scoped></style>
