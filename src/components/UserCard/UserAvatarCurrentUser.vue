<script setup>
import UserAvatar from './UserAvatar.vue';
</script>

<template>
  <UserAvatar
    username="Howdy, John Doe!"
    avatar="https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93"
  >
    <slot />
  </UserAvatar>
</template>
