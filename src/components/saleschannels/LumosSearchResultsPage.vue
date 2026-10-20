<script setup lang="ts">
/**
 * Lumos Search Results — merchant storefront mock (Figma Lumos 2787-38382, Modern Look).
 */
import { computed } from 'vue'
import logoMask from '@/assets/storefront/lumos/search/logo-mask.png'
import product1 from '@/assets/storefront/lumos/search/product-1.png'
import product2 from '@/assets/storefront/lumos/search/product-2.png'
import product3 from '@/assets/storefront/lumos/search/product-3.png'
import product4 from '@/assets/storefront/lumos/search/product-4.png'
import product5 from '@/assets/storefront/lumos/search/product-5.png'
import product6 from '@/assets/storefront/lumos/search/product-6.png'
import product7 from '@/assets/storefront/lumos/search/product-7.png'
import product8 from '@/assets/storefront/lumos/search/product-8.png'
import product9 from '@/assets/storefront/lumos/search/product-9.png'
import LumosThemePageHeader from '@/components/saleschannels/LumosThemePageHeader.vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'
import LumosThemePageFooter from '@/components/saleschannels/LumosThemePageFooter.vue'
import type { FooterPreviewLayer } from '@/components/saleschannels/lumosFooterLayers'

const products = [
  { name: 'Aria Mid-Century Modern Accent Chair', price: '$380', compare: '$520', image: product1 },
  { name: 'Oslo Teak Wood Coffee Table', price: '$275', compare: '$400', image: product2 },
  { name: 'Harlow Velvet Sectional Sofa', price: '$1,250', compare: '$1,800', image: product3 },
  { name: 'Nora Linen Upholstered Bed Frame', price: '$890', compare: '$1,200', image: product4 },
  { name: 'Camden Marble Side Table', price: '$195', compare: '$310', image: product5 },
  { name: 'Finley Oak Dining Table Set', price: '$1,450', compare: '$2,100', image: product6 },
  { name: 'Brooks Leather Recliner', price: '$780', compare: '$1,050', image: product7 },
  { name: 'Ivy Solid Pine Dresser', price: '$620', compare: '$880', image: product8 },
  { name: 'Milo Ergonomic Office Chair', price: '$410', compare: '$590', image: product9 },
]

const categoryFilters = [
  { label: 'Living Room', count: 142 },
  { label: 'Bedroom', count: 98 },
  { label: 'Dining Room', count: 76 },
  { label: 'Office', count: 54 },
  { label: 'Outdoor', count: 32 },
]

const brandFilters = [
  { label: 'Century Furniture', count: 142 },
  { label: 'Modern Living', count: 98 },
  { label: 'Classic Home', count: 76 },
  { label: 'Designer Co.', count: 54 },
]

const priceFilters = [
  { label: 'Under $100', count: 45 },
  { label: '$100 - $500', count: 128 },
  { label: '$500 - $1,000', count: 89 },
  { label: '$1,000 - $2,000', count: 56 },
  { label: 'Over $2,000', count: 34 },
]

const collapsedFilters = ['Style', 'Material', 'Color']

const props = withDefaults(defineProps<{
  settings?: Record<string, string | number | boolean>
  gridSettings?: Record<string, string | number | boolean>
  headerId?: string
  announcementSettings?: Record<string, string | number | boolean>
  headerSettings?: Record<string, string | number | boolean>
  showAnnouncement?: boolean
  selectedHeaderLayer?: HeaderPreviewLayer | null
  searchResultsId?: string
  productGridBlockId?: string
  footerId?: string
  footerSettings?: Record<string, string | number | boolean>
  selectedFooterLayer?: FooterPreviewLayer | null
  footerEditActive?: boolean
  selectedId?: string | null
  selectedBlockId?: string | null
  interactive?: boolean
  headerEditActive?: boolean
}>(), {
  settings: () => ({}),
  selectedId: null,
  selectedBlockId: null,
  interactive: false,
  headerEditActive: false,
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

function text(key: string, fallback: string): string {
  const value = props.settings[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function gridNum(key: string, fallback: number): number {
  const value = props.gridSettings?.[key]
  return typeof value === 'number' ? value : fallback
}

function gridFlag(key: string, fallback = false): boolean {
  const value = props.gridSettings?.[key]
  return typeof value === 'boolean' ? value : fallback
}

function gridText(key: string, fallback: string): string {
  const value = props.gridSettings?.[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

const colorSchema = computed(() => text('colorSchema', 'Modern Look'))
const textSchema = computed(() => text('textSchema', 'Compact'))
const cardSchema = computed(() => text('productCardSchema', 'Modern'))
const paginationStyle = computed(() => gridText('paginationStyle', 'Pages'))

const sampleQuery = computed(() => text('sampleQuery', 'modern furniture'))
const itemsPerRow = computed(() => Math.min(6, Math.max(1, gridNum('itemsPerRow', 3))))
const resultCount = computed(() => Math.min(999, Math.max(1, gridNum('totalItems', 20))))
const summaryResultCount = computed(() => 352)
const showPageTitle = computed(() => gridFlag('showPageTitle', true))
const showSortingOptions = computed(() => gridFlag('showSortingOptions', true))
const showFilters = computed(() => gridFlag('showFilters', true))
const filterPosition = computed(() => (props.gridSettings?.filterPosition === 'Top' ? 'Top' : 'Left'))

const visibleProducts = computed(() => {
  const count = Math.min(resultCount.value, products.length)
  return products.slice(0, count)
})

const pageStyle = computed(() => ({
  '--lumos-search-logo-mask': `url(${logoMask})`,
}))

const gridStyle = computed(() => ({
  '--lumos-search-cols': String(itemsPerRow.value),
}))

const showLoadMore = computed(() => (
  paginationStyle.value === 'Combined (Load more)'
  || paginationStyle.value === 'Infinite scroll'
))
const showPageNumbers = computed(() => (
  paginationStyle.value === 'Pages'
  || paginationStyle.value === 'Combined (Load more)'
))

function onSelect(id: string | undefined) {
  if (props.interactive && id) emit('select', id)
}

function layerClass(id: string | undefined) {
  return {
    'lumos-search__layer': props.interactive,
    'lumos-search__layer--selected': Boolean(id) && id === props.selectedId,
  }
}
</script>

<template>
  <div
    class="lumos-search"
    :class="{
      'lumos-search--modern': colorSchema === 'Modern Look',
      'lumos-search--compact': textSchema === 'Compact',
      'lumos-search--cards': cardSchema === 'Modern',
    }"
    :style="pageStyle"
    aria-label="Search results"
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

    <div
      class="lumos-search__intro-wrap"
      :class="layerClass(searchResultsId)"
      :data-label="interactive ? 'Search Results' : undefined"
      :role="interactive ? 'button' : undefined"
      :tabindex="interactive ? 0 : undefined"
      @click="onSelect(searchResultsId)"
      @keydown.enter.prevent="onSelect(searchResultsId)"
      @mouseenter="interactive && searchResultsId && emit('hover', searchResultsId)"
      @mouseleave="interactive && emit('hover', null)"
    >
      <nav class="lumos-search__crumb" aria-label="Breadcrumb">
        <span>Home</span>
        <v-icon size="14">chevron-right</v-icon>
        <span>Search</span>
        <v-icon size="14">chevron-right</v-icon>
        <strong>{{ sampleQuery }}</strong>
      </nav>
      <div v-if="showPageTitle" class="lumos-search__page-head">
        <div class="lumos-search__page-copy">
          <h1>Search Results</h1>
          <p>
            {{ summaryResultCount }} results for
            <strong>"{{ sampleQuery }}"</strong>
          </p>
        </div>
      </div>
    </div>

    <main class="lumos-search__main">
      <div
        class="lumos-search__content"
        :class="{
          'lumos-search__content--single': !showFilters || filterPosition === 'Top',
          'lumos-search__layer': interactive && productGridBlockId,
          'lumos-search__layer--selected': interactive && productGridBlockId && productGridBlockId === selectedBlockId,
        }"
        :data-label="interactive && productGridBlockId ? 'Product Grid' : undefined"
        :role="interactive && productGridBlockId ? 'button' : undefined"
        :tabindex="interactive && productGridBlockId ? 0 : undefined"
        @click.stop="interactive && productGridBlockId && emit('select-block', productGridBlockId)"
        @keydown.enter.prevent="interactive && productGridBlockId && emit('select-block', productGridBlockId)"
      >
        <aside
          v-if="showFilters && filterPosition === 'Left'"
          class="lumos-search__filters"
          aria-label="Filters"
        >
          <div class="lumos-search__filters-head">
            <strong>Filters</strong>
            <button type="button" class="lumos-search__clear">Clear All</button>
          </div>
          <section class="lumos-search__filter-group">
            <button type="button" class="lumos-search__filter-title">
              Category
              <v-icon size="14">chevron-up</v-icon>
            </button>
            <label v-for="item in categoryFilters" :key="item.label" class="lumos-search__filter-row">
              <span class="lumos-search__checkbox" />
              <span>{{ item.label }}</span>
              <em>({{ item.count }})</em>
            </label>
            <button type="button" class="lumos-search__filter-more">
              <v-icon size="14">plus</v-icon>
              More
            </button>
          </section>
          <section class="lumos-search__filter-group">
            <button type="button" class="lumos-search__filter-title">
              Brand
              <v-icon size="14">chevron-up</v-icon>
            </button>
            <div class="lumos-search__filter-search">Search <v-icon size="12">search</v-icon></div>
            <label v-for="item in brandFilters" :key="item.label" class="lumos-search__filter-row">
              <span class="lumos-search__checkbox" />
              <span>{{ item.label }}</span>
              <em>({{ item.count }})</em>
            </label>
            <button type="button" class="lumos-search__filter-more">
              <v-icon size="14">plus</v-icon>
              More
            </button>
          </section>
          <section class="lumos-search__filter-group">
            <button type="button" class="lumos-search__filter-title">
              Price Range
              <v-icon size="14">chevron-up</v-icon>
            </button>
            <label v-for="item in priceFilters" :key="item.label" class="lumos-search__filter-row">
              <span class="lumos-search__checkbox" />
              <span>{{ item.label }}</span>
              <em>({{ item.count }})</em>
            </label>
            <div class="lumos-search__price-inputs">
              <span>$ Min</span>
              <span>$ Max</span>
              <button type="button" class="lumos-search__go">Go</button>
            </div>
          </section>
          <section v-for="title in collapsedFilters" :key="title" class="lumos-search__filter-group lumos-search__filter-group--collapsed">
            <button type="button" class="lumos-search__filter-title">
              {{ title }}
              <v-icon size="14">chevron-down</v-icon>
            </button>
          </section>
        </aside>

        <div class="lumos-search__results">
          <div v-if="showFilters && filterPosition === 'Top'" class="lumos-search__filters-top">
            <strong>Filters</strong>
            <span>Category · Brand · Price · Style</span>
          </div>
          <div class="lumos-search__grid" :style="gridStyle">
            <article v-for="(product, index) in visibleProducts" :key="`${product.name}-${index}`" class="lumos-search__card">
              <div class="lumos-search__card-img">
                <img :src="product.image" :alt="product.name">
              </div>
              <div class="lumos-search__card-body">
                <strong>{{ product.name }}</strong>
                <p class="lumos-search__price">
                  <span>{{ product.price }}</span>
                  <s v-if="product.compare">{{ product.compare }}</s>
                </p>
              </div>
            </article>
          </div>
          <div class="lumos-search__pagination">
            <button v-if="showLoadMore" type="button" class="lumos-search__load-more">Load More</button>
            <nav v-if="showPageNumbers" class="lumos-search__pages" aria-label="Pagination">
              <button type="button" class="lumos-search__page-btn lumos-search__page-btn--nav" aria-label="Previous page">
                <v-icon size="16">chevron-left</v-icon>
              </button>
              <button type="button" class="lumos-search__page-btn lumos-search__page-btn--active">1</button>
              <button type="button" class="lumos-search__page-btn">2</button>
              <button type="button" class="lumos-search__page-btn">3</button>
              <button type="button" class="lumos-search__page-btn">4</button>
              <span class="lumos-search__pages-ellipsis">…</span>
              <button type="button" class="lumos-search__page-btn">30</button>
              <button type="button" class="lumos-search__page-btn lumos-search__page-btn--nav" aria-label="Next page">
                <v-icon size="16">chevron-right</v-icon>
              </button>
            </nav>
          </div>
        </div>
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
.lumos-search {
  --lumos-brand: #495da7;
  --lumos-ink: #272727;
  --lumos-muted: #545354;
  --lumos-line: #e8e8e8;
  --lumos-chip: #f4f6f7;
  --lumos-footer-bg: #f9fafb;
  --lumos-inset-x: 28px;
  --lumos-title-size: 22px;
  --lumos-subtitle-size: 11px;
  --lumos-filter-width: minmax(160px, 185px);
  --lumos-grid-gap-x: 16px;
  --lumos-grid-gap-y: 20px;
  background: #fff;
  color: var(--lumos-ink);
  font-family: Inter, system-ui, sans-serif;
}

.lumos-search--modern {
  --lumos-inset-x: 56px;
  --lumos-title-size: 32px;
  --lumos-subtitle-size: 16px;
  --lumos-filter-width: minmax(200px, 280px);
  --lumos-grid-gap-x: 28px;
  --lumos-grid-gap-y: 28px;
}

.lumos-search__promo {
  padding: 8px 16px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.lumos-search__header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 64px;
  padding: 12px var(--lumos-inset-x);
  border-bottom: 1px solid var(--lumos-line);
  background: #fff;
}

.lumos-search--modern .lumos-search__header-bar {
  min-height: 80px;
  padding-block: 16px;
}

.lumos-search__logo-mark {
  display: block;
  width: 42px;
  height: 32px;
  background:
    radial-gradient(circle at 30% 40%, var(--lumos-brand) 0 38%, transparent 39%),
    radial-gradient(circle at 68% 58%, color-mix(in srgb, var(--lumos-brand) 80%, #fff) 0 34%, transparent 35%);
}

.lumos-search__logo-mark--mask {
  width: 64px;
  height: 48px;
  background-color: var(--lumos-brand);
  mask: var(--lumos-search-logo-mask) center / contain no-repeat;
}

.lumos-search__nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 24px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-search__tools {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--lumos-muted);
  font-size: 10px;
}

.lumos-search__search-field {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 130px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  background: var(--lumos-chip);
}

.lumos-search__cart {
  position: relative;
  display: inline-flex;
}

.lumos-search__cart em {
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
}

.lumos-search__locale,
.lumos-search__account {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.lumos-search__flag {
  width: 18px;
  height: 12px;
  border-radius: 2px;
  background:
    linear-gradient(#006aa7 0 100%),
    linear-gradient(#fecc00 0 100%);
  background-size: 100% 100%, 18px 4px;
  box-shadow: inset 7px 0 0 0 #fecc00;
}

.lumos-search__intro-wrap {
  padding: 0;
  border-bottom: 0;
}

.lumos-search__crumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding: 16px var(--lumos-inset-x);
  border-bottom: 1px solid var(--lumos-line);
  color: var(--lumos-muted);
  font-size: 10px;
}

.lumos-search--modern .lumos-search__crumb {
  font-size: 14px;
}

.lumos-search__crumb strong {
  color: var(--lumos-ink);
  font-weight: 500;
}

.lumos-search__page-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 24px var(--lumos-inset-x);
  border-bottom: 1px solid var(--lumos-line);
}

.lumos-search__page-copy h1 {
  margin: 0 0 8px;
  font-size: var(--lumos-title-size);
  font-weight: 700;
  line-height: 1.2;
}

.lumos-search__page-copy p {
  margin: 0;
  color: var(--lumos-muted);
  font-size: var(--lumos-subtitle-size);
  line-height: 1.5;
}

.lumos-search__page-copy strong {
  color: var(--lumos-ink);
  font-size: inherit;
  font-weight: 600;
}

.lumos-search__main {
  padding: 24px var(--lumos-inset-x) 32px;
}

.lumos-search__content {
  display: grid;
  grid-template-columns: var(--lumos-filter-width) minmax(0, 1fr);
  gap: 24px;
  align-items: start;
}

.lumos-search__content--single {
  grid-template-columns: minmax(0, 1fr);
}

.lumos-search__filters {
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.lumos-search--modern .lumos-search__filters {
  border-radius: 10px;
}

.lumos-search__filters-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid var(--lumos-line);
}

.lumos-search--modern .lumos-search__filters-head {
  padding: 24px;
}

.lumos-search__filters-head strong {
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.lumos-search--modern .lumos-search__filters-head strong {
  font-size: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
}

.lumos-search__clear {
  border: 0;
  background: transparent;
  color: var(--lumos-brand);
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
}

.lumos-search--modern .lumos-search__clear {
  font-size: 14px;
}

.lumos-search__filter-group {
  padding: 14px 16px;
  border-bottom: 1px solid var(--lumos-line);
}

.lumos-search--modern .lumos-search__filter-group {
  padding: 24px;
}

.lumos-search__filter-group--collapsed {
  padding-block: 12px;
}

.lumos-search__filter-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.lumos-search--modern .lumos-search__filter-title {
  margin-bottom: 16px;
  font-size: 16px;
}

.lumos-search__filter-group--collapsed .lumos-search__filter-title {
  margin-bottom: 0;
}

.lumos-search__filter-row {
  display: grid;
  grid-template-columns: 12px 1fr auto;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 10px;
  font-weight: 500;
}

.lumos-search--modern .lumos-search__filter-row {
  grid-template-columns: 16px 1fr auto;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
}

.lumos-search--modern .lumos-search__checkbox {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.lumos-search__filter-row em {
  font-style: normal;
}

.lumos-search__checkbox {
  width: 11px;
  height: 11px;
  border: 1px solid var(--lumos-line);
  border-radius: 3px;
}

.lumos-search__filter-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--lumos-brand);
  font-size: 10px;
  cursor: pointer;
}

.lumos-search__filter-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 4px 12px;
  border: 1px solid var(--lumos-line);
  border-radius: 999px;
  font-size: 9px;
}

.lumos-search__price-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
  font-size: 9px;
  color: var(--lumos-muted);
}

.lumos-search__go {
  padding: 4px 10px;
  border: 1px solid var(--lumos-line);
  border-radius: 4px;
  background: #fff;
  font-size: 9px;
  cursor: pointer;
}

.lumos-search__filters-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  padding: 10px 12px;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  font-size: 10px;
}

.lumos-search__grid {
  display: grid;
  grid-template-columns: repeat(var(--lumos-search-cols, 3), minmax(0, 1fr));
  gap: var(--lumos-grid-gap-y) var(--lumos-grid-gap-x);
}

.lumos-search__card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.lumos-search--cards .lumos-search__card {
  gap: 0;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
}

.lumos-search__card-img {
  border: 1px solid var(--lumos-line);
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}

.lumos-search--cards .lumos-search__card-img {
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--lumos-line);
}

.lumos-search__card-img img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  background: #fff;
}

.lumos-search--cards .lumos-search__card-img img {
  aspect-ratio: 311 / 342;
  object-fit: cover;
}

.lumos-search__card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.lumos-search--cards .lumos-search__card-body {
  gap: 16px;
  padding: 16px 20px 20px;
}

.lumos-search__card strong {
  font-size: 10px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.lumos-search--cards .lumos-search__card strong {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
}

.lumos-search--compact.lumos-search--cards .lumos-search__card strong {
  font-size: 13px;
}

.lumos-search__price {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0;
  font-size: 12px;
}

.lumos-search--cards .lumos-search__price {
  gap: 12px;
}

.lumos-search__price span {
  color: var(--lumos-brand);
  font-weight: 700;
}

.lumos-search--cards .lumos-search__price span {
  font-size: 20px;
}

.lumos-search--compact.lumos-search--cards .lumos-search__price span {
  font-size: 16px;
}

.lumos-search__price s {
  color: var(--lumos-muted);
  font-size: 10px;
  font-weight: 400;
}

.lumos-search--cards .lumos-search__price s {
  font-size: 16px;
}

.lumos-search--compact.lumos-search--cards .lumos-search__price s {
  font-size: 13px;
}

.lumos-search__pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
  padding-block: 24px;
}

.lumos-search__load-more {
  min-width: 200px;
  padding: 10px 24px;
  border: 0;
  border-radius: 4px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
}

.lumos-search__pages {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--lumos-muted);
  font-size: 11px;
}

.lumos-search--modern .lumos-search__pages {
  font-size: 14px;
}

.lumos-search__page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
  color: var(--lumos-ink);
  font: inherit;
  font-weight: 500;
  cursor: pointer;
}

.lumos-search--modern .lumos-search__page-btn {
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
}

.lumos-search__page-btn--active {
  border-color: var(--lumos-brand);
  background: var(--lumos-brand);
  color: #fff;
  font-weight: 600;
}

.lumos-search__page-btn--nav {
  color: var(--lumos-muted);
}

.lumos-search--modern .lumos-search__page-btn--nav:first-child {
  opacity: 0.4;
}

.lumos-search__pages-ellipsis {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  letter-spacing: 0.12em;
}

.lumos-search--modern .lumos-search__pages-ellipsis {
  min-width: 40px;
  height: 40px;
}

.lumos-search__footer {
  margin-top: 8px;
  padding: 32px var(--lumos-inset-x) 16px;
  border-top: 1px solid #f3f4f6;
  background: var(--lumos-footer-bg);
}

.lumos-search__footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  font-size: 10px;
}

.lumos-search__footer-brand p {
  margin: 12px 0;
  color: #4a5565;
  line-height: 1.45;
}

.lumos-search__social {
  display: flex;
  gap: 10px;
  color: #4a5565;
}

.lumos-search__footer-grid strong {
  display: block;
  margin-bottom: 10px;
  color: #101828;
  font-size: 10px;
}

.lumos-search__footer-grid span {
  display: block;
  margin-bottom: 6px;
  color: #4a5565;
}

.lumos-search__newsletter-field {
  display: block;
  margin: 8px 0;
  padding: 8px 10px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #99a1af;
}

.lumos-search__subscribe {
  display: block;
  padding: 8px 10px;
  background: #101828;
  color: #fff;
  text-align: center;
}

.lumos-search__footer-legal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  color: #6a7282;
  font-size: 8px;
}

.lumos-search__footer-legal span:last-child,
.lumos-search__footer-legal span:nth-last-child(2) {
  margin-left: 12px;
}

.lumos-search__layer {
  cursor: pointer;
}

.lumos-search__layer--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-brand);
}

.lumos-page-header-target {
  position: relative;
}

.lumos-page-header-target.lumos-search__layer--selected {
  box-shadow: none;
}

.lumos-search__header.lumos-search__layer:hover,
.lumos-search__intro-wrap.lumos-search__layer:hover,
.lumos-search__content.lumos-search__layer:hover,
.lumos-search__footer.lumos-search__layer:hover {
  background: color-mix(in srgb, var(--lumos-brand) 6%, #fff);
}
</style>
