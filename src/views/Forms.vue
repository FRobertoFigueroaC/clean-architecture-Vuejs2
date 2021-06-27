<template>
  <div>
    <div class="bar">
      <h1>Forms</h1>
    </div>
    <div id="nav">
      <a :class="type === 'persons' ? 'title' : ''" @click="type = 'persons'">Persons</a> |
      <a :class="type === 'cars' ? 'title' : ''" @click="type = 'cars'">Cars</a> |
      <a :class="type === 'pets' ? 'title' : ''" @click="type = 'pets'">Pets</a>
    </div>

    <div>
      <FormBuilder :formMethod="type"></FormBuilder>
    </div>
  </div>
</template>

<script>
import FormBuilder from '../modules/formsModule/components/FormBuilder'
export default {
  name: "Forms",
  components: {
    FormBuilder,
  },
  data() {
    return {
      type: "pets",
    };
  },
};
</script>

<style scoped>
.bar {
}
</style>
