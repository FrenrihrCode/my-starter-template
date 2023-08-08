<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
});
const user = useUserStore();
const name = ref(user.savedName);

const router = useRouter();
function go() {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`);
}

const { t } = useI18n();
</script>

<template>
  <div class="bg-white h-screen w-screen">
    <v-card class="w-1/2 h-1/2 m-auto" shadow divide-x>
      <div class="p-3">
        <v-input
          id="name-input"
          v-model="name"
          :label="t('intro.whats-your-name')"
          :placeholder="t('intro.whats-your-name')"
        />
        <v-button label="Button" class="mt-2" />
      </div>
      <div class="text-indigo-700 p-3">
        <p>
          <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank"> Vitesse </a>
        </p>
        <p>
          <em>{{ t('intro.desc') }}</em>
        </p>
        <div>
          <v-button :disabled="!name" @click="go">
            {{ t('button.go') }}
          </v-button>
        </div>
      </div>
    </v-card>
  </div>
</template>
