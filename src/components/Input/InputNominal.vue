<template>
  <div class="p-5">
    <div class="group-input">
      <div class="input-group custom-input-group mb-2">
        <span class="input-group-text" id="basic-addon1">Rupiah</span>
        <input
          type="tel"
          class="form-control prevent-zero rupiah"
          placeholder="Text Input"
          aria-label="Masukkanrupiah"
          aria-describedby="basic-addon1"
          onkeyup="this.value = verifyFormatRp3(this.value, 'Rp. ')"
        />
      </div>
    </div>

    <div class="group-input">
      <div class="input-group custom-input-group mb-2">
        <input
          type="tel"
          class="form-control prevent-zero rupiah"
          placeholder="Text Input"
          aria-label="Masukkanrupiah"
          aria-describedby="basic-addon2"
          onkeyup="this.value = verifyFormatRp3(this.value, 'Rp. ')"
        />
        <span class="input-group-text right" id="basic-addon2">%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-input",
  props: {},
};
</script>
<style></style>
