<template>
  <div class="group-input">
    <div
      class="accordion custom-accordion-input mobile-hide"
      id="box-rekening-emas"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            id="pilih-nomor-kredit"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePilihRekeningEmas"
            aria-expanded="false"
            aria-controls="collapsePilihRekeningEmas"
          >
            <span id="getDefaultSelectedNomorKredit1">Pilih rekening emas</span>
            <input type="text" id="getPilihKreditVal1" value="" hidden />
            <div class="accordion-button__selected" id="getPilihKredit1">
              <div class="accordion-button__selected-img">
                <img src="" alt="" id="getImgPilihKredit1" />
              </div>
              <div class="accordion-button__selected-detail">
                <h5 id="getGramPilihKredit1"></h5>
                <span id="getValuePilihKredit1"></span>
              </div>
            </div>
          </button>
        </h2>
        <div
          id="collapsePilihRekeningEmas"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#box-rekening-emas"
        >
          <div class="accordion-body">
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '100,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>100,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>200,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '300,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>300,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '400,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>400,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>200,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
            <div class="box-item">
              <div
                class="box-item__content"
                onclick="rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
              >
                <div class="img-box">
                  <img
                    src="/assets/images/ico-tabungan.svg"
                    alt=""
                  />
                </div>
                <div class="box-detail">
                  <h5>200,1234 gram</h5>
                  <span>1234 5678 9101 2345</span>
                </div>
                <div class="box-img-check ml-auto pilihKredit1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input type="hidden" id="kreditMobileInput" name="no-kredit" />
    <button
      type="button"
      class="btn-pilih-jangka"
      data-bs-toggle="modal"
      data-bs-target="#modal-select-option-kredit"
    >
      <div class="option-with-img">
        <div class="img-box" id="kredit-img-box">
          <img
            src="/assets/images/ico-tabungan.svg"
            alt=""
          />
        </div>
        <div class="box-detail">
          <h6 id="kredit-mobile-text" class="btn-pilih-jangka__text">
            Pilih rekening emas
          </h6>
          <span id="kredit-mobile-span"></span>
        </div>
      </div>

      <img
        src="/assets/images/icon-down.svg"
        alt=""
      />
    </button>
  </div>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="modal-select-option-kredit"
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
              Pilih Rekening Asal
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
                class="pilih-jangka-waktu__item kredit-item"
                onclick="pilihComboBox3('82,0595 gram', '1234 5678 9101 2345', this, 'kreditMobileInput', 'kredit-mobile-text', 'kredit-item', 'kredit-mobile-span', 'kredit-img-box')"
                data-bs-dismiss="modal"
              >
                <div class="option-with-img">
                  <div class="img-box">
                    <img
                      src="/assets/images/ico-tabungan.svg"
                      alt=""
                    />
                  </div>
                  <div class="box-detail">
                    <h5>82,0595 gram</h5>
                    <span>1234 5678 9101 2345</span>
                  </div>
                </div>
              </div>
              <div
                class="pilih-jangka-waktu__item kredit-item"
                onclick="pilihComboBox3('12,1825 gram', '5812 6183 6913 1294', this, 'kreditMobileInput', 'kredit-mobile-text', 'kredit-item', 'kredit-mobile-span', 'kredit-img-box')"
                data-bs-dismiss="modal"
              >
                <div class="option-with-img">
                  <div class="img-box">
                    <img
                      src="/assets/images/ico-tabungan.svg"
                      alt=""
                    />
                  </div>
                  <div class="box-detail">
                    <h5>12,1825 gram</h5>
                    <span>5812 6183 6913 1294</span>
                  </div>
                </div>
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
  name: "k-dropdown-icon-text-sm",
  props: {},
};
</script>
<style></style>
