<script setup>
import { computed, ref } from 'vue';
import { mdiCheckDecagram } from '@mdi/js';
import CardBox from '@/components/CardBox.vue';
import FormCheckRadio from '@/components/Form/FormCheckRadio.vue';
// import PillTag from '@/components/PillTag.vue';
import UserAvatarCurrentUser from './UserAvatarCurrentUser.vue';

const userName = computed(() => 'Hello');

const userSwitchVal = ref(false);
</script>

<template>
  <CardBox>
    <div class="flex items-center justify-center">
      <UserAvatarCurrentUser class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
          <FormCheckRadio
            v-model="userSwitchVal"
            name="notifications-switch"
            type="switch"
            label="Notifications"
            input-value
          />
        </div>
        <h1 class="text-2xl">
          Howdy, <b>{{ userName }}</b
          >!
        </h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
        <div class="flex justify-center md:block">
          <!-- <PillTag label="Verified" color="info" :icon="mdiCheckDecagram" /> -->
        </div>
      </div>
    </div>
  </CardBox>
</template>
