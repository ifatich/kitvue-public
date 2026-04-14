import GlobalComponent from "../components/GlobalComponent.vue";

export default {
  title: 'Components/GlobalComponent',
  component: GlobalComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GlobalComponent adalah playground/demo component yang menampilkan berbagai UI components dalam satu halaman.'
      }
    }
  }
};

export const Default = {
  args: {},
  render: (args) => ({
    components: { GlobalComponent },
    setup() {
      return { args };
    },
    template: '<GlobalComponent v-bind="args" />',
  })
};

export const Main = {
  render: () => ({
    components: { GlobalComponent },
    template: '<GlobalComponent />',
  })
};
