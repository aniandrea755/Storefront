<script setup lang="ts">
import { computed } from 'vue'
import logoMask from '@/assets/storefront/lumos/search/logo-mask.png'
import LumosHeaderSelectionChrome from '@/components/saleschannels/LumosHeaderSelectionChrome.vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'
import {
  lumosHeaderPartClass,
  lumosSettingFlag,
  lumosSettingNum,
  lumosSettingText,
  normalizeLogoPosition,
  normalizeMenuLayoutType,
  normalizeSearchPosition,
  normalizeSearchStyle,
} from '@/components/saleschannels/lumosThemeHeader'

const navItems = ['Home', 'Shop', 'About Us', 'Contact Us', 'Search', 'Collections']

const props = withDefaults(defineProps<{
  announcementSettings?: Record<string, string | number | boolean>
  headerSettings?: Record<string, string | number | boolean>
  headerId?: string
  selectedId?: string | null
  selectedHeaderLayer?: HeaderPreviewLayer | null
  interactive?: boolean
  headerEditActive?: boolean
  showAnnouncement?: boolean
}>(), {
  announcementSettings: () => ({}),
  headerSettings: () => ({}),
  selectedId: null,
  selectedHeaderLayer: null,
  interactive: false,
  headerEditActive: false,
  showAnnouncement: true,
})

const emit = defineEmits<{
  select: [id: string]
  'select-header-layer': [layer: HeaderPreviewLayer]
  'edit-header': []
  hover: [id: string | null]
}>()

const promoText = computed(() =>
  lumosSettingText(props.announcementSettings, 'text', 'Free shipping on orders over $50'),
)

const showLanguageSelector = computed(() => lumosSettingFlag(props.headerSettings, 'showLanguageSelector', true))
const showWishlist = computed(() => lumosSettingFlag(props.headerSettings, 'showWishlist', true))
const showSignIn = computed(() => lumosSettingFlag(props.headerSettings, 'showSignIn', true))
const showCart = computed(() => lumosSettingFlag(props.headerSettings, 'showCart', true))
const searchPlaceholder = computed(() => lumosSettingText(props.headerSettings, 'searchPlaceholder', 'Search ...'))
const searchStyle = computed(() =>
  normalizeSearchStyle(
    typeof props.headerSettings.searchStyle === 'string' ? props.headerSettings.searchStyle : undefined,
  ),
)
const searchPosition = computed(() =>
  normalizeSearchPosition(
    typeof props.headerSettings.searchPosition === 'string' ? props.headerSettings.searchPosition : undefined,
  ),
)
const searchBarClass = computed(() => ({
  'lumos-store-hdr__bar--search-top-left': searchPosition.value === 'Top left',
  'lumos-store-hdr__bar--search-top-right': searchPosition.value === 'Top right',
}))
const showSearchFieldText = computed(() => searchStyle.value === 'Search icon & input')
const searchFieldStyle = computed(() => ({
  borderWidth: `${lumosSettingNum(props.headerSettings, 'searchBorderWidth', 1)}px`,
  borderRadius: `${lumosSettingNum(props.headerSettings, 'searchCornerRadius', 4)}px`,
}))
const colorSchema = computed(() => lumosSettingText(props.headerSettings, 'colorSchema', 'Modern Look'))
const textSchema = computed(() => lumosSettingText(props.headerSettings, 'textSchema', 'Compact'))
const showShadow = computed(() => lumosSettingFlag(props.headerSettings, 'showShadow', false))
const logoPosition = computed(() =>
  normalizeLogoPosition(
    typeof props.headerSettings.logoPosition === 'string' ? props.headerSettings.logoPosition : undefined,
  ),
)
const menuLayoutType = computed(() =>
  normalizeMenuLayoutType(
    typeof props.headerSettings.menuLayoutType === 'string'
      ? props.headerSettings.menuLayoutType
      : typeof props.headerSettings.menuLayout === 'string'
        ? props.headerSettings.menuLayout
        : undefined,
  ),
)

const menuNavClass = computed(() => ({
  'lumos-store-hdr__nav--drawer': menuLayoutType.value === 'Drawer',
  'lumos-store-hdr__nav--highlight': lumosSettingFlag(props.headerSettings, 'menuHighlightSelected', false),
  'lumos-store-hdr__nav--divider': lumosSettingFlag(props.headerSettings, 'menuAddDivider', false),
  'lumos-store-hdr__nav--background': lumosSettingFlag(props.headerSettings, 'menuAddBackground', false),
}))

const menuNavStyle = computed(() => ({
  paddingBlock: `${typeof props.headerSettings.menuPaddingVertical === 'number' ? props.headerSettings.menuPaddingVertical : 0}px`,
  paddingInline: `${typeof props.headerSettings.menuPaddingHorizontal === 'number' ? props.headerSettings.menuPaddingHorizontal : 0}px`,
  justifyContent:
    lumosSettingText(props.headerSettings, 'menuAlignHorizontal', 'Center') === 'Left'
      ? 'flex-start'
      : lumosSettingText(props.headerSettings, 'menuAlignHorizontal', 'Center') === 'Right'
        ? 'flex-end'
        : 'center',
  alignItems:
    lumosSettingText(props.headerSettings, 'menuAlignVertical', 'Center') === 'Top'
      ? 'flex-start'
      : lumosSettingText(props.headerSettings, 'menuAlignVertical', 'Center') === 'Bottom'
        ? 'flex-end'
        : 'center',
}))

const logoBarClass = computed(() => ({
  'lumos-store-hdr__bar--logo-top-left': logoPosition.value === 'Top Left',
  'lumos-store-hdr__bar--logo-top-center': logoPosition.value === 'Top Center',
  'lumos-store-hdr__bar--logo-middle-left': logoPosition.value === 'Middle Left',
  'lumos-store-hdr__bar--logo-middle-center': logoPosition.value === 'Middle Center',
}))

const headerShellStyle = computed(() => ({
  paddingBlock: `${typeof props.headerSettings.headerPaddingVertical === 'number' ? props.headerSettings.headerPaddingVertical : 16}px`,
  paddingInline: `${typeof props.headerSettings.headerPaddingHorizontal === 'number' ? props.headerSettings.headerPaddingHorizontal : 32}px`,
}))

const pageStyle = computed(() => ({
  '--lumos-store-logo-mask': `url(${logoMask})`,
}))

function layerClass(id: string | undefined) {
  return {
    'lumos-store-hdr__shell--layer': props.interactive && !props.headerEditActive,
    'lumos-store-hdr__shell--selected': Boolean(id) && id === props.selectedId && !props.headerEditActive,
    'lumos-hdr-part': props.headerEditActive,
    'lumos-hdr-part--selected': props.headerEditActive && props.selectedHeaderLayer === 'header-section',
  }
}

function partClass(layer: HeaderPreviewLayer) {
  return lumosHeaderPartClass(layer, props.selectedHeaderLayer, props.headerEditActive)
}

function onShellClick() {
  if (!props.interactive || !props.headerId) return
  if (props.headerEditActive) {
    emit('select-header-layer', 'header-section')
    return
  }
  emit('select', props.headerId)
}

function onHeaderPart(layer: HeaderPreviewLayer, event: MouseEvent) {
  if (!props.interactive || !props.headerEditActive) return
  event.stopPropagation()
  emit('select-header-layer', layer)
}

function onAnnouncementClick(event: MouseEvent) {
  if (!props.interactive) return
  if (props.headerEditActive) {
    event.stopPropagation()
    emit('select-header-layer', 'announcement')
    return
  }
  if (props.headerId) emit('select', props.headerId)
}
</script>

<template>
  <div
    class="lumos-store-hdr"
    :class="{
      'lumos-store-hdr--modern': colorSchema === 'Modern Look',
      'lumos-store-hdr--compact': textSchema === 'Compact',
      'lumos-store-hdr--shadow': showShadow,
    }"
    :style="pageStyle"
  >
    <div
      v-if="showAnnouncement"
      class="lumos-store-hdr__promo"
      :class="partClass('announcement')"
      :data-label="headerEditActive ? 'Announcement Banner' : undefined"
      :role="interactive && headerEditActive ? 'button' : undefined"
      :tabindex="interactive && headerEditActive ? 0 : undefined"
      @click="onAnnouncementClick"
      @keydown.enter.prevent="interactive && headerEditActive && emit('select-header-layer', 'announcement')"
    >
      {{ promoText }}
    </div>

    <header
      class="lumos-store-hdr__shell lumos-page-header-target"
      :class="layerClass(headerId)"
      :data-label="headerEditActive && selectedHeaderLayer === 'header-section' ? 'Header Section' : interactive && !headerEditActive ? 'Header' : undefined"
      :role="interactive ? 'button' : undefined"
      :tabindex="interactive ? 0 : undefined"
      @click="onShellClick"
      @keydown.enter.prevent="onShellClick()"
      @mouseenter="interactive && headerId && emit('hover', headerId)"
      @mouseleave="interactive && emit('hover', null)"
    >
      <div class="lumos-store-hdr__bar" :class="[logoBarClass, searchBarClass]" :style="headerShellStyle">
        <div
          class="lumos-store-hdr__logo"
          :class="partClass('logo')"
          :data-label="headerEditActive ? 'Logo' : undefined"
          :role="headerEditActive ? 'button' : undefined"
          :tabindex="headerEditActive ? 0 : undefined"
          @click="onHeaderPart('logo', $event)"
          @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'logo')"
        >
          <span class="lumos-store-hdr__logo-mark" aria-hidden="true" />
        </div>

        <nav
          class="lumos-store-hdr__nav"
          :class="[partClass('menu'), menuNavClass]"
          :style="menuNavStyle"
          :data-label="headerEditActive ? 'Menu' : undefined"
          :role="headerEditActive ? 'button' : undefined"
          :tabindex="headerEditActive ? 0 : undefined"
          @click="onHeaderPart('menu', $event)"
          @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'menu')"
        >
          <template v-if="menuLayoutType === 'Drawer'">
            <span class="lumos-store-hdr__nav-drawer" aria-hidden="true">
              <span /><span /><span />
            </span>
            <span class="lumos-store-hdr__nav-drawer-label">Menu</span>
          </template>
          <template v-else>
            <span
              v-for="(item, index) in navItems"
              :key="item"
              :class="{ 'lumos-store-hdr__nav-item--active': index === 0 && lumosSettingFlag(headerSettings, 'menuHighlightSelected', false) }"
            >{{ item }}</span>
          </template>
        </nav>

        <div
          class="lumos-store-hdr__search"
          :class="partClass('search')"
          :data-label="headerEditActive ? 'Search Input' : undefined"
          :role="headerEditActive ? 'button' : undefined"
          :tabindex="headerEditActive ? 0 : undefined"
          @click="onHeaderPart('search', $event)"
          @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'search')"
        >
          <span
            class="lumos-store-hdr__search-field"
            :class="{ 'lumos-store-hdr__search-field--icon-only': !showSearchFieldText }"
            :style="searchFieldStyle"
          >
            <template v-if="showSearchFieldText">{{ searchPlaceholder }}</template>
            <v-icon size="14">search</v-icon>
          </span>
        </div>

        <div
          class="lumos-store-hdr__tools"
          :class="partClass('account')"
          :data-label="headerEditActive ? 'Account' : undefined"
          :role="headerEditActive ? 'button' : undefined"
          :tabindex="headerEditActive ? 0 : undefined"
          @click="onHeaderPart('account', $event)"
          @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'account')"
        >
          <span
            v-if="showLanguageSelector"
            class="lumos-store-hdr__locale"
            :class="partClass('language-selector')"
            :data-label="headerEditActive ? 'Language Selector' : undefined"
            :role="headerEditActive ? 'button' : undefined"
            :tabindex="headerEditActive ? 0 : undefined"
            @click="onHeaderPart('language-selector', $event)"
            @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'language-selector')"
          >
            <span class="lumos-store-hdr__flag" aria-hidden="true" />
            <v-icon size="14">chevron-down</v-icon>
          </span>
          <span
            v-if="showWishlist"
            class="lumos-store-hdr__wishlist"
            :class="partClass('wishlist')"
            :data-label="headerEditActive ? 'Wishlist' : undefined"
            :role="headerEditActive ? 'button' : undefined"
            :tabindex="headerEditActive ? 0 : undefined"
            @click="onHeaderPart('wishlist', $event)"
            @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'wishlist')"
          >
            <v-icon size="16">heart</v-icon>
          </span>
          <span
            v-if="showCart"
            class="lumos-store-hdr__cart"
            :class="partClass('cart')"
            :data-label="headerEditActive ? 'Cart' : undefined"
            :role="headerEditActive ? 'button' : undefined"
            :tabindex="headerEditActive ? 0 : undefined"
            @click="onHeaderPart('cart', $event)"
            @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'cart')"
          >
            <v-icon size="16">shopping-bag</v-icon>
            <em>2</em>
          </span>
          <span
            v-if="showSignIn"
            class="lumos-store-hdr__account"
            :class="partClass('login-bar')"
            :data-label="headerEditActive ? 'Login Bar' : undefined"
            :role="headerEditActive ? 'button' : undefined"
            :tabindex="headerEditActive ? 0 : undefined"
            @click="onHeaderPart('login-bar', $event)"
            @keydown.enter.prevent="headerEditActive && emit('select-header-layer', 'login-bar')"
          >
            <v-icon size="16">user</v-icon>
            Sign in
          </span>
        </div>
      </div>

      <LumosHeaderSelectionChrome
        :show="Boolean(interactive && headerId && headerId === selectedId && !headerEditActive)"
        @edit-header="emit('edit-header')"
      />
    </header>
  </div>
</template>

<style scoped>
.lumos-store-hdr {
  --lumos-store-brand: var(--sf-brand, #495da7);
  --lumos-store-muted: #5d5b5b;
  --lumos-store-chip: #f4f4f4;
}

.lumos-store-hdr--compact .lumos-store-hdr__nav {
  font-size: 11px;
  letter-spacing: 0.06em;
}

.lumos-store-hdr--shadow .lumos-store-hdr__shell {
  box-shadow: var(--mp-shadow-md);
}

.lumos-store-hdr__promo {
  padding: 11px 16px;
  background: var(--lumos-store-brand);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.lumos-store-hdr__shell {
  position: relative;
  background: #fff;
}

.lumos-store-hdr__shell--layer {
  cursor: pointer;
}

.lumos-store-hdr__shell--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-store-brand);
}

.lumos-store-hdr__bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 80px;
  border-bottom: 1px solid #eee;
  background: #fff;
}

.lumos-store-hdr__bar--search-top-left .lumos-store-hdr__search {
  order: 1;
}

.lumos-store-hdr__bar--search-top-left .lumos-store-hdr__nav {
  order: 2;
}

.lumos-store-hdr__bar--search-top-left .lumos-store-hdr__tools {
  order: 3;
}

.lumos-store-hdr__bar--search-top-right .lumos-store-hdr__nav {
  order: 1;
}

.lumos-store-hdr__bar--search-top-right .lumos-store-hdr__search {
  order: 2;
}

.lumos-store-hdr__bar--search-top-right .lumos-store-hdr__tools {
  order: 3;
}

.lumos-store-hdr__bar--logo-top-left .lumos-store-hdr__logo {
  align-self: flex-start;
}

.lumos-store-hdr__bar--logo-top-center .lumos-store-hdr__logo {
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 1;
  transform: translateX(-50%);
}

.lumos-store-hdr__bar--logo-middle-left .lumos-store-hdr__logo {
  align-self: center;
}

.lumos-store-hdr__bar--logo-middle-center .lumos-store-hdr__logo {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
}

.lumos-store-hdr__logo-mark {
  display: block;
  width: 64px;
  height: 48px;
  background-color: var(--lumos-store-brand);
  mask: var(--lumos-store-logo-mask) center / contain no-repeat;
}

.lumos-store-hdr__nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 24px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-store-hdr__nav--drawer {
  flex: 0;
  gap: var(--mp-space-8);
  justify-content: flex-start;
}

.lumos-store-hdr__nav-drawer {
  display: inline-flex;
  flex-direction: column;
  gap: 3px;
  width: 26px;
}

.lumos-store-hdr__nav-drawer span {
  display: block;
  width: 100%;
  height: 3px;
  border-radius: var(--mp-radius-4, 4px);
  background: var(--lumos-store-brand);
}

.lumos-store-hdr__nav-drawer-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lumos-store-hdr__nav--background {
  border-radius: var(--mp-radius-8, 8px);
  background: var(--lumos-store-chip);
}

.lumos-store-hdr__nav--divider span + span {
  border-inline-start: 1px solid color-mix(in oklch, var(--lumos-store-muted) 35%, transparent);
  padding-inline-start: 24px;
}

.lumos-store-hdr__nav-item--active {
  color: var(--lumos-store-brand);
}

.lumos-store-hdr__search {
  display: flex;
  align-items: center;
}

.lumos-store-hdr__tools {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--lumos-store-muted);
  font-size: 11px;
}

.lumos-store-hdr__search-field {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 130px;
  height: 28px;
  padding: 0 8px;
  border-style: solid;
  border-color: color-mix(in oklch, var(--lumos-store-muted) 55%, transparent);
  background: var(--lumos-store-chip);
}

.lumos-store-hdr__search-field--icon-only {
  min-width: 0;
  width: 28px;
  justify-content: center;
  padding-inline: 0;
}

.lumos-store-hdr__cart {
  position: relative;
  display: inline-flex;
}

.lumos-store-hdr__cart em {
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--lumos-store-brand);
  color: #fff;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
}

.lumos-store-hdr__locale,
.lumos-store-hdr__account,
.lumos-store-hdr__wishlist {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.lumos-store-hdr__flag {
  width: 18px;
  height: 12px;
  border-radius: 2px;
  background:
    linear-gradient(#006aa7 0 100%),
    linear-gradient(#fecc00 0 100%);
  background-size: 100% 100%, 18px 4px;
  box-shadow: inset 7px 0 0 0 #fecc00;
}

.lumos-hdr-part {
  cursor: pointer;
  border-radius: var(--mp-radius-8);
  transition: background 0.15s;
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
  top: var(--mp-space-8);
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

.lumos-store-hdr__promo.lumos-hdr-part,
.lumos-store-hdr__logo.lumos-hdr-part,
.lumos-store-hdr__nav.lumos-hdr-part,
.lumos-store-hdr__tools.lumos-hdr-part,
.lumos-store-hdr__locale.lumos-hdr-part,
.lumos-store-hdr__cart.lumos-hdr-part,
.lumos-store-hdr__account.lumos-hdr-part {
  position: relative;
}
</style>
