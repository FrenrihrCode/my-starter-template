<script setup lang="ts">
import { isDark, preferredDark } from 'app/composables/dark';
import { PROJECT_NAME } from 'app/constants';

useHead({
  meta: [
    { name: 'description', content: PROJECT_NAME },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
});
</script>

<template>
  <div>
    <!-- <router-view class="view left-sidebar" name="LeftSidebar" /> -->
    <main>
      <router-view class="view main-content" />
    </main>
    <!-- <router-view class="view right-sidebar" name="RightSidebar"/> -->
  </div>
</template>
