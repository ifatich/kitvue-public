  import { fn } from '@storybook/test';
  import { h } from 'vue';

  import Button from "../components/Button/Button.vue";
  import { setup } from '@storybook/vue3/*';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  export default {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    argTypes: {
      label: {
        control: "text"
      },
      type: {
        control: 'select',
        options: [
          'default', 'primary', 'destructive', 'outline', 'secondary', 'ghost', 'ghost-fab', 'neutral', 'tertiary', 'link', 'icon',
        ],
      },
      size: {
        control: 'select',
        options: [
          'sm', 'md', 'lg', 'xl'
        ],
      },
      display: {
        control: 'select',
        options: ['inline', 'block'],
      },
      disabled: {
        control: 'boolean',
      },
      onClick: { action: 'clicked' },
      icon: {
        control: 'text',
      },
    },
    args: {
      label: "Button",
      type: 'primary',
      size: 'md',
      display: 'inline',
      disabled: false,
      icon: "",
    },
  };

  // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
  export const Primary = {
    args: {
      type: 'primary',
    },
  };

  export const Secondary = {
    args: {
      type: "secondary",
    },
  };

  export const Large = {
    args: {
      size: 'lg',
    },
  };

  export const Small = {
    args: {
      size: 'sm',
    },
  };

// Template untuk menampilkan ikon
export const Icon = {
  args: {
    icon: "https://obqojequpinlinynnisz.supabase.co/storage/v1/object/public/ScanJaminan/sub-menu.png",
    type: "secondary",
    size: "md",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args" @click="args.onClick">
        <template #icon>
          <img v-if="args.icon" :src="args.icon" alt="icon" class="" />
        </template>
      </Button>
    `,
  }),
};

  
