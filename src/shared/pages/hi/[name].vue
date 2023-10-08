<script setup lang="ts">
const props = defineProps<{ name: string }>();
const router = useRouter();
const user = useUserStore();
const { t } = useI18n();

watchEffect(() => {
  user.setNewName(props.name);
});
</script>

<template>
  <div>
    <div>
      <div />
    </div>
    <v-dropdown />
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p>
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="user.otherNames.length">
      <div>
        <span>{{ t('intro.aka') }}</span>
        <ul>
          <li v-for="otherName in user.otherNames" :key="otherName">
            <router-link :to="`/hi/${otherName}`">
              {{ otherName }}
            </router-link>
          </li>
        </ul>
      </div>
    </template>

    <div>
      <button m="3 t6" text-sm btn @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
