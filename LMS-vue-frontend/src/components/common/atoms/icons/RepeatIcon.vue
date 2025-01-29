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
  <svg :class="sizeClass" viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path :fill="fillColor" d="M6 4h15a1 1 0 0 1 1 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 0 1-1-1v-7h2v6h14v-3l5 4-5 4v-3z"/>
    </g>
</svg>
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>