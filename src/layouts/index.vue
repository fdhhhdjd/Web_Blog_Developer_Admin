<script setup>
//* LIBRARY
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

//* LAYOUT
import LayoutAuthenticated from './LayoutAuthenticated/index.vue';

const layout = ref();
const route = useRoute();
console.log(LayoutAuthenticated);
watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    console.log(metaLayout);

    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}/index.vue`));

      layout.value = markRaw(component?.default || LayoutAuthenticated);
    } catch (e) {
      layout.value = markRaw(LayoutAuthenticated);
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
