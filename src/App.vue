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
@import "../node_modules/@client/pegadaian-design-system/dist/css/main.css";
@import "../node_modules/@client/pegadaian-design-system/dist/css/pegadaian-material.min.css";
</style>
