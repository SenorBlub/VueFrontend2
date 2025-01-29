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
  <svg :class="sizeClass" :viewBox="viewBox" fill="none">
<path d="M4 15V18C4 19.1046 4.89543 20 6 20H9M15.2173 20H18C19.1046 20 20 19.1046 20 18V15M20 9V6C20 4.89543 19.1046 4 18 4H15M4 9V6C4 4.89543 4.89543 4 6 4H9" :stroke="fillColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>