<template>
  <section class="wrap-section-saldo">
    <div class="section-saldo">
      <div class="section-saldo__left">
        <div class="saldo-showed">
          <div class="saldo-showed__left">
            <p>Saldo Efektif</p>
            <div class="hide-value">
              <div class="hide-value__dot">
                <div class="dot-div"></div>
                <div class="dot-div"></div>
                <div class="dot-div"></div>
                <div class="dot-div"></div>
                <div class="dot-div"></div>
                <div class="dot-div"></div>
                <div class="dot-div"></div>
              </div>
              <h5 class="hide-value__text">250,1234 gram</h5>
            </div>
            <div class="hide-value">
              <p>Saldo blokir:</p>
              <div class="hide-value__dot">
                <div class="dot-div-sm"></div>
                <div class="dot-div-sm"></div>
                <div class="dot-div-sm"></div>
                <div class="dot-div-sm"></div>
              </div>
              <span class="hide-value__text"> 100,9876 gr</span>
            </div>
          </div>
          <div class="saldo-showed__right">
            <button id="show-saldo">
              <img src="/assets/images/eye-off.svg" id="eye-saldo" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="section-saldo__right">
        <div class="harga-jual-beli">
          <h6>Rp 5.000<span>/ 0,01 gr</span></h6>
          <a href="">
            Beli Emas <img src="/assets/images/icon-right.svg" alt="" />
          </a>
        </div>
        <div class="harga-jual-beli">
          <h6>Rp 5.000<span>/ 0,01 gr</span></h6>
          <a href="">
            Jual Emas
            <img src="/assets/images/icon-right.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-widget-saldo",
  props: {},
};
</script>
<style></style>
