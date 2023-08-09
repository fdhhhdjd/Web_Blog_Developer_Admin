<script setup lang="ts">
//* LIBRARY
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

//* LAYOUT
import AppLayoutDefault from './default.vue';

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    try {
      const component = metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`));

      layout.value = markRaw(component?.default || AppLayoutDefault);
    } catch (e) {
      layout.value = markRaw(AppLayoutDefault);
    }
  },
  { immediate: true }
);
</script>

<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>
