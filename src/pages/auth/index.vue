<script setup>
//* PROVIDERS
import { loginAccountInitial } from '@/providers/redux';

// COMMONS
import { useDispatch } from '@/commons';

const dispatch = useDispatch();

const handleLogin = () => {
  dispatch(loginAccountInitial({
    email_or_username: 'fdhhhdjd',
    password: 'Taiheo123@'
  }));
};
</script>

<template>
  <h1>Authentication</h1>
  <button @click="handleLogin">Login</button>
</template>
