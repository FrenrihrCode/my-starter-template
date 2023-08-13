<script setup lang="ts">
// import { storeToRefs } from 'pinia';
import { AuthError } from '~/services/auth.service';
import { GENERIC_ERROR_KEY } from '~/constants';

const authStore = useAuthStore();
// const { isLogged } = storeToRefs(authStore);
const { t } = useI18n();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function onLogin() {
  try {
    await authStore.login(username.value, password.value);
  } catch (error: any) {
    if (error instanceof AuthError) errorMessage.value = error.message;
    errorMessage.value = error?.message || GENERIC_ERROR_KEY;
  }
}
</script>

<template>
  <v-card class="bg-white" shadow>
    <div class="px-4 py-4 w-2/3 text-slate-800 divide-y">
      <form @submit.prevent="onLogin">
        <h2 class="text-3xl font-bold">{{ t('auth.title') }}</h2>
        <p class="text-sm mt-3">{{ t('auth.login-description') }}</p>
        <v-input
          id="username-input"
          v-model="username"
          :label="t('auth.username')"
          :placeholder="t('auth.username')"
          class="mt-5"
        />
        <v-input
          id="password-input"
          v-model="password"
          :label="t('auth.password')"
          :placeholder="t('auth.password')"
          type="password"
          class="mt-5"
        />
        <v-button :label="t('auth.title')" native-type="submit" class="mt-4" />
        <p v-if="errorMessage" class="text-xs text-rose-600 text-center mt-3">
          {{ t(errorMessage) }}
        </p>
      </form>
      <div class="mt-5 text-center">
        <p class="text-sm mt-2">{{ t('auth.or') }}</p>
        <v-button label="Google" class="mt-4" type="outline" />
      </div>
    </div>
    <div class="p-3 w-1/3">
      <img
        src="https://content.wepik.com/statics/29838533/preview-page0.jpg"
        alt="Login picture"
        aria-label="A picture for login form"
        class="object-cover aspect-[1/2] blur-[1px]"
      />
    </div>
  </v-card>
</template>
