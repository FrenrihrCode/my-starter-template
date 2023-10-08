<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'fill' | 'outline';
    nativeType?: 'button' | 'submit';
    label?: string;
    disabled?: boolean;
  }>(),
  {
    nativeType: 'button',
    type: 'fill',
  }
);
</script>

<template>
  <button
    :type="nativeType"
    :disabled="disabled"
    class="v-button cursor-pointer text-center rounded-lg"
    :class="[type]"
  >
    <slot>
      <span>{{ label }}</span>
    </slot>
  </button>
</template>

<style scoped lang="scss">
.v-button {
  @apply bg-slate-700 w-full;
  @apply text-sm font-bold text-white;
  @apply outline-none py-3 px-4;
  @apply touch-manipulation select-none;
  @apply shadow-[3px_3px_0px_0px] shadow-slate-900;

  &:not(:disabled) {
    &:hover {
      @apply bg-slate-600;
    }
    &:active {
      @apply shadow-none translate-x-[3px] translate-y-[3px];
    }
  }
  &:disabled {
    @apply cursor-auto opacity-75;
  }

  &.outline {
    @apply text-slate-700 border border-solid border-slate-600;
    @apply bg-transparent transition-colors;

    &:not(:disabled) {
      &:hover {
        @apply bg-slate-600 text-white;
      }
    }
    &:disabled {
      @apply cursor-auto opacity-75;
    }
  }
}
</style>
