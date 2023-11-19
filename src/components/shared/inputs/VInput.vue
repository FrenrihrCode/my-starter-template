<script setup lang="ts">
import type { HtmlBoolean, InputHtmlType } from '~/interfaces';

const props = withDefaults(
  defineProps<{
    id: string;
    modelValue: string;
    label?: string;
    type?: InputHtmlType;
    placeholder?: string;
    autocomplete?: HtmlBoolean;
    autofocus?: boolean;
    readonly?: boolean;
    disabled?: boolean;
  }>(),
  {
    type: 'text',
  }
);
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const data = useVModel(props, 'modelValue', emit);
</script>

<template>
  <div class="v-input text-slate-600 text-sm">
    <label v-if="label" :for="id" class="font-medium block mb-2">
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="data"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :readonly="readonly"
      :disabled="disabled"
      class="v-input__input text-base"
    />
  </div>
</template>

<style scoped lang="scss">
.v-input {
  &__input {
    @apply w-full bg-white px-2.5 py-1.5;
    @apply rounded-md border border-slate-200 outline-none border-b-slate-300/90;
  }
}
</style>
~/modules/app/interfaces
