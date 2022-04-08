import AddAmountItem from "./AddAmountItem.vue";

export default {
  title: "Components/AddAmount",
  component: AddAmountItem,
};
const Template = (args) => ({
  components: { AddAmountItem },
  setup() {
    return { args };
  },
  template: '<AddAmountItem v-bind="args" />',
});

export const Item = Template.bind({});
Item.args = {};
