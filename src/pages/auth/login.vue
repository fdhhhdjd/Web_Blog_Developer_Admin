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
import { validateInputLoginEmailOrUsername } from '@/commons';

//* COMMON
import { useDispatch } from '@/commons';
import { loginAccountInitial } from '@/providers/redux';

const form = reactive({
  email_or_username: '',
  password: '',
  remember: true,
});

const dispatch = useDispatch();

const router = useRouter();

const submit = () => {
  const type_login = validateInputLoginEmailOrUsername(form.email_or_username);

  dispatch(
    loginAccountInitial({
      email_or_username: form.email_or_username,
      password: form.password,
    })
  );
};
</script>

<template>
  <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
    <CardBox :class="cardClass" is-form @submit.prevent="submit">
      <FormField label="Login" help="Please enter your login">
        <FormControl
          v-model="form.email_or_username"
          :icon="mdiAccount"
          name="login"
          autocomplete="username"
        />
      </FormField>
      <FormField label="Password" help="Please enter your password">
        <FormControl
          v-model="form.password"
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
