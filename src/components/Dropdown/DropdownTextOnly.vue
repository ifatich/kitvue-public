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
            <span id="defaultSelected-jenisTransaksi">{{ placeholder }}</span>
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
                  src="/assets/images/search-dark.svg"
                  alt=""
                />
              </div>
              <input type="search" :placeholder="placeholder" />
            </div>
            <div
              v-for="(option, index) in options"
              :key="index"
              class="box-item"
            >
              <div
                class="box-item__content item-dropdown"
                onclick="comboBoxSelected('val-jenisTransaksi', 'defaultSelected-jenisTransaksi', 'newSelected-jenisTransaksi', 'newSelectedItem-jenisTransaksi', 'DKI Jakarta')"
              >
                <div class="box-ceklist">
                  <h6>{{ option.label }}</h6>
                  <img
                    src="/assets/images/icon-checklist.svg"
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
        {{ placeholder }}
      </h6>
      <img
        src="/assets/images/icon-down.svg"
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
            <h5 class="modal-title" id="staticBackdropLabel">
              {{ placeholder }}
            </h5>
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
            <div class="pilih-jangka-waktu">
              <div
                v-for="(option, index) in options"
                :key="index"
                class="pilih-jangka-waktu__item jenis-item"
                onclick="pilihComboBox('DKI Jakarta', this, 'jenisMobileInput', 'jenis-mobile-text', 'jenis-item')"
                data-bs-dismiss="modal"
              >
                {{ option.label }}
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
  props: {
    placeholder: {
      type: String,
      default: "Pilih Provinsi",
    },
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
      default: function () {
        return [
          {
            value: "Jakarta",
            label: "Jakarta",
          },
          {
            value: "Bandung",
            label: "Bandung",
          },
        ];
      },
      value: {
        type: [String, Number],
      },
      label: {
        type: String,
      },
    },
  },
};
</script>
<style></style>
