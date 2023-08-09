<script setup>
console.log('Hello world');
</script>

<template>
  <div :class="{}">
    <div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <slot />
    </div>
  </div>
</template>
