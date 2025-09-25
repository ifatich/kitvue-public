<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Bar } from "vue-chartjs";
import {
  computed,
  ref,
  onUnmounted,
  h,
  render,
  useSlots,
  defineProps,
} from "vue";

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

const tooltipShadowPlugin = {
  id: "tooltipShadow",
  beforeDraw(chart) {
    const tooltip = chart.tooltip;
    if (tooltip?._active && tooltip.opacity) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.shadowColor = "rgba(0,0,0,0.22)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 2;
      ctx.fillStyle = tooltip.options.backgroundColor;

      const { x, y, width, height } = tooltip;
      const radius = tooltip.options.cornerRadius || 12;
      drawRoundedRect(ctx, x, y, width, height, radius);
      ctx.restore();
    }
  }
};

// ✅ Plugin custom garis vertikal + tick kecil di atas value
const verticalLinePlugin = {
  id: "verticalLineInBar",
  beforeDatasetsDraw(chart) {
    const opts = chart.options.plugins.verticalLineInBar || {};
    if (!opts.show) return;

    const {
      ctx,
      chartArea: { top, bottom },
      scales: { x }
    } = chart;

    chart.data.labels.forEach((_, i) => {
      const barCenter = x.getPixelForTick(i);

      // 🔹 garis vertikal
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(barCenter, top);
      ctx.lineTo(barCenter, bottom);
      ctx.lineWidth = opts.lineWidth || 1;
      ctx.strokeStyle = opts.color || "#999";
      ctx.stroke();
      ctx.restore();

      // 🔹 garis tick kecil (kayak strip di atas label)
      const tickLength = opts.tickLength || 6; 
      const tickColor = "#777777";

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(barCenter, bottom); // dari sumbu bawah
      ctx.lineTo(barCenter, bottom + tickLength); // ke bawah dikit
      ctx.lineWidth = 1;
      ctx.strokeStyle = tickColor;
      ctx.stroke();
      ctx.restore();
    });
  }
};

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps({
  labels: { type: Array, required: true },
  datasets: { type: Array, required: true },
  options: { type: Object, default: () => ({}) },
  showVerticalLine: { type: Boolean, default: true }
});

const slots = useSlots();
const hasTooltipSlot = !!slots.tooltip; // apakah parent memberi slot tooltip?
const tooltipElRef = ref(null); // DOM element untuk external tooltip

// create / cleanup helper
function createTooltipElIfNeeded() {
  if (tooltipElRef.value) return tooltipElRef.value;
  const el = document.createElement("div");
  el.className = "chartjs-tooltip-slot";
  // default wrapper styles (developer still can style inner slot content)
  el.style.position = "absolute";
  el.style.pointerEvents = "none";
  el.style.zIndex = "9999";
  el.style.opacity = "0";
  el.style.transform = "translate(-50%, -120%)";
  // Default "frame" look: white bg, rounded, shadow, padding
  el.style.background = "#ffffff";
  el.style.borderRadius = "12px";
  el.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
  el.style.padding = "8px 12px";
  el.style.transition = "opacity 0.12s ease";
  document.body.appendChild(el);
  tooltipElRef.value = el;
  return el;
}

onUnmounted(() => {
  if (tooltipElRef.value) {
    try {
      render(null, tooltipElRef.value); // unmount vue render
    } catch (e) { /* empty */ }
    if (tooltipElRef.value.parentNode) tooltipElRef.value.parentNode.removeChild(tooltipElRef.value);
    tooltipElRef.value = null;
  }
});

// external tooltip function (will be used ONLY when hasTooltipSlot === true)
function externalTooltip(context) {
  if (!hasTooltipSlot) return;
  const { chart, tooltip } = context;
  const tooltipEl = createTooltipElIfNeeded();

  // hide
  if (!tooltip || tooltip.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  // data point aktif (ambil first)
  const dataPoint = tooltip.dataPoints && tooltip.dataPoints[0];
  if (!dataPoint) {
    tooltipEl.style.opacity = "0";
    return;
  }

  const datasetIndex = dataPoint.datasetIndex;
  const dataIndex = dataPoint.dataIndex;
  const dataset = chart.data.datasets[datasetIndex];

  const slotProps = {
    datasetLabel: dataset?.label,
    label: dataPoint.label ?? chart.data.labels?.[dataIndex],
    value: dataPoint.formattedValue ?? dataPoint.raw,
    raw: dataPoint.raw,
    dataIndex,
    datasetIndex,
    dataPoint,
    tooltip // full tooltip object if needed
  };

  // render slot content into tooltipEl
  const vnode = h("div", {}, slots.tooltip(slotProps));
  render(vnode, tooltipEl);

  // position: use chart canvas bounding rect + caret coords
  const canvasRect = chart.canvas.getBoundingClientRect();
  const left = canvasRect.left + window.pageXOffset + (tooltip.caretX || 0);
  const top = canvasRect.top + window.pageYOffset + (tooltip.caretY || 0);

  tooltipEl.style.left = `${left}px`;
  tooltipEl.style.top = `${top}px`;
  tooltipEl.style.opacity = "1";
}

// styledDatasets sama seperti kode awal
const defaultColors = [
  "#42b883",
  "#36a2eb",
  "#ff6384",
  "#ffcd56",
  "#4bc0c0",
  "#9966ff"
];
const styledDatasets = computed(() => {
  if (props.datasets.length === 1) {
    return props.datasets.map((ds) => {
      const colors = ds.backgroundColorsArray
        ? ds.backgroundColorsArray
        : defaultColors.slice(0, ds.data.length);

      return {
        ...ds,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      };
    });
  } else {
    return props.datasets.map((ds, i) => {
      const color = ds.backgroundColor || defaultColors[i % defaultColors.length];
      return {
        ...ds,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1
      };
    });
  }
});

// defaultOptions (tooltip options kept, but we'll override enabled/external later)
const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
     tooltip: {
      // note: enabled will be overridden by mergedOptions below depending on slot
      enabled: true,
      backgroundColor: "#FFFFFF",
      titleColor: "#252528",
      bodyColor: "#252528",
      cornerRadius: 12,
      padding: 16, 
      usePointStyle: true,
      callbacks: {
        title: function (context) {
          return context[0].dataset.label || "";
        },
        label: function (context) {
          return `Nilai: ${context.raw}%`;
        },
        labelPointStyle: function () {
          return {
            pointStyle: "rectRounded",
            rotation: 0,
            borderRadius: 4
          };
        }
      }
    },
    legend: { 
      labels: { 
        font: {
          size: 14,  
        },
        usePointStyle: true,
        pointStyle: "rectRounded",
        padding: 16
      }, 
      display: true 
    },
    verticalLineInBar: {
      show: props.showVerticalLine,
      color: "#DDDD",
      lineWidth: 1
    }
  },
  scales: {
    x: { 
      grid: { 
        display: false
      },
      ticks: {
        color: "#252528",
        drawTicks: true,
        tickLength: 5.5
      },
      title: {
        display: true,            
        text: "Kanwil",
        font: {
          size: 14,
        }
      }
    },
    y: {
      grid: {
        display: true,
        color: "#e0e0e0",
        lineWidth: 1,
        drawTicks: true,
        tickColor: "#777777",
        tickLength: 5
      },
      ticks: {
       color: "#333",
       padding: 8
      },
      grace: "10%",
      title: {
        display: true,      
        text: "Presentase",
        font: {
          size: 14,
        }
      }
    }
  }
};

// mergedOptions: override tooltip.enabled and tooltip.external when slot exists
const mergedOptions = computed(() => {
  // shallow merge props.options into defaultOptions
  const merged = {
    ...defaultOptions,
    ...props.options,
    plugins: {
      ...defaultOptions.plugins,
      ...((props.options && props.options.plugins) || {})
    }
  };

  // override tooltip enabled / external when slot provided
  merged.plugins.tooltip = {
    ...merged.plugins.tooltip,
    enabled: !hasTooltipSlot, // jika ada slot -> disable default tooltip drawing
    external: hasTooltipSlot ? externalTooltip : merged.plugins.tooltip.external
  };

  return merged;
});

// pilih plugin list: kalau ada slot, jangan aktifkan tooltipShadowPlugin (kebalikan)
const chartPlugins = computed(() => {
  if (hasTooltipSlot) {
    return [verticalLinePlugin];
  } else {
    return [verticalLinePlugin, tooltipShadowPlugin];
  }
});
</script>

<template>
  <div class="h-full">
    <Bar
      :data="{ labels: props.labels, datasets: styledDatasets }"
      :options="mergedOptions"
      :plugins="chartPlugins"
    />
  </div>
</template>
