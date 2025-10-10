<template>
  <div class="h-full relative">
    <Doughnut
      :data="chartDataPayload"
      :options="mergedOptions"
      :plugins="chartPlugins"
    />
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Doughnut } from "vue-chartjs";
import {
  computed,
  ref,
  onUnmounted,
  h,
  render,
  useSlots,
  defineProps,
  watch
} from "vue";

/* default fonts/colors like di BarChart-mu */
ChartJS.defaults.font.family = getComputedStyle(document.body).fontFamily;
ChartJS.defaults.font.weight = "normal";
ChartJS.defaults.font.size = 12;
ChartJS.defaults.color = "#252528";

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

/* shadow plugin (mirip BarChart) */
const tooltipShadowPlugin = {
  id: "tooltipShadow",
  beforeDraw(chart) {
    const tooltip = chart.tooltip;
    // for canvas tooltip presence use internal fields (similar check di BarChart)
    if (tooltip?._active && tooltip.opacity) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,0.22)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = tooltip.options.backgroundColor || "#fff";

      // Chart.js exposes x,y,width,height for the tooltip box
      const { x, y, width, height } = tooltip;
      const radius = tooltip.options.cornerRadius || 12;
      if (width && height) {
        drawRoundedRect(ctx, x, y, width, height, radius);
      }
      ctx.restore();
    }
  }
};

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const props = defineProps({
  labels: { type: Array, default: () => ["Red", "Blue", "Yellow"] },
  values: { type: Array, default: () => [300, 50, 100] },
  options: { type: Object, default: () => ({}) }
});

const slots = useSlots();
const hasTooltipSlot = !!slots.tooltip;
const tooltipElRef = ref(null);

function createTooltipElIfNeeded() {
  if (tooltipElRef.value) return tooltipElRef.value;
  const el = document.createElement("div");
  el.className = "chartjs-tooltip-slot";
  // default wrapper styles (developer can override with global CSS)
  el.style.position = "absolute";
  el.style.pointerEvents = "none";
  el.style.zIndex = "9999";
  el.style.opacity = "0";
  el.style.transform = "translate(-50%, -120%)";
  el.style.background = "#ffffff";
  el.style.borderRadius = "12px";
  el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
  el.style.padding = "8px 12px";
  el.style.transition = "opacity 0.3s ease, left 0.2s ease, top 0.2s ease";
  el.style.willChange = "left, top, opacity";
  document.body.appendChild(el);
  tooltipElRef.value = el;
  return el;
}

onUnmounted(() => {
  if (tooltipElRef.value) {
    try {
      render(null, tooltipElRef.value);
    } catch (e) { /* empty */ }
    if (tooltipElRef.value.parentNode) tooltipElRef.value.parentNode.removeChild(tooltipElRef.value);
    tooltipElRef.value = null;
  }
});

/* external tooltip function - memakai slot tooltip jika ada (identik pola BarChart) */
function externalTooltip(context) {
  if (!hasTooltipSlot) return;
  const { chart, tooltip } = context;
  const tooltipEl = createTooltipElIfNeeded();

  // sembunyikan tooltip bila tidak aktif
  if (!tooltip || tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  // pastikan ada data point
  const dataPoint = tooltip.dataPoints?.[0];
  if (!dataPoint) {
    tooltipEl.style.opacity = "0";
    return;
  }

  const dataset = chart.data.datasets[dataPoint.datasetIndex];
  const slotProps = {
    datasetLabel: dataset?.label,
    label: dataPoint.label ?? chart.data.labels?.[dataPoint.dataIndex],
    value: dataPoint.formattedValue ?? dataPoint.raw,
    raw: dataPoint.raw,
    dataIndex: dataPoint.dataIndex,
    datasetIndex: dataPoint.datasetIndex,
    dataPoint,
    tooltip
  };

  // render slot
  render(h("div", {}, slots.tooltip(slotProps)), tooltipEl);

  // posisi akhir (menggunakan koordinat Chart.js)
  const canvasRect = chart.canvas.getBoundingClientRect();
  const left = canvasRect.left + window.pageXOffset + tooltip.x;
  const top = canvasRect.top + window.pageYOffset + tooltip.y;

  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
  tooltipEl.style.opacity = "1";

  // posisi fix sesuai keinginanmu
  tooltipEl.style.transform = "translate(-10%, 0%)";

  // tentukan caret kanan atau kiri berdasarkan posisi tooltip
  const centerX = canvasRect.left + canvasRect.width / 2;
  tooltipEl.classList.remove("caret-left", "caret-right");

  if (left > centerX) {
    tooltipEl.classList.add("caret-left"); // muncul di kanan chart point
  } else {
    tooltipEl.classList.add("caret-right"); // muncul di kiri chart point
  }
}



/* chart data payload */
const defaultColors = [
  "rgba(255, 99, 132, 0.8)",
  "rgba(54, 162, 235, 0.8)",
  "rgba(255, 205, 86, 0.8)",
  "#4bc0c0",
  "#9966ff"
];

const chartDataPayload = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      label: "Dataset",
      data: props.values,
      backgroundColor: defaultColors.slice(0, props.values.length),
      hoverOffset: 6,
      borderRadius: 10, // 🔹 Rounded corner tiap arc
      borderWidth: 0,   // opsional, bisa diatur agar halus
      spacing: 4        // opsional, jarak antar shape biar kelihatan lebih terpisah
    }
  ]
}));


/* default options similar to BarChart */
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true, // will be overridden by mergedOptions depending on slot
      backgroundColor: "#FFFFFF",
      titleColor: "#252528",
      bodyColor: "#252528",
      cornerRadius: 12,
      padding: 12,
      usePointStyle: true,
      callbacks: {
        title: (ctx) => ctx[0]?.dataset?.label ?? "",
        label: (ctx) => `Nilai: ${ctx.raw}%`,
        labelPointStyle: function () {
          return { pointStyle: "rectRounded", rotation: 0, borderRadius: 4 };
        }
      }
    },
    legend: {
      position: "bottom",
      labels: {
        font: { size: 14 },
        usePointStyle: true,
        pointStyle: "rectRounded",
        padding: 12
      }
    }
  }
};
/* merged options: override tooltip.enabled/external if slot exists */
const mergedOptions = computed(() => {
  const merged = {
    ...defaultOptions,
    ...props.options,
    plugins: {
      ...defaultOptions.plugins,
      ...((props.options && props.options.plugins) || {})
    }
  };

  merged.plugins.tooltip = {
    ...merged.plugins.tooltip,
    enabled: !hasTooltipSlot,
    external: hasTooltipSlot ? externalTooltip : merged.plugins.tooltip.external
  };

  return merged;
});

/* choose plugins: if parent provides slot, DON'T use tooltipShadowPlugin
   (since we render DOM tooltip with its own shadow). Otherwise keep plugin. */
const chartPlugins = computed(() => {
  return hasTooltipSlot ? [] : [tooltipShadowPlugin];
});

/* keep chart data reactive */
watch(
  () => [props.labels, props.values],
  () => {
    // chartDataPayload computed will publish new value automatically
  },
  { deep: true }
);
</script>

<style>
.chartjs-tooltip-slot {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  padding: 8px 12px;
  font-size: 13px;
  position: absolute;
}

/* caret kanan (tooltip ditampilkan di kiri chart point -> caret ke kanan) */
.chartjs-tooltip-slot.caret-right::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #fff;
  filter: drop-shadow(-2px 0 2px rgba(0, 0, 0, 0.08));
}

/* caret kiri (tooltip di kanan point -> caret ke kiri) */
.chartjs-tooltip-slot.caret-left::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid #fff;
  filter: drop-shadow(2px 0 2px rgba(0, 0, 0, 0.08));
}
</style>
