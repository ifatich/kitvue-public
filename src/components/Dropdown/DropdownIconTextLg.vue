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
            <span id="getDefaultSelected2">{{ placeholder }}</span>
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
                  src="/assets/images/search-dark.svg"
                  alt=""
                />
              </div>
              <input
                type="search"
                placeholder="Cari nama atau nomor rekening"
              />
            </div>
            <div class="box-search-rekening-tujuan">
              <div
                v-for="(option, index) in options"
                :key="index"
                class="box-search-rekening-tujuan__top"
              >
                <h6>{{ option.title }}</h6>
                <div
                  v-for="(item, index) in option.items"
                  :key="index"
                  class="box-item"
                >
                  <div
                    class="box-item__content"
                    onclick="BankSelected3(this, 'G-Cash BNI', '/assets/images/logo-gcash-bni.png', 'Thoriq Sadad ','2980 8131 6069 555')"
                  >
                    <div class="img-box">
                      <img :src="item.icon" alt="" />
                    </div>
                    <div class="box-detail">
                      <h5>{{ item.label }}</h5>
                      <p>{{ value }}</p>
                      <p>{{ item.value }}</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="/assets/images/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="line-divider"></div>
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
            {{ placeholder }}
          </h6>
          <span id="kredit-mobile-span"></span>
          <div class="">
            <span id="kredit-mobile-span2"></span>
          </div>
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
              {{ placeholder }}
            </h5>
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
          <div class="modal-body container-nopadding-mobile">
            <div class="box-search-rekening-tujuan">
              <div
                v-for="(option, index) in options"
                :key="index"
                class="box-search-rekening-tujuan__top"
              >
                <div class="pgd-box-search-grey">
                  <div class="icon">
                    <img
                      src="/assets/images/search-dark.svg"
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
                <h6>{{ option.title }}</h6>
                <div
                  v-for="(item, index) in option.items"
                  :key="index"
                  class="box-item"
                >
                  <div
                    class="box-item__content jenis-item"
                    onclick="pilihComboBox5('G-Cash BNI', 'Thoriq Sadad ',this,'2980 8131 6069 555', '/assets/images/logo-gcash-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')"
                    data-bs-dismiss="modal"
                  >
                    <div class="img-box">
                      <img :src="item.icon" alt="" />
                    </div>
                    <div class="box-detail">
                      <h5>{{ item.label }}</h5>
                      <p>{{ value }}</p>
                      <p>{{ item.value }}</p>
                    </div>
                    <img
                      class="ico-check ml-auto"
                      src="/assets/images/icon-checklist.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="line-divider"></div>
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
  props: {
    placeholder: {
      type: String,
      default: "Pilih Rekening Bank",
    },
    value: {
      type: [String, Number],
      default: "Thoriq Sadad",
    },
    // icon ceklist src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
    options: {
      type: Array,
      default: function () {
        return [
          {
            title: "G-Cash",
            items: [
              {
                label: "G-Cash BNI",
                value: "2980 8131 6069 555",
                icon: "/assets/images/logo-gcash-bni.png",
              },
              {
                label: "G-Cash BRI",
                value: "8438 8131 6069 555",
                icon: "/assets/images/logo-gcash-bri.png",
              },
            ],
          },
          {
            title: "Bank",
            items: [
              {
                value: "4516 7859 1241 232",
                label: "Bank BCA",
                icon: "/assets/images/logo-bank-bca.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank BNI",
                icon: "/assets/images/logo-bank-bni.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank BRI",
                icon: "/assets/images/logo-bank-bri.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank MANDIRI",
                icon: "/assets/images/logo-bank-mandiri.png",
              },
            ],
          },
        ];
      },
    },
  },
};
</script>
<style></style>
