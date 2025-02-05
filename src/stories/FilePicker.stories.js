import InputCamera from "../components/Input/InputCamera.vue";
import FilePickerLG from "../components/Filepicker/FilePickerLG.vue";



export default {
  title: "Example/FilePicker",
  component: FilePickerLG,
  tags: ["autodocs"],
  argTypes: {
    errorText: {contorl: "text"},
    file: {control: "object"},
    showPreview : {control: "boolean"},
    uniqueKey : {control: "text" , require: true}
  },
  args: {
    errorText: "File terlalu besar, maksimal 1 MB.",
    uniqueKey: "fileInput",
  },
};

export const FilePicker = {
  args: {
    showPreview: false,
  },
};

export const ImagePicker = {
  args: {
    showPreview: true,
  },
};

export const ImagePickerCameraDesktop = {
  args: {
    title: "Upload Foto",
    useBottomSheet: false,
    compressionMaxKb: 1024,
  },
  render: (args) => ({
    components: { InputCamera },
    setup() {
      return { args };
    },
    template: `
      <InputCamera v-bind="args" >
      </InputCamera>
    `,
  }),
};

export const ImagePickerCameraMobile = {
  args: {
    title: "Upload Foto",
    useBottomSheet: true,
    compressionMaxKb: 1024,
  },
  render: (args) => ({
    components: { InputCamera },
    setup() {
      return { args };
    },
    template: `
      <InputCamera v-bind="args" >
      </InputCamera>
    `,
  }),
};
