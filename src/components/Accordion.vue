<template lang="">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item" v-for="(item, index) in items" :key="index">
      <h2 class="accordion-header" :id="'#heading' + index">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseOne' + index"
          aria-expanded="true"
          :aria-controls="'collapseOne' + index"
        >
          {{ item.title }}
        </button>
      </h2>
      <div
        :id="'collapseOne' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'#heading' + index"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          {{ item.body }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-accordion",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          title: "Apa itu produk Kreasi Ultra Mikro?",
          body: "Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain.",
        },
        {
          title: "Apa itu produk Kreasi Ultra Mikro?",
          body: "Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain.",
        },
      ],
    },
  },
};
</script>
<style lang=""></style>
