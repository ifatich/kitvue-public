<template>
  <div class="group-input__box-radio">
    <label
      class="radio-tab tab-option active"
      for="option-1"
      onclick="clickRadioForm('tab-option','option-1')"
    >
      <h6>Option 1</h6>
      <input
        type="radio"
        id="option-1"
        value="option-1"
        name="option"
        checked
      />
      <span class="checkmark"></span>
    </label>
    <label
      class="radio-tab tab-option"
      for="option-2"
      onclick="clickRadioForm('tab-option', 'option-2')"
    >
      <h6>Option 2</h6>
      <input type="radio" id="option-2" value="option-2" name="option" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script>
export default {
  name: "k-navbar-radio",
  props: {},
};
</script>
<style></style>
