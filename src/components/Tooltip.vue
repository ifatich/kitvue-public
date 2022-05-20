<template>
  <h6 class="d-flex align-items-center">
    Beli Emas
    <div class="icon-info mobile-hide">
      <img
        src="/assets/images/ico-info-tips.svg"
        alt=""
      />
      <div class="tooltips">
        Harga saat Pegadaian membeli emas Anda, yang Anda terima saat menjual
        emas. Harga dapat berubah sewaktu-waktu.
      </div>
    </div>
    <div
      class="icon-info mobile-show"
      data-bs-toggle="modal"
      data-bs-target="#beliEmas"
    >
      <img
        src="/assets/images/ico-info-tips.svg"
        alt=""
      />
    </div>
    <section class="section-overlay-modal-pds mobile-version">
      <div
        class="modal fade"
        id="beliEmas"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        data-backdrop="false"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-tambah-emas-batangan modal-layout-pds custom-width-360"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Beli Emas</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img
                  src="/assets/images/close.svg"
                  alt=""
                />
              </button>
            </div>
            <div class="modal-body">
              Harga saat Pegadaian membeli emas Anda, yang Anda terima saat
              menjual emas. Harga dapat berubah sewaktu-waktu.
              <div class="mt-3">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  data-bs-dismiss="modal"
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </h6>
</template>
<script>
export default {
  name: "k-tooltip",
  props: {},
};
</script>
<style></style>
