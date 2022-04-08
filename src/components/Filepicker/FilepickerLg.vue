<template>
  <div class="custom-file-upload">
    <div class="custom-file-upload__box-preview" id="box-preview-image"></div>

    <div class="custom-file-upload__box-input">
      <span class="custom-file-upload__box-input-icon">
        <img
          src="https://dl.dropboxusercontent.com/s/mybidc5332pn1qo/ico-image-upload.svg"
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
  props: {},
};
</script>
<style></style>
