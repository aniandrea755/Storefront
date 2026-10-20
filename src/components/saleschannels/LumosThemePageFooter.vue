<script setup lang="ts">
import { computed } from 'vue'
import logoMask from '@/assets/storefront/lumos/search/logo-mask.png'
import LumosFooterSelectionChrome from '@/components/saleschannels/LumosFooterSelectionChrome.vue'
import type { FooterPreviewLayer } from '@/components/saleschannels/lumosFooterLayers'
import { lumosHeaderPartClass, lumosSettingFlag } from '@/components/saleschannels/lumosThemeHeader'

const defaultLinkCols = [
  { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Living Room', 'Bedroom', 'Dining Room'] },
  { title: 'Service', links: ['Contact', 'My Account', 'Track Order', 'Resolution Centre', 'Contacts'] },
]

const props = withDefaults(defineProps<{
  footerSettings?: Record<string, string | number | boolean>
  footerId?: string
  selectedId?: string | null
  selectedFooterLayer?: FooterPreviewLayer | null
  interactive?: boolean
  footerEditActive?: boolean
}>(), {
  footerSettings: () => ({}),
  selectedId: null,
  selectedFooterLayer: null,
  interactive: false,
  footerEditActive: false,
})

const emit = defineEmits<{
  select: [id: string]
  'select-footer-layer': [layer: FooterPreviewLayer]
  'edit-footer': []
  hover: [id: string | null]
}>()

const showSocial = computed(() => lumosSettingFlag(props.footerSettings, 'showSocial', true))
const showNewsletter = computed(() => lumosSettingFlag(props.footerSettings, 'showNewsletter', true))
const columnCount = computed(() => {
  const raw = props.footerSettings.columns
  return typeof raw === 'number' ? Math.min(4, Math.max(2, raw)) : 3
})

const visibleLinkCols = computed(() => defaultLinkCols.slice(0, Math.min(columnCount.value, defaultLinkCols.length)))

const pageStyle = computed(() => ({
  '--lumos-store-logo-mask': `url(${logoMask})`,
}))

function partClass(layer: FooterPreviewLayer) {
  return lumosHeaderPartClass(layer, props.selectedFooterLayer, props.footerEditActive)
}

function layerClass(id: string | undefined) {
  return {
    'lumos-store-footer__shell--layer': props.interactive && !props.footerEditActive,
    'lumos-store-footer__shell--selected': Boolean(id) && id === props.selectedId && !props.footerEditActive,
    'lumos-hdr-part': props.footerEditActive,
    'lumos-hdr-part--selected': props.footerEditActive && props.selectedFooterLayer === 'footer-section',
  }
}

function onShellClick() {
  if (!props.interactive || !props.footerId) return
  if (props.footerEditActive) {
    emit('select-footer-layer', 'footer-section')
    return
  }
  emit('select', props.footerId)
}

function onFooterPart(layer: FooterPreviewLayer, event: MouseEvent) {
  if (!props.interactive || !props.footerEditActive) return
  event.stopPropagation()
  emit('select-footer-layer', layer)
}
</script>

<template>
  <footer
    class="lumos-store-footer lumos-page-footer-target"
    :class="layerClass(footerId)"
    :style="pageStyle"
    :data-label="footerEditActive && selectedFooterLayer === 'footer-section' ? 'Footer Section' : interactive && !footerEditActive ? 'Footer' : undefined"
    :role="interactive ? 'button' : undefined"
    :tabindex="interactive ? 0 : undefined"
    @click="onShellClick"
    @keydown.enter.prevent="onShellClick()"
    @mouseenter="interactive && footerId && emit('hover', footerId)"
    @mouseleave="interactive && emit('hover', null)"
  >
    <div class="lumos-store-footer__grid">
      <div
        class="lumos-store-footer__brand"
        :class="partClass('brand')"
        :data-label="footerEditActive ? 'Brand' : undefined"
        :role="footerEditActive ? 'button' : undefined"
        :tabindex="footerEditActive ? 0 : undefined"
        @click="onFooterPart('brand', $event)"
        @keydown.enter.prevent="footerEditActive && emit('select-footer-layer', 'brand')"
      >
        <div class="lumos-store-footer__logo" aria-hidden="true">
          <span class="lumos-store-footer__logo-mark" />
        </div>
        <p>Modern furniture for contemporary living. Quality craftsmanship, timeless design, exceptional value.</p>
        <div
          v-if="showSocial"
          class="lumos-store-footer__social"
          :class="partClass('social')"
          :data-label="footerEditActive ? 'Social' : undefined"
          :role="footerEditActive ? 'button' : undefined"
          :tabindex="footerEditActive ? 0 : undefined"
          @click="onFooterPart('social', $event)"
          @keydown.enter.prevent="footerEditActive && emit('select-footer-layer', 'social')"
        >
          <v-icon size="14">instagram</v-icon>
          <v-icon size="14">facebook</v-icon>
          <v-icon size="14">twitter</v-icon>
        </div>
      </div>
      <div
        v-for="col in visibleLinkCols"
        :key="col.title"
        class="lumos-store-footer__col"
        :class="partClass('link-columns')"
        :data-label="footerEditActive ? 'Link columns' : undefined"
        :role="footerEditActive ? 'button' : undefined"
        :tabindex="footerEditActive ? 0 : undefined"
        @click="onFooterPart('link-columns', $event)"
        @keydown.enter.prevent="footerEditActive && emit('select-footer-layer', 'link-columns')"
      >
        <strong>{{ col.title }}</strong>
        <span v-for="link in col.links" :key="link">{{ link }}</span>
      </div>
      <div
        v-if="showNewsletter"
        class="lumos-store-footer__col"
        :class="partClass('newsletter')"
        :data-label="footerEditActive ? 'Newsletter' : undefined"
        :role="footerEditActive ? 'button' : undefined"
        :tabindex="footerEditActive ? 0 : undefined"
        @click="onFooterPart('newsletter', $event)"
        @keydown.enter.prevent="footerEditActive && emit('select-footer-layer', 'newsletter')"
      >
        <strong>Newsletter</strong>
        <p>Get exclusive offers and updates.</p>
        <span class="lumos-store-footer__newsletter-field">Your email</span>
        <span class="lumos-store-footer__subscribe">Subscribe</span>
      </div>
    </div>
    <div
      class="lumos-store-footer__legal"
      :class="partClass('legal')"
      :data-label="footerEditActive ? 'Legal' : undefined"
      :role="footerEditActive ? 'button' : undefined"
      :tabindex="footerEditActive ? 0 : undefined"
      @click="onFooterPart('legal', $event)"
      @keydown.enter.prevent="footerEditActive && emit('select-footer-layer', 'legal')"
    >
      <span>© 2025 Maropost. All rights reserved.</span>
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
    </div>

    <LumosFooterSelectionChrome
      :show="Boolean(interactive && footerId && footerId === selectedId && !footerEditActive)"
      @edit-footer="emit('edit-footer')"
    />
  </footer>
</template>

<style scoped>
.lumos-store-footer {
  position: relative;
  --lumos-store-brand: var(--sf-brand, #495da7);
  --lumos-store-footer-bg: #f9fafb;
  padding: var(--mp-space-32) var(--mp-space-32) var(--mp-space-16);
  background: var(--lumos-store-footer-bg);
  border-top: 1px solid var(--mp-border-subtle);
}

.lumos-store-footer__shell--layer {
  cursor: pointer;
}

.lumos-store-footer__shell--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-store-brand);
}

.lumos-store-footer__grid {
  display: grid;
  grid-template-columns: 1.2fr repeat(3, minmax(0, 1fr));
  gap: var(--mp-space-24);
}

.lumos-store-footer__logo-mark {
  display: block;
  width: 48px;
  height: 36px;
  background-color: var(--lumos-store-brand);
  mask: var(--lumos-store-logo-mask) center / contain no-repeat;
}

.lumos-store-footer__brand p {
  margin: var(--mp-space-12) 0;
  font-size: var(--mp-fontSize-13);
  color: var(--text-secondary);
  max-width: 280px;
}

.lumos-store-footer__social {
  display: flex;
  gap: var(--mp-space-8);
  color: var(--text-secondary);
}

.lumos-store-footer__col strong {
  display: block;
  margin-bottom: var(--mp-space-8);
  font-size: var(--mp-fontSize-13);
}

.lumos-store-footer__col span,
.lumos-store-footer__col p {
  display: block;
  font-size: var(--mp-fontSize-12);
  color: var(--text-secondary);
  line-height: 1.6;
}

.lumos-store-footer__newsletter-field {
  margin-top: var(--mp-space-8);
  padding: var(--mp-space-6) var(--mp-space-8);
  border: 1px solid var(--mp-border-subtle);
  border-radius: var(--mp-radius-8);
  background: #fff;
}

.lumos-store-footer__subscribe {
  margin-top: var(--mp-space-8);
  color: var(--lumos-store-brand);
  font-weight: var(--mp-fontWeight-semibold);
}

.lumos-store-footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-space-12) var(--mp-space-24);
  margin-top: var(--mp-space-24);
  padding-top: var(--mp-space-16);
  border-top: 1px solid var(--mp-border-subtle);
  font-size: var(--mp-fontSize-12);
  color: var(--text-secondary);
}

.lumos-hdr-part {
  cursor: pointer;
  border-radius: var(--mp-radius-8);
  transition: background 0.15s;
  position: relative;
}

.lumos-hdr-part:hover {
  background: color-mix(in srgb, var(--lumos-store-brand) 8%, transparent);
}

.lumos-hdr-part--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-store-brand);
  background: color-mix(in srgb, var(--lumos-store-brand) 10%, transparent);
}

.lumos-hdr-part[data-label]::after {
  content: attr(data-label);
  position: absolute;
  top: var(--mp-space-4);
  left: 50%;
  transform: translateX(-50%);
  padding: 2px 8px;
  border-radius: var(--mp-radius-8);
  background: var(--lumos-store-brand);
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
}
</style>
