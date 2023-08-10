<script setup>
import { reactive } from 'vue';
import { mdiAccount, mdiMail, mdiAsterisk, mdiFormTextboxPassword, mdiGithub } from '@mdi/js';
import SectionMain from '@/components/SectionMain.vue';
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue';
import BaseButton from '@/components/Button/BaseButton.vue';
import CardBox from '@/components/CardBox.vue';
import FormField from '@/components/Form/FormField.vue';
import FormControl from '@/components/Form/FormControl.vue';
import FormFilePicker from '@/components/Form/FormFilePicker.vue';
import UserCard from '@/components/UserCard/index.vue';

const profileForm = reactive({
  name: '',
  email: '',
});

const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: '',
});

const submitProfile = () => {};

const submitPass = () => {
  //
};
</script>

<template>
  <SectionMain>
    <SectionTitleLineWithButton :icon="mdiAccount" title="Profile" main>
      <BaseButton
        :icon="mdiGithub"
        label="Star on GitHub"
        color="contrast"
        rounded-full
        small
        href="https://github.com/justboil/admin-one-vue-tailwind"
        target="_blank"
        rel="noopener noreferrer"
      />
    </SectionTitleLineWithButton>

    <UserCard class="mb-6" />

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardBox is-form @submit.prevent="submitProfile">
        <FormField label="Avatar" help="Max 500kb">
          <FormFilePicker label="Upload" />
        </FormField>

        <FormField label="Name" help="Required. Your name">
          <FormControl
            v-model="profileForm.name"
            :icon="mdiAccount"
            name="username"
            required
            autocomplete="username"
          />
        </FormField>
        <FormField label="E-mail" help="Required. Your e-mail">
          <FormControl
            v-model="profileForm.email"
            :icon="mdiMail"
            type="email"
            name="email"
            required
            autocomplete="email"
          />
        </FormField>

        <template #footer>
          <BaseButton color="info" type="submit" label="Submit" />
          <BaseButton color="info" label="Options" outline />
        </template>
      </CardBox>

      <CardBox is-form @submit.prevent="submitPass">
        <FormField label="Current password" help="Required. Your current password">
          <FormControl
            v-model="passwordForm.password_current"
            :icon="mdiAsterisk"
            name="password_current"
            type="password"
            required
            autocomplete="current-password"
          />
        </FormField>

        <FormField label="New password" help="Required. New password">
          <FormControl
            v-model="passwordForm.password"
            :icon="mdiFormTextboxPassword"
            name="password"
            type="password"
            required
            autocomplete="new-password"
          />
        </FormField>

        <FormField label="Confirm password" help="Required. New password one more time">
          <FormControl
            v-model="passwordForm.password_confirmation"
            :icon="mdiFormTextboxPassword"
            name="password_confirmation"
            type="password"
            required
            autocomplete="new-password"
          />
        </FormField>

        <template #footer>
          <BaseButton type="submit" color="info" label="Submit" />
          <BaseButton color="info" label="Options" outline />
        </template>
      </CardBox>
    </div>
  </SectionMain>
</template>
