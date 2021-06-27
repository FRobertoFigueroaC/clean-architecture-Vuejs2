<template>
  <div>
    <div class="bar">
      <h1>Forms</h1>
    </div>
    <div id="nav">
      <a :class="type === 'persons' ? 'btn btn-success text-white' : 'btn btn-outline-success'" @click="type = 'persons'">Persons</a> |
      <a :class="type === 'cars' ? 'btn btn-success text-white' : 'btn btn-outline-success'" @click="type = 'cars'">Cars</a> |
      <a :class="type === 'pets' ? 'btn btn-success text-white' : 'btn btn-outline-success'" @click="type = 'pets'">Pets</a>
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
