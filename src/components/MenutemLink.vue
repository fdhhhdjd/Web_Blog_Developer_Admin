<script setup>
import { RouterLink } from 'vue-router';
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import BaseIcon from '@/components/BaseIcon.vue';

import { mdiChevronDown, mdiChevronUp } from '@mdi/js';

import MenuList from './MenuList.vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['menuClick']);

const is = computed(() => {
  if (props.item.href) {
    return 'a';
  }

  if (props.item.to) {
    return RouterLink;
  }

  return 'div';
});

const itemLabel = computed(() => props.item.label);

const root = ref(null);
const isDropdownActive = ref(false);

const menuClick = (event) => {
  emit('menuClick', event, props.item);

  if (props.item.menu) {
    isDropdownActive.value = !isDropdownActive.value;
  }
};

const menuClickDropdown = (event, item) => {
  emit('menuClick', event, item);
};

const forceClose = (event) => {
  if (root.value && !root.value.contains(event.target)) {
    isDropdownActive.value = false;
  }
};

const activeClass = ref('bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100');

const inactiveClass = ref(
  'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'
);

onMounted(() => {
  if (props.item.menu) {
    window.addEventListener('click', forceClose);
  }
});

onBeforeUnmount(() => {
  if (props.item.menu) {
    window.removeEventListener('click', forceClose);
  }
});
</script>

<template>
  <Component
    :is="is"
    ref="root"
    class="flex items-center px-6 py-2 mt-4 duration-200 cursor-pointer relative"
    :class="[$route.name === 'Dashboard' ? activeClass : inactiveClass]"
    :to="item.to ?? null"
    :href="item.href ?? null"
    :target="item.target ?? null"
    @click="menuClick"
  >
    {{ console.log($route.name) }}
    <BaseIcon v-if="item.icon" :path="item.icon" class="transition-colors" />
    <span class="px-2 transition-colors">{{ itemLabel }}</span>
    <BaseIcon
      v-if="item.menu"
      :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
      class="hidden lg:inline-flex transition-colors"
    />
  </Component>

  <div
    v-if="item.menu"
    class="text-sm lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"
    :class="{ 'lg:hidden': !isDropdownActive }"
  >
    <MenuList :menu="item.menu" @menu-click="menuClickDropdown" />
  </div>
</template>
