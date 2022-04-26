<template>
  <div class="group-input__box-radio">
    <label
      v-for="(item, index) in items"
      :key="index"
      class="radio-tab tab-option"
      :class="{ active: item.checked }"
      :for="'option' + index"
      onclick="clickRadioForm('tab-option', 'option2')"
    >
      <h6>{{ item.label }}</h6>
      <input
        :disabled="item.disabled"
        type="radio"
        :id="'option' + index"
        :value="item.value"
        :name="label"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>
<script>
export default {
  name: "k-navbar-radio",
  props: {
    items: {
      default: function () {
        return [
          {
            disabled: false,
            value: 1,
            label: "Option 1",
            checked: false,
          },
          {
            disabled: false,
            value: 2,
            label: "Option 2",
            checked: true,
          },
        ];
      },
    },
  },
};
</script>
<style></style>
