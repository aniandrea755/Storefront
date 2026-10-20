<script setup lang="ts">
import { computed } from 'vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'

const navItems = ['Home', 'Shop', 'About Us', 'Contact Us', 'Search', 'Collections']

const props = withDefaults(defineProps<{
  announcement?: Record<string, string | number | boolean>
  header?: Record<string, string | number | boolean>
  selectedLayer?: HeaderPreviewLayer | null
  interactive?: boolean
  device?: 'desktop' | 'mobile'
}>(), {
  announcement: () => ({}),
  header: () => ({}),
  selectedLayer: null,
  interactive: false,
  device: 'desktop',
})

const emit = defineEmits<{
  'select-layer': [layer: HeaderPreviewLayer]
}>()

function text(
  bag: Record<string, string | number | boolean>,
  key: string,
  fallback: string,
): string {
  const value = bag[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function flag(bag: Record<string, string | number | boolean>, key: string, fallback = true): boolean {
  const value = bag[key]
  return typeof value === 'boolean' ? value : fallback
}

function num(bag: Record<string, string | number | boolean>, key: string, fallback: number): number {
  const value = bag[key]
  return typeof value === 'number' ? value : fallback
}

const promoText = computed(() => text(props.announcement, 'text', 'Free shipping on orders over $50'))
const colorSchema = computed(() => text(props.header, 'colorSchema', 'Modern Look'))
const textSchema = computed(() => text(props.header, 'textSchema', 'Compact'))
const menuStyle = computed(() => text(props.header, 'menuStyle', 'Inline'))
const logoPosition = computed(() => (text(props.header, 'logoPosition', 'Left') === 'Center' ? 'Center' : 'Left'))
const alignHorizontal = computed(() => {
  const raw = text(props.header, 'alignHorizontal', 'Left')
  return raw === 'Center' || raw === 'Right' ? raw : 'Left'
})
const alignVertical = computed(() => {
  const raw = text(props.header, 'alignVertical', 'Center')
  return raw === 'Top' || raw === 'Bottom' ? raw : 'Center'
})
const showShadow = computed(() => flag(props.header, 'showShadow', false))
const scrollWithSite = computed(() => text(props.header, 'headerScroll', 'Scroll with site') === 'Scroll with site')
const showLanguageSelector = computed(() => flag(props.header, 'showLanguageSelector', true))
const showWishlist = computed(() => flag(props.header, 'showWishlist', true))
const showSignIn = computed(() => flag(props.header, 'showSignIn', true))
const showCart = computed(() => flag(props.header, 'showCart', true))

const barStyle = computed(() => ({
  paddingBlock: `${num(props.header, 'headerPaddingVertical', 24)}px`,
  paddingInline: `${num(props.header, 'headerPaddingHorizontal', 24)}px`,
}))

function layerClass(layer: HeaderPreviewLayer) {
  return {
    'lumos-hdr__layer': props.interactive,
    'lumos-hdr__layer--selected': props.interactive && props.selectedLayer === layer,
  }
}

function onLayer(layer: HeaderPreviewLayer, event: MouseEvent) {
  if (!props.interactive) return
  event.stopPropagation()
  emit('select-layer', layer)
}
</script>

<template>
  <div
    class="lumos-hdr"
    :class="{
      'lumos-hdr--modern': colorSchema === 'Modern Look',
      'lumos-hdr--compact': textSchema === 'Compact',
      'lumos-hdr--mobile': device === 'mobile',
      'lumos-hdr--shadow': showShadow,
      'lumos-hdr--scroll': scrollWithSite,
    }"
    aria-label="Store header preview"
  >
    <div
      class="lumos-hdr__announcement"
      :class="layerClass('announcement')"
      :data-label="interactive ? 'Announcement Banner' : undefined"
      role="button"
      :tabindex="interactive ? 0 : undefined"
      @click="onLayer('announcement', $event)"
      @keydown.enter.prevent="interactive && emit('select-layer', 'announcement')"
    >
      {{ promoText }}
    </div>

    <header
      class="lumos-hdr__shell"
      :class="layerClass('header-section')"
      :data-label="interactive ? 'Header Section' : undefined"
      role="button"
      :tabindex="interactive ? 0 : undefined"
      @click="onLayer('header-section', $event)"
      @keydown.enter.prevent="interactive && emit('select-layer', 'header-section')"
    >
      <div
        class="lumos-hdr__bar"
        :class="[
          `lumos-hdr__bar--h-${alignHorizontal.toLowerCase()}`,
          `lumos-hdr__bar--v-${alignVertical.toLowerCase()}`,
          `lumos-hdr__bar--menu-${menuStyle.toLowerCase()}`,
          `lumos-hdr__bar--logo-${logoPosition.toLowerCase()}`,
        ]"
        :style="barStyle"
      >
        <div
          class="lumos-hdr__logo"
          :class="layerClass('logo')"
          :data-label="interactive ? 'Logo' : undefined"
          role="button"
          :tabindex="interactive ? 0 : undefined"
          @click="onLayer('logo', $event)"
          @keydown.enter.prevent="interactive && emit('select-layer', 'logo')"
        >
          <span class="lumos-hdr__logo-mark" aria-hidden="true" />
        </div>

        <nav
          class="lumos-hdr__nav"
          :class="layerClass('menu')"
          :data-label="interactive ? 'Menu' : undefined"
          role="button"
          :tabindex="interactive ? 0 : undefined"
          @click="onLayer('menu', $event)"
          @keydown.enter.prevent="interactive && emit('select-layer', 'menu')"
        >
          <span v-for="item in navItems" :key="item">{{ item }}</span>
        </nav>

        <div
          v-if="device === 'desktop'"
          class="lumos-hdr__search-wrap"
          :class="layerClass('search')"
          :data-label="interactive ? 'Search Input' : undefined"
          role="button"
          :tabindex="interactive ? 0 : undefined"
          @click="onLayer('search', $event)"
          @keydown.enter.prevent="interactive && emit('select-layer', 'search')"
        >
          <span class="lumos-hdr__search">
            Search ...
            <v-icon size="14">search</v-icon>
          </span>
        </div>

        <div
          class="lumos-hdr__tools"
          :class="layerClass('account')"
          :data-label="interactive ? 'Account' : undefined"
          role="button"
          :tabindex="interactive ? 0 : undefined"
          @click="onLayer('account', $event)"
          @keydown.enter.prevent="interactive && emit('select-layer', 'account')"
        >
          <span v-if="device === 'desktop' && showLanguageSelector" class="lumos-hdr__locale">
            EN
            <v-icon size="14">chevron-down</v-icon>
          </span>
          <v-icon v-if="device === 'desktop' && showWishlist" size="16">heart</v-icon>
          <span v-if="device === 'desktop' && showCart" class="lumos-hdr__cart">
            <v-icon size="16">shopping-bag</v-icon>
            <em>2</em>
          </span>
          <span v-if="showSignIn" class="lumos-hdr__account">
            <v-icon size="16">user</v-icon>
            Sign in
          </span>
          <v-icon v-else size="20">menu</v-icon>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.lumos-hdr {
  --lumos-hdr-ink: #1a1814;
  --lumos-hdr-soft: #5d5b5b;
  --lumos-hdr-line: rgba(0, 0, 0, 0.12);
  --lumos-hdr-promo: #0073ab;
  --lumos-hdr-promo-fg: #fff;
  --lumos-inset-x: 32px;
  background: #fff;
  border: 1px solid var(--lumos-hdr-line);
  border-radius: var(--mp-radius-12);
  overflow: hidden;
}

.lumos-hdr--shadow {
  box-shadow: var(--mp-shadow-md);
}

.lumos-hdr__announcement {
  background: var(--lumos-hdr-promo);
  color: var(--lumos-hdr-promo-fg);
  text-align: center;
  font-size: 13px;
  padding: 8px 16px;
}

.lumos-hdr__shell {
  background: #fff;
}

.lumos-hdr__bar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  min-height: 64px;
}

.lumos-hdr__bar--logo-center {
  grid-template-columns: 1fr auto 1fr;
}

.lumos-hdr__bar--logo-center .lumos-hdr__logo {
  grid-column: 2;
  justify-self: center;
}

.lumos-hdr__bar--logo-center .lumos-hdr__nav {
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
}

.lumos-hdr__bar--logo-center .lumos-hdr__tools {
  grid-column: 3;
  justify-self: end;
}

.lumos-hdr__bar--h-center {
  text-align: center;
}

.lumos-hdr__bar--h-center .lumos-hdr__nav {
  justify-content: center;
}

.lumos-hdr__bar--h-right .lumos-hdr__nav {
  justify-content: flex-end;
}

.lumos-hdr__bar--v-top {
  align-items: flex-start;
}

.lumos-hdr__bar--v-bottom {
  align-items: flex-end;
}

.lumos-hdr__bar--menu-centered .lumos-hdr__nav {
  justify-content: center;
}

.lumos-hdr__bar--menu-minimal .lumos-hdr__nav {
  display: none;
}

.lumos-hdr__logo-mark {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background: linear-gradient(135deg, #0073ab 0%, #495da7 100%);
}

.lumos-hdr__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 14px;
  color: var(--lumos-hdr-ink);
  min-width: 0;
}

.lumos-hdr__search-wrap {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.lumos-hdr__tools {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--lumos-hdr-ink);
  font-size: 13px;
  flex-shrink: 0;
}

.lumos-hdr__search {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--lumos-hdr-line);
  border-radius: 999px;
  color: var(--lumos-hdr-soft);
}

.lumos-hdr__locale {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--lumos-hdr-soft);
}

.lumos-hdr__cart {
  position: relative;
  display: inline-flex;
}

.lumos-hdr__cart em {
  position: absolute;
  top: -6px;
  right: -8px;
  font-style: normal;
  font-size: 10px;
  background: var(--lumos-hdr-promo);
  color: #fff;
  border-radius: 999px;
  min-width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
}

.lumos-hdr__account {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lumos-hdr--mobile .lumos-hdr__nav {
  display: none;
}

.lumos-hdr--mobile .lumos-hdr__bar {
  grid-template-columns: auto 1fr auto;
}

.lumos-hdr__layer {
  position: relative;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transition: outline-color 0.15s ease;
}

.lumos-hdr__layer:hover {
  outline-color: rgba(0, 115, 171, 0.45);
}

.lumos-hdr__layer--selected {
  outline-color: rgb(var(--v-theme-primary));
}

.lumos-hdr__layer[data-label]::after {
  content: attr(data-label);
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 2;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  font-size: 10px;
  font-weight: 600;
  pointer-events: none;
  opacity: 0;
}

.lumos-hdr__layer--selected[data-label]::after,
.lumos-hdr__layer:hover[data-label]::after {
  opacity: 1;
}
</style>
