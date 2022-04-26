<template>
  <a href="#" class="card-content" target="blank">
    <div class="card-content-wrapper">
      <img :src="icon" class="icon" />
      <h4 class="title">{{ title }}</h4>
      <p class="subtitle">
        {{ body }}
      </p>
    </div>
  </a>
</template>
<script>
export default {
  name: "k-card-content",
  props: {
    icon: {
      type: String,
      default:
        "https://dl.dropboxusercontent.com/s/stm8f4vuko68qs0/icon-karir.svg",
    },
    title: {
      type: String,
      default: "title-default",
    },
    body: {
      type: String,
      default: `Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama
        Pegadaian. Indonesia melalui kemampuanmu`,
    },
  },
};
</script>
<style></style>
