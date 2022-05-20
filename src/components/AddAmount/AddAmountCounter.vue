<template lang="">
  <div class="input-group add-amount-counter">
    <div class="add-amount-counter-box">
      <a class="add-amount-counter-box__button btn-decrement">
        <img
          src="/assets/images/icon-min-outline-dark.svg"
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
          src="/assets/images/icon-add-outline-green.svg"
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
