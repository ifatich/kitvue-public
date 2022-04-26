<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    let PgdCustomJs = document.createElement("script");
    PgdCustomJs.setAttribute(
      "src",
      "https://bucket.pegadaian.co.id/design-system-salt-bucket/js/pgd-ui-kit-library.min.js"
    );

    document.body.appendChild(PgdCustomJs);
  },
};
</script>

<style lang="css">
@import "https://bucket.pegadaian.co.id/design-system-salt-bucket/css/main.css";
@import "https://bucket.pegadaian.co.id/design-system-salt-bucket/css/pgd-ui-kit.min.css";
</style>
