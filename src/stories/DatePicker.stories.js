import { ref } from "vue";
import InputSmallDate from "../components/Input/InputSmallDate.vue";
import DateRangePickerOption from "../components/Input/DateRangePickerOption.vue";

export default {
  title: "Example/DatePicker",
  component: InputSmallDate,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    classes: { control: "text" },
    modelValue: { control: "text" },
    selectedYear: { control: "object" },
    addClass: { control: "text" },
  },
  args: {
    title: "Tanggal Lahir",
    placeholder: "Pilih tanggal",
    disabled: false,
    required: false,
    selectedYear: new Date().getFullYear(),
  },
};

export const DatePicker = {
  render: (args) => ({
    components: { InputSmallDate },
    setup() {
      const selectedDate = ref(null);
      return { args, selectedDate };
    },
    template: `
      <InputSmallDate 
        v-bind="args" 
        v-model="selectedDate"
      />
    `,
  }),
};

export const DatePickerOption = {
  args: {
    title : "Tanggal Pengajuan",
    placeholder : "Pilih Tanggal Pengajuan",
    disabled: false
  },
  render: (args) => ({
    components: { DateRangePickerOption },
    setup() {
      return { args };
    },
    template: `
      <DateRangePickerOption 
        v-bind="args"
        :title="args.title"
      />
    `,
  }),
};

