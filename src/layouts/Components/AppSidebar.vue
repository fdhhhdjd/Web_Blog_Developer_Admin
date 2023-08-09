<script setup>
import { ref, defineEmits } from 'vue';
import { useSidebar } from '@/hooks/useSidebar.js';
import menuAside from '@/menuAside';
import MenutemLink from '@/components/MenutemLink.vue';

const emit = defineEmits(['menuClick']);

const { isOpen } = useSidebar();

const menuClick = (event, item) => {
  emit('menuClick', event, item);
};
</script>

<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
      @click="isOpen = false"
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform shadow-md bg-white lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            class="w-8 h-8 ml-2 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>

          <span class="mx-2 text-2xl font-semibold text-slate-700">VueBoard</span>
        </div>
      </div>

      <nav class="mt-10">
        <div v-for="(menu, index) in menuAside" :key="index" class="">
          <p class="pl-4 text-xs font-semibold mb-4 text-gray-400">{{ menu.group }}</p>

          <MenutemLink
            v-for="item in menu.children"
            :key="item.label"
            :item="item"
            @menu-click="menuClick"
          >
          </MenutemLink>
        </div>
      </nav>
    </div>
  </div>
</template>
