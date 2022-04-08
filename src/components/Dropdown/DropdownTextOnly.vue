<template>
  <div class="group-input">
    <div
      class="accordion custom-accordion-input mobile-hide"
      id="box-jenisTransaksi"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <span id="defaultSelected-jenisTransaksi">Pilih provinsi </span>
            <input
              type="text"
              id="val-jenisTransaksi"
              name="jenis-transaksi"
              hidden
            />
            <div
              class="accordion-button__selected"
              id="newSelected-jenisTransaksi"
            >
              <div class="accordion-button__selected-detail">
                <h5 id="newSelectedItem-jenisTransaksi"></h5>
              </div>
            </div>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#box-jenisTransaksi"
        >
          <div class="accordion-body">
            <div class="pgd-box-search-grey m-2">
              <div class="icon">
                <img
                  src="https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg"
                  alt=""
                />
              </div>
              <input type="search" placeholder="Cari provinsi" />
            </div>
            <div class="box-item">
              <div
                class="box-item__content item-dropdown"
                onclick="comboBoxSelected('val-jenisTransaksi', 'defaultSelected-jenisTransaksi', 'newSelected-jenisTransaksi', 'newSelectedItem-jenisTransaksi', 'DKI Jakarta')"
              >
                <div class="box-ceklist">
                  <h6>DKI Jakarta</h6>
                  <img
                    src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input
      type="hidden"
      id="jenisMobileInput"
      name="jenis"
      onchange="checkValue(this, 'cicil-gadai-1')"
    />
    <button
      type="button"
      class="btn-pilih-jangka"
      data-bs-toggle="modal"
      data-bs-target="#modal-select-option-jenis"
    >
      <h6 id="jenis-mobile-text" class="btn-pilih-jangka__text">
        Pilih provinsi
      </h6>
      <img
        src="https://dl.dropboxusercontent.com/s/vnj3lkbwbskynob/icon-down.svg"
        alt=""
      />
    </button>
  </div>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="modal-select-option-jenis"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-change-password modal-select-option"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Pilih Provinsi</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <img
                src="https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg"
                alt=""
              />
            </button>
          </div>
          <div class="modal-body">
            <div class="pilih-jangka-waktu">
              <div
                class="pilih-jangka-waktu__item jenis-item"
                onclick="pilihComboBox('DKI Jakarta', this, 'jenisMobileInput', 'jenis-mobile-text', 'jenis-item')"
                data-bs-dismiss="modal"
              >
                DKI Jakarta
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-dropdown-text-only",
  props: {},
};
</script>
<style></style>
