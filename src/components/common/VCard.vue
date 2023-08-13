<script setup lang="ts">
defineProps<{
  divideX?: boolean;
  divideY?: boolean;
  shadow?: boolean;
}>();
</script>

<template>
  <div
    class="v-card bg-white rounded-md flex items-center justify-center"
    :class="{ 'shadow-md': shadow, 'divide-x': divideX, 'divide-y': divideY }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
