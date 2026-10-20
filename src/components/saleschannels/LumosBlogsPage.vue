<script setup lang="ts">
/**
 * Lumos Blogs index — merchant storefront mock (Figma Lumos 395-9832).
 */
import { computed } from 'vue'
import heroImage from '@/assets/storefront/lumos/blogs/hero.jpg'
import post1 from '@/assets/storefront/lumos/blogs/post-1.jpg'
import post2 from '@/assets/storefront/lumos/blogs/post-2.jpg'
import post3 from '@/assets/storefront/lumos/blogs/post-3.jpg'
import post4 from '@/assets/storefront/lumos/blogs/post-4.jpg'
import post5 from '@/assets/storefront/lumos/blogs/post-5.jpg'
import post6 from '@/assets/storefront/lumos/blogs/post-6.jpg'
import LumosThemePageHeader from '@/components/saleschannels/LumosThemePageHeader.vue'
import LumosThemePageFooter from '@/components/saleschannels/LumosThemePageFooter.vue'
import type { HeaderPreviewLayer } from '@/components/saleschannels/lumosHeaderLayers'
import type { FooterPreviewLayer } from '@/components/saleschannels/lumosFooterLayers'
import { normalizeBlogFeaturedImageHeight, normalizeBlogSliderStyle } from '@/components/saleschannels/lumosBlogPosts'

const categoryFilters = ['All', 'Design Trends', 'Interior Tips', 'Product Guides', 'Sustainability', 'Lifestyle']

const blogPosts = [
  {
    category: 'Product Guides',
    title: 'How to Choose the Perfect Sofa for Your Living Room',
    excerpt: 'A comprehensive guide to selecting the right sofa based on your space, lifestyle, and design preferences.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '8 min read',
    image: post1,
  },
  {
    category: 'Sustainability',
    title: 'Sustainable Furniture: Making Eco-Friendly Choices',
    excerpt: 'Learn how to furnish your home responsibly with materials and brands that prioritize the planet.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '6 min read',
    image: post2,
  },
  {
    category: 'Interior Tips',
    title: 'Maximizing Small Spaces: Smart Storage Solutions',
    excerpt: 'Clever storage ideas and layout tricks to make compact rooms feel open, organized, and stylish.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '7 min read',
    image: post3,
  },
  {
    category: 'Lifestyle',
    title: 'Creating a Productive Home Office Setup',
    excerpt: 'Design a workspace that balances comfort, focus, and aesthetics for remote work at home.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '5 min read',
    image: post4,
  },
  {
    category: 'Design Trends',
    title: 'Complete Guide to Coffee Table Styling',
    excerpt: 'From layered books to sculptural objects, discover how to style your coffee table with intention.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '4 min read',
    image: post5,
  },
  {
    category: 'Lifestyle',
    title: 'Outdoor Living: Transform Your Patio Into a Retreat',
    excerpt: 'Create an inviting outdoor room with seating, shade, and finishing touches for every season.',
    author: 'Emma Richardson',
    date: 'May 8, 2026',
    readTime: '9 min read',
    image: post6,
  },
]

const props = withDefaults(defineProps<{
  settings?: Record<string, string | number | boolean>
  bannerSettings?: Record<string, string | number | boolean>
  postsSettings?: Record<string, string | number | boolean>
  headerId?: string
  blogListId?: string
  blogImageBannerBlockId?: string
  blogPostsBlockId?: string
  announcementSettings?: Record<string, string | number | boolean>
  headerSettings?: Record<string, string | number | boolean>
  showAnnouncement?: boolean
  selectedHeaderLayer?: HeaderPreviewLayer | null
  footerId?: string
  footerSettings?: Record<string, string | number | boolean>
  selectedFooterLayer?: FooterPreviewLayer | null
  selectedId?: string | null
  selectedBlockId?: string | null
  interactive?: boolean
  headerEditActive?: boolean
  footerEditActive?: boolean
}>(), {
  settings: () => ({}),
  bannerSettings: () => ({}),
  postsSettings: () => ({}),
  selectedId: null,
  selectedBlockId: null,
  interactive: false,
  headerEditActive: false,
  footerEditActive: false,
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

function bannerText(key: string, fallback: string): string {
  const value = props.bannerSettings[key] ?? props.settings[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

function postsNum(key: string, fallback: number): number {
  const value = props.postsSettings[key] ?? props.settings[key]
  return typeof value === 'number' ? value : fallback
}

function postsFlag(key: string, fallback = true): boolean {
  const value = props.postsSettings[key] ?? props.settings[key]
  return typeof value === 'boolean' ? value : fallback
}

function postsText(key: string, fallback: string): string {
  const value = props.postsSettings[key] ?? props.settings[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

const itemsPerRow = computed(() => Math.min(6, Math.max(1, postsNum('itemsPerRow', 3))))

const postsLayout = computed(() => {
  const raw = postsText('layout', 'Grid')
  return raw === 'Carousel' ? 'Carousel' : 'Grid'
})

const sliderStyle = computed(() => normalizeBlogSliderStyle(postsText('sliderStyle', 'Arrows')))

const featuredImageHeight = computed(() => normalizeBlogFeaturedImageHeight(postsText('featuredImageHeight', 'Medium')))

const featuredImageHeightPx = computed(() => {
  if (featuredImageHeight.value === 'Adapt to image') return null
  const map = { Small: 180, Medium: 240, Large: 320 } as const
  return map[featuredImageHeight.value]
})

const featuredSectionClass = computed(() => ({
  'lumos-blogs__featured--adapt-image': featuredImageHeight.value === 'Adapt to image',
}))

const featuredSectionStyle = computed(() => ({
  '--lumos-blogs-cols': String(itemsPerRow.value),
  ...(featuredImageHeightPx.value !== null
    ? { '--lumos-blogs-card-media-h': `${featuredImageHeightPx.value}px` }
    : {}),
}))

const heroEyebrow = computed(() => bannerText('heroEyebrow', 'Our Blog'))
const heroTitle = computed(() => bannerText('heroTitle', 'Stories & Inspiration'))
const heroDescription = computed(() => bannerText(
  'heroDescription',
  'Explore the latest trends, inspiring design ideas, and expert advice to create your perfect living space. From choosing the right colors and furniture to adding thoughtful finishing touches, discover practical tips and fresh inspiration to make every room feel stylish, comfortable, and uniquely yours.',
))

const visiblePosts = computed(() => {
  const total = Math.min(999, Math.max(1, postsNum('totalItems', 25)))
  const previewCap = Math.max(itemsPerRow.value * 2, 6)
  const count = Math.min(total, previewCap)
  const rows: typeof blogPosts = []
  for (let i = 0; i < count; i += 1) {
    const post = blogPosts[i % blogPosts.length]
    if (post) rows.push(post)
  }
  return rows
})

function blockLayerClass(blockId: string | undefined) {
  return {
    'lumos-blogs__layer': props.interactive && Boolean(blockId),
    'lumos-blogs__layer--selected': Boolean(blockId) && blockId === props.selectedBlockId,
  }
}

function onSelectSection(id: string | undefined) {
  if (props.interactive && id) emit('select', id)
}
</script>

<template>
  <div class="lumos-blogs" aria-label="Blogs">
    <LumosThemePageHeader
      :announcement-settings="announcementSettings"
      :header-settings="headerSettings"
      :header-id="headerId"
      :selected-id="selectedId"
      :selected-header-layer="selectedHeaderLayer"
      :interactive="interactive"
      :header-edit-active="headerEditActive"
      :show-announcement="showAnnouncement"
      @select="onSelectSection"
      @select-header-layer="(layer) => emit('select-header-layer', layer)"
      @edit-header="emit('edit-header')"
      @hover="(id) => emit('hover', id)"
    />

    <div class="lumos-blogs__content">
      <section
        class="lumos-blogs__hero"
        :class="blockLayerClass(blogImageBannerBlockId)"
        aria-label="Blog hero"
        :data-label="interactive && blogImageBannerBlockId ? 'Image Banner' : undefined"
        :role="interactive && blogImageBannerBlockId ? 'button' : undefined"
        :tabindex="interactive && blogImageBannerBlockId ? 0 : undefined"
        @click.stop="interactive && blogImageBannerBlockId && emit('select-block', blogImageBannerBlockId)"
        @keydown.enter.prevent="interactive && blogImageBannerBlockId && emit('select-block', blogImageBannerBlockId)"
        @mouseenter="interactive && blogListId && emit('hover', blogListId)"
        @mouseleave="interactive && emit('hover', null)"
      >
        <img class="lumos-blogs__hero-img" :src="heroImage" alt="">
        <div class="lumos-blogs__hero-overlay" />
        <div class="lumos-blogs__hero-copy">
          <p class="lumos-blogs__hero-eyebrow">{{ heroEyebrow }}</p>
          <h1 class="lumos-blogs__hero-title">{{ heroTitle }}</h1>
          <p class="lumos-blogs__hero-desc">{{ heroDescription }}</p>
        </div>
      </section>

      <div
        class="lumos-blogs__featured"
        :class="[blockLayerClass(blogPostsBlockId), featuredSectionClass]"
        :style="featuredSectionStyle"
        :data-label="interactive && blogPostsBlockId ? 'Blog Posts' : undefined"
        :role="interactive && blogPostsBlockId ? 'button' : undefined"
        :tabindex="interactive && blogPostsBlockId ? 0 : undefined"
        @click.stop="interactive && blogPostsBlockId && emit('select-block', blogPostsBlockId)"
        @keydown.enter.prevent="interactive && blogPostsBlockId && emit('select-block', blogPostsBlockId)"
      >
      <div class="lumos-blogs__toolbar">
        <div class="lumos-blogs__filters" role="tablist" aria-label="Blog categories">
          <button
            v-for="(label, index) in categoryFilters"
            :key="label"
            type="button"
            class="lumos-blogs__filter"
            :class="{ 'lumos-blogs__filter--active': index === 0 }"
          >
            {{ label }}
          </button>
        </div>
        <label class="lumos-blogs__search">
          <v-icon size="20">search</v-icon>
          <span>Search articles...</span>
        </label>
      </div>

      <div class="lumos-blogs__grid-wrap">
        <div
          v-if="postsLayout === 'Carousel' && (sliderStyle === 'Arrows' || sliderStyle === 'Dots')"
          class="lumos-blogs__carousel-chrome"
          :class="{ 'lumos-blogs__carousel-chrome--dots': sliderStyle === 'Dots' }"
          aria-hidden="true"
        >
          <span>‹</span>
          <span v-if="sliderStyle === 'Dots'" class="lumos-blogs__carousel-chrome-dots">
            <span v-for="n in 4" :key="n"></span>
          </span>
          <span>›</span>
        </div>
        <div
          class="lumos-blogs__grid"
          :class="{ 'lumos-blogs__grid--carousel': postsLayout === 'Carousel' }"
        >
        <article v-for="(post, index) in visiblePosts" :key="`${post.title}-${index}`" class="lumos-blogs__card">
          <div v-if="postsFlag('showFeaturedImage', true)" class="lumos-blogs__card-media">
            <img :src="post.image" :alt="post.title">
          </div>
          <div class="lumos-blogs__card-body">
            <span class="lumos-blogs__card-category">{{ post.category }}</span>
            <h2 class="lumos-blogs__card-title">{{ post.title }}</h2>
            <div class="lumos-blogs__card-tags">
              <span>News</span>
              <span>Upcoming</span>
              <span>Trends</span>
            </div>
            <p v-if="postsFlag('showExcerpt', true)" class="lumos-blogs__card-excerpt">{{ post.excerpt }}</p>
            <div class="lumos-blogs__card-meta">
              <span v-if="postsFlag('showAuthor', true)">{{ post.author }}</span>
              <span v-if="postsFlag('showDate', true)" class="lumos-blogs__card-meta-item">
                <v-icon size="16">calendar</v-icon>
                {{ post.date }}
              </span>
              <span class="lumos-blogs__card-meta-item">
                <v-icon size="16">clock</v-icon>
                {{ post.readTime }}
              </span>
            </div>
            <button type="button" class="lumos-blogs__read-more">
              Read More
              <v-icon size="16">arrow-right</v-icon>
            </button>
          </div>
        </article>
        </div>
        <div
          v-if="postsLayout === 'Carousel' && sliderStyle === 'Numbers'"
          class="lumos-blogs__carousel-numbers"
          aria-hidden="true"
        >
          1 · 2 · 3
        </div>
      </div>

      <nav
        v-if="postsLayout !== 'Carousel'"
        class="lumos-blogs__pagination"
        aria-label="Blog pagination"
      >
        <button type="button" class="lumos-blogs__page lumos-blogs__page--nav" aria-label="Previous page">
          <v-icon size="18">chevron-left</v-icon>
        </button>
        <button type="button" class="lumos-blogs__page lumos-blogs__page--active">1</button>
        <button type="button" class="lumos-blogs__page">2</button>
        <button type="button" class="lumos-blogs__page">3</button>
        <button type="button" class="lumos-blogs__page">4</button>
        <span class="lumos-blogs__page-ellipsis">...</span>
        <button type="button" class="lumos-blogs__page">30</button>
        <button type="button" class="lumos-blogs__page lumos-blogs__page--nav" aria-label="Next page">
          <v-icon size="18">chevron-right</v-icon>
        </button>
      </nav>
      </div>
    </div>

    <LumosThemePageFooter
      :footer-id="footerId"
      :footer-settings="footerSettings"
      :selected-id="selectedId"
      :selected-footer-layer="selectedFooterLayer"
      :interactive="interactive"
      :footer-edit-active="footerEditActive"
      @select="onSelectSection"
      @select-footer-layer="(layer) => emit('select-footer-layer', layer)"
      @edit-footer="emit('edit-footer')"
      @hover="(id) => emit('hover', id)"
    />
  </div>
</template>

<style scoped>
.lumos-blogs {
  --lumos-blogs-brand: var(--sf-brand, #495da7);
  --lumos-blogs-ink: var(--sf-text, #272727);
  --lumos-blogs-muted: #545354;
  --lumos-blogs-line: #e8e8e8;
  --lumos-blogs-soft: #f4f6f7;
  background: #fff;
  color: var(--lumos-blogs-ink);
}

.lumos-blogs__layer {
  cursor: pointer;
}

.lumos-blogs__layer--selected {
  box-shadow: inset 0 0 0 2px var(--lumos-blogs-brand);
}

.lumos-blogs__featured {
  --lumos-blogs-pad-y: var(--mp-space-32, 32px);
  --lumos-blogs-pad-x: var(--mp-space-56, 56px);
  --lumos-blogs-cols: 3;
  --lumos-blogs-card-media-h: 240px;
}

.lumos-blogs__featured.lumos-blogs__layer {
  cursor: pointer;
}

.lumos-blogs__hero {
  position: relative;
  min-height: 342px;
  overflow: hidden;
}

.lumos-blogs__hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lumos-blogs__hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    color-mix(in oklch, var(--lumos-blogs-brand) 90%, transparent),
    color-mix(in oklch, var(--lumos-blogs-brand) 70%, transparent)
  );
}

.lumos-blogs__hero-copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-8, 8px);
  max-width: 1152px;
  margin: 0 auto;
  padding: var(--mp-space-64, 64px) var(--mp-space-56, 56px);
  color: #fff;
}

.lumos-blogs__hero-eyebrow {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-blogs__hero-title {
  margin: 0;
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 700;
  line-height: 1.15;
  text-transform: uppercase;
}

.lumos-blogs__hero-desc {
  margin: 0;
  max-width: 960px;
  font-size: 18px;
  line-height: 1.5;
  color: color-mix(in oklch, #fff 90%, transparent);
}

.lumos-blogs__toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-16, 16px);
  padding: var(--lumos-blogs-pad-y) var(--lumos-blogs-pad-x) 0;
}

.lumos-blogs__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-space-12, 12px);
}

.lumos-blogs__filter {
  height: 39px;
  padding: 0 var(--mp-space-16, 16px);
  border: 1px solid var(--lumos-blogs-line);
  border-radius: var(--mp-radius-10, 10px);
  background: #fff;
  color: var(--lumos-blogs-ink);
  font-size: 14px;
  font-weight: 500;
  cursor: default;
}

.lumos-blogs__filter--active {
  border-color: var(--lumos-blogs-brand);
  background: var(--lumos-blogs-brand);
  color: #fff;
  box-shadow: var(--mp-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.08));
}

.lumos-blogs__search {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-12, 12px);
  min-width: min(100%, 448px);
  height: 50px;
  padding: 0 var(--mp-space-16, 16px) 0 var(--mp-space-48, 48px);
  border: 1px solid #dbdde3;
  border-radius: var(--mp-radius-10, 10px);
  color: #abb7c2;
  font-size: 16px;
  position: relative;
}

.lumos-blogs__search .v-icon {
  position: absolute;
  left: var(--mp-space-16, 16px);
  color: #abb7c2;
}

.lumos-blogs__grid-wrap {
  position: relative;
  padding: 0 var(--lumos-blogs-pad-x) var(--lumos-blogs-pad-y);
}

.lumos-blogs__grid {
  display: grid;
  grid-template-columns: repeat(var(--lumos-blogs-cols, 3), minmax(0, 1fr));
  gap: var(--mp-space-28, 28px);
  padding: var(--mp-space-32, 32px) 0 0;
  justify-items: stretch;
}

.lumos-blogs__grid--carousel {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--mp-space-20, 20px);
  overflow-x: auto;
  padding-bottom: var(--mp-space-8, 8px);
  scroll-snap-type: x mandatory;
}

.lumos-blogs__grid--carousel .lumos-blogs__card {
  flex: 0 0 calc((100% - (var(--mp-space-20, 20px) * (var(--lumos-blogs-cols, 3) - 1))) / var(--lumos-blogs-cols, 3));
  min-width: calc((100% - (var(--mp-space-20, 20px) * (var(--lumos-blogs-cols, 3) - 1))) / var(--lumos-blogs-cols, 3));
  scroll-snap-align: start;
}

.lumos-blogs__carousel-chrome {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--mp-space-32, 32px);
  padding: var(--mp-space-32, 32px) 0 0;
  color: var(--lumos-blogs-brand);
  font-size: 28px;
  line-height: 1;
  pointer-events: none;
}

.lumos-blogs__carousel-chrome--dots {
  gap: var(--mp-space-12, 12px);
}

.lumos-blogs__carousel-chrome-dots {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-6, 6px);
}

.lumos-blogs__carousel-chrome-dots span {
  width: 8px;
  height: 8px;
  border-radius: var(--mp-radius-full, 9999px);
  background: color-mix(in oklch, var(--lumos-blogs-brand) 35%, #fff);
}

.lumos-blogs__carousel-chrome-dots span:first-child {
  background: var(--lumos-blogs-brand);
}

.lumos-blogs__carousel-numbers {
  display: flex;
  justify-content: center;
  padding-top: var(--mp-space-16, 16px);
  color: var(--lumos-blogs-brand);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
}

.lumos-blogs__card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--lumos-blogs-line);
  border-radius: var(--mp-radius-10, 10px);
  background: #fff;
}

.lumos-blogs__card-media {
  height: var(--lumos-blogs-card-media-h, 240px);
  background: var(--lumos-blogs-soft);
}

.lumos-blogs__card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.lumos-blogs__featured--adapt-image .lumos-blogs__card-media {
  height: auto;
}

.lumos-blogs__featured--adapt-image .lumos-blogs__card-media img {
  height: auto;
  object-fit: contain;
}

.lumos-blogs__card-body {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-14, 14px);
  padding: var(--mp-space-24, 24px);
}

.lumos-blogs__card-category {
  align-self: flex-start;
  padding: 4px 12px;
  border-radius: var(--mp-radius-4, 4px);
  background: var(--lumos-blogs-brand);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-blogs__card-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
}

.lumos-blogs__card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mp-space-8, 8px);
}

.lumos-blogs__card-tags span {
  padding: 4px 12px;
  border-radius: var(--mp-radius-4, 4px);
  background: var(--lumos-blogs-soft);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.lumos-blogs__card-excerpt {
  margin: 0;
  color: var(--lumos-blogs-muted);
  font-size: 15px;
  line-height: 1.6;
}

.lumos-blogs__card-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-8, 8px);
  color: var(--lumos-blogs-muted);
  font-size: 14px;
}

.lumos-blogs__card-meta-item {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-8, 8px);
}

.lumos-blogs__read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-8, 8px);
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--lumos-blogs-brand);
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}

.lumos-blogs__pagination {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--mp-space-8, 8px);
  padding: 0 var(--lumos-blogs-pad-x) var(--mp-space-48, 48px);
}

.lumos-blogs__page {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 var(--mp-space-8, 8px);
  border: 1px solid var(--lumos-blogs-line);
  border-radius: var(--mp-radius-full, 9999px);
  background: #fff;
  color: var(--lumos-blogs-ink);
  font-size: 14px;
  cursor: default;
}

.lumos-blogs__page--active {
  border-color: var(--lumos-blogs-brand);
  background: var(--lumos-blogs-brand);
  color: #fff;
}

.lumos-blogs__page--nav {
  border-color: transparent;
  background: transparent;
}

.lumos-blogs__page-ellipsis {
  color: var(--lumos-blogs-muted);
  font-size: 14px;
}

@media (max-width: 1100px) {
  .lumos-blogs__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .lumos-blogs__hero-copy,
  .lumos-blogs__toolbar,
  .lumos-blogs__grid,
  .lumos-blogs__pagination {
    padding-inline: var(--mp-space-24, 24px);
  }

  .lumos-blogs__grid {
    grid-template-columns: 1fr;
  }
}
</style>
