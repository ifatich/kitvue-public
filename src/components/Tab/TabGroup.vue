<template>
  <ul class="nav nav-underline tab-group" id="pills-tab-section" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="tab_title1"
        data-bs-toggle="pill"
        data-bs-target="#tab_title1-box"
        type="button"
        role="tab"
        aria-controls="tab_title1-box"
        aria-selected="true"
      >
        Tab Title
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="tab_title2"
        data-bs-toggle="pill"
        data-bs-target="#tab_title2-box"
        type="button"
        role="tab"
        aria-controls="tab_title2-box"
        aria-selected="false"
      >
        Tab Title
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="tab_title3"
        data-bs-toggle="pill"
        data-bs-target="#tab_title3-box"
        type="button"
        role="tab"
        aria-controls="tab_title3-box"
        aria-selected="false"
      >
        Tab Title
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "k-tab-group",
  props: {},
};
</script>
<style></style>
