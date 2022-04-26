<template>
  <ul class="nav nav-underline tab-group" id="pills-tab-section" role="tablist">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="nav-item"
      role="presentation"
    >
      <button
        class="nav-link"
        :class="item.active ? ' active' : ''"
        :id="sanitize(item.label)"
        data-bs-toggle="pill"
        :data-bs-target="`#${sanitize(item.label)}-box`"
        type="button"
        role="tab"
        :aria-controls="`${sanitize(item.label)}-box`"
        aria-selected="true"
      >
        {{ item.label }}
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  name: "k-tab-group",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "title",
            active: true,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
          },
          {
            label: "title 2",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/4fss4cse7xzzoj3/ico-uang.svg",
          },
          {
            label: "title_3",
            active: false,
            action: function () {
              return "/";
            },
            icon: "https://dl.dropboxusercontent.com/s/fjz95u3y4971f1h/ico-invest-emas.svg",
          },
        ];
      },
    },
  },
  methods: {
    sanitize: function (str = "") {
      return str.replace(/ /g, "");
    },
  },
};
</script>
<style></style>
