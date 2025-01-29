<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import DarkIcon from "../atoms/icons/DarkIcon.vue";
import LightIcon from "../atoms/icons/LightIcon.vue";

// Props
const props = defineProps({
  size: { type: String, default: "small" }
});

// Reactive theme state
const theme = ref(document.documentElement.getAttribute("data-theme") || "light");

// Function to toggle theme
const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme.value);
};

// Update theme if changed externally
onMounted(() => {
  const observer = new MutationObserver(() => {
    theme.value = document.documentElement.getAttribute("data-theme") || "light";
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
});

// Watch for theme changes and update UI
watch(theme, (newTheme) => {
  document.documentElement.setAttribute("data-theme", newTheme);
});
</script>

<template>
  <button id="ThemeToggleButton" @click="toggleTheme">
    <DarkIcon v-if="theme === 'light'" :size="props.size" color="text" />
    <LightIcon v-else :size="props.size" color="text" />
  </button>
</template>
