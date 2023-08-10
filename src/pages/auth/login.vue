<script setup>
//* LIBRARY
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { mdiAccount, mdiAsterisk } from '@mdi/js';

//* COMPONENTS
import CardBox from '@/components/CardBox.vue';
import SectionFullScreen from '@/components/SectionFullScreen.vue';
import FormField from '@/components/Form/FormField.vue';
import FormControl from '@/components/Form/FormControl.vue';
import BaseButton from '@/components/Button/BaseButton.vue';

const form = reactive({
  login: 'john.doe',
  pass: 'highly-secure-password-fYjUw-',
  remember: true,
});

const router = useRouter();

const submit = () => {
  router.push('/dashboard');
};
</script>

<template>
  <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
    <CardBox :class="cardClass" is-form @submit.prevent="submit">
      <FormField label="Login" help="Please enter your login">
        <FormControl v-model="form.login" :icon="mdiAccount" name="login" autocomplete="username" />
      </FormField>
      <FormField label="Password" help="Please enter your password">
        <FormControl
          v-model="form.pass"
          :icon="mdiAsterisk"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </FormField>

      <template #footer>
        <BaseButton type="submit" color="info" label="Login" class="mr-4" />
        <BaseButton to="/dashboard" color="info" outline label="Back" />
      </template>
    </CardBox>
  </SectionFullScreen>
</template>
