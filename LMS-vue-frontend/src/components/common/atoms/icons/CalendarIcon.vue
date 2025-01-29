<script setup lang="ts">
import { computed } from "vue";
import { getPaletteColor } from "../../../../assets/color.palette";

const props = defineProps({
  size: { type: String, default: "md" }, // small, md, large
  color: { type: String, default: "background-secondary"}, // primary, secondary, tertiery, bgPrimary, bgSecondary, danger, caution, alert, success 
});

const fillColor = computed(() => {
  const cssVar = getPaletteColor(props.color);
  return cssVar || "#2A2A2A"; // Default to white
});


const sizeClass = computed(() => ({
  small: "w-8 h-8",
  md: "w-12 h-12",
  large: "w-16 h-16",
}[props.size]));

const viewBox = "0 0 24 24"; // Standard SVG viewbox
</script>

<template>
<svg :class="sizeClass" :viewBox="viewBox" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 0H3V2H1V5H15V2H13V0H10V2H6V0Z" :fill="fillColor"/>
  <path d="M15 7H1V15H15V7Z" :fill="fillColor"/>
</svg>
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>