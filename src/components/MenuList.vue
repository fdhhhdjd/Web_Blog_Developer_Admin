<script setup>
import MenutemLink from './MenutemLink.vue';

defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(['menuClick']);

const menuClick = (event, item) => {
  emit('menuClick', event, item);
};
</script>

<template>
  <MenutemLink v-for="(item, index) in menu" :key="index" :item="item" @menu-click="menuClick" />
</template>
