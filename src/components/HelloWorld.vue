<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="form-group">
      <label for="name" class="">Name:</label>
      <input id="name" name="name" type="text" maxlength="25" autocomplete="none">
    </div>
    <div class="form-group">
      <label for="surname" class="">Surname:</label>
      <input id="surname" name="surname" type="text" maxlength="25" autocomplete="none">
    </div>
    <div class="form-group">
      <label for="phone" class="">Phone:</label>
      <input id="phone" name="phone" type="text" maxlength="25" autocomplete="none">
    </div>
  </div>
</template>

<script>
import inputAutofillDisable from "../mixins/inputAutofillDisable";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mixins: [inputAutofillDisable],
  mounted() {
    this.inputAutofillDisable()
  }
}
</script>
