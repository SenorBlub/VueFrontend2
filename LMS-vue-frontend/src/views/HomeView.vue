<script setup lang="ts">
import BaseButton from '../components/common/atoms/BaseButton.vue';
import ThemeToggle from '../components/common/molecules/ThemeToggle.vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <BaseButton width="xl" height="lg" variant="filled" color-scheme="confirm" border="heavy-solid" rounded="lg" text="lg">
      Finish
    </BaseButton>
    <TheWelcome />
    <ThemeToggle size="md" />
    
  </main>
</template>
