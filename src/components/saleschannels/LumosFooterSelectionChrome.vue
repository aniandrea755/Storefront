<script setup lang="ts">
defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  'edit-footer': []
}>()
</script>

<template>
  <div v-if="show" class="lumos-footer-chrome" aria-hidden="false">
    <v-btn
      size="small"
      color="primary"
      variant="flat"
      class="text-none lumos-footer-chrome__btn"
      @click.stop="emit('edit-footer')"
    >
      Edit Footer
    </v-btn>
  </div>
</template>

<style scoped>
.lumos-footer-chrome {
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

.lumos-footer-chrome__btn {
  pointer-events: auto;
}
</style>
