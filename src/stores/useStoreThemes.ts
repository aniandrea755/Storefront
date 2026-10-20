import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  createBlock,
  createSection,
  defaultThemeStyles,
  getBlockDef,
  getSectionDef,
  type StoreTheme,
  type TemplateType,
  type ThemeBlock,
  type ThemeSection,
  type ThemeStyles,
} from './themeBuilderData'
import { useSalesChannelsStore } from './useSalesChannels'

function nowIso() {
  return new Date().toISOString()
}

/** JSON deep clone — theme data is plain strings/numbers/booleans throughout. */
function cloneTheme(theme: StoreTheme): StoreTheme {
  return JSON.parse(JSON.stringify(theme)) as StoreTheme
}

// ── Seeds ─────────────────────────────────────────────────────────────────────
// One theme per channel with webStore.storeBuilderEnabled (see useSalesChannels
// seeds): Atlas Outfitters ships Published with all six templates populated;
// Beta Sales Channel is a Draft starter.

function seedThemes(): StoreTheme[] {
  return [
    {
      id: 'theme-atlas',
      channelId: 'retest-sales-notification',
      name: 'Lumos',
      status: 'Published',
      publishedAt: '2026-05-20T04:10:00Z',
      updatedAt: '2026-05-20T04:10:00Z',
      styles: {
        ...defaultThemeStyles(),
        brandColor: '#495da7',
        accentColor: '#495da7',
        background: '#eeedf5',
        textColor: '#272727',
      },
      templates: {
        home: [
          createSection('announcement-bar', {}, 'atlas-home-announcement'),
          createSection('header', {}, 'atlas-home-header'),
          {
            ...createSection('hero', {
              headline: 'Discover Your Perfect Place',
              subheadline: 'Luxury living room with a Contemporary Touch. Premium Luxury Office outdoor interiors.',
              ctaLabel: 'See more',
            }, 'atlas-home-hero'),
            blocks: [
              createBlock('heading', { text: 'Discover Your Perfect Place' }, 'atlas-hero-heading'),
              createBlock('paragraph', { body: 'Luxury living room with a Contemporary Touch.' }, 'atlas-hero-paragraph'),
            ],
          },
          createSection('featured-products', {}, 'atlas-home-featured'),
          {
            ...createSection('image-banner', {}, 'atlas-home-banner'),
            blocks: [createBlock('heading', { text: 'The Winter Edit' }, 'atlas-banner-heading')],
          },
          createSection('testimonials', {}, 'atlas-home-testimonials'),
          createSection('newsletter', { headline: 'Join the Atlas list' }, 'atlas-home-newsletter'),
          createSection('footer', {}, 'atlas-home-footer'),
        ],
        product: [
          createSection('announcement-bar', {}, 'atlas-product-announcement'),
          createSection('header', {}, 'atlas-product-header'),
          (() => {
            const section = createSection('product-detail', {}, 'atlas-product-detail')
            section.blocks = [createBlock('pdp-detail', {}, 'atlas-product-pdp-detail')]
            return section
          })(),
          createSection('footer', {}, 'atlas-product-footer'),
        ],
        collection: [
          createSection('announcement-bar', {}, 'atlas-collection-announcement'),
          createSection('header', {}, 'atlas-collection-header'),
          {
            ...createSection('categories', { title: 'Shop by category' }, 'atlas-collection-categories'),
            label: 'Collections',
            blocks: [
              createBlock('category-grid', {
                itemsPerRow: 3,
                totalItems: 25,
                layout: 'Grid',
                paginationStyle: 'Combined (Load more)',
                autoLoadTimes: 2,
              }, 'atlas-collection-category-grid'),
            ],
          },
          createSection('footer', {}, 'atlas-collection-footer'),
        ],
        search: [
          createSection('announcement-bar', {}, 'atlas-search-announcement'),
          createSection('header', {}, 'atlas-search-header'),
          (() => {
            const section = createSection('search-results', {}, 'atlas-search-results')
            section.blocks = [createBlock('product-grid', {}, 'atlas-search-product-grid')]
            return section
          })(),
          createSection('footer', {}, 'atlas-search-footer'),
        ],
        cart: [
          createSection('announcement-bar', {}, 'atlas-cart-announcement'),
          createSection('header', {}, 'atlas-cart-header'),
          createSection('cart-summary', {}, 'atlas-cart-summary'),
          createSection('footer', {}, 'atlas-cart-footer'),
        ],
        blogs: [
          createSection('announcement-bar', {}, 'atlas-blogs-announcement'),
          createSection('header', {}, 'atlas-blogs-header'),
          seedBlogListSection('atlas-blogs'),
          createSection('footer', {}, 'atlas-blogs-footer'),
        ],
      },
    },
    {
      id: 'theme-beta',
      channelId: 'beta-sales-channel',
      name: 'Beta starter',
      status: 'Draft',
      updatedAt: '2026-05-25T03:10:00Z',
      styles: defaultThemeStyles(),
      templates: {
        home: [
          createSection('header', {}, 'beta-home-header'),
          createSection('hero', { headline: 'Welcome to Beta', subheadline: 'Your new storefront starts here.' }, 'beta-home-hero'),
          createSection('featured-products', {}, 'beta-home-featured'),
          createSection('newsletter', {}, 'beta-home-newsletter'),
          createSection('footer', {}, 'beta-home-footer'),
        ],
        product: [
          createSection('header', {}, 'beta-product-header'),
          (() => {
            const section = createSection('product-detail', {}, 'beta-product-detail')
            section.blocks = [createBlock('pdp-detail', {}, 'beta-product-pdp-detail')]
            return section
          })(),
          createSection('footer', {}, 'beta-product-footer'),
        ],
        collection: [
          createSection('header', {}, 'beta-collection-header'),
          createSection('collection-grid', {}, 'beta-collection-grid'),
          createSection('footer', {}, 'beta-collection-footer'),
        ],
        search: [
          createSection('header', {}, 'beta-search-header'),
          (() => {
            const section = createSection('search-results', {}, 'beta-search-results')
            section.blocks = [createBlock('product-grid', {}, 'beta-search-product-grid')]
            return section
          })(),
          createSection('footer', {}, 'beta-search-footer'),
        ],
        cart: [
          createSection('header', {}, 'beta-cart-header'),
          createSection('cart-summary', {}, 'beta-cart-summary'),
          createSection('footer', {}, 'beta-cart-footer'),
        ],
        blogs: [
          createSection('header', {}, 'beta-blogs-header'),
          seedBlogListSection('beta-blogs'),
          createSection('footer', {}, 'beta-blogs-footer'),
        ],
      },
    },
  ]
}

function seedBlogListSection(idPrefix: string): ThemeSection {
  const section = createSection('blog-list', {}, `${idPrefix}-list`)
  section.blocks = [
    createBlock('blog-image-banner', {}, `${idPrefix}-blog-image-banner`),
    createBlock('blog-posts', {}, `${idPrefix}-blog-posts`),
  ]
  return section
}

function defaultBlogTemplateSections(themeId: string): ThemeSection[] {
  return [
    createSection('announcement-bar', {}, `${themeId}-blogs-announcement`),
    createSection('header', {}, `${themeId}-blogs-header`),
    seedBlogListSection(`${themeId}-blogs`),
    createSection('footer', {}, `${themeId}-blogs-footer`),
  ]
}

function syncBlogBlocks(section: ThemeSection): boolean {
  if (section.kind !== 'blog-list') return false

  const previous = section.blocks ?? []
  let banner = previous.find((entry) => entry.kind === 'blog-image-banner')
  let posts = previous.find((entry) => entry.kind === 'blog-posts')

  if (!banner) {
    banner = createBlock('blog-image-banner', {}, `${section.id}-blog-image-banner`)
  } else {
    banner.settings = { ...createBlock('blog-image-banner').settings, ...banner.settings }
  }
  if (!posts) {
    posts = createBlock('blog-posts', {}, `${section.id}-blog-posts`)
  } else {
    posts.settings = { ...createBlock('blog-posts').settings, ...posts.settings }
  }

  const next = [banner, posts]
  const sameLength = previous.length === next.length
  const sameIds = sameLength && previous.every((block, index) => block.id === next[index]?.id)
  if (sameIds) return false

  section.blocks = next
  return true
}

// ── Store ─────────────────────────────────────────────────────────────────────

export const useStoreThemesStore = defineStore('storeThemes', () => {
  const themes = ref<StoreTheme[]>(seedThemes())

  // Last published (or seeded) snapshot per theme id — what discardDraft
  // restores. Non-reactive on purpose; only read inside actions.
  const baselines = new Map<string, StoreTheme>(
    themes.value.map((theme) => [theme.id, cloneTheme(theme)]),
  )

  function getTheme(themeId: string) {
    return themes.value.find((theme) => theme.id === themeId)
  }

  function themeForChannel(channelId: string) {
    return themes.value.find((theme) => theme.channelId === channelId)
  }

  function touch(theme: StoreTheme) {
    theme.updatedAt = nowIso()
  }

  /** Keep Collection sublayers in sync with Collections section toggles (banner → child grid → collection grid). */
  function syncCategoriesBlocks(section: ThemeSection): boolean {
    if (section.kind !== 'categories') return false

    const previous = section.blocks ?? []
    const showBanner = section.settings.showCollectionBanner === true
    const showChildGrid = section.settings.showChildEntities === true
    let banner = previous.find((entry) => entry.kind === 'collection-banner')
    let childGrid = previous.find((entry) => entry.kind === 'child-category-grid')
    let grid = previous.find((entry) => entry.kind === 'category-grid')

    if (!grid) grid = createBlock('category-grid')
    if (showBanner && !banner) {
      banner = createBlock('collection-banner', {}, `${section.id}-collection-banner`)
    } else if (banner && !Object.keys(banner.settings).length) {
      banner.settings = { ...createBlock('collection-banner').settings }
    }
    if (showChildGrid && !childGrid) {
      childGrid = createBlock('child-category-grid', {}, `${section.id}-child-category-grid`)
    } else if (childGrid) {
      const childDefaults = createBlock('child-category-grid').settings
      childGrid.settings = { ...childDefaults, ...childGrid.settings }
    }

    const next: ThemeBlock[] = []
    if (showBanner && banner) next.push(banner)
    if (showChildGrid && childGrid) next.push(childGrid)
    if (grid) {
      const gridDefaults = createBlock('category-grid').settings
      grid.settings = { ...gridDefaults, ...grid.settings }
      next.push(grid)
    }

    const sameLength = previous.length === next.length
    const sameIds = sameLength && previous.every((block, index) => block.id === next[index]?.id)
    if (sameIds) return false

    section.blocks = next
    return true
  }

  function syncProductDetailBlocks(section: ThemeSection): boolean {
    if (section.kind !== 'product-detail') return false

    const previous = section.blocks ?? []
    let detail = previous.find((entry) => entry.kind === 'pdp-detail')
    if (!detail) {
      const legacyGallery = section.settings.galleryLayout
      const legacyReviews = section.settings.showReviews
      detail = createBlock('pdp-detail', {
        ...(typeof legacyGallery === 'string' ? { galleryLayout: legacyGallery } : {}),
        ...(typeof legacyReviews === 'boolean' ? { showReviews: legacyReviews } : {}),
      }, `${section.id}-pdp-detail`)
    } else {
      const defaults = createBlock('pdp-detail').settings
      const merged = { ...defaults, ...detail.settings }
      const legacyLayout = merged.galleryLayout
      if (typeof legacyLayout === 'string' && !('sliderLayout' in detail.settings)) {
        merged.sliderLayout = legacyLayout === 'Stacked' ? 'Bottom' : 'Left'
      }
      if (merged.sliderLayout === 'Stacked') {
        merged.sliderLayout = 'Bottom'
      }
      detail.settings = merged
    }

    const next = detail ? [detail] : []
    const sameLength = previous.length === next.length
    const sameIds = sameLength && previous.every((block, index) => block.id === next[index]?.id)
    if (sameIds) return false

    section.blocks = next
    return true
  }

  function syncSearchBlocks(section: ThemeSection): boolean {
    if (section.kind !== 'search-results') return false

    const previous = section.blocks ?? []
    let grid = previous.find((entry) => entry.kind === 'product-grid')
    if (!grid) {
      grid = createBlock('product-grid', {}, `${section.id}-product-grid`)
    } else {
      const gridDefaults = createBlock('product-grid').settings
      grid.settings = { ...gridDefaults, ...grid.settings }
    }

    const next = grid ? [grid] : []
    const sameLength = previous.length === next.length
    const sameIds = sameLength && previous.every((block, index) => block.id === next[index]?.id)
    if (sameIds) return false

    section.blocks = next
    return true
  }

  function ensureCategoriesBlocks(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind === 'categories' && syncCategoriesBlocks(section)) changed = true
    }
    if (changed) touch(theme)
  }

  function ensureSearchBlocks(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind === 'search-results' && syncSearchBlocks(section)) changed = true
    }
    if (changed) touch(theme)
  }

  function ensureBlogBlocks(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind === 'blog-list' && syncBlogBlocks(section)) changed = true
    }
    if (changed) touch(theme)
  }

  function ensureHeaderSectionSettings(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind !== 'header') continue
      const defaults = createSection('header').settings
      const merged = { ...defaults, ...section.settings }
      if (JSON.stringify(merged) !== JSON.stringify(section.settings)) {
        section.settings = merged
        changed = true
      }
    }
    if (changed) touch(theme)
  }

  function ensureBlogListSectionSettings(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind !== 'blog-list') continue
      const defaults = createSection('blog-list').settings
      const merged = { ...defaults, ...section.settings }
      if (JSON.stringify(merged) !== JSON.stringify(section.settings)) {
        section.settings = merged
        changed = true
      }
      const def = getSectionDef('blog-list')
      if (def && section.label !== def.title) {
        section.label = def.title
        changed = true
      }
    }
    if (changed) touch(theme)
  }

  function ensureFooterSectionSettings(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    for (const section of theme.templates[template]) {
      if (section.kind !== 'footer') continue
      const defaults = createSection('footer').settings
      const merged = { ...defaults, ...section.settings }
      if (JSON.stringify(merged) !== JSON.stringify(section.settings)) {
        section.settings = merged
        changed = true
      }
    }
    if (changed) touch(theme)
  }

  /** Announcement banner sits above the header on every template (header layer list). */
  function ensureBlogTemplate(themeId: string) {
    const theme = getTheme(themeId)
    if (!theme) return
    if (theme.templates.blogs?.length) return
    theme.templates.blogs = defaultBlogTemplateSections(themeId)
    touch(theme)
  }

  function ensureAnnouncementSection(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    const sections = theme.templates[template]
    if (sections.some((entry) => entry.kind === 'announcement-bar')) return

    const headerIndex = sections.findIndex((entry) => entry.kind === 'header')
    const insertAt = headerIndex >= 0 ? headerIndex : 0
    sections.splice(insertAt, 0, createSection('announcement-bar', {}, `${themeId}-${template}-announcement`))
    touch(theme)
  }

  function ensureProductDetailBlocks(themeId: string, template: TemplateType) {
    const theme = getTheme(themeId)
    if (!theme) return
    let changed = false
    if (template === 'product') {
      const sections = theme.templates.product
      const withoutFeatured = sections.filter((section) => section.kind !== 'featured-products')
      if (withoutFeatured.length !== sections.length) {
        theme.templates.product = withoutFeatured
        changed = true
      }
    }
    for (const section of theme.templates[template]) {
      if (section.kind !== 'product-detail') continue
      if (section.label === 'Product detail') section.label = 'PDP Information'
      const pdpDefaults = createSection('product-detail').settings
      const mergedSettings = { ...pdpDefaults, ...section.settings }
      if (JSON.stringify(mergedSettings) !== JSON.stringify(section.settings)) {
        section.settings = mergedSettings
        changed = true
      }
      if (syncProductDetailBlocks(section)) changed = true
    }
    if (changed) touch(theme)
  }

  function updateStyles(themeId: string, patch: Partial<ThemeStyles>) {
    const theme = getTheme(themeId)
    if (!theme) return
    theme.styles = { ...theme.styles, ...patch }
    touch(theme)
  }

  function updateSection(
    themeId: string,
    template: TemplateType,
    sectionId: string,
    patch: { label?: string; hidden?: boolean; settings?: Record<string, string | number | boolean> },
  ) {
    const theme = getTheme(themeId)
    const section = theme?.templates[template].find((entry) => entry.id === sectionId)
    if (!theme || !section) return
    if (patch.label !== undefined) section.label = patch.label
    if (patch.hidden !== undefined && !getSectionDef(section.kind)?.required) section.hidden = patch.hidden
    if (patch.settings) {
      section.settings = { ...section.settings, ...patch.settings }
    }
    if (section.kind === 'categories' || section.kind === 'search-results' || section.kind === 'product-detail') {
      if (section.kind === 'categories') syncCategoriesBlocks(section)
      else if (section.kind === 'search-results') syncSearchBlocks(section)
      else syncProductDetailBlocks(section)
      const sections = theme.templates[template]
      const index = sections.findIndex((entry) => entry.id === sectionId)
      if (index !== -1) {
        // Replace the section node so Vue/Pinia consumers re-render the layer tree and preview.
        sections.splice(index, 1, {
          ...sections[index],
          settings: { ...section.settings },
          blocks: section.blocks ? [...section.blocks] : section.blocks,
        })
      }
    }
    touch(theme)
  }

  // New sections belong above a trailing footer, never after it. Returns the
  // index of the first footer (the natural "end of body"), else the list end.
  function contentInsertIndex(sections: ThemeSection[]): number {
    const footerIdx = sections.findIndex((entry) => entry.kind === 'footer')
    return footerIdx === -1 ? sections.length : footerIdx
  }

  function addSection(
    themeId: string,
    template: TemplateType,
    kind: string,
    index?: number,
    variantId?: string,
  ): ThemeSection | undefined {
    const theme = getTheme(themeId)
    if (!theme) return undefined
    const def = getSectionDef(kind)
    if (!def) return undefined
    const sections = theme.templates[template]
    if (def.unique && sections.some((entry) => entry.kind === kind)) return undefined
    // When a variant is chosen, seed the section with that variant's preset.
    const variant = variantId ? def.variants?.find((entry) => entry.id === variantId) : undefined
    const section = createSection(kind, variant ? { ...variant.preset } : {})
    if (kind === 'categories') {
      section.blocks = [createBlock('category-grid')]
    }
    if (kind === 'search-results') {
      section.blocks = [createBlock('product-grid')]
    }
    if (kind === 'product-detail') {
      section.blocks = [createBlock('pdp-detail')]
    }
    sections.splice(index ?? contentInsertIndex(sections), 0, section)
    touch(theme)
    return section
  }

  function removeSection(themeId: string, template: TemplateType, sectionId: string) {
    const theme = getTheme(themeId)
    if (!theme) return
    const sections = theme.templates[template]
    const index = sections.findIndex((entry) => entry.id === sectionId)
    if (index === -1) return
    if (getSectionDef(sections[index]?.kind ?? '')?.required) return
    sections.splice(index, 1)
    touch(theme)
  }

  /**
   * Append several sections in one pass (Da Vinci generator). Each kind is created
   * with its matching overrides; `unique` kinds already present are skipped. Only
   * the sections actually created are returned, and `touch()` runs once.
   */
  function addSections(
    themeId: string,
    template: TemplateType,
    kinds: string[],
    overridesList: Record<string, string | number | boolean>[] = [],
  ): ThemeSection[] {
    const theme = getTheme(themeId)
    if (!theme) return []
    const sections = theme.templates[template]
    const created: ThemeSection[] = []
    // Insert the batch, in order, above a trailing footer.
    let at = contentInsertIndex(sections)
    kinds.forEach((kind, i) => {
      const def = getSectionDef(kind)
      if (!def) return
      if (def.unique && sections.some((entry) => entry.kind === kind)) return
      const section = createSection(kind, overridesList[i] ?? {})
      sections.splice(at, 0, section)
      at += 1
      created.push(section)
    })
    if (created.length) touch(theme)
    return created
  }

  /** Remove all matching section ids from a template in one pass (undo a batch). */
  function removeSections(themeId: string, template: TemplateType, ids: string[]) {
    const theme = getTheme(themeId)
    if (!theme) return
    const idSet = new Set(ids)
    const sections = theme.templates[template]
    const before = sections.length
    theme.templates[template] = sections.filter((entry) => (
      !idSet.has(entry.id) || Boolean(getSectionDef(entry.kind)?.required)
    ))
    if (theme.templates[template].length !== before) touch(theme)
  }

  /** Move a section up (`offset` -1) or down (`offset` +1) within its template. */
  function moveSection(themeId: string, template: TemplateType, sectionId: string, offset: number) {
    const theme = getTheme(themeId)
    if (!theme) return
    const sections = theme.templates[template]
    const from = sections.findIndex((entry) => entry.id === sectionId)
    const to = from + offset
    if (from === -1 || to < 0 || to >= sections.length) return
    if (getSectionDef(sections[from]?.kind ?? '')?.required) return
    if (getSectionDef(sections[to]?.kind ?? '')?.required) return
    const [section] = sections.splice(from, 1)
    if (!section) return
    sections.splice(to, 0, section)
    touch(theme)
  }

  // ── Block CRUD ────────────────────────────────────────────────────────────
  // Blocks live on a section's optional `blocks` array (block-accepting kinds).
  // Each mutation locates the section, guards, then touch()es the theme.

  function findSection(themeId: string, template: TemplateType, sectionId: string) {
    const theme = getTheme(themeId)
    const section = theme?.templates[template].find((entry) => entry.id === sectionId)
    return { theme, section }
  }

  function addBlock(
    themeId: string,
    template: TemplateType,
    sectionId: string,
    kind: string,
  ): ThemeBlock | undefined {
    const { theme, section } = findSection(themeId, template, sectionId)
    if (!theme || !section) return undefined
    // Defense in depth: only block-accepting section kinds hold blocks (the UI
    // already hides the affordance elsewhere, but guard the store too).
    if (!getSectionDef(section.kind)?.acceptsBlocks) return undefined
    const blockDef = getBlockDef(kind)
    if (!blockDef) return undefined
    if (blockDef.sectionKinds && !blockDef.sectionKinds.includes(section.kind)) return undefined
    if (blockDef.locked && section.blocks?.some((entry) => entry.kind === kind)) return undefined
    const block = createBlock(kind)
    if (!section.blocks) section.blocks = []
    section.blocks.push(block)
    touch(theme)
    return block
  }

  function removeBlock(themeId: string, template: TemplateType, sectionId: string, blockId: string) {
    const { theme, section } = findSection(themeId, template, sectionId)
    if (!theme || !section?.blocks) return
    const index = section.blocks.findIndex((entry) => entry.id === blockId)
    if (index === -1) return
    if (getBlockDef(section.blocks[index]?.kind ?? '')?.locked) return
    section.blocks.splice(index, 1)
    touch(theme)
  }

  /** Move a block up (`offset` -1) or down (`offset` +1) within its section. */
  function moveBlock(
    themeId: string,
    template: TemplateType,
    sectionId: string,
    blockId: string,
    offset: number,
  ) {
    const { theme, section } = findSection(themeId, template, sectionId)
    if (!theme || !section?.blocks) return
    const from = section.blocks.findIndex((entry) => entry.id === blockId)
    const to = from + offset
    if (from === -1 || to < 0 || to >= section.blocks.length) return
    if (getBlockDef(section.blocks[from]?.kind ?? '')?.locked) return
    const [block] = section.blocks.splice(from, 1)
    if (!block) return
    section.blocks.splice(to, 0, block)
    touch(theme)
  }

  function updateBlock(
    themeId: string,
    template: TemplateType,
    sectionId: string,
    blockId: string,
    patch: { settings?: Record<string, string | number | boolean> },
  ) {
    const { theme, section } = findSection(themeId, template, sectionId)
    const block = section?.blocks?.find((entry) => entry.id === blockId)
    if (!theme || !block) return
    if (patch.settings) block.settings = { ...block.settings, ...patch.settings }
    touch(theme)
  }

  function publishTheme(themeId: string) {
    const theme = getTheme(themeId)
    if (!theme) return
    theme.status = 'Published'
    theme.publishedAt = nowIso()
    theme.updatedAt = theme.publishedAt
    baselines.set(theme.id, cloneTheme(theme))

    const salesChannels = useSalesChannelsStore()
    const channel = salesChannels.channels.find((entry) => entry.id === theme.channelId)
    if (channel?.webStore) {
      channel.webStore.published = true
      channel.updatedAt = theme.publishedAt
      channel.lastActivityAt = theme.publishedAt
    }
  }

  /** Revert draft edits to the last published (or seeded) snapshot. */
  function discardDraft(themeId: string) {
    const theme = getTheme(themeId)
    const baseline = baselines.get(themeId)
    if (!theme || !baseline) return
    const restored = cloneTheme(baseline)
    theme.name = restored.name
    theme.status = restored.status
    theme.publishedAt = restored.publishedAt
    theme.updatedAt = restored.updatedAt
    theme.styles = restored.styles
    theme.templates = restored.templates
  }

  return {
    themes,
    getTheme,
    themeForChannel,
    updateStyles,
    updateSection,
    addSection,
    removeSection,
    addSections,
    removeSections,
    moveSection,
    addBlock,
    removeBlock,
    moveBlock,
    updateBlock,
    publishTheme,
    discardDraft,
    ensureCategoriesBlocks,
    ensureSearchBlocks,
    ensureAnnouncementSection,
    ensureHeaderSectionSettings,
    ensureFooterSectionSettings,
    ensureProductDetailBlocks,
    ensureBlogTemplate,
    ensureBlogListSectionSettings,
    ensureBlogBlocks,
  }
})
