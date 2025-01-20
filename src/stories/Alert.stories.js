import AlertVarian from "../components/Alert/AlertVarian.vue";


 export default {
    title: 'Example/Alert',
    component: AlertVarian,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    argTypes: {
      label: {
        control: "text"
      },
      color: {
        control: 'select',
        options: [
          "sucess", "info", "danger", "warning",
        ],
      },
      variant: {
        control: "text"
      },
      hideAction: {
        control: 'boolean',
      },
    },
    args: {
      label: "Lorem ipsum dolor sit amet",
      color: 'success',
      hideAction: true,
    },
  };

  export const Danger = {
    args: {
      color: 'danger',
    },
  };

  export const Success = {
    args: {
      color: 'success',
    },
  };

  export const Info = {
    args: {
      color: 'info',
    },
  };

  export const Warning = {
    args: {
      color: 'warning',
    },
  };

  export const WithAction = {
    args: {
      label: "Lorem ipsum dolor sit amet",
      color: 'info',
      hideAction: false,
    },
    render: (args) => ({
      components: { AlertVarian },
      setup() {
        return { args };
      },
      template: `
        <AlertVarian v-bind="args"> 
         <template #action>
            Lihat Detail
          </template>
        </AlertVarian>
      `,
    }),
  }; 