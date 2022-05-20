<template>
  <div class="custom-file-upload">
    <div class="custom-file-upload__box-preview" id="box-preview-image"></div>

    <div class="custom-file-upload__box-input">
      <span class="custom-file-upload__box-input-icon">
        <img
          src="/assets/images/ico-image-upload.svg"
          alt=""
        />
      </span>
      <input
        type="file"
        id="gallery-photo-add"
        class="custom-file-upload__box-input-file"
        onchange="imagesPreview1(this, '.custom-file-upload__box-preview')"
        multiple
        accept="image/*"
        required
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "k-filepicker-lg",
  props: {
    file: {
      type: [File, Object],
    },
  },
  watch: {
    value(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    },
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i]
      );
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("input", e.target.files[0]);
    },
    remove() {
      this.$emit("input", null);
    },
  },
};
</script>
<style></style>
