<template>
    <svg
      :width="size"
      :height="size"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg"
      :fill="color"
      :class="iconClass"
      aria-hidden="true"
    >
      <g v-if="weight === 'fill'">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
        />
      </g>
      <g v-else-if="weight === 'outline'">
        <path
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          d="M15.5 4H18C18.55 4 19 4.45 19 5C19 5.55 18.55 6 18 6H6C5.45 6 5 5.55 5 5C5 4.45 5.45 4 6 4H8.5L9.21 3.29C9.39 3.11 9.65 3 9.91 3H14.09C14.35 3 14.61 3.11 14.79 3.29L15.5 4ZM8 21C6.9 21 6 20.1 6 19V9C6 7.9 6.9 7 8 7H16C17.1 7 18 7.9 18 9V19C18 20.1 17.1 21 16 21H8Z"
        />
      </g>
      <g v-else>
        <text x="0" y="15" fill="red">Invalid weight</text>
      </g>
    </svg>
  </template>
  
  
  <script>
  export default {
    name: "DeleteIcon",
    props: {
      size: {
        type: [String, Number],
        default: 24, // Ukuran default 24x24
      },
      color: {
        type: String,
        default: "currentColor", // Warna default sesuai teks
      },
      viewBox: {
        type: String,
        default: "0 0 24 24", // ViewBox default
      },
      weight: {
        type: String,
        default: "fill", // Default weight adalah fill
        validator: (value) => ["fill", "outline"].includes(value), // Validasi untuk hanya menerima "fill" atau "outline"
      },
      iconClass: {
        type: String,
        default: "", // Custom class tambahan
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tambahkan gaya tambahan jika diperlukan */
  </style>
  