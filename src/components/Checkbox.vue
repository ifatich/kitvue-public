<template>
  <div class="group-input custom-control custom-checkbox">
    <input
      type="checkbox"
      class="custom-control-input"
      :value="value"
      @change="updateInput"
      :id="value"
    />
    <label class="custom-control-label" :for="value">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "k-checkbox",
  props: {
    value: { type: String },
    modelValue: { default: "" },
    label: { type: String, required: true, default: "label" },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>
<style></style>
