<template>
  <div class="group-input">
    <div class="accordion custom-accordion-input mobile-hide" id="box-Bank2">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            id="pilih-Bank2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsePilihBank2"
            aria-expanded="false"
            aria-controls="collapsePilihBank2"
          >
            <span id="getDefaultSelected2">Pilih rekening bank</span>
            <input type="text" id="getBankVal2" hidden required />
            <div class="accordion-button__selected" id="getRekening2">
              <div class="accordion-button__selected-img">
                <img src="" id="getImg2" alt="" />
              </div>
              <div
                class="accordion-button__selected-detail selected-rekening-tujuan"
              >
                <h5 id="getText2"></h5>
                <p id="getNameText2"></p>
                <p id="getNo2"></p>
              </div>
            </div>
          </button>
        </h2>
        <div
          id="collapsePilihBank2"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#box-Bank2"
        >
          <div class="accordion-body">
            <div class="pgd-box-search-grey m-2">
              <div class="icon">
                <img
                  src="https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg"
                  alt=""
                />
              </div>
              <input
                type="search"
                placeholder="Cari nama atau nomor rekening"
              />
            </div>
            <div class="box-search-rekening-tujuan">
              <div class="box-search-rekening-tujuan__top">
                <h6>G-Cash</h6>
                <div class="box-item">
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'G-Cash BNI', 'https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png', 'Thoriq Sadad ','2980 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>G-Cash BNI</h5>
                      <p>Thoriq Sadad</p>
                      <p>2980 8131 6069 555</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'G-Cash BRI', 'https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>G-Cash BRI</h5>
                      <p>Thoriq Sadad</p>
                      <p>8438 8131 6069 555</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="line-divider"></div>
              <div class="box-search-rekening-tujuan__bottom">
                <h6>Bank</h6>
                <div class="box-item">
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'Bank BCA', 'https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BCA</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'Bank BNI', 'https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BNI</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'Bank BRI', 'https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BRI</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content no-border"
                    onclick="BankSelected3(this,  'Bank Mandiri', 'https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank Mandiri</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
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
    </div>

    <input type="hidden" id="kreditMobileInput" name="no-kredit" />
    <button
      type="button"
      class="btn-pilih-jangka"
      data-bs-toggle="modal"
      data-bs-target="#modal-select-rekening"
    >
      <div class="option-with-img">
        <div class="img-box" id="kredit-img-box2">
          <img src="" alt="" />
        </div>
        <div class="box-detail">
          <h6 id="kredit-mobile-text2" class="btn-pilih-jangka__text">
            Pilih rekening bank
          </h6>
          <span id="kredit-mobile-span"></span>
          <div class="">
            <span id="kredit-mobile-span2"></span>
          </div>
        </div>
      </div>

      <img
        src="https://dl.dropboxusercontent.com/s/vnj3lkbwbskynob/icon-down.svg"
        alt=""
      />
    </button>
  </div>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="modal-select-rekening"
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
              Pilih Rekening Bank
            </h5>
            <button
              type="button"
              id="close-modal"
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
          <div class="modal-body container-nopadding-mobile">
            <div class="box-search-rekening-tujuan">
              <div class="box-search-rekening-tujuan__top">
                <div class="pgd-box-search-grey">
                  <div class="icon">
                    <img
                      src="https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg"
                      alt=""
                    />
                  </div>
                  <input
                    type="search"
                    placeholder="Cari nama atau nomor rekening"
                    name="findsaham"
                    id="findsaham"
                  />
                </div>
                <h6>G-Cash</h6>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('G-Cash BNI', 'Thoriq Sadad ',this,'2980 8131 6069 555', 'https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>G-Cash BNI</h5>
                      <p>Thoriq Sadad</p>
                      <p>2980 8131 6069 555</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('G-Cash BRI', 'Thoriq Sadad ',this,'8438 8131 6069 555', 'https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>G-Cash BRI</h5>
                      <p>Thoriq Sadad</p>
                      <p>8438 8131 6069 555</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="line-divider"></div>
              <div class="box-search-rekening-tujuan__bottom">
                <h6>Bank</h6>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('Bank BCA', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BCA</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('Bank BNI', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BNI</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('Bank BRI', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank BRI</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-item">
                  <div
                    class="box-item__content jenis-item no-border"
                    onclick="pilihComboBox5('Bank Mandiri', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img
                        src="https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png"
                        alt=""
                      />
                    </div>
                    <div class="box-detail">
                      <h5>Bank Mandiri</h5>
                      <p>Thoriq Sadad</p>
                      <p>4516 7859 1241 232</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
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
    </div>
  </section>
</template>
<script>
export default {
  name: "k-dropdown-icon-text-lg",
  props: {},
};
</script>
<style></style>
