<template>
    <div>
      <button @click="openModal" class="btn btn-primary">Pilih Gambar</button>
  
      <b-modal v-model="modalShow" title="Pilih Gambar" @hidden="closeModal">
        <button @click="openFilePicker" class="btn btn-secondary">Pilih File</button>
        <input
          type="file"
          ref="fileInput"
          style="display: none"
          @change="imgFileChange"
        />
      </b-modal>
  
      <img v-if="imgFile" :src="imgFile" alt="Preview Gambar" class="img-fluid">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        modalShow: false,
        imgFile: null,
      };
    },
    methods: {
      openModal() {
        this.modalShow = true;
      },
      openFilePicker() {
        this.$refs.fileInput.click();
      },
      imgFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            this.imgFile = reader.result;
            this.modalShow = false; // Menutup modal setelah gambar terpilih
          };
          reader.readAsDataURL(file);
        }
      },
      closeModal() {
        // Mengatur modalShow ke false tanpa mereset imgFile
        this.modalShow = false;
      },
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya khusus di sini jika diperlukan */
  </style>
  