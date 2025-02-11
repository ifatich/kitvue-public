import { ref } from "vue";
import InputText from "../components/Input/InputText.vue";

  export default {
    title: 'Components/InputField/Default',
    component: InputText,
    tags: ['autodocs'],
    argTypes : {
      label : { control:"text" },
      error : { control: "text" },
      class: { control: "text" },
      helperText: {control: "text"},
      type: {control: "select", options: ["text", "number"] },
      color: {control: "select", options: ["default", "blue", "green", "orange", "red"] },
    },
    args: {
      label: "Nama Lengkap",
      required: true,
      disabled: false,
      placeholder: "Masukkan nama lengkap",
      type: "text",
      error : null,
      helperText: "Ini adalah helpertext",
      color: "default",
    },
    render: (args) => ({
          components: { InputText },
          setup() {
            const modelValue = ref(""); // Hubungkan dengan args
            return { args, modelValue };
          },
          template: `
            <InputText v-bind="args" v-model="modelValue"/>
          `,
    }),
  };

  export const Text = {
    args: {
      modelValue: "modelValue"
    }
  };

  export const Number = {
    args: {
      label: "NIK KTP",
      placeholder : "Masukkan NIK KTP",
      type: "number",
    },
  };

  export const Red = {
    args: {
      color: "red",
    },
  };

  export const Blue = {
    args: {
      color: "blue",
    },
  };

  export const Green = {
    args: {
      color: "green",
    },
  };

  export const Orange = {
    args: {
      color: "orange",
    },
  };




  
