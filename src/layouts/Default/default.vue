<script setup>
//* HEADER
import Header from '../Header/Header.vue';
</script>

<template>
  <Header />
  <main class="mt-32">
    <slot />
  </main>
</template>

<script>
export default {};
</script>
