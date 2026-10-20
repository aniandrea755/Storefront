<script setup lang="ts">
/**
 * Lumos furniture homepage — merchant storefront mock for the theme overview
 * preview. Ported from Figma "Home Page Op 17" (Lumos / node 193:10735).
 * Deliberately out of the Marobase token system (same P4-8 line as StorefrontPreview).
 */
import heroImg from '@/assets/storefront/lumos/hero.png'
import categoryLiving from '@/assets/storefront/lumos/category-living.png'
import categoryOffice from '@/assets/storefront/lumos/category-office.png'
import categoryOutdoor from '@/assets/storefront/lumos/category-outdoor.png'
import productChair from '@/assets/storefront/lumos/product-chair.png'
import productTable from '@/assets/storefront/lumos/product-table.png'
import productSofa from '@/assets/storefront/lumos/product-sofa.png'
import productDining from '@/assets/storefront/lumos/product-dining.png'
import productStool from '@/assets/storefront/lumos/product-stool.png'

const navItems = ['Home', 'Shop', 'About Us', 'Contact Us', 'Search', 'Collections']

const categories = [
  {
    title: 'Luxury living room with a',
    accent: 'Contemporary Touch',
    image: categoryLiving,
  },
  {
    title: 'Premium',
    accent: 'Luxury',
    suffix: 'Office',
    image: categoryOffice,
  },
  {
    title: 'Outdoor',
    accent: 'Interiors',
    image: categoryOutdoor,
  },
]

const brands = [
  'Artifox',
  'The Joinery',
  'Serena & Lily',
  'Novogratz',
  'Allform',
  'Appelshop',
  'Floyd',
]

const products = [
  { name: 'Century Furniture — Infinite Possibilities', price: '$75', image: productChair },
  { name: 'Century Furniture — Infinite Possibilities', price: '$75', image: productTable },
  { name: 'Century Furniture — Infinite Possibilities', price: '$75', image: productSofa },
  { name: 'Century Furniture — Infinite Possibilities', price: '$75', image: productDining },
  { name: 'Century Furniture — Infinite Possibilities', price: '$75', image: productStool },
]

const features = [
  { icon: 'award', title: 'Premium Quality', body: 'Handcrafted furniture using solid wood and premium materials built to last generations.' },
  { icon: 'truck', title: 'Free Shipping', body: 'Complimentary delivery on all orders over $50 with professional white-glove service.' },
  { icon: 'headset', title: 'Expert Support', body: 'Our design team is available to help you create the perfect space for your home.' },
  { icon: 'rotate-ccw', title: '30-Day Returns', body: 'Shop with confidence. Easy returns within 30 days, no questions asked guarantee.' },
]

const footerCols = [
  { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'Living Room', 'Bedroom', 'Dining Room'] },
  { title: 'Service', links: ['Contact', 'My Account', 'Track Order', 'Resolution Centre', 'Contacts'] },
]
</script>

<template>
  <div class="lumos" aria-label="Lumos homepage">
    <header class="lumos-header">
      <div class="lumos-logo" aria-hidden="true">
        <span class="lumos-logo__mark" />
      </div>
      <nav class="lumos-nav">
        <span v-for="item in navItems" :key="item">{{ item }}</span>
      </nav>
      <div class="lumos-tools">
        <span class="lumos-search">
          Search ...
          <v-icon size="14">search</v-icon>
        </span>
        <v-icon size="16">heart</v-icon>
        <span class="lumos-cart">
          <v-icon size="16">shopping-bag</v-icon>
          <em>2</em>
        </span>
        <span class="lumos-locale">
          <span class="lumos-flag" />
          <v-icon size="14">chevron-down</v-icon>
        </span>
        <span class="lumos-account">
          <v-icon size="16">user</v-icon>
          Sign in
        </span>
      </div>
    </header>

    <section class="lumos-hero">
      <img class="lumos-hero__img" :src="heroImg" alt="">
      <div class="lumos-hero__copy">
        <span class="lumos-pill">New arrivals</span>
        <h1>
          Discover Your <em>Perfect</em> Place
        </h1>
        <p>Luxury living room with a Contemporary Touch. Premium Luxury Office outdoor interiors. Brands.</p>
        <div class="lumos-hero__actions">
          <span class="lumos-btn">See more</span>
          <span class="lumos-btn lumos-btn--ghost">Categories</span>
        </div>
        <div class="lumos-stats">
          <div>
            <strong>25K+</strong>
            <span>Happy Homes</span>
          </div>
          <i />
          <div>
            <strong>500+</strong>
            <span>Furniture Pieces</span>
          </div>
          <i />
          <div>
            <strong>
              4.9
              <v-icon size="14" class="lumos-star">star</v-icon>
            </strong>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>
    </section>

    <section class="lumos-band">
      <h2>Categories</h2>
      <div class="lumos-cats">
        <article v-for="category in categories" :key="category.image" class="lumos-cat">
          <img :src="category.image" :alt="`${category.title} ${category.accent}`">
          <p>
            {{ category.title }}
            <em>{{ category.accent }}</em>
            <template v-if="category.suffix"> {{ category.suffix }}</template>
          </p>
        </article>
      </div>
    </section>

    <section class="lumos-band">
      <h2>Brands</h2>
      <div class="lumos-brands">
        <span v-for="brand in brands" :key="brand">{{ brand }}</span>
      </div>
    </section>

    <section class="lumos-band">
      <div class="lumos-band__head">
        <h2>Featured Products</h2>
        <div class="lumos-arrows">
          <span><v-icon size="14">chevron-left</v-icon></span>
          <span><v-icon size="14">chevron-right</v-icon></span>
        </div>
      </div>
      <div class="lumos-products">
        <article v-for="(product, index) in products" :key="`${product.image}-${index}`" class="lumos-product">
          <div class="lumos-product__img">
            <img :src="product.image" :alt="product.name">
          </div>
          <strong>{{ product.name }}</strong>
          <em>{{ product.price }}</em>
          <span class="lumos-btn lumos-btn--block">Add to cart</span>
        </article>
      </div>
    </section>

    <section class="lumos-band">
      <h2>Categories</h2>
      <div class="lumos-cats">
        <article v-for="category in categories" :key="`repeat-${category.image}`" class="lumos-cat">
          <img :src="category.image" :alt="`${category.title} ${category.accent}`">
          <p>
            {{ category.title }}
            <em>{{ category.accent }}</em>
            <template v-if="category.suffix"> {{ category.suffix }}</template>
          </p>
        </article>
      </div>
    </section>

    <section class="lumos-why">
      <h2>The Century Difference</h2>
      <p>Quality craftsmanship, thoughtful design, and exceptional service that sets us apart.</p>
      <div class="lumos-features">
        <article v-for="feature in features" :key="feature.title">
          <span class="lumos-features__icon">
            <v-icon size="22">{{ feature.icon }}</v-icon>
          </span>
          <strong>{{ feature.title }}</strong>
          <span>{{ feature.body }}</span>
        </article>
      </div>
    </section>

    <section class="lumos-band">
      <div class="lumos-band__head">
        <h2>Featured Products</h2>
        <div class="lumos-arrows">
          <span><v-icon size="14">chevron-left</v-icon></span>
          <span><v-icon size="14">chevron-right</v-icon></span>
        </div>
      </div>
      <div class="lumos-products">
        <article v-for="(product, index) in products.slice(0, 4)" :key="`again-${product.image}-${index}`" class="lumos-product">
          <div class="lumos-product__img">
            <img :src="product.image" :alt="product.name">
          </div>
          <strong>{{ product.name }}</strong>
          <em>{{ product.price }}</em>
          <span class="lumos-btn lumos-btn--block">Add to cart</span>
        </article>
      </div>
    </section>

    <footer class="lumos-footer">
      <div class="lumos-footer__grid">
        <div class="lumos-footer__brand">
          <div class="lumos-logo" aria-hidden="true">
            <span class="lumos-logo__mark" />
          </div>
          <p>Modern furniture for contemporary living. Quality craftsmanship, timeless design, exceptional value.</p>
        </div>
        <div v-for="col in footerCols" :key="col.title">
          <strong>{{ col.title }}</strong>
          <span v-for="link in col.links" :key="link">{{ link }}</span>
        </div>
        <div>
          <strong>Newsletter</strong>
          <p>Get new arrivals and exclusive offers.</p>
          <span class="lumos-search lumos-search--footer">you@example.com</span>
        </div>
      </div>
      <div class="lumos-footer__legal">© 2026 Lumos. All rights reserved.</div>
    </footer>
  </div>
</template>

<style scoped>
.lumos {
  --lumos-brand: #495da7;
  --lumos-ink: #272727;
  --lumos-muted: #57534d;
  --lumos-soft: #5d5b5b;
  --lumos-line: #e8e8e8;
  --lumos-wash: #eeedf5;
  --lumos-chip: #f4f6f7;
  background: #fff;
  color: var(--lumos-ink);
  font-family: Inter, system-ui, sans-serif;
}

.lumos-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 72px;
  padding: 12px 28px;
  background: #fff;
}

.lumos-logo {
  flex: 0 0 auto;
}

.lumos-logo__mark {
  display: block;
  width: 42px;
  height: 32px;
  background:
    radial-gradient(circle at 30% 40%, var(--lumos-brand) 0 38%, transparent 39%),
    radial-gradient(circle at 68% 58%, color-mix(in srgb, var(--lumos-brand) 80%, #fff) 0 34%, transparent 35%);
}

.lumos-nav {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  gap: 22px;
  color: var(--lumos-ink);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.lumos-tools {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #545354;
}

.lumos-search {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 140px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #9e9e9e;
  border-radius: 6px;
  background: var(--lumos-chip);
  color: #545354;
  font-size: 10px;
}

.lumos-star {
  margin-left: 2px;
  color: var(--lumos-brand);
}

.lumos-cart,
.lumos-locale,
.lumos-account {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: relative;
  font-size: 10px;
}

.lumos-cart em {
  position: absolute;
  top: -8px;
  right: -8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 99px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
}

.lumos-flag {
  width: 18px;
  height: 12px;
  border-radius: 2px;
  background:
    linear-gradient(#006aa7 0 100%),
    linear-gradient(#fecc00 0 100%);
  background-size: 100% 100%, 18px 4px;
  box-shadow: inset 7px 0 0 0 #fecc00;
}

.lumos-hero {
  position: relative;
  min-height: 320px;
  overflow: hidden;
  background: var(--lumos-wash);
}

.lumos-hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 40%;
}

.lumos-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(76deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 76%) 57%, rgb(255 255 255 / 92%) 100%);
}

.lumos-hero__copy {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  max-width: 72%;
  padding: 36px 28px 28px;
}

.lumos-pill {
  display: inline-flex;
  align-items: center;
  padding: 5px 10px;
  border: 1.5px solid var(--lumos-brand);
  border-radius: 16px;
  color: var(--lumos-brand);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.lumos-hero h1 {
  margin: 0;
  color: var(--lumos-ink);
  font-size: 36px;
  font-weight: 500;
  line-height: 1.05;
  text-transform: uppercase;
}

.lumos-hero h1 em {
  color: var(--lumos-brand);
  font-style: normal;
}

.lumos-hero p {
  max-width: 420px;
  margin: 0;
  color: var(--lumos-muted);
  font-size: 12px;
  line-height: 1.5;
}

.lumos-hero__actions {
  display: flex;
  gap: 10px;
}

.lumos-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  background: var(--lumos-brand);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.lumos-btn--ghost {
  background: transparent;
  box-shadow: inset 0 0 0 1px var(--lumos-line);
  color: var(--lumos-ink);
}

.lumos-btn--block {
  width: 100%;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0;
}

.lumos-stats {
  display: flex;
  align-items: center;
  gap: 22px;
  width: min(100%, 460px);
  margin-top: 8px;
  padding: 14px 18px;
  border: 1px solid rgb(231 229 228 / 60%);
  border-radius: 4px;
  background: rgb(255 255 255 / 60%);
  box-shadow: 0 12px 18px rgb(0 0 0 / 8%);
}

.lumos-stats strong {
  display: block;
  color: var(--lumos-brand);
  font-size: 18px;
  font-weight: 650;
  letter-spacing: -0.03em;
}

.lumos-stats span {
  color: var(--lumos-soft);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.lumos-stats i {
  width: 1px;
  height: 36px;
  background: #d6d3d1;
}

.lumos-band,
.lumos-why {
  padding: 28px;
}

.lumos-band h2,
.lumos-why h2 {
  margin: 0 0 16px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.lumos-band__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.lumos-arrows {
  display: flex;
  gap: 8px;
}

.lumos-arrows span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--lumos-line);
  border-radius: 99px;
}

.lumos-cats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.lumos-cat {
  position: relative;
  overflow: hidden;
  min-height: 140px;
  border-radius: 6px;
  background: #fff;
}

.lumos-cat img {
  width: 100%;
  height: 140px;
  object-fit: cover;
}

.lumos-cat p {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin: 0;
  color: var(--lumos-soft);
  font-size: 13px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 0 18px #fff;
}

.lumos-cat em {
  color: var(--lumos-brand);
  font-style: normal;
}

.lumos-brands {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 10px;
}

.lumos-brands span {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 8px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 1px 10px rgb(104 123 191 / 22%);
  color: #111;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.lumos-products {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.lumos-product {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 8px 10px;
  border: 1px solid var(--lumos-line);
  border-radius: 8px;
  background: #fff;
}

.lumos-product__img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 110px;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
  background: #fff;
}

.lumos-product__img img {
  max-width: 88%;
  max-height: 100%;
  object-fit: contain;
}

.lumos-product strong {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 10px;
  font-weight: 650;
  line-height: 1.3;
}

.lumos-product em {
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
}

.lumos-why {
  text-align: center;
}

.lumos-why > p {
  max-width: 420px;
  margin: -8px auto 18px;
  color: #545354;
  font-size: 12px;
}

.lumos-features {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  text-align: center;
}

.lumos-features article {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 10px;
  border: 1px solid var(--lumos-line);
  border-radius: 10px;
  background: #fff;
}

.lumos-features__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 99px;
  background: var(--lumos-chip);
  color: var(--lumos-brand);
}

.lumos-features strong {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.lumos-features span:last-child {
  color: #545354;
  font-size: 10px;
  line-height: 1.4;
}

.lumos-footer {
  padding: 28px;
  border-top: 1px solid #f3f4f6;
  background: #f9fafb;
}

.lumos-footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 0.8fr 1.1fr;
  gap: 18px;
}

.lumos-footer__brand p,
.lumos-footer p {
  color: #4a5565;
  font-size: 11px;
  line-height: 1.5;
}

.lumos-footer strong {
  display: block;
  margin-bottom: 8px;
  font-size: 11px;
}

.lumos-footer span {
  display: block;
  color: #4a5565;
  font-size: 11px;
  line-height: 1.8;
}

.lumos-search--footer {
  width: 100%;
  margin-top: 8px;
}

.lumos-footer__legal {
  margin-top: 18px;
  padding-top: 12px;
  border-top: 1px solid var(--lumos-line);
  color: #4a5565;
  font-size: 10px;
}

@media (max-width: 760px) {
  .lumos-nav,
  .lumos-search,
  .lumos-account,
  .lumos-locale {
    display: none;
  }

  .lumos-hero h1 {
    font-size: 26px;
  }

  .lumos-hero__copy {
    max-width: 100%;
  }

  .lumos-cats,
  .lumos-features,
  .lumos-footer__grid {
    grid-template-columns: 1fr;
  }

  .lumos-brands {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lumos-products {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lumos-stats {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
