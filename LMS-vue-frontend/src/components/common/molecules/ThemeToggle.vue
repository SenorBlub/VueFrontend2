<script setup lang="ts">
import CalendarIcon from '../atoms/icons/CalendarIcon.vue';
import CardsIcon from '../atoms/icons/CardsIcon.vue';
import DarkIcon from '../atoms/icons/DarkIcon.vue';
import LightIcon from '../atoms/icons/LightIcon.vue';
import RepeatIcon from '../atoms/icons/RepeatIcon.vue';
import SettingsIcon from '../atoms/icons/SettingsIcon.vue';
import SparklesIcon from '../atoms/icons/SparklesIcon.vue';
import TimelapseIcon from '../atoms/icons/TimelapseIcon.vue';
import ZoomIcon from '../atoms/icons/ZoomIcon.vue';

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute(
    "data-theme",
    currentTheme === "light" ? "dark" : "light"
  );
};

</script>

<template>
  <DarkIcon size="small" color="text" />
  <RepeatIcon size="small" color="text" />
  <CalendarIcon size="small" color="text" />
  <RepeatIcon size="small" color="text" />
  <ZoomIcon size="small" color="text" />
  <CardsIcon size="small" color="text" />
  <LightIcon size="small" color="text" />
  <SettingsIcon size="small" color="text" />
  <SparklesIcon size="small" color="text" />
  <TimelapseIcon size="small" color="text" />
</template>