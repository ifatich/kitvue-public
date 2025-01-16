<template>
  <span
    class="inline-flex items-center justify-center"
    :class="className"
    :style="{ width: size, height: size, color }"
    v-html="svgContent"
  ></span>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    iconName: {
      type: String,
      required: true, // Nama file SVG (tanpa .svg)
    },
    size: {
      type: [String, Number],
      default: 24, // Ukuran default
    },
    color: {
      type: String,
      default: "currentColor", // Warna default
    },
    className: {
      type: String,
      default: "", // Tambahan class CSS
    },
  },
  data() {
    return {
      svgContent: "", // Konten SVG yang akan dirender
    };
  },
  mounted() {
    this.loadIcon();
  },
  methods: {
    async loadIcon() {
      try {
        // Path folder ikon (ubah jika perlu)
        const basePath = "../../assets/icon/icon-system/";

        // Muat file SVG berdasarkan nama
        const response = await fetch(`${basePath}${this.iconName}.svg`);
        if (response.ok) {
          this.svgContent = await response.text();
        } else {
          console.error(`Icon "${this.iconName}" not found.`);
        }
      } catch (error) {
        console.error("Error loading icon:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
