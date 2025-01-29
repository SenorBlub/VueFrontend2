<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="text-gradient-purple-through">{{ msg }}</h1>
    <h2 class="">
      Supercharge <span class="text-gradient-purple-tr font-semibold">your</span> learning journey with FluentFriend!
</h2>
<h3>
  But first 
      <a href="https://vite.dev/" target="_blank" rel="noopener" class="text-gradient-purple-bl">Login</a> or
      <a href="https://vuejs.org/" target="_blank" rel="noopener" class="text-gradient-purple-tl">Register</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
