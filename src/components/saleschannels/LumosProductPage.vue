<script setup lang="ts">
/**
 * Lumos Product detail — merchant storefront mock (Figma Lumos 4-7334, Modern Look).
 */
import { computed, ref } from 'vue'
import logoMask from '@/assets/storefront/lumos/search/logo-mask.png'
import view1 from '@/assets/storefront/lumos/product/view-1.png'
import view2 from '@/assets/storefront/lumos/product/view-2.png'
import view3 from '@/assets/storefront/lumos/product/view-3.png'
import view4 from '@/assets/storefront/lumos/product/view-4.png'
import LumosThemePageHeader from '@/components/saleschannels/LumosThemePageHeader.vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'
import LumosThemePageFooter from '@/components/saleschannels/LumosThemePageFooter.vue'
import type { FooterPreviewLayer } from '@/components/saleschannels/lumosFooterLayers'

const galleryImages = [view1, view2, view3, view4, view4]

const featureBullets = [
  'Solid oak wood frame with natural grain',
  'Premium walnut finish',
  'High-density foam cushioning',
  'Durable fabric upholstery',
  'Reinforced joints for stability',
]

const props = withDefaults(defineProps<{
  settings?: Record<string, string | number | boolean>
  headerId?: string
  announcementSettings?: Record<string, string | number | boolean>
  headerSettings?: Record<string, string | number | boolean>
  showAnnouncement?: boolean
  selectedHeaderLayer?: HeaderPreviewLayer | null
  productDetailId?: string
  productDetailBlockId?: string
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

function flag(key: string, fallback = false): boolean {
  const value = props.settings[key]
  return typeof value === 'boolean' ? value : fallback
}

type PdpSliderLayout = 'Left' | 'Right' | 'Bottom'

function resolveSliderLayout(sliderRaw: string, galleryRaw: string): PdpSliderLayout {
  if (sliderRaw === 'Right' || sliderRaw === 'Bottom') return sliderRaw
  if (sliderRaw === 'Stacked' || galleryRaw === 'Stacked') return 'Bottom'
  return 'Left'
}

const sliderLayout = computed(() => resolveSliderLayout(text('sliderLayout', ''), text('galleryLayout', '')))
const imageZoom = computed(() => text('imageZoom', 'No zoom'))
const mediaOnRight = computed(() => text('desktopMediaPosition', 'Left') === 'Right')
const showReviews = computed(() => flag('showReviews', true))
const showVariantSelector = computed(() => flag('showVariantSelector', true))
const colorSchema = computed(() => text('colorSchema', 'Modern Look'))
const textSchema = computed(() => text('textSchema', 'Compact'))
const buttonSchema = computed(() => text('buttonSchema', 'Modern'))
const isBottomSlider = computed(() => sliderLayout.value === 'Bottom')
const isRightSlider = computed(() => sliderLayout.value === 'Right')

const variantOptions = ['Charcoal', 'Linen', 'Walnut']
const selectedVariant = ref(variantOptions[0])

const activeIndex = ref(0)

const activeImage = computed(() => galleryImages[activeIndex.value] ?? view1)

const pageStyle = computed(() => ({
  '--lumos-pdp-logo-mask': `url(${logoMask})`,
}))

function onSelect(id: string | undefined) {
  if (props.interactive && id) emit('select', id)
}

function layerClass(id: string | undefined) {
  return {
    'lumos-pdp__layer': props.interactive,
    'lumos-pdp__layer--selected': Boolean(id) && id === props.selectedId,
  }
}

function selectThumb(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <div
    class="lumos-pdp"
    :class="{
      'lumos-pdp--modern': colorSchema === 'Modern Look',
      'lumos-pdp--compact': textSchema === 'Compact',
      'lumos-pdp--buttons-modern': buttonSchema === 'Modern',
    }"
    :style="pageStyle"
    aria-label="Product detail"
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
      class="lumos-pdp__body"
      :class="{
        'lumos-pdp__layer': interactive && productDetailId && productDetailId === selectedId && selectedBlockId !== productDetailBlockId,
        'lumos-pdp__layer--selected': interactive
          && productDetailId
          && productDetailId === selectedId
          && selectedBlockId !== productDetailBlockId,
      }"
      :data-label="interactive && productDetailId === selectedId && selectedBlockId !== productDetailBlockId ? 'PDP Information' : undefined"
      :role="interactive && productDetailId && selectedBlockId !== productDetailBlockId ? 'button' : undefined"
      :tabindex="interactive && productDetailId && selectedBlockId !== productDetailBlockId ? 0 : undefined"
      @click="onSelect(productDetailId)"
      @keydown.enter.prevent="onSelect(productDetailId)"
      @mouseenter="interactive && productDetailId && emit('hover', productDetailId)"
      @mouseleave="interactive && emit('hover', null)"
    >
      <nav class="lumos-pdp__crumb" aria-label="Breadcrumb">
        <span>Home</span>
        <v-icon size="14">chevron-right</v-icon>
        <span>Shop</span>
        <v-icon size="14">chevron-right</v-icon>
        <span>Living Room</span>
        <v-icon size="14">chevron-right</v-icon>
        <strong>Century Furniture - Infinite PeaceMakers</strong>
      </nav>

      <div
        class="lumos-pdp__main"
        :class="{
          'lumos-pdp__main--media-right': mediaOnRight,
          'lumos-pdp__layer': interactive && productDetailBlockId,
          'lumos-pdp__layer--selected': interactive && productDetailBlockId && productDetailBlockId === selectedBlockId,
        }"
        :data-label="interactive && productDetailBlockId ? 'Product Detail' : undefined"
        :role="interactive && productDetailBlockId ? 'button' : undefined"
        :tabindex="interactive && productDetailBlockId ? 0 : undefined"
        @click.stop="interactive && productDetailBlockId && emit('select-block', productDetailBlockId)"
        @keydown.enter.prevent="interactive && productDetailBlockId && emit('select-block', productDetailBlockId)"
      >
        <div
          class="lumos-pdp__gallery"
          :class="{
            'lumos-pdp__gallery--stacked': isBottomSlider,
            'lumos-pdp__gallery--thumbs-right': isRightSlider,
          }"
        >
          <template v-if="isBottomSlider">
            <div
              class="lumos-pdp__hero"
              :class="{
                'lumos-pdp__hero--zoom-hover': imageZoom === 'Zoom on hover',
                'lumos-pdp__hero--zoom-lightbox': imageZoom === 'Lightbox',
              }"
            >
              <img :src="activeImage" alt="Century Furniture - Infinite PeaceMakers">
            </div>
            <div class="lumos-pdp__thumbs-row" aria-label="Product thumbnails">
              <button
                v-for="(image, index) in galleryImages"
                :key="`thumb-row-${index}`"
                type="button"
                class="lumos-pdp__thumb lumos-pdp__thumb--row"
                :class="{ 'lumos-pdp__thumb--active': index === activeIndex }"
                @click.stop="selectThumb(index)"
              >
                <img :src="image" alt="">
              </button>
            </div>
          </template>
          <template v-else>
            <div class="lumos-pdp__thumbs" aria-label="Product thumbnails">
              <button type="button" class="lumos-pdp__thumb-nav" aria-hidden="true">
                <v-icon size="20">chevron-up</v-icon>
              </button>
              <button
                v-for="(image, index) in galleryImages"
                :key="`thumb-${index}`"
                type="button"
                class="lumos-pdp__thumb"
                :class="{ 'lumos-pdp__thumb--active': index === activeIndex }"
                @click.stop="selectThumb(index)"
              >
                <img :src="image" alt="">
              </button>
              <button type="button" class="lumos-pdp__thumb-nav" aria-hidden="true">
                <v-icon size="20">chevron-down</v-icon>
              </button>
            </div>
            <div
              class="lumos-pdp__hero"
              :class="{
                'lumos-pdp__hero--zoom-hover': imageZoom === 'Zoom on hover',
                'lumos-pdp__hero--zoom-lightbox': imageZoom === 'Lightbox',
              }"
            >
              <img :src="activeImage" alt="Century Furniture - Infinite PeaceMakers">
            </div>
          </template>
        </div>

        <div class="lumos-pdp__info">
          <h1>Century Furniture - Infinite PeaceMakers</h1>
          <p v-if="showReviews" class="lumos-pdp__reviews">
            <span class="lumos-pdp__stars" aria-hidden="true">★★★★☆</span>
            4.5 (128 reviews)
          </p>
          <p class="lumos-pdp__price">
            <span>$25.99</span>
            <s>$34.99</s>
          </p>
          <div v-if="showVariantSelector" class="lumos-pdp__variants">
            <strong>Variant</strong>
            <div class="lumos-pdp__variant-options">
              <button
                v-for="option in variantOptions"
                :key="option"
                type="button"
                class="lumos-pdp__variant"
                :class="{ 'lumos-pdp__variant--active': option === selectedVariant }"
                @click.stop="selectedVariant = option"
              >
                {{ option }}
              </button>
            </div>
          </div>
          <div class="lumos-pdp__qty">
            <strong>Quantity</strong>
            <div class="lumos-pdp__qty-controls">
              <button type="button" aria-label="Decrease quantity">−</button>
              <span>1</span>
              <button type="button" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <ul class="lumos-pdp__features">
            <li v-for="item in featureBullets" :key="item">{{ item }}</li>
          </ul>
          <div class="lumos-pdp__actions">
            <button type="button" class="lumos-pdp__cart-btn">Add to Cart</button>
            <button type="button" class="lumos-pdp__wishlist-btn">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>

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
.lumos-pdp {
  --lumos-brand: #495da7;
  --lumos-ink: #272727;
  --lumos-muted: #545354;
  --lumos-soft: #5d5b5b;
  --lumos-line: #e8e8e8;
  --lumos-chip: #f4f6f7;
  --lumos-footer-bg: #f9fafb;
  --lumos-inset-x: 56px;
  background: #eeedf5;
  color: var(--lumos-ink);
  font-family: Inter, system-ui, sans-serif;
}

.lumos-pdp__promo {
  padding: 11px 16px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.lumos-pdp__header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 80px;
  padding: 16px var(--lumos-inset-x);
  border-bottom: 1px solid #eee;
  background: #fff;
}

.lumos-pdp__logo-mark {
  display: block;
  width: 64px;
  height: 48px;
  background-color: var(--lumos-brand);
  mask: var(--lumos-pdp-logo-mask) center / contain no-repeat;
}

.lumos-pdp__nav {
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 24px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-pdp__tools {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--lumos-muted);
  font-size: 11px;
}

.lumos-pdp__search-field {
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

.lumos-pdp__cart {
  position: relative;
  display: inline-flex;
}

.lumos-pdp__cart em {
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

.lumos-pdp__locale,
.lumos-pdp__account {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.lumos-pdp__flag {
  width: 18px;
  height: 12px;
  border-radius: 2px;
  background:
    linear-gradient(#006aa7 0 100%),
    linear-gradient(#fecc00 0 100%);
  background-size: 100% 100%, 18px 4px;
  box-shadow: inset 7px 0 0 0 #fecc00;
}

.lumos-pdp__body {
  background: #fff;
}

.lumos-pdp__crumb {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 16px var(--lumos-inset-x);
  border-bottom: 1px solid var(--lumos-line);
  color: var(--lumos-soft);
  font-size: 14px;
}

.lumos-pdp__crumb strong {
  color: var(--lumos-ink);
  font-weight: 500;
}

.lumos-pdp__main {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 48px;
  align-items: start;
  padding: 24px var(--lumos-inset-x) 70px;
}

.lumos-pdp__main--media-right .lumos-pdp__gallery {
  order: 2;
}

.lumos-pdp__main--media-right .lumos-pdp__info {
  order: 1;
}

.lumos-pdp__gallery {
  display: flex;
  gap: 24px;
  align-items: stretch;
  min-width: 0;
}

.lumos-pdp__gallery--stacked {
  flex-direction: column;
  gap: 16px;
}

.lumos-pdp__gallery--thumbs-right {
  flex-direction: row-reverse;
}

.lumos-pdp__thumbs-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lumos-pdp__thumb--row {
  width: 72px;
  height: 72px;
}

.lumos-pdp__thumbs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 100px;
  gap: 8px;
}

.lumos-pdp__thumb-nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--lumos-brand);
  cursor: pointer;
}

.lumos-pdp__thumb {
  width: 100px;
  height: 100px;
  padding: 2px;
  border: 2px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
}

.lumos-pdp__thumb--active {
  border-color: var(--lumos-brand);
}

.lumos-pdp__thumb img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}

.lumos-pdp__hero {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--lumos-line);
  background: #fff;
  overflow: hidden;
}

.lumos-pdp__hero img {
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.lumos-pdp__hero--zoom-hover:hover img {
  transform: scale(1.04);
}

.lumos-pdp__hero--zoom-lightbox {
  cursor: zoom-in;
}

.lumos-pdp__info {
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-width: 0;
}

.lumos-pdp__info h1 {
  margin: 0;
  font-size: clamp(22px, 2.5vw, 36px);
  font-weight: 700;
  line-height: 1.2;
}

.lumos-pdp__reviews {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  color: var(--lumos-soft);
  font-size: 14px;
}

.lumos-pdp__stars {
  color: #f5a623;
  letter-spacing: 2px;
}

.lumos-pdp__price {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin: 0;
}

.lumos-pdp__price span {
  color: var(--lumos-brand);
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
}

.lumos-pdp__price s {
  color: #abb7c2;
  font-size: 20px;
  text-decoration: line-through;
}

.lumos-pdp__variants strong {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-pdp__variant-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.lumos-pdp__variant {
  min-height: 36px;
  padding: 6px 14px;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
  color: var(--lumos-ink);
  font-size: 14px;
  cursor: pointer;
}

.lumos-pdp__variant--active {
  border-color: var(--lumos-brand);
  color: var(--lumos-brand);
  font-weight: 600;
}

.lumos-pdp--compact .lumos-pdp__info h1 {
  font-size: clamp(20px, 2.2vw, 30px);
}

.lumos-pdp--compact .lumos-pdp__features li {
  font-size: 14px;
}

.lumos-pdp--buttons-modern .lumos-pdp__wishlist-btn {
  border-color: var(--lumos-line);
}

.lumos-pdp__qty strong {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-pdp__qty-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lumos-pdp__qty-controls button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
  color: var(--lumos-ink);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.lumos-pdp__qty-controls span {
  min-width: 40px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

.lumos-pdp__features {
  margin: 0;
  padding: 0;
  list-style: none;
}

.lumos-pdp__features li {
  position: relative;
  padding-left: 20px;
  color: var(--lumos-soft);
  font-size: 16px;
  line-height: 1.5;
}

.lumos-pdp__features li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--lumos-soft);
}

.lumos-pdp__features li + li {
  margin-top: 8px;
}

.lumos-pdp__actions {
  display: flex;
  gap: 16px;
  align-items: stretch;
}

.lumos-pdp__cart-btn,
.lumos-pdp__wishlist-btn {
  min-height: 58px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
}

.lumos-pdp__cart-btn {
  flex: 1;
  border: 0;
  background: var(--lumos-brand);
  color: #fff;
}

.lumos-pdp__wishlist-btn {
  flex: 0 0 180px;
  border: 1px solid var(--lumos-line);
  background: #fff;
  color: var(--lumos-ink);
  font-weight: 500;
}

.lumos-pdp__footer {
  padding: 32px var(--lumos-inset-x) 16px;
  border-top: 1px solid #f3f4f6;
  background: var(--lumos-footer-bg);
}

.lumos-pdp__footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(3, minmax(0, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  font-size: 14px;
}

.lumos-pdp__footer-brand p {
  margin: 12px 0;
  color: #4a5565;
  line-height: 1.45;
}

.lumos-pdp__social {
  display: flex;
  gap: 10px;
  color: #4a5565;
}

.lumos-pdp__footer-grid strong {
  display: block;
  margin-bottom: 10px;
  color: #101828;
}

.lumos-pdp__footer-grid span {
  display: block;
  margin-bottom: 6px;
  color: #4a5565;
}

.lumos-pdp__newsletter-field {
  display: block;
  margin: 8px 0;
  padding: 10px 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #99a1af;
}

.lumos-pdp__subscribe {
  display: block;
  padding: 10px 16px;
  background: #101828;
  color: #fff;
  text-align: center;
}

.lumos-pdp__footer-legal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
  color: #6a7282;
  font-size: 12px;
}

.lumos-pdp__layer {
  cursor: pointer;
}

.lumos-pdp__layer--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-brand);
}

.lumos-page-header-target {
  position: relative;
}

.lumos-page-header-target.lumos-pdp__layer--selected {
  box-shadow: none;
}

.lumos-pdp__header.lumos-pdp__layer:hover,
.lumos-pdp__body.lumos-pdp__layer:hover,
.lumos-pdp__main.lumos-pdp__layer:hover,
.lumos-pdp__footer.lumos-pdp__layer:hover {
  background: color-mix(in srgb, var(--lumos-brand) 6%, #fff);
}

@media (max-width: 900px) {
  .lumos-pdp {
    --lumos-inset-x: 24px;
  }

  .lumos-pdp__main {
    grid-template-columns: minmax(0, 1fr);
  }

  .lumos-pdp__wishlist-btn {
    flex: 1;
  }
}
</style>
