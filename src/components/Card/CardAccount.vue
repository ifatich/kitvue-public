<template>
  <div class="mb-4">
    <div :class="'card-account' + (type ? '-' + type : '')">
      <span>{{ saldoLabel }}</span>
      <h4>{{ saldoValue }} gram</h4>

      <p id="no-rek-utama">{{ cardNo }}</p>
      <span>{{ holder }}</span>

      <img
        src="/assets/images/ico-emas-black.svg"
        alt=""
      />
    </div>
  </div>

  <!-- <div class="card-account-green">
    <span>Saldo G-Cash</span>
    <h4>Rp 500.000</h4>

    <p id="no-rek-utama">{{ cardNo }}</p>

    <img
      src="https://dl.dropboxusercontent.com/s/nkv1p594ku3ph8b/logo-bank-bni-white.png"
      alt=""
    />
  </div> -->
</template>
<script>
export default {
  name: "k-card-account",
  props: {
    type: {
      type: String,
      default: "green",
      Validator: function (value) {
        return ["green", "red", "blue", "white"].indexOf(value) !== -1;
      },
    },
    saldoLabel: {
      type: String,
      default: "Saldo Efektif",
    },
    saldoValue: {
      type: String,
      default: "250, 1234",
    },
    cardNo: {
      type: String,
      default: "",
    },
    holder: {
      type: String,
      default: "UPC Pasar Mencos",
    },
  },
};
</script>
<style></style>
