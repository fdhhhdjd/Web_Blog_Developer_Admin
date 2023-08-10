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
      <FormField lable="Login" help="Please enter your login">
        <FormControl v-model="form.login" :icon="mdiAccount" name="login" autocomplete="username" />
      </FormField>
    </CardBox>
  </SectionFullScreen>
</template>
