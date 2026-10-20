<script setup lang="ts">
/**
 * Lumos category landing — shopper page for a parent collection.
 * Ported from Figma "Home Page Op 21" (Lumos / node 3043:18981).
 * Merchant storefront mock, same exemption as LumosHomepage (P4-8).
 */
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import heroImg from '@/assets/storefront/lumos/outdoor/hero.jpg'
import {
  LUMOS_PARENT_HANDLE,
  LUMOS_PARENT_TITLE,
  lumosCategories,
  lumosCategoryByHandle,
  type LumosCategory,
} from '@/components/saleschannels/lumosCategories'

const props = defineProps<{
  /** Child category handle. Omit to render the parent landing. */
  activeHandle?: string
}>()

const route = useRoute()
const navItems = ['Home', 'Shop', 'About Us', 'Contact Us', 'Search', 'Collections']
const shopLinks = ['New Arrivals', 'Best Sellers', 'Living Room', 'Bedroom', 'Dining Room']
const serviceLinks = ['Contact', 'My Account', 'Track Order', 'Resolution Centre', 'Contacts']

const activeCategory = computed(() => (
  props.activeHandle ? lumosCategoryByHandle(props.activeHandle) : undefined
))

const crumbs = computed(() => {
  const parent = { label: LUMOS_PARENT_TITLE, handle: LUMOS_PARENT_HANDLE }
  if (!activeCategory.value) {
    return [
      { label: 'Home', handle: LUMOS_PARENT_HANDLE },
      { label: 'Collections', handle: LUMOS_PARENT_HANDLE },
      { label: LUMOS_PARENT_TITLE, handle: '' },
    ]
  }
  return [
    { label: 'Home', handle: LUMOS_PARENT_HANDLE },
    { label: 'Collections', handle: LUMOS_PARENT_HANDLE },
    { label: parent.label, handle: parent.handle },
    { label: activeCategory.value.title, handle: '' },
  ]
})

function collectionTo(handle: string) {
  return {
    name: 'CollectionStorefront' as const,
    params: {
      accountId: String(route.params.accountId ?? ''),
      channelId: String(route.params.channelId ?? ''),
      handle,
    },
  }
}

function columnsForWidth(width: number) {
  if (width >= 1280) return 5
  if (width >= 1024) return 4
  if (width >= 700) return 3
  return 2
}

const columns = ref(columnsForWidth(window.innerWidth))
let gridObserver: ResizeObserver | undefined

function measureColumns() {
  const grid = document.querySelector('.lumos-cat-page .grid')
  if (!grid) return
  const count = getComputedStyle(grid).gridTemplateColumns.split(' ').filter(Boolean).length
  if (count) columns.value = count
}

onMounted(() => {
  const grid = document.querySelector('.lumos-cat-page .grid')
  if (!grid) return
  measureColumns()
  gridObserver = new ResizeObserver(measureColumns)
  gridObserver.observe(grid)
})

onBeforeUnmount(() => gridObserver?.disconnect())

const panelAfterIndex = computed(() => {
  if (!activeCategory.value) return -1
  const index = lumosCategories.findIndex((category) => category.handle === activeCategory.value?.handle)
  if (index < 0) return -1
  const cols = Math.max(1, columns.value)
  return Math.min(lumosCategories.length - 1, Math.floor(index / cols) * cols + cols - 1)
})

function scrollToCategories() {
  document.getElementById('shop-by-category')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function revealSelection() {
  await nextTick()
  measureColumns()
  await nextTick()
  const panel = document.getElementById('category-products')
  const card = document.querySelector('.card--selected')
  if (!panel || !card) return
  const bar = 72
  const cardRect = card.getBoundingClientRect()
  const panelRect = panel.getBoundingClientRect()
  const target = window.innerHeight * 0.42
  let delta = panelRect.top - target
  if (cardRect.top - delta < bar) delta = cardRect.top - bar
  if (Math.abs(delta) > 12) window.scrollBy({ top: delta, behavior: 'smooth' })
}

watch(activeCategory, (category) => {
  if (category) revealSelection()
}, { immediate: true })

function onCategoryClick(category: LumosCategory) {
  if (category.handle === activeCategory.value?.handle) return collectionTo(LUMOS_PARENT_HANDLE)
  return collectionTo(category.handle)
}
</script>

<template>
  <div class="lumos-cat-page">
    <div class="announce">Free shipping on orders over $50</div>

    <header class="header">
      <div class="wrap header__bar">
        <router-link class="logo" :to="collectionTo(LUMOS_PARENT_HANDLE)" aria-label="Furniture, home">
          <span class="logo__mark" />
        </router-link>
        <nav class="nav" aria-label="Store">
          <router-link
            v-for="item in navItems"
            :key="item"
            :to="collectionTo(LUMOS_PARENT_HANDLE)"
          >{{ item }}</router-link>
        </nav>
        <div class="tools">
          <label class="search">
            <input type="search" placeholder="Search ..." aria-label="Search">
            <v-icon size="16">search</v-icon>
          </label>
          <button type="button" class="icon-btn" aria-label="Wishlist">
            <v-icon size="18">heart</v-icon>
          </button>
          <button type="button" class="icon-btn cart" aria-label="Cart, 2 items">
            <v-icon size="18">shopping-bag</v-icon>
            <em>2</em>
          </button>
          <span class="locale">
            <span class="flag" aria-hidden="true" />
            <v-icon size="14">chevron-down</v-icon>
          </span>
          <span class="account">
            <v-icon size="18">user</v-icon>
            <span>Sign in</span>
          </span>
        </div>
      </div>
    </header>

    <nav class="crumbs" aria-label="Breadcrumb">
      <ol class="wrap">
        <li v-for="(crumb, index) in crumbs" :key="`${crumb.label}-${index}`">
          <v-icon v-if="index > 0" size="16" aria-hidden="true">chevron-right</v-icon>
          <router-link v-if="crumb.handle" :to="collectionTo(crumb.handle)">{{ crumb.label }}</router-link>
          <span v-else aria-current="page">{{ crumb.label }}</span>
        </li>
      </ol>
    </nav>

    <section class="hero" aria-label="Outdoor essentials">
      <img :src="heroImg" alt="">
      <div class="hero__veil" />
      <div class="wrap">
        <div class="hero__copy">
          <span class="pill">Cozy Summer</span>
          <h1>Outdoor Essentials</h1>
          <p>Furniture and decor for summer outside.</p>
          <button type="button" class="hero__cta" @click="scrollToCategories">Explore Best Sellers</button>
        </div>
      </div>
    </section>

    <section id="shop-by-category" class="categories" aria-labelledby="shop-by-category-title">
      <div class="wrap">
        <h2 id="shop-by-category-title">Shop by category</h2>
        <div class="grid">
          <template v-for="(category, index) in lumosCategories" :key="category.handle">
            <router-link
              class="card"
              :class="{ 'card--selected': category.handle === activeCategory?.handle }"
              :aria-current="category.handle === activeCategory?.handle ? 'true' : undefined"
              :to="onCategoryClick(category)"
            >
              <span class="card__media">
                <img :src="category.image" :alt="category.title">
              </span>
              <span class="card__name">{{ category.title }}</span>
              <span class="card__support">
                {{ category.handle === activeCategory?.handle ? 'Showing' : category.support }}
              </span>
            </router-link>
            <div
              v-if="activeCategory && index === panelAfterIndex"
              id="category-products"
              class="listing"
              :aria-labelledby="`listing-${activeCategory.handle}`"
            >
              <p class="listing__kicker">{{ activeCategory.products.length }} pieces</p>
              <h3 :id="`listing-${activeCategory.handle}`">{{ activeCategory.title }}</h3>
              <p class="listing__lead">{{ activeCategory.description }}</p>
              <div class="products">
                <article v-for="product in activeCategory.products" :key="product.name" class="product">
                  <div class="product__media">
                    <img :src="product.image" :alt="product.name">
                  </div>
                  <h4>{{ product.name }}</h4>
                  <p>{{ product.price }}</p>
                </article>
              </div>
            </div>
          </template>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="wrap footer__grid">
        <div class="footer__brand">
          <span class="logo__mark" />
          <p>Modern furniture for contemporary living. Quality craftsmanship, timeless design, exceptional value.</p>
          <div class="social">
            <a href="https://www.instagram.com" aria-label="Instagram"><v-icon size="18">instagram</v-icon></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><v-icon size="18">facebook</v-icon></a>
            <a href="https://twitter.com" aria-label="Twitter"><v-icon size="18">twitter</v-icon></a>
          </div>
        </div>
        <div>
          <h2>Shop</h2>
          <span v-for="link in shopLinks" :key="link">{{ link }}</span>
        </div>
        <div>
          <h2>Service</h2>
          <span v-for="link in serviceLinks" :key="link">{{ link }}</span>
        </div>
        <form class="news" @submit.prevent>
          <h2>Newsletter</h2>
          <p>Get exclusive offers and updates.</p>
          <input type="email" name="email" placeholder="Your email" aria-label="Email address" autocomplete="email">
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div class="wrap footer__legal">
        <span>© 2025 Maropost. All rights reserved.</span>
        <span class="footer__policies">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.lumos-cat-page {
  --brand: #495da7;
  --ink: #272727;
  --muted: #545354;
  --soft: #4a5565;
  --line: #e8e8e8;
  --footer: #f9fafb;
  background: #fff;
  color: var(--ink);
  font-family: Inter, system-ui, sans-serif;
  overflow-x: hidden;
}

.wrap {
  width: min(1328px, calc(100% - 32px));
  margin-inline: auto;
}

.announce {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 8px 16px;
  background: var(--brand);
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.header {
  background: #fff;
  border-bottom: 1px solid #eee;
}

.header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 88px;
}

.logo {
  flex: 0 0 auto;
  line-height: 0;
}

.logo__mark {
  display: block;
  width: 85px;
  height: 63px;
  background: var(--brand);
  -webkit-mask: url('../../assets/storefront/lumos/outdoor/logo-mask.png') center / contain no-repeat;
  mask: url('../../assets/storefront/lumos/outdoor/logo-mask.png') center / contain no-repeat;
}

.nav {
  display: none;
  align-items: center;
  gap: 28px;
}

.nav a {
  color: var(--ink);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}

.tools {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
  color: var(--muted);
}

.search {
  position: relative;
  display: none;
  align-items: center;
  width: 196px;
  height: 37px;
  padding: 0 8px 0 12px;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  background: #f4f6f7;
  color: var(--muted);
}

.search input {
  flex: 1;
  min-width: 0;
  border: 0;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 12px;
}

.search input::placeholder {
  color: var(--muted);
}

.search input:focus {
  outline: none;
}

.search:focus-within {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}

.icon-btn,
.account,
.locale {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--muted);
  font-size: 12px;
}

.cart {
  position: relative;
}

.cart em {
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 99px;
  background: var(--brand);
  color: #fff;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
}

.flag {
  width: 22px;
  height: 16px;
  border-radius: 2px;
  background: linear-gradient(#006aa7, #006aa7) 0 0 / 8px 100% no-repeat, linear-gradient(#fecc00, #fecc00);
}

.crumbs {
  border-bottom: 1px solid var(--line);
}

.crumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  min-height: 53px;
  margin: 0;
  padding: 12px 0;
  list-style: none;
}

.crumbs li {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 14px;
  line-height: 21px;
}

.crumbs a {
  color: var(--muted);
  text-decoration: none;
}

.crumbs a:hover {
  text-decoration: underline;
}

.crumbs [aria-current='page'] {
  color: var(--ink);
  font-weight: 500;
}

.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 320px;
  overflow: hidden;
  background: var(--brand);
}

.hero .wrap {
  position: relative;
  z-index: 1;
}

.hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}

.hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgb(73 93 167 / 90%), rgb(73 93 167 / 70%));
}

.hero__copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 848px;
  padding: 40px 0;
}

.pill {
  display: inline-flex;
  padding: 6px 10px;
  border: 1.5px solid #fff;
  border-radius: 16px;
  color: #fff;
  font-size: 14px;
  line-height: 1;
}

.hero h1 {
  margin: 0;
  color: #fff;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.15;
  text-transform: uppercase;
}

.hero p {
  margin: 0;
  color: rgb(255 255 255 / 90%);
  font-size: 16px;
  line-height: 1.5;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 22px;
  border: 0;
  border-radius: 4px;
  background: #fff;
  color: var(--brand);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
}

.hero__cta:hover {
  background: #f4f6f7;
}

.categories {
  padding: 40px 0 56px;
  scroll-margin-top: 48px;
}

.categories h2 {
  margin: 0 0 28px;
  color: var(--ink);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.3;
  text-transform: uppercase;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 16px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 0;
  color: inherit;
  text-decoration: none;
}

.card__media {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 6px 7px 18px rgb(161 161 161 / 35%);
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 0.35s ease;
}

.card:hover .card__media img,
.card:focus-visible .card__media img {
  transform: scale(1.04);
}

.card:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 4px;
}

.card--selected .card__media {
  box-shadow: 0 0 0 2px var(--brand), 6px 7px 18px rgb(161 161 161 / 35%);
}

.card--selected .card__name {
  font-weight: 600;
}

.card--selected .card__support {
  color: var(--brand);
  font-weight: 600;
}

.card__name {
  margin-top: 8px;
  color: var(--ink);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
}

.card__support {
  color: var(--soft);
  font-size: 13px;
  line-height: 1.3;
  text-align: center;
}

.listing {
  grid-column: 1 / -1;
  padding: 20px;
  border-radius: 8px;
  background: #f4f6f7;
}

.listing__kicker {
  margin: 0 0 4px;
  color: var(--brand);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.listing h3 {
  margin: 0;
  color: var(--ink);
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.3;
  text-transform: none;
}

.listing__lead {
  max-width: 560px;
  margin: 8px 0 20px;
  color: var(--soft);
  font-size: 14px;
  line-height: 1.5;
}

.products {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 16px;
}

.product__media {
  overflow: hidden;
  border-radius: 4px;
  background: #f4f6f7;
  aspect-ratio: 1;
}

.product__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product h4 {
  margin: 12px 0 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.35;
}

.product p {
  margin: 0;
  color: var(--soft);
  font-size: 14px;
}

.footer {
  background: var(--footer);
  border-top: 1px solid #f3f4f6;
  padding: 48px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}

.footer h2 {
  margin: 0 0 16px;
  font-size: 14px;
  font-weight: 600;
}

.footer__brand p,
.footer span,
.news p {
  color: var(--soft);
  font-size: 14px;
  line-height: 1.45;
}

.footer__grid > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__brand p {
  max-width: 324px;
  margin: 12px 0 0;
}

.social {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.social a {
  color: var(--soft);
}

.news input {
  width: 100%;
  height: 42px;
  padding: 0 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: var(--ink);
  font: inherit;
  font-size: 14px;
}

.news button {
  width: 100%;
  height: 40px;
  border: 0;
  background: #101828;
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}

.footer__legal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 40px;
  padding: 24px 0;
  border-top: 1px solid #e5e7eb;
  color: #6a7282;
  font-size: 12px;
}

.footer__policies {
  display: flex;
  gap: 24px;
}

@media (min-width: 700px) {
  .grid,
  .products {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 36px 24px;
  }

  .listing .products {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .card__name {
    font-size: 16px;
  }
}

@media (min-width: 1024px) {
  .wrap {
    width: min(1328px, calc(100% - 80px));
  }

  .nav {
    display: flex;
    gap: 16px;
  }

  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px 28px;
  }

  .products {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .footer__grid {
    grid-template-columns: 1.4fr 0.7fr 0.8fr 1fr;
    gap: 40px;
  }

  .hero {
    min-height: 420px;
  }

  .hero h1 {
    font-size: 48px;
  }
}

@media (min-width: 1280px) {
  .wrap {
    width: min(1328px, calc(100% - 112px));
  }

  .search {
    display: flex;
  }

  .nav {
    gap: 28px;
  }

  .tools {
    gap: 20px;
  }

  .hero {
    min-height: 472px;
  }

  .hero__copy {
    gap: 20px;
  }

  .hero h1 {
    font-size: 56px;
    line-height: 70px;
  }

  .hero p {
    font-size: 18px;
    line-height: 27px;
  }

  .categories {
    padding: 56px 0 72px;
  }

  .categories h2 {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 54px;
  }

  .grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 46px 32px;
  }

  .card {
    gap: 0;
  }

  .card__name {
    margin-top: 24px;
    font-size: 18px;
    letter-spacing: 1px;
  }
}

@media (min-width: 1440px) {
  .nav {
    gap: 36px;
  }
}

@media (max-width: 480px) {
  .account span,
  .locale {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .card__media img {
    transition: none;
  }
}
</style>
