<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const data = useVModel(props, 'modelValue', emit);
</script>

<template>
  <input
    id="input"
    v-model="data"
    type="text"
    v-bind="$attrs"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  />
</template>
