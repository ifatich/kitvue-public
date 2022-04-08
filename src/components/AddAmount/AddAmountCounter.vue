<template lang="">
  <div class="input-group add-amount-counter">
    <div class="add-amount-counter-box">
      <a class="add-amount-counter-box__button btn-decrement">
        <img
          src="https://dl.dropboxusercontent.com/s/jo9wfsxd294jjr6/icon-min-outline-dark.svg"
          alt=""
        />
      </a>
      <div class="add-amount-counter-box__content">
        <input
          type="tel"
          id="sumGold"
          class="add-amount-counter-box__input"
          minlength="1"
          value="1"
          onchange="checkFormsValidity('form-tambah-emas-batangan', 'SubmitReply')"
          required
        />
      </div>
      <a class="add-amount-counter-box__button btn-increment">
        <img
          src="https://dl.dropboxusercontent.com/s/d7qbw3rdesg056n/icon-add-outline-green.svg"
          alt=""
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-add-amount-counter",
};
</script>
<style lang=""></style>
