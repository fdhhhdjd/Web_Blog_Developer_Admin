<script setup>
import { computed, markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import LayoutAuthenticated from './LayoutAuthenticated/index.vue';
import LayoutGuest from './LayoutGuest/index.vue';

const route = useRoute();

const layout = computed(() => {
  const layout = route?.meta?.layout;
  switch (layout) {
    case 'LayoutGuest':
      return LayoutGuest;
    case 'LayoutAuthenticated':
      return LayoutAuthenticated;
    default:
      return LayoutAuthenticated;
  }
});
</script>

<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>
