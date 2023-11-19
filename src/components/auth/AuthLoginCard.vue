<script setup lang="ts">
import { GENERIC_ERROR_KEY } from 'app/constants';
import { AuthError } from 'auth/services/auth.service';

const authStore = useAuthStore();
const { t } = useI18n();

const username = ref('');
const password = ref('');
const errorMessage = ref('');

async function onLogin() {
  try {
    await authStore.service.login({
      username: username.value,
      password: password.value,
    });
    alert('Sesión iniciada');
  } catch (error: any) {
    if (error instanceof AuthError) errorMessage.value = error.message;
    errorMessage.value = error?.message || GENERIC_ERROR_KEY;
  }
}
</script>

<template>
  <AuthCard type="login">
    <form @submit.prevent="onLogin">
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
  </AuthCard>
</template>
