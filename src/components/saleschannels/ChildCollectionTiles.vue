<script setup lang="ts">
/**
 * Child-collection tiles for a collection template. Images come from the
 * catalog; a missing collection image uses the theme fallback. Titles always link.
 */
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductExtrasStore } from '@/stores/useProductExtras'
import bedroom from '@/assets/storefront/lumos/collections/bedroom.png'
import livingRoom from '@/assets/storefront/lumos/collections/living-room.png'
import diningRoom from '@/assets/storefront/lumos/collections/dining-room.png'
import office from '@/assets/storefront/lumos/collections/office.png'
import roomDividers from '@/assets/storefront/lumos/collections/room-dividers.png'
import fallbackImage from '@/assets/storefront/lumos/collections/fallback.png'

const COLLECTION_IMAGES: Record<string, string> = {
  bedroom,
  'living-room': livingRoom,
  'dining-room': diningRoom,
  office,
  'room-dividers': roomDividers,
}

const props = withDefaults(defineProps<{
  title?: string
  parentTitle?: string
  layout?: string
  columns?: number
  arrowStyle?: string
  cardStyle?: string
  /** When false, titles stay links but do not leave the builder canvas. */
  linked?: boolean
}>(), {
  title: 'Shop by category',
  parentTitle: 'Bedroom Collections',
  layout: 'Carousel',
  columns: 2,
  arrowStyle: 'Arrows',
  cardStyle: 'Image & Title',
  linked: true,
})

const extras = useProductExtrasStore()
const route = useRoute()
const router = useRouter()

const children = computed(() => extras.childrenOf(props.parentTitle))
const isGrid = computed(() => props.layout === 'Grid')
const perRow = computed(() => {
  if (!isGrid.value) return 5
  const columns = Number.isFinite(props.columns) ? props.columns : 2
  return Math.min(6, Math.max(2, columns))
})
const cardKind = computed(() => {
  if (props.cardStyle === 'Title Only' || props.cardStyle === 'Title only' || props.cardStyle === 'Only Text') return 'text'
  if (props.cardStyle === 'Compact Image & Text' || props.cardStyle === 'Compact' || props.cardStyle === 'Small image') return 'small'
  return 'image'
})
const showImage = computed(() => cardKind.value !== 'text')
const arrowKind = computed(() => {
  if (props.arrowStyle === 'Dots' || props.arrowStyle === 'Numbers') return props.arrowStyle
  return 'Arrows'
})
const page = ref(0)

watch([perRow, isGrid, children, arrowKind], () => {
  page.value = 0
})

const pageCount = computed(() => (
  isGrid.value ? 1 : Math.max(1, Math.ceil(children.value.length / perRow.value))
))

const visible = computed(() => {
  if (isGrid.value) return children.value
  const start = page.value * perRow.value
  return children.value.slice(start, start + perRow.value)
})

const showPager = computed(() => !isGrid.value)

function imageFor(imageName: string): string {
  if (!imageName) return fallbackImage
  return COLLECTION_IMAGES[imageName] ?? fallbackImage
}

function hrefFor(handle: string): string {
  const accountId = String(route.params.accountId ?? '2000290')
  const channelId = String(route.params.channelId ?? 'retest-sales-notification')
  return `/accounts/${accountId}/sales_channels/${channelId}/collections/${handle}`
}

function onTitleClick(event: MouseEvent, handle: string) {
  if (!props.linked) {
    event.preventDefault()
    return
  }
  if (!router.hasRoute('CollectionStorefront')) return
  event.preventDefault()
  event.stopPropagation()
  router.push(hrefFor(handle))
}

function step(offset: number) {
  const next = page.value + offset
  if (next < 0 || next >= pageCount.value) return
  page.value = next
}
</script>

<template>
  <section
    v-if="children.length"
    class="child-tiles"
    :class="[
      isGrid ? 'child-tiles--grid' : 'child-tiles--carousel',
      `child-tiles--arrows-${arrowKind.toLowerCase()}`,
      cardKind === 'text' ? 'child-tiles--title' : '',
      cardKind === 'small' ? 'child-tiles--compact' : '',
    ]"
    :style="{ '--child-cols': perRow }"
    :data-layout="layout"
    :data-card-style="cardStyle"
    :data-arrow-style="arrowKind"
    :aria-label="title"
  >
    <div class="child-tiles__head">
      <h2>{{ title }}</h2>
      <div v-if="showPager && arrowKind === 'Arrows'" class="child-tiles__arrows">
        <button
          type="button"
          :disabled="page === 0"
          aria-label="Previous child collections"
          @click.stop="step(-1)"
        >
          <v-icon size="14">chevron-left</v-icon>
        </button>
        <button
          type="button"
          :disabled="page >= pageCount - 1"
          aria-label="Next child collections"
          @click.stop="step(1)"
        >
          <v-icon size="14">chevron-right</v-icon>
        </button>
      </div>
      <div v-else-if="showPager && arrowKind === 'Dots'" class="child-tiles__dots" role="tablist" aria-label="Child collection pages">
        <button
          v-for="n in pageCount"
          :key="n"
          type="button"
          role="tab"
          :aria-selected="page === n - 1"
          :aria-label="`Page ${n}`"
          @click.stop="page = n - 1"
        ></button>
      </div>
      <div v-else-if="showPager && arrowKind === 'Numbers'" class="child-tiles__numbers" role="tablist" aria-label="Child collection pages">
        <button
          v-for="n in pageCount"
          :key="n"
          type="button"
          role="tab"
          :aria-selected="page === n - 1"
          @click.stop="page = n - 1"
        >{{ n }}</button>
      </div>
    </div>

    <div class="child-tiles__row">
      <a
        v-for="child in visible"
        :key="child.id"
        class="child-tiles__card"
        :href="hrefFor(child.handle)"
        @click="onTitleClick($event, child.handle)"
      >
        <img
          v-if="showImage"
          :src="imageFor(child.imageName)"
          alt=""
        >
        <span>{{ child.title }}</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.child-tiles {
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 37px;
  color: var(--sf-text, inherit);
}

.child-tiles__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.child-tiles__head h2 {
  margin: 0;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.2;
  text-transform: uppercase;
}

.child-tiles__arrows {
  display: flex;
  gap: 9px;
}

.child-tiles__arrows button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 1px solid color-mix(in srgb, currentColor 18%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, currentColor 4%, transparent);
  color: inherit;
  cursor: pointer;
}

.child-tiles__arrows button:disabled {
  opacity: 0.35;
  cursor: default;
}

.child-tiles__row {
  display: grid;
  grid-template-columns: repeat(var(--child-cols), minmax(0, 1fr));
  gap: 21px;
}

.child-tiles__dots,
.child-tiles__numbers {
  display: flex;
  align-items: center;
  gap: 8px;
}

.child-tiles__dots button,
.child-tiles__numbers button {
  padding: 0;
  border: 0;
  background: color-mix(in srgb, currentColor 22%, transparent);
  color: inherit;
  cursor: pointer;
}

.child-tiles__dots button {
  width: 8px;
  height: 8px;
  border-radius: 999px;
}

.child-tiles__numbers button {
  min-width: 24px;
  height: 24px;
  border-radius: 999px;
  font-size: 11px;
}

.child-tiles__dots button[aria-selected='true'],
.child-tiles__numbers button[aria-selected='true'] {
  background: currentColor;
  color: var(--sf-background, var(--mp-color-light-surface));
}

.child-tiles__card {
  display: flex;
  flex-direction: column;
  align-items: var(--child-card-align-h, center);
  justify-content: var(--child-card-align-v, flex-start);
  gap: 16px;
  min-width: 0;
  padding: var(--child-card-pad-y, 0) var(--child-card-pad-x, 0);
  border: var(--child-card-border, 0) solid color-mix(in srgb, currentColor 16%, transparent);
  border-radius: var(--child-card-radius, 0);
  box-shadow: var(--child-card-shadow, none);
  color: inherit;
  text-decoration: none;
}

.child-tiles__card img {
  width: 100%;
  aspect-ratio: 159 / 152;
  object-fit: cover;
  border-radius: 3px;
}

.child-tiles__card span {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.66px;
  text-align: center;
  text-transform: uppercase;
}

.child-tiles--title .child-tiles__card {
  min-height: 44px;
}

.child-tiles--compact .child-tiles__card {
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
}

.child-tiles--compact .child-tiles__card img {
  width: 48px;
  height: 48px;
  aspect-ratio: auto;
  flex-shrink: 0;
}

.child-tiles--compact .child-tiles__card span {
  text-align: left;
}
</style>
