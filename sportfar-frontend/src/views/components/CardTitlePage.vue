<template>
  <div
    class="card-box overflow-hidden d-flex justify-content-between p-3"
    :style="'background-color:' + color + '; border: 2px solid ' + color2 + ';'"
  >
    <img :src="img" width="65" />
    <div class="card-header w-100 d-flex align-items-center">
      <a class="go-back" href="javascript:history.back()"
        ><i class="fa-light fa-circle-arrow-left"></i
      ></a>
      <div>
        <h4 class="mb-2 fw-bold">{{ title }}</h4>
        <p class="mb-0">
          Prof. <span class="fw-bold"> {{ professor }}</span>
        </p>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-end subtitle-wrapper">
      <p class="subtitle mb-0 fw-bold">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon: string;
  title: string;
  subtitle: string;
  color: string;
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
  min-width: 322px;
  box-shadow: 0 0 8px 0px #0000000d;
  border-radius: 16px;
  color: white;
  position: relative;
}

.card-box img {
  position: absolute;
  width: 15%;
  left: 65%;
  top: -10%;
}

.card-box:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.card-header {
  gap: 32px;
}
.go-back {
  font-size: 60px;
  color: white;
}

.subtitle-wrapper {
  min-width: 30%;
}

.subtitle {
  font-weight: bold;
  font-size: 1.3rem;
  min-width: 30%;
  text-align: right;
}
</style>
