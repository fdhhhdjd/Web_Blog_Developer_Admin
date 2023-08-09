<script setup>
defineProps({
  display: {
    type: String,
    default: 'flex',
  },
});
</script>

<template>
  <div class="items-center cursor-pointer dark:text-white dark:hover:text-slate-400">
    <slot />
  </div>
</template>
