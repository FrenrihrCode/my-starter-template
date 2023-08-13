<script setup lang="ts">
import bgImg from '~/assets/img/bg.svg';

defineOptions({
  name: 'IndexPage',
});
</script>

<template>
  <div class="bg-white h-screen w-screen relative">
    <img
      :src="bgImg"
      alt="Background"
      aria-hidden="true"
      class="absolute h-full w-full object-cover"
    />
    <auth-login-card class="absolute z-10 m-auto inset-0 max-w-3xl h-fit" />
  </div>
</template>
