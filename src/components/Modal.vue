<template>
  <button
    class="btn btn-primary"
    data-bs-target="#get-modal"
    data-bs-toggle="modal"
  >
    Modal
  </button>
  <section class="section-overlay-modal-pds">
    <div
      class="modal fade"
      id="get-modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-layout-pds">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Title</h5>
            <button
              type="button"
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
          <div class="modal-body">
            <p>Your content is here.</p>
            <a
              data-bs-dismiss="modal"
              aria-label="Close"
              class="btn btn-primary btn-block"
              >Button</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "k-modal",
  props: {},
};
</script>
<style></style>
