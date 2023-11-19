<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
</script>

<template>
  <div class="bg-white h-screen w-screen relative flex items-center justify-center">
    <div class="rounded-xl shadow-lg overflow-hidden flex">
      <img
        src="https://recetacubana.com/wp-content/uploads/2019/09/chicharrones.jpg"
        alt="Chicharrón"
        class="max-w-[653px]"
      />
      <AuthLoginCard class="px-16 py-12" />
    </div>
  </div>
</template>
