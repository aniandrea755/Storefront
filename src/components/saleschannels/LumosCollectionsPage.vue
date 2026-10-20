<script setup lang="ts">
/**
 * Lumos Bedroom Collections listing. Merchant storefront mock (P4-8):
 * same Figma collection page as before, now driven by Collections settings.
 */
import { computed } from 'vue'
import bedroom from '@/assets/storefront/lumos/collections/bedroom.png'
import livingRoom from '@/assets/storefront/lumos/collections/living-room.png'
import diningRoom from '@/assets/storefront/lumos/collections/dining-room.png'
import office from '@/assets/storefront/lumos/collections/office.png'
import roomDividers from '@/assets/storefront/lumos/collections/room-dividers.png'
import ChildCollectionTiles from '@/components/saleschannels/ChildCollectionTiles.vue'
import LumosThemePageHeader from '@/components/saleschannels/LumosThemePageHeader.vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'
import LumosThemePageFooter from '@/components/saleschannels/LumosThemePageFooter.vue'
import type { FooterPreviewLayer } from '@/components/saleschannels/lumosFooterLayers'

const products = [
  { name: 'Cordella', price: 'Full bed starting at $1,745', image: bedroom },
  { name: 'Cordelia & Riviera', price: 'Full bed starting at $1,745', image: livingRoom },
  { name: 'Genevieve', price: 'Full bed starting at $1,745', image: diningRoom },
  { name: 'Cordella', price: 'Full bed starting at $1,745', image: office },
  { name: 'Miyu', price: 'Full bed starting at $1,745', image: roomDividers },
  { name: 'Mulholland', price: 'Full bed starting at $1,745', compare: '$1,034.00', image: bedroom },
]

const props = withDefaults(defineProps<{
  settings?: Record<string, string | number | boolean>
  /** When set, overrides settings.showCollectionBanner (theme builder live preview). */
  showCollectionBanner?: boolean
  showChildEntities?: boolean
  bannerSettings?: Record<string, string | number | boolean>
  bannerBlockId?: string
  childGridSettings?: Record<string, string | number | boolean>
  childGridBlockId?: string
  gridSettings?: Record<string, string | number | boolean>
  gridBlockId?: string
  selectedBlockId?: string | null
  headerId?: string
  announcementSettings?: Record<string, string | number | boolean>
  headerSettings?: Record<string, string | number | boolean>
  showAnnouncement?: boolean
  selectedHeaderLayer?: HeaderPreviewLayer | null
  collectionsId?: string
  footerId?: string
  footerSettings?: Record<string, string | number | boolean>
  selectedFooterLayer?: FooterPreviewLayer | null
  footerEditActive?: boolean
  selectedId?: string | null
  interactive?: boolean
  headerEditActive?: boolean
  collectionTitle?: string
  linked?: boolean
}>(), {
  settings: () => ({}),
  selectedId: null,
  interactive: false,
  headerEditActive: false,
  collectionTitle: 'Bedroom Collections',
  linked: false,
})

const emit = defineEmits<{
  select: [id: string]
  'select-block': [blockId: string]
  hover: [id: string | null]
  'edit-header': []
  'select-header-layer': [layer: HeaderPreviewLayer]
  'edit-footer': []
  'select-footer-layer': [layer: FooterPreviewLayer]
}>()

function flag(key: string): boolean {
  return props.settings[key] === true
}

function num(key: string, fallback: number): number {
  const value = props.settings[key]
  return typeof value === 'number' ? value : fallback
}

function text(key: string, fallback: string): string {
  const value = props.settings[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function bannerFlag(key: string): boolean {
  return props.bannerSettings?.[key] === true
}

const showBannerImage = computed(() => {
  if (props.bannerSettings && 'showCollectionImage' in props.bannerSettings) {
    return bannerFlag('showCollectionImage')
  }
  return true
})

const showBanner = computed(() => {
  const sectionOn = props.showCollectionBanner !== undefined
    ? props.showCollectionBanner
    : flag('showCollectionBanner')
  return sectionOn && showBannerImage.value
})

const bannerOpacity = computed(() => {
  const value = props.bannerSettings?.imageOpacity
  return typeof value === 'number' ? Math.min(100, Math.max(0, value)) / 100 : 1
})

const showCollectionDescription = computed(() => bannerFlag('showCollectionDescription'))

function gridNum(key: string, fallback: number): number {
  const value = props.gridSettings?.[key]
  return typeof value === 'number' ? value : fallback
}

function gridText(key: string, fallback: string): string {
  const value = props.gridSettings?.[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function childNum(key: string, fallback: number): number {
  const value = props.childGridSettings?.[key]
  return typeof value === 'number' ? value : fallback
}

function childText(key: string, fallback: string): string {
  const value = props.childGridSettings?.[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function childFlag(key: string): boolean {
  return props.childGridSettings?.[key] === true
}

const childLayout = computed(() => childText('layout', 'Grid'))
function normalizeChildCardStyle(raw: string): string {
  if (raw === 'Compact Image & Text' || raw === 'Compact') return 'Small image'
  if (raw === 'Title Only' || raw === 'Title only') return 'Only Text'
  return raw
}

const childCardStyle = computed(() => normalizeChildCardStyle(childText('cardStyle', 'Only Text')))

const itemsPerRow = computed(() => gridNum('itemsPerRow', 3))
const totalItems = computed(() => gridNum('totalItems', 25))
const paginationStyle = computed(() => gridText('paginationStyle', 'Combined (Load more)'))
const gridLayout = computed(() => gridText('layout', 'Grid'))
const sliderStyle = computed(() => gridText('sliderStyle', 'Arrows'))

const gridStyle = computed(() => ({
  '--lumos-grid-cols': String(itemsPerRow.value),
}))

const productCountLabel = computed(() => `${totalItems.value} products in this collection`)
const showChildren = computed(() => (
  props.showChildEntities !== undefined ? props.showChildEntities : flag('showChildEntities')
))
const colorSchema = computed(() => text('colorSchema', 'Theme default'))
const textSchema = computed(() => text('textSchema', 'Theme default'))
const cardSchema = computed(() => text('productCardSchema', 'Theme default'))

const alignMap = {
  Left: 'flex-start',
  Center: 'center',
  Right: 'flex-end',
  Top: 'flex-start',
  Bottom: 'flex-end',
} as const

const childCardStyleVars = computed(() => ({
  '--child-card-pad-y': `${childNum('cardPaddingVertical', 12)}px`,
  '--child-card-pad-x': `${childNum('cardPaddingHorizontal', 32)}px`,
  '--child-card-border': `${childNum('borderWidth', 1)}px`,
  '--child-card-radius': `${childNum('cornerRadius', 24)}px`,
  '--child-card-shadow': childFlag('cardShadow') ? 'var(--mp-shadow-sm)' : 'none',
  '--child-card-align-h': alignMap[childText('cardAlignHorizontal', 'Center') as keyof typeof alignMap] ?? 'center',
  '--child-card-align-v': alignMap[childText('cardAlignVertical', 'Center') as keyof typeof alignMap] ?? 'center',
}))

const mainStyle = computed(() => ({
  '--lumos-pad-y': `${num('paddingVertical', 24)}px`,
  '--lumos-pad-x': `${num('paddingHorizontal', 56)}px`,
  '--lumos-align-h': alignMap[text('alignHorizontal', 'Center') as keyof typeof alignMap] ?? 'center',
  '--lumos-align-v': alignMap[text('alignVertical', 'Center') as keyof typeof alignMap] ?? 'center',
  '--lumos-text-align': text('alignHorizontal', 'Center').toLowerCase(),
}))

function onSelect(id: string | undefined) {
  if (props.interactive && id) emit('select', id)
}

function layerClass(id: string | undefined) {
  return {
    'lumos-col__layer': props.interactive,
    'lumos-col__layer--selected': Boolean(id) && id === props.selectedId,
  }
}
</script>

<template>
  <div
    class="lumos-col"
    :class="{
      'lumos-col--modern': colorSchema === 'Modern Look',
      'lumos-col--compact': textSchema === 'Compact',
      'lumos-col--cards': cardSchema === 'Modern',
    }"
    aria-label="Bedroom Collections"
  >
    <LumosThemePageHeader
      :announcement-settings="announcementSettings"
      :header-settings="headerSettings"
      :header-id="headerId"
      :selected-id="selectedId"
      :selected-header-layer="selectedHeaderLayer"
      :interactive="interactive"
      :header-edit-active="headerEditActive"
      :show-announcement="showAnnouncement"
      @select="onSelect"
      @select-header-layer="(layer) => emit('select-header-layer', layer)"
      @edit-header="emit('edit-header')"
      @hover="(id) => emit('hover', id)"
    />

    <main
      class="lumos-col__main"
      :class="layerClass(collectionsId)"
      :style="mainStyle"
      :data-label="interactive ? 'Collections' : undefined"
      :tabindex="interactive ? 0 : undefined"
      @click="onSelect(collectionsId)"
      @keydown.enter.prevent="onSelect(collectionsId)"
      @mouseenter="interactive && collectionsId && emit('hover', collectionsId)"
      @mouseleave="interactive && emit('hover', null)"
    >
      <div
        v-if="showBanner"
        class="lumos-col__banner-wrap"
        :class="{
          'lumos-col__layer': interactive && bannerBlockId,
          'lumos-col__layer--selected': interactive && bannerBlockId && bannerBlockId === selectedBlockId,
        }"
        :data-label="interactive && bannerBlockId ? 'Collection Banner' : undefined"
        :role="interactive && bannerBlockId ? 'button' : undefined"
        :tabindex="interactive && bannerBlockId ? 0 : undefined"
        @click.stop="interactive && bannerBlockId && emit('select-block', bannerBlockId)"
        @keydown.enter.prevent="interactive && bannerBlockId && emit('select-block', bannerBlockId)"
      >
        <img
          class="lumos-col__banner"
          :src="bedroom"
          alt=""
          :style="{ opacity: bannerOpacity }"
        >
      </div>
      <div
        v-if="showChildren"
        class="lumos-col__child-grid-wrap"
        :class="{
          'lumos-col__layer': interactive && childGridBlockId,
          'lumos-col__layer--selected': interactive && childGridBlockId && childGridBlockId === selectedBlockId,
        }"
        :style="childCardStyleVars"
        :data-label="interactive && childGridBlockId ? 'Child Category Grid' : undefined"
        :role="interactive && childGridBlockId ? 'button' : undefined"
        :tabindex="interactive && childGridBlockId ? 0 : undefined"
        @click.stop="interactive && childGridBlockId && emit('select-block', childGridBlockId)"
        @keydown.enter.prevent="interactive && childGridBlockId && emit('select-block', childGridBlockId)"
      >
        <ChildCollectionTiles
          title="Shop by room"
          :parent-title="collectionTitle"
          :layout="childLayout"
          :card-style="childCardStyle"
          :linked="linked"
        />
      </div>
      <p class="lumos-col__crumb">Home / Collections / {{ collectionTitle }}</p>
      <div class="lumos-col__intro">
        <h1>{{ collectionTitle }}</h1>
        <span v-if="showCollectionDescription">{{ productCountLabel }}</span>
      </div>
      <div
        class="lumos-col__grid-wrap"
        :class="{
          'lumos-col__layer': interactive && gridBlockId,
          'lumos-col__layer--selected': interactive && gridBlockId && gridBlockId === selectedBlockId,
        }"
        :data-label="interactive && gridBlockId ? 'Collection Grid' : undefined"
        :role="interactive && gridBlockId ? 'button' : undefined"
        :tabindex="interactive && gridBlockId ? 0 : undefined"
        @click.stop="interactive && gridBlockId && emit('select-block', gridBlockId)"
        @keydown.enter.prevent="interactive && gridBlockId && emit('select-block', gridBlockId)"
      >
        <div
          v-if="gridLayout === 'Carousel' && sliderStyle === 'Arrows'"
          class="lumos-col__carousel-chrome"
          aria-hidden="true"
        >
          <span>‹</span>
          <span>›</span>
        </div>
        <div
          class="lumos-col__grid"
          :class="{ 'lumos-col__grid--carousel': gridLayout === 'Carousel' }"
          :style="gridStyle"
        >
          <article v-for="(product, index) in products" :key="`${product.name}-${index}`">
            <img :src="product.image" :alt="product.name">
            <strong>{{ product.name }}</strong>
            <em>
              {{ product.price }}
              <s v-if="product.compare">{{ product.compare }}</s>
            </em>
            <p>A versatile furniture collection designed for speed and customization.</p>
            <span v-if="cardSchema === 'Modern'" class="lumos-col__cart">Add to cart</span>
          </article>
        </div>
        <div
          v-if="gridLayout === 'Carousel' && sliderStyle === 'Dots'"
          class="lumos-col__carousel-dots"
          aria-hidden="true"
        >
          <span v-for="n in 3" :key="n"></span>
        </div>
        <div
          v-else-if="gridLayout !== 'Carousel' && paginationStyle === 'Pages'"
          class="lumos-col__pages"
          aria-label="Pagination"
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <i>…</i>
          <span>30</span>
        </div>
        <v-btn
          v-else-if="gridLayout !== 'Carousel' && paginationStyle === 'Combined (Load more)'"
          class="text-none lumos-col__load-more"
          variant="outlined"
          size="small"
        >
          Load more
        </v-btn>
      </div>
    </main>

    <LumosThemePageFooter
      :footer-settings="footerSettings"
      :footer-id="footerId"
      :selected-id="selectedId"
      :selected-footer-layer="selectedFooterLayer"
      :interactive="interactive"
      :footer-edit-active="footerEditActive"
      @select="onSelect"
      @select-footer-layer="(layer) => emit('select-footer-layer', layer)"
      @edit-footer="emit('edit-footer')"
      @hover="(id) => emit('hover', id)"
    />
  </div>
</template>

<style scoped>
.lumos-col {
  background: #fff;
  color: #111;
  font-family: Inter, system-ui, sans-serif;
}

.lumos-col--modern {
  background: #eeedf5;
  color: #272727;
}

.lumos-col__promo {
  padding: 8px 20px;
  background: #1a1b3a;
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
}

.lumos-col__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 56px;
  padding: 0 28px;
  background: #fff;
}

.lumos-col__bar strong {
  font-size: 13px;
  letter-spacing: 0.12em;
}

.lumos-col__bar nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 18px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-col__bar em {
  font-size: 12px;
  font-style: normal;
  color: #6b7280;
}

.lumos-col__main {
  display: flex;
  flex-direction: column;
  align-items: var(--lumos-align-h, center);
  justify-content: var(--lumos-align-v, flex-start);
  gap: 20px;
  padding: var(--lumos-pad-y, 24px) var(--lumos-pad-x, 56px);
  text-align: var(--lumos-text-align, center);
}

.lumos-col__banner,
.lumos-col__grid,
.lumos-col__intro,
.lumos-col__crumb,
.lumos-col__pages {
  width: 100%;
}

.lumos-col__banner-wrap {
  width: 100%;
}

.lumos-col__banner {
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.lumos-col__crumb {
  margin: 0;
  color: #6b7280;
  font-size: 11px;
}

.lumos-col__intro h1 {
  margin: 0 0 6px;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-col--compact .lumos-col__intro h1 {
  font-size: 20px;
}

.lumos-col__intro span,
.lumos-col__grid p,
.lumos-col__grid em {
  color: #6b7280;
  font-size: 12px;
}

.lumos-col--compact .lumos-col__grid p,
.lumos-col--compact .lumos-col__grid em,
.lumos-col--compact .lumos-col__intro span {
  font-size: 11px;
}

.lumos-col__grid-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.lumos-col__grid {
  display: grid;
  grid-template-columns: repeat(var(--lumos-grid-cols, 3), minmax(0, 1fr));
  gap: 28px 20px;
}

.lumos-col__grid--carousel {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.lumos-col__grid--carousel article {
  flex: 0 0 min(280px, 72vw);
}

.lumos-col__load-more {
  align-self: center;
}

.lumos-col__carousel-chrome {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 320px;
  margin-bottom: var(--mp-space-8);
  font-size: 24px;
  color: #03b6fc;
}

.lumos-col__carousel-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 12px;
}

.lumos-col__carousel-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #03b6fc;
}

.lumos-col__grid article {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  text-align: inherit;
}

.lumos-col--cards .lumos-col__grid article {
  padding: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
}

.lumos-col__grid img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: #f3f4f6;
}

.lumos-col__grid strong {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-col__grid p {
  margin: 0;
  line-height: 1.4;
}

.lumos-col__grid s {
  margin-left: 6px;
}

.lumos-col__cart {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  background: #111;
  color: #fff;
  font-size: 11px;
}

.lumos-col__pages {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 0 16px;
  font-size: 12px;
}

.lumos-col__pages span:first-child {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: #1a1b3a;
  color: #fff;
}

.lumos-col__footer {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 0.8fr 1fr;
  gap: 20px;
  padding: 28px 56px;
  border-top: 1px solid #eee;
  background: #fff;
  font-size: 12px;
  color: #4b5563;
}

.lumos-col__footer strong {
  display: block;
  margin-bottom: 8px;
  color: #111;
}

.lumos-col__footer span,
.lumos-col__footer p {
  display: block;
  margin: 0;
  line-height: 1.7;
}

.lumos-col__layer {
  cursor: pointer;
}

.lumos-col__layer--selected {
  box-shadow: inset 0 0 0 2px #495da7;
}

.lumos-page-header-target {
  position: relative;
}

.lumos-page-header-target.lumos-col__layer--selected {
  box-shadow: none;
}

.lumos-col__header.lumos-col__layer:hover,
.lumos-col__main.lumos-col__layer:hover,
.lumos-col__footer.lumos-col__layer:hover {
  background: color-mix(in srgb, #495da7 6%, #fff);
}
</style>
