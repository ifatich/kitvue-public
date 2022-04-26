<template>
  <div style="position: relative">
    <section
      class="section-nav-bottom d-block"
      style="display: grid !important"
    >
      <a
        :href="item.action"
        class="section-nav-bottom__box active"
        v-for="(item, index) in items"
        :key="index"
      >
        <div class="img-box">
          <img :src="item.icon" alt="" />
        </div>
        <h6>{{ item.label }}</h6>
      </a>
    </section>
  </div>
</template>
<script>
export default {
  name: "k-nav-bottom-tab",
  props: {
    items: {
      default: function () {
        return [
          {
            label: "Beranda",
            icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-home-active.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Riwayat",
            icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-history-idle.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Notifikasi",
            icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-notif-idle.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Profil",
            icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-profile-idle.svg",
            action: () => console.log("Clicked"),
          },
        ];
      },
    },
  },
};
</script>
<style></style>
