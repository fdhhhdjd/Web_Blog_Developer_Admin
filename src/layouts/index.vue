<script setup>
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import LayoutAuthenticated from './LayoutAuthenticated/index.vue';

const route = useRoute();
const layout = ref();
let prevLayout = null; // Sử dụng biến để theo dõi giá trị trước đó

watch(
  () => route.meta?.layout,
  async (metaLayout) => {
    if (metaLayout !== prevLayout) {
      // Chỉ cập nhật khi giá trị thay đổi
      prevLayout = metaLayout;
      try {
        const component = metaLayout && (await import(`./${metaLayout}/index.vue`));

        layout.value = markRaw(component?.default || LayoutAuthenticated);
      } catch (e) {
        layout.value = markRaw(LayoutAuthenticated);
      }
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
