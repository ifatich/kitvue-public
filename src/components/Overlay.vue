<template>
  <button
    class="btn btn-primary"
    data-bs-target="#getModal"
    data-bs-toggle="modal"
  >
    Show Overlay
  </button>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="getModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-layout-pds"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-overlay",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style></style>
