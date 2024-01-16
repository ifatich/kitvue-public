<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <b-dropdown v-model="selectedOption" toggle-class="w-100 btn-neutral gkit-dd">
        <template #button-content>
          {{ selectedOption || 'Pilih ' + title.toLowerCase() }}
          <span>
            <img :src="require('../../assets/icon/chevron_down.svg')" />
          </span>
        </template>
        <b-dropdown-form @submit.stop.prevent>
          <b-form-input v-model="searchTerm" :placeholder="['Pilih '+ title.toLowerCase()]"></b-form-input>
        </b-dropdown-form>
        <b-dropdown-item v-for="option in options" :key="option.value" @click="selectOption(option)">
          {{ option.label }}
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        default: "Title",
      },
      options: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        selectedOption: null,
        searchTerm: "",
      };
    },
    methods: {
      selectOption(option) {
        this.selectedOption = option.label;
        this.searchTerm = "";
        this.$emit("change", option.value);
      },
    },
  };
  </script>

<style scoped>
    .btn-group {
        width: 100%;
    }
</style>