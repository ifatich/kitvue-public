import InputDropdownHeader from "../components/Dropdown/InputDropdownHeader.vue";
import InputDropdown from "../components/Dropdown/InputDropdown.vue";
import { ref } from "vue";

export default {
  title: "Example/Dropdown",
  component: InputDropdown,
  tags: ["autodocs"],
  render: () => ({
    setup(){
      return{
        daftarPilihan: [
          { id: 1, img: "beli_emas", nama: "Pilihan Pilihanb", link: "asa" },
          { id: 2, img: "beli_emas", nama: "Pilihan 2", link: "b.html" },
          { id: 3, img: "beli_emas", nama: "Pilihan 3", link: "c.html" },
          { id: 4, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 5, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 6, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 7, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 8, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 9, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 10, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
          { id: 11, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        ],
      }
    },
  }),
  argTypes: {
    label: { control: "text" },
    items: { control: "object" },
    itemValue: { control: "text" },
    itemText: { control: "text" },
    placeholder: { control: "text" },
    class: { control: "text" },
    error: { control: "object" },
    addClass: { control: "text" },
    modelValue : {control: "object"},
    color : {control: "select", options: ['none','red', 'blue', 'green', 'orange']}
  },
  args: {
    modelValue: null,
    label: "Pilihan Anda",
    items: null,
    itemValue: "id",
    itemText: "nama",
    placeholder: "Pengajuan kredit",
    error: null,
  },
};

export const DropdownHeader = { 
  args : {
    itemImg: "img",
    itemText: "nama",
    itemLink: "link"
  },
  render: (args) => ({
    components: { InputDropdownHeader },
    setup() {
      const daftarPilihan = [
        { id: 1, img: "beli_emas", nama: "Pilihan Pilihanb", link: "asa" },
        { id: 2, img: "beli_emas", nama: "Pilihan 2", link: "b.html" },
        { id: 3, img: "beli_emas", nama: "Pilihan 3", link: "c.html" },
        { id: 4, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 5, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 6, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 7, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 8, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 9, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 10, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 11, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
      ]
      const choosenValue = ref(null)
      return { args, daftarPilihan, choosenValue };
    },
    template: `
      <InputDropdownHeader 
         :itemImg="args.img"
        :itemLink="args.link"
        v-bind="args" 
        v-model="choosenValue"
        :items="daftarPilihan"
      />
    `,
  }),
};

export const Dropdown = { 
  render: (args) => ({
    components: { InputDropdown },
    setup() {
      const daftarPilihan = [
        { id: 1, img: "beli_emas", nama: "Pilihan Pilihan", link: "b.html" },
        { id: 2, img: "beli_emas", nama: "Pilihan 2", link: "b.html" },
        { id: 3, img: "beli_emas", nama: "Pilihan 3", link: "c.html" },
        { id: 4, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 5, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 6, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 7, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 8, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 9, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 10, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
        { id: 11, img: "beli_emas", nama: "Pilihan 4", link: "d.html" },
      ]
      const choosenValue = ref(null)
      return { args, daftarPilihan, choosenValue };
    },
    template: `
      <InputDropdown 
        v-bind="args" 
        v-model="choosenValue"
        :items="daftarPilihan"
      />
    `,
  }),
};
