<template>
  <div
    class="card-box overflow-hidden d-flex justify-content-between flex-column position-relative"
    :style="'background-color:' + color + '; border: 2px solid ' + color2 + ';'"
  >
    <a href="./class-room/2" class="position-absolute w-100 h-100 z-1"></a>
    <div
      class="card-header w-100 p-2"
      :style="'border-bottom: 2px solid ' + color2 + ';'"
    >
      <h4 class="mb-2">{{ title }}</h4>
    </div>
    <div class="card-body p-2 d-flex flex-column justify-content-end">
      <p class="mb-0">{{ day }}</p>
      <p class="mb-0">{{ hour }}</p>
      <p class="mb-0">
        Prof. <span class="fw-bold"> {{ professor }}</span>
      </p>
      <img :src="img" width="65" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  title: string;
  color: string;
  day: string;
  hour: string;
  professor: string;
  img: string;
}>();

function darkenColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;
  return `#${(
    0x1000000 +
    (Math.max(0, R) << 16) +
    (Math.max(0, G) << 8) +
    Math.max(0, B)
  )
    .toString(16)
    .slice(1)}`;
}

const color2 = computed(() => darkenColor(props.color, 8)); // Cor em hexadecimal + % escurecer
</script>

<style scoped>
.card-box {
  height: 161px;
  box-shadow: 0 0 8px 0px #0000000d;
  border-radius: 16px;
}

.card-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-body {
  position: relative;
}

.card-body p {
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-shadow: 0px 2px 6px #00000094;
}

.card-body img {
  position: absolute;
  right: 0;
  bottom: 16px;
}
.card-box h4 {
  font-weight: bold;
  color: white;
}
</style>
