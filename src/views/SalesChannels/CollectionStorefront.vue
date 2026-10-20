<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LumosCollectionsPage from '@/components/saleschannels/LumosCollectionsPage.vue'
import { useStoreThemesStore } from '@/stores/useStoreThemes'

const route = useRoute()
const router = useRouter()
const themes = useStoreThemesStore()
const accountId = computed(() => String(route.params.accountId ?? ''))
const channelId = computed(() => String(route.params.channelId ?? ''))
const collections = computed(() => (
  themes.themeForChannel(channelId.value)?.templates.collection
    .find((section) => section.kind === 'categories')
))

function backToBuilder() {
  router.push({
    name: 'StoreThemeBuilder',
    params: { accountId: accountId.value, channelId: channelId.value },
    query: { template: 'collection' },
  })
}
</script>

<template>
  <div class="lumos-shell">
    <div class="lumos-shell__back">
      <v-btn
        variant="text"
        size="small"
        class="text-none"
        prepend-icon="arrow-left"
        @click="backToBuilder"
      >
        Back to theme
      </v-btn>
    </div>
    <LumosCollectionsPage
      :settings="collections?.settings ?? {}"
      collection-title="Bedroom Collections"
      linked
    />
  </div>
</template>

<style scoped>
.lumos-shell {
  min-height: 100%;
  background: #fff;
}

.lumos-shell__back {
  position: sticky;
  top: 0;
  z-index: 4;
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 8px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
</style>
