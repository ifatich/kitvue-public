<template>
  <ul class="nav nav-underline" id="pills-tab-section" role="tablist">
    <li class="nav-item w-50 text-center" role="presentation">
      <a
        class="nav-link active"
        id="konvensional-tab"
        data-bs-toggle="pill"
        data-bs-target="#konvensional-box"
        type="button"
        role="tab"
        aria-controls="konvensional-box"
        aria-selected="true"
      >
        Konvensional
      </a>
    </li>
    <li class="nav-item w-50 text-center" role="presentation">
      <a
        class="nav-link"
        id="syariah-tab"
        data-bs-toggle="pill"
        data-bs-target="#syariah-box"
        type="button"
        role="tab"
        aria-controls="syariah-box"
        aria-selected="false"
      >
        Syariah
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "k-tab-kategori",
  props: {},
};
</script>
<style></style>
