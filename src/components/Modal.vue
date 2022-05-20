<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-target="#getModal"
    data-bs-toggle="modal"
  >
    {{ name }}
  </button>
  <!-- Modal -->
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
      <div class="modal-dialog modal-dialog-centered modal-layout-pds">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">{{ title }}</h5>
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
            <slot>{{ content }}</slot>
            <a
              data-bs-dismiss="modal"
              aria-label="Close"
              class="btn btn-primary btn-block"
              >{{ actionName }}</a
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
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "title",
    },
    content: {
      default: ". . . .",
    },
    name: {
      default: "Modal",
    },
    actionName: {
      default: "Button",
    },
  },

  methods: {
    isShow: function () {
      this.props.status = !this.props.status;
      // some code to filter users
    },
  },
};
</script>
<style></style>
