<template>
  <div class="small-app-bar active">
    <div class="small-app-bar__box container fadeIn">
      <div class="small-app-bar__box-item">
        <img :src="otherMenu.icon" alt="" />
        <h5>{{ otherMenu.label }}</h5>
        <i class="chevron-icon"></i>
        <div class="overlay-header-sm">
          <div class="modal-menu-lainnya">
            <div class="modal-menu-lainnya__box">
              <a
                v-for="(item, index) in child"
                :key="index"
                class="modal-menu-lainnya__box-content"
                :href="item.action"
              >
                <img :src="item.icon" alt="" />
                <p>{{ item.label }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="small-app-bar__box-item box-language">
        <img
          src="/assets/icon/icon-system/icon-flag-Indonesian.svg"
          alt=""
        />
        <h5>{{ languageMenu.default }}</h5>
        <i class="chevron-icon"></i>
        <div class="overlay-header-sm">
          <div class="modal-language">
            <div class="modal-language__box">
              <div
                v-for="(it, index) in languageMenu.item"
                :key="index"
                class="modal-language__box-content"
              >
                <img :src="it.icon" alt="" />
                <p :class="it.label == languageMenu.default ? 'active' : ''">
                  {{ it.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="small-app-bar__box-item primary-box">
        <img class="icon" :src="signInMenu.icon" alt="" />
        <h5>{{ signInMenu.label }}</h5>
        <i class="chevron-icon"></i>
        <div class="overlay-header-sm">
          <div class="modal-type-in">
            <div class="modal-type-in__box">
              <div
                v-for="(item, index) in signInMenu.child"
                :key="index"
                class="modal-type-in__box-content"
              >
                <img :src="item.icon" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-nav-menu-dropdown",
  props: {
    otherMenu: {
      type: Object,
      label: String,
      icon: String,
      child: Array,
      default: function () {
        return {
          label: "Menu Lainnya",
          icon: "/assets/images/icon-other-square-green.svg",
          child: [
            {
              label: "Kerjasama",
              action: "",
              icon: "/assets/icon/icon-system/icon-world.svg",
            },
            {
              label: "Cabang",
              action: "/lokasi-cabang",
              icon: "/assets/icon/icon-system/icon-location-outline.svg",
            },

            {
              label: "Karir",
              action: "/karir",
              icon: "/assets/icon/icon-system/icon-case.svg",
            },
            {
              label: "Hubungi Kami",
              action: "/hubungi-kami",
              icon: "/assets/icon/icon-system/icon-send.svg",
            },
          ],
        };
      },
    },
    languageMenu: {
      type: Object,
      default: function () {
        return {
          default: "ID",
          item: [
            {
              label: "ID",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-flag-Indonesian.svg",
            },
            {
              label: "EN",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-flag-English.svg",
            },
          ],
        };
      },
      item: Array,
    },
    signInMenu: {
      type: Object,
      label: String,
      icon: String,
      child: Array,
      default: function () {
        return {
          label: "Masuk",
          icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-lock.svg",
          child: [
            {
              label: "child_label",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-pgd/logo-pgd-pds-horizontal.svg",
            },
            {
              label: "child_label",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-pgd/logo-pgd-pds-horizontal.svg",
            },
          ],
        };
      },
    },
  },
};
</script>
