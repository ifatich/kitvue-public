<template>
  <div class="p-5">
    <ul class="nav nav-tabs tab-box">
      <li class="nav-item tab-box__tab active">
        <a
          class="nav-link active"
          data-toggle="tab"
          href="#grafik-beli"
          onclick="changeChart('beli')"
          >Harga Beli</a
        >
      </li>
      <li class="nav-item tab-box__tab">
        <a
          class="nav-link"
          data-toggle="tab"
          href="#grafik-jual"
          onclick="changeChart('jual')"
          >Harga Jual</a
        >
      </li>
    </ul>

    <div class="tab-content tab-box-grafik">
      <div
        id="grafik-beli"
        class="tab-pane fade tab-box-grafik__div active show"
      >
        <div class="grafik-box-top">
          <div
            class="grafik-box-top__tab tab-active"
            onclick="changeGrafikBeli('1')"
          >
            1 Minggu
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikBeli('2')">
            1 Bulan
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikBeli('3')">
            6 Bulan
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikBeli('4')">
            1 Tahun
          </div>
        </div>
        <div class="grafik-box-bottom">
          <canvas id="chart-beli" width="400" height="200"></canvas>
        </div>
      </div>
      <div id="grafik-jual" class="tab-pane fade tab-box-grafik__div">
        <div class="grafik-box-top">
          <div
            class="grafik-box-top__tab tab-active"
            onclick="changeGrafikJual('1')"
          >
            1 Minggu
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikJual('2')">
            1 Bulan
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikJual('3')">
            6 Bulan
          </div>
          <div class="grafik-box-top__tab" onclick="changeGrafikJual('4')">
            1 Tahun
          </div>
        </div>
        <div class="grafik-box-bottom">
          <canvas id="chart-jual" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-chart",
  props: {},
};
</script>
<style></style>
