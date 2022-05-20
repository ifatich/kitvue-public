<template>
  <div class="ajak-sahabat-info">
    <div class="ajak-sahabat-info__top">
      <h5>45 Sahabat</h5>
      <p>Rp 1.125.000 / Rp 2.500.000</p>
    </div>
    <div class="progress">
      <div
        class="progress-bar w-50"
        role="progressbar"
        aria-valuenow="45"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
    <div class="ajak-sahabat-info__bottom">
      <p>
        <img
          src="/assets/images/ico-crown-yellow.svg"
          alt=""
        />
        Kamu ada di peringkat 3.880.000!
      </p>
      <a href="./lihat-peringkat.html">Lihat Peringkat</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-chart-meter",
  props: {},
};
</script>
<style></style>
