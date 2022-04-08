import AddAmountCounter from "./AddAmountCounter.vue";

export default {
  title: "Components/AddAmount",
  component: AddAmountCounter,
};
const Template = (args) => ({
  components: { AddAmountCounter },
  setup() {
    return { args };
  },
  template: '<AddAmountCounter v-bind="args" />',
});

export const Counter = Template.bind({});
Counter.args = {};
