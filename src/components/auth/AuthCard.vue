<script setup lang="ts">
defineProps<{
  type: 'login' | 'register';
}>();

const { t } = useI18n();

const LABEL_VALUES = {
  login: {
    title: 'auth.title',
    description: 'auth.description',
  },
  register: {
    title: 'auth.title',
    description: 'auth.description',
  },
};
</script>

<template>
  <section class="max-w-[447px] w-full">
    <VCard class="">
      <header class="text-slate-600">
        <h2 class="text-3xl font-bold">{{ t(LABEL_VALUES[type].title) }}</h2>
        <p class="text-sm mt-3">{{ t(LABEL_VALUES[type].description) }}</p>
      </header>
      <slot />
      <footer class="text-slate-500">
        <a href="#">{{ t('auth.terms') }}</a>
      </footer>
    </VCard>
  </section>
</template>

<style lang="scss" scoped></style>
