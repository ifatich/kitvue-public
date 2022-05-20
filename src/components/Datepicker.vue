<template>
  <div class="group-input">
    <div class="box-left-icon">
      <input
        type="text"
        :placeholder="placeholder"
        :value="value"
        name="tanggallahir"
        id="tanggalLahir"
        required
        data-bs-toggle="modal"
        data-bs-target="#tangalLahirModal"
        readonly
      />
      <a data-bs-toggle="modal" data-bs-target="#tangalLahirModal">
        <img
          src="/assets/images/ico-calendar-outline.svg"
          id="eye"
          alt=""
        />
      </a>
    </div>
  </div>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="tangalLahirModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered tangalLahirModal modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Pilih Tanggal</h5>
            <button
              type="button"
              id="close-modal"
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
            <form name="setDateBirth">
              <div class="custom-datepicker">
                <div class="field-input-box">
                  <label>Tanggal</label>
                  <label>Bulan</label>
                  <label>Tahun</label>
                </div>
                <div class="field-input-box">
                  <input
                    type="text"
                    id="date"
                    pattern="[0-9]*"
                    minlength="2"
                    maxlength="2"
                    size="2"
                    class="date-field"
                    placeholder="DD"
                    required
                  />
                  <input
                    type="text"
                    id="month"
                    pattern="[0-9]*"
                    minlength="2"
                    maxlength="2"
                    size="2"
                    class="date-field"
                    placeholder="MM"
                    required
                  />
                  <input
                    type="text"
                    id="year"
                    pattern="[0-9]*"
                    minlength="4"
                    maxlength="4"
                    size="4"
                    class="date-field"
                    placeholder="YYYY"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-datepicker",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      date: "",
      month: "",
      year: "",
    };
  },
  watch: {
    date: function () {},
    month: function () {},
    year: function () {},
  },
  methods: {
    setDateValue: function () {},
    setMonthValue: function () {},
    setMYearValue: function () {},
  },
};
</script>
<style></style>
