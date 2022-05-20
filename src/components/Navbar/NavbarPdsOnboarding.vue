<template>
  <header class="pgd-header sticky-top header-pds">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand mr-auto" href="./index.html">
        <img :src="image" alt="" />
      </a>

      <div class="menu-btn-registrasi">
        <a :href="signIn.action" class="btn btn-outline-primary">{{
          signIn.label
        }}</a>
        <a :href="signUp.action" class="btn btn-primary">{{ signUp.label }}</a>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "k-navbar-pds-onboarding",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/logo-pds.svg",
    },
    signIn: {
      type: Object,
      default: function () {
        return {
          label: "MASUK",
          action: "../onboarding/index.html",
        };
      },
      label: String,
      action: Function,
    },
    signUp: {
      type: Object,
      default: function () {
        return {
          label: "DAFTAR",
          action: "/../registrasi/index.html",
        };
      },
      label: String,
      action: Function,
    },
  },
};
</script>
<style></style>
