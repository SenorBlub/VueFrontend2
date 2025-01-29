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

const viewBox = "0 0 256 256";
</script>

<template>
  <svg 
    :class="sizeClass" 
    :viewBox="viewBox" 
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <!-- Background rect to help rendering -->
    <rect width="100%" height="100%" fill="none" />

    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      :fill="fillColor" 
      d="M200.00781 88V200a16.01833 16.01833 0 0 1-16 16h-144a16.01833 16.01833 0 0 1-16-16V88a16.01833 16.01833 0 0 1 16-16h144A16.01833 16.01833 0 0 1 200.00781 88Zm16-48h-152a8 8 0 0 0 0 16h152V176a8 8 0 0 0 16 0V56A16.01833 16.01833 0 0 0 216.00781 40Z"
    />
  </svg>
</template>

<style scoped>
.icon {
  display: inline-block;
}
</style>