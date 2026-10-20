<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  'edit-header': []
}>()
</script>

<template>
  <div v-if="show" class="lumos-header-chrome" aria-hidden="false">
    <v-btn
      size="small"
      color="primary"
      variant="flat"
      class="text-none lumos-header-chrome__btn"
      @click.stop="emit('edit-header')"
    >
      Edit Header
    </v-btn>
  </div>
</template>

<style scoped>
.lumos-header-chrome {
  position: absolute;
  inset: 0;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: var(--mp-space-12);
  pointer-events: none;
  background: color-mix(in srgb, rgb(var(--v-theme-primary)) 10%, transparent);
  box-shadow: inset 0 0 0 2px rgb(var(--v-theme-primary));
}

.lumos-header-chrome__btn {
  pointer-events: auto;
}
</style>
