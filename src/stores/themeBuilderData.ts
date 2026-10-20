// Store theme builder data — section catalog (schema-driven settings per
// section kind), theme style defaults pulled from design tokens, and section
// factories shared by useStoreThemes seeds and the builder's add-section picker.
// Mirrors the journeyFlowData + schema-driven-config architecture.

import {
  mp_radius_12,
  mp_color_blue_500,
  mp_color_light_primary,
  mp_color_light_surface,
  mp_color_light_textPrimary,
} from '@/design-tokens/generated/tokens'

export interface ThemeSectionField {
  key: string
  label: string
  type: 'text' | 'textarea' | 'select' | 'color' | 'toggle' | 'slider' | 'number' | 'segmented'
  options?: string[]
  /** Lucide icon per option, used by `segmented` fields. */
  icons?: string[]
  min?: number
  max?: number
  /** Heading shown once, above the first field that carries this group. */
  group?: string
  /** Hide the field unless these settings match. One rule, or all of them. */
  visibleWhen?: { key: string; equals: string | number | boolean } | Array<{ key: string; equals: string | number | boolean }>
}

export interface ThemeSectionVariant {
  id: string
  label: string
  description?: string
  preset: Record<string, string | number | boolean>
}

export interface ThemeSectionDef {
  kind: string
  title: string
  icon: string
  description: string
  category: string
  fields: ThemeSectionField[]
  variants?: ThemeSectionVariant[]
  acceptsBlocks?: boolean
  unique?: boolean
  /** Required sections cannot be added twice, deleted, reordered, or hidden. */
  required?: boolean
  /** Omit from template section layer lists — edited in the Header builder surface. */
  hideFromLayerList?: boolean
}

/** A block nested inside a block-accepting section. */
export interface ThemeBlock {
  id: string
  kind: string
  settings: Record<string, string | number | boolean>
}

export interface ThemeBlockDef {
  kind: string
  title: string
  icon: string
  fields: ThemeSectionField[]
  /** When set, the block can only be added to these section kinds. */
  sectionKinds?: string[]
  /** Locked blocks cannot be added, deleted, or reordered. */
  locked?: boolean
}

export interface ThemeSection {
  id: string
  kind: string
  label: string
  settings: Record<string, string | number | boolean>
  blocks?: ThemeBlock[]
  hidden?: boolean
}

/** Display/group order for the categorized Add Section picker. */
export const sectionCategories: string[] = ['Layout', 'Media', 'Featured', 'Content', 'Commerce']

export type TemplateType = 'home' | 'product' | 'collection' | 'search' | 'cart' | 'blogs'

export interface ThemeStyles {
  brandColor: string
  accentColor: string
  background: string
  textColor: string
  headingFont: string
  bodyFont: string
  cornerRadius: number
  buttonStyle: 'solid' | 'outline' | 'pill'
}

export interface StoreTheme {
  id: string
  channelId: string
  name: string
  status: 'Draft' | 'Published'
  publishedAt?: string
  updatedAt: string
  styles: ThemeStyles
  templates: Record<TemplateType, ThemeSection[]>
}

export const TEMPLATE_TYPES: TemplateType[] = ['home', 'product', 'collection', 'search', 'cart', 'blogs']

export const TEMPLATE_TYPE_LABELS: Record<TemplateType, string> = {
  home: 'Home',
  product: 'Product',
  collection: 'Collection',
  search: 'Search Results',
  cart: 'Cart',
  blogs: 'Blogs',
}

/** Fonts offered by the theme styles panel. */
export const themeFonts = ['Inter', 'Georgia', 'Space Grotesk', 'DM Sans']

/** Default global theme styles, sourced from design tokens. */
export function defaultThemeStyles(): ThemeStyles {
  return {
    brandColor: mp_color_light_primary,
    accentColor: mp_color_blue_500,
    background: mp_color_light_surface,
    textColor: mp_color_light_textPrimary,
    headingFont: 'Inter',
    bodyFont: 'Inter',
    cornerRadius: Number.parseInt(mp_radius_12, 10),
    buttonStyle: 'solid',
  }
}

// ── Section catalog ──────────────────────────────────────────────────────────

export const sectionCatalog: ThemeSectionDef[] = [
  {
    kind: 'announcement-bar',
    title: 'Announcement banner',
    icon: 'megaphone',
    description: 'Slim strip above the header for promos and shipping notices.',
    category: 'Layout',
    hideFromLayerList: true,
    fields: [
      { key: 'text', label: 'Text', type: 'text' },
      { key: 'link', label: 'Link label', type: 'text' },
    ],
  },
  {
    kind: 'header',
    title: 'Header',
    icon: 'panel-top',
    description: 'Store logo, navigation menu, and cart.',
    category: 'Layout',
    unique: true,
    hideFromLayerList: true,
    fields: [
      { key: 'menuSelect', label: 'Select Menu', type: 'select', options: ['Main Menu', 'Secondary Menu', 'Mobile Menu'] },
      { key: 'menuLayoutType', label: 'Menu Layout', type: 'select', options: ['Horizontal Menu', 'Drawer'] },
      { key: 'menuDesign', label: 'Menu Design', type: 'select', options: ['Dropdown', 'Inline', 'Megamenu'] },
      { key: 'menuStyle', label: 'Menu style', type: 'select', options: ['Inline', 'Centered', 'Minimal'] },
      { key: 'menuLayout', label: 'Menu layout', type: 'select', options: ['Horizontal', 'Dropdown'] },
      { key: 'logoSelect', label: 'Select Logo', type: 'select', options: ['Main logo', 'Secondary logo', 'Icon mark'] },
      { key: 'logoPosition', label: 'Logo Position', type: 'select', options: ['Middle Center', 'Top Center', 'Middle Left', 'Top Left'] },
      { key: 'headerScroll', label: 'Header scroll settings', type: 'select', options: ['Scroll with site', 'Sticky header'] },
      { key: 'sticky', label: 'Sticky on scroll', type: 'toggle' },
    ],
  },
  {
    kind: 'hero',
    title: 'Hero',
    icon: 'image',
    description: 'Full-width banner with headline and call to action.',
    category: 'Media',
    acceptsBlocks: true,
    variants: [
      { id: 'full-bleed', label: 'Full-bleed', preset: { alignment: 'Left', overlay: 15 } },
      { id: 'split', label: 'Split with image', preset: { alignment: 'Left', overlay: 0 } },
      { id: 'minimal', label: 'Minimal', preset: { alignment: 'Center', overlay: 0 } },
    ],
    fields: [
      { key: 'headline', label: 'Headline', type: 'text' },
      { key: 'subheadline', label: 'Subheadline', type: 'text' },
      { key: 'ctaLabel', label: 'Button label', type: 'text' },
      { key: 'alignment', label: 'Alignment', type: 'select', options: ['Left', 'Center'] },
      { key: 'overlay', label: 'Overlay strength', type: 'slider', min: 0, max: 60 },
    ],
  },
  {
    kind: 'featured-products',
    title: 'Featured products',
    icon: 'shopping-bag',
    description: 'Curated product cards from a collection.',
    category: 'Featured',
    acceptsBlocks: true,
    variants: [
      { id: 'grid', label: 'Grid', preset: { layout: 'Grid' } },
      { id: 'carousel', label: 'Carousel', preset: { layout: 'Carousel' } },
    ],
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'productCount', label: 'Products', type: 'slider', min: 2, max: 8 },
      { key: 'layout', label: 'Layout', type: 'select', options: ['Grid', 'Carousel'] },
    ],
  },
  {
    kind: 'collection-grid',
    title: 'Collection grid',
    icon: 'layout-grid',
    description: 'Tiles linking to product collections.',
    category: 'Featured',
    acceptsBlocks: true,
    variants: [
      { id: 'two', label: '2-up', preset: { columns: 2 } },
      { id: 'three', label: '3-up', preset: { columns: 3 } },
      { id: 'four', label: '4-up', preset: { columns: 4 } },
    ],
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'columns', label: 'Columns', type: 'slider', min: 2, max: 4 },
    ],
  },
  {
    kind: 'image-banner',
    title: 'Image banner',
    icon: 'images',
    description: 'Editorial image break with an optional headline.',
    category: 'Media',
    acceptsBlocks: true,
    variants: [
      { id: 'container-cta', label: 'With container & CTA', preset: { height: 'Medium' } },
      { id: 'full-cta', label: 'Full-width with CTA', preset: { height: 'Large' } },
    ],
    fields: [
      { key: 'headline', label: 'Headline', type: 'text' },
      { key: 'height', label: 'Height', type: 'select', options: ['Small', 'Medium', 'Large'] },
    ],
  },
  {
    kind: 'rich-text',
    title: 'Rich text',
    icon: 'text',
    description: 'Heading and paragraph for brand storytelling.',
    category: 'Content',
    acceptsBlocks: true,
    fields: [
      { key: 'heading', label: 'Heading', type: 'text' },
      { key: 'body', label: 'Body', type: 'textarea' },
      { key: 'alignment', label: 'Alignment', type: 'select', options: ['Left', 'Center'] },
    ],
  },
  {
    kind: 'testimonials',
    title: 'Testimonials',
    icon: 'quote',
    description: 'Customer quotes for social proof.',
    category: 'Content',
    variants: [
      { id: 'cards', label: 'Cards', preset: { count: 3 } },
      { id: 'single', label: 'Single quote', preset: { count: 1 } },
    ],
    fields: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'count', label: 'Quotes', type: 'slider', min: 1, max: 4 },
    ],
  },
  {
    kind: 'newsletter',
    title: 'Newsletter',
    icon: 'mail',
    description: 'Email capture with headline and button.',
    category: 'Content',
    fields: [
      { key: 'headline', label: 'Headline', type: 'text' },
      { key: 'buttonLabel', label: 'Button label', type: 'text' },
    ],
  },
  {
    kind: 'product-detail',
    title: 'PDP Information',
    icon: 'package',
    description: 'Product gallery, pricing, and buy box for the product template.',
    category: 'Commerce',
    unique: true,
    acceptsBlocks: true,
    fields: [
      { key: 'showVariantSelector', label: 'Show variant selector', type: 'toggle' },
      { key: 'colorSchema', label: 'Color schema', type: 'select', options: ['Theme default', 'Modern Look'], group: 'Style settings' },
      { key: 'textSchema', label: 'Text schema', type: 'select', options: ['Theme default', 'Compact'], group: 'Style settings' },
      { key: 'buttonSchema', label: 'Button schema', type: 'select', options: ['Theme default', 'Modern'], group: 'Style settings' },
    ],
  },
  {
    kind: 'cart-summary',
    title: 'Cart summary',
    icon: 'shopping-cart',
    description: 'Line items, totals, and checkout for the cart template.',
    category: 'Commerce',
    unique: true,
    fields: [
      { key: 'showNotes', label: 'Order notes', type: 'toggle' },
      { key: 'upsells', label: 'Upsell suggestions', type: 'toggle' },
    ],
  },
  {
    kind: 'search-results',
    title: 'Search Results',
    icon: 'search',
    description: 'Product grid shown after a storefront search.',
    category: 'Commerce',
    unique: true,
    required: true,
    acceptsBlocks: true,
    fields: [
      { key: 'colorSchema', label: 'Color schema', type: 'select', options: ['Theme default', 'Modern Look'], group: 'Style settings' },
      { key: 'textSchema', label: 'Text schema', type: 'select', options: ['Theme default', 'Compact'], group: 'Style settings' },
      { key: 'productCardSchema', label: 'Product card schema', type: 'select', options: ['Theme default', 'Modern'], group: 'Style settings' },
    ],
  },
  {
    kind: 'blog-list',
    title: 'Blogs',
    icon: 'rss',
    description: 'Blog index with post cards for the blogs template.',
    category: 'Content',
    unique: true,
    required: true,
    acceptsBlocks: true,
    fields: [
      { key: 'postsPerPage', label: 'Posts per page', type: 'number', min: 1, max: 48 },
      { key: 'showExcerpt', label: 'Show excerpt', type: 'toggle' },
      { key: 'showAuthor', label: 'Show author', type: 'toggle' },
      { key: 'showDate', label: 'Show date', type: 'toggle' },
      { key: 'layout', label: 'Layout', type: 'select', options: ['Grid', 'List'] },
    ],
  },
  {
    kind: 'footer',
    title: 'Footer',
    icon: 'panel-bottom',
    description: 'Link columns, social icons, and legal.',
    category: 'Layout',
    unique: true,
    hideFromLayerList: true,
    fields: [
      { key: 'showSocial', label: 'Show social icons', type: 'toggle' },
      { key: 'showNewsletter', label: 'Show newsletter', type: 'toggle' },
      { key: 'columns', label: 'Link columns', type: 'slider', min: 2, max: 4 },
    ],
  },
  {
    kind: 'categories',
    title: 'Collections',
    icon: 'folders',
    description: 'Child collections of the collection a shopper is viewing.',
    category: 'Commerce',
    acceptsBlocks: true,
    unique: true,
    required: true,
    fields: [
      { key: 'showCollectionBanner', label: 'Show collection banner', type: 'toggle' },
      { key: 'showChildEntities', label: 'Show child entities', type: 'toggle' },
      { key: 'colorSchema', label: 'Color schema', type: 'select', options: ['Theme default', 'Modern Look'], group: 'Style settings' },
      { key: 'textSchema', label: 'Text schema', type: 'select', options: ['Theme default', 'Compact'], group: 'Style settings' },
      { key: 'productCardSchema', label: 'Product card schema', type: 'select', options: ['Theme default', 'Modern'], group: 'Style settings' },
      { key: 'paddingVertical', label: 'Vertical', type: 'number', min: 0, max: 120, group: 'Section padding' },
      { key: 'paddingHorizontal', label: 'Horizontal', type: 'number', min: 0, max: 120, group: 'Section padding' },
      { key: 'alignHorizontal', label: 'Horizontal', type: 'segmented', options: ['Left', 'Center', 'Right'], icons: ['align-left', 'align-center', 'align-right'], group: 'Section alignment' },
      { key: 'alignVertical', label: 'Vertical', type: 'segmented', options: ['Top', 'Center', 'Bottom'], icons: ['align-start-vertical', 'align-center-vertical', 'align-end-vertical'], group: 'Section alignment' },
    ],
  },
]

/** Default settings applied when a section of the given kind is created. */
const sectionDefaults: Record<string, Record<string, string | number | boolean>> = {
  'announcement-bar': { text: 'Free shipping on orders over $75', link: 'Shop sale' },
  header: {
    label: 'Header Section',
    colorSchema: 'Modern Look',
    textSchema: 'Compact',
    headerScroll: 'Scroll with site',
    headerPaddingVertical: 24,
    headerPaddingHorizontal: 24,
    headerPaddingLinked: true,
    alignHorizontal: 'Left',
    alignVertical: 'Center',
    showShadow: false,
    searchPlaceholder: 'Search ...',
    searchShowSuggestionsWhenTyping: true,
    searchShowTrendingBeforeStart: false,
    searchUseLinkForHidden: false,
    searchSuggestionsLimit: 5,
    searchProductMatchesLimit: 5,
    searchSuggestionsLayout: 'Vertical',
    searchStyle: 'Search icon & input',
    searchPosition: 'Top left',
    searchBorderWidth: 1,
    searchCornerRadius: 4,
    menuSelect: 'Main Menu',
    menuUseLinkForHidden: false,
    menuLayoutType: 'Horizontal Menu',
    menuDesign: 'Dropdown',
    menuPaddingVertical: 24,
    menuPaddingHorizontal: 24,
    menuPaddingLinked: true,
    menuAlignHorizontal: 'Center',
    menuAlignVertical: 'Center',
    menuHighlightSelected: false,
    menuAddDivider: false,
    menuAddBackground: false,
    dropdownPaddingVertical: 24,
    dropdownPaddingHorizontal: 24,
    dropdownPaddingLinked: true,
    dropdownAlignHorizontal: 'Center',
    dropdownAlignVertical: 'Center',
    dropdownShowSubcategoryImages: true,
    dropdownCtaLabel: 'SEE MORE',
    dropdownCtaLink: 'https://demo.maropost.com',
    dropdownShowShadow: true,
    dropdownShadowPreset: 'Primary shadow',
    menuStyle: 'Inline',
    menuLayout: 'Horizontal',
    logoSelect: 'Main logo',
    logoPosition: 'Top Center',
    showLanguageSelector: true,
    showWishlist: true,
    showSignIn: true,
    showCart: true,
    sticky: false,
  },
  hero: {
    headline: 'Fall 26 Drop 02',
    subheadline: 'Limited-run outerwear and trail-ready layers.',
    ctaLabel: 'Shop now',
    alignment: 'Left',
    overlay: 15,
  },
  'featured-products': { title: 'New arrivals', productCount: 4, layout: 'Grid' },
  'collection-grid': { title: 'Shop by collection', columns: 3 },
  'image-banner': { headline: 'The Winter Edit', height: 'Medium' },
  'rich-text': {
    heading: 'Built for the long way home',
    body: 'Every piece is cut for movement, tested on trail, and backed for life.',
    alignment: 'Center',
  },
  testimonials: { title: 'What customers say', count: 3 },
  newsletter: { headline: 'Join the list', buttonLabel: 'Subscribe' },
  'product-detail': {
    showVariantSelector: true,
    colorSchema: 'Modern Look',
    textSchema: 'Compact',
    buttonSchema: 'Modern',
  },
  'cart-summary': { showNotes: false, upsells: true },
  'search-results': {
    sampleQuery: 'modern furniture',
    colorSchema: 'Modern Look',
    textSchema: 'Compact',
    productCardSchema: 'Modern',
  },
  'blog-list': {
    heroEyebrow: 'Our Blog',
    heroTitle: 'Stories & Inspiration',
    heroDescription:
      'Explore the latest trends, inspiring design ideas, and expert advice to create your perfect living space. From choosing the right colors and furniture to adding thoughtful finishing touches, discover practical tips and fresh inspiration to make every room feel stylish, comfortable, and uniquely yours.',
    postsPerPage: 12,
    showExcerpt: true,
    showAuthor: true,
    showDate: true,
    layout: 'Grid',
  },
  footer: {
    label: 'Footer Section',
    colorSchema: 'Modern Look',
    textSchema: 'Compact',
    showSocial: true,
    showNewsletter: true,
    columns: 3,
  },
  categories: {
    title: 'Shop by category',
    showCollectionBanner: false,
    showChildEntities: false,
    colorSchema: 'Theme default',
    textSchema: 'Theme default',
    productCardSchema: 'Theme default',
    paddingVertical: 24,
    paddingHorizontal: 56,
    paddingLinked: false,
    alignHorizontal: 'Center',
    alignVertical: 'Center',
  },
}

export function getSectionDef(kind: string): ThemeSectionDef | undefined {
  return sectionCatalog.find((def) => def.kind === kind)
}

let sectionIdCounter = 0

/**
 * Create a new section of the given kind with cloned default settings.
 * Pass `overrides`/`id` for deterministic seeds; generated ids otherwise.
 */
export function createSection(
  kind: string,
  overrides: Record<string, string | number | boolean> = {},
  id?: string,
): ThemeSection {
  const def = getSectionDef(kind)
  sectionIdCounter += 1
  return {
    id: id ?? `${kind}-${Date.now().toString(36)}-${sectionIdCounter}`,
    kind,
    label: def?.title ?? kind,
    // Spread clones — settings values are always flat primitives, so no
    // references are shared between sections or with the defaults map.
    settings: { ...(sectionDefaults[kind] ?? {}), ...overrides },
  }
}

// ── Block catalog ────────────────────────────────────────────────────────────
// Blocks nest inside block-accepting sections (hero, image-banner, rich-text,
// featured-products, collection-grid). Fields reuse ThemeSectionField so the
// same schema-driven settings renderer applies to blocks.

export const blockCatalog: ThemeBlockDef[] = [
  {
    kind: 'heading',
    title: 'Heading',
    icon: 'heading',
    fields: [{ key: 'text', label: 'Text', type: 'text' }],
  },
  {
    kind: 'paragraph',
    title: 'Paragraph',
    icon: 'text',
    fields: [{ key: 'body', label: 'Body', type: 'textarea' }],
  },
  {
    kind: 'button',
    title: 'Button',
    icon: 'square-mouse-pointer',
    fields: [
      { key: 'label', label: 'Label', type: 'text' },
      { key: 'link', label: 'Link', type: 'text' },
    ],
  },
  {
    kind: 'image',
    title: 'Image',
    icon: 'image',
    fields: [
      { key: 'alt', label: 'Alt text', type: 'text' },
      { key: 'ratio', label: 'Ratio', type: 'select', options: ['16:9', '4:3', '1:1'] },
    ],
  },
  {
    kind: 'divider',
    title: 'Divider',
    icon: 'minus',
    fields: [],
  },
  {
    kind: 'spacer',
    title: 'Spacer',
    icon: 'move-vertical',
    fields: [{ key: 'size', label: 'Size', type: 'slider', min: 8, max: 80 }],
  },
  {
    kind: 'child-category-grid',
    title: 'Child Category Grid',
    icon: 'scan',
    locked: true,
    sectionKinds: ['categories'],
    fields: [],
  },
  {
    kind: 'collection-banner',
    title: 'Collection Banner',
    icon: 'image',
    locked: true,
    sectionKinds: ['categories'],
    fields: [
      { key: 'showCollectionDescription', label: 'Show collection description', type: 'toggle', group: 'Content settings' },
      { key: 'showCollectionImage', label: 'Show collection image', type: 'toggle', group: 'Content settings' },
      { key: 'imageOpacity', label: 'Image opacity', type: 'slider', min: 0, max: 100, group: 'Content settings' },
      { key: 'colorSchema', label: 'Color schema', type: 'select', options: ['Theme default', 'Modern Look'], group: 'Style settings' },
      { key: 'textSchema', label: 'Text schema', type: 'select', options: ['Theme default', 'Compact'], group: 'Style settings' },
      { key: 'paddingVertical', label: 'Vertical', type: 'number', min: 0, max: 120, group: 'Section padding' },
      { key: 'paddingHorizontal', label: 'Horizontal', type: 'number', min: 0, max: 120, group: 'Section padding' },
      { key: 'alignHorizontal', label: 'Horizontal', type: 'segmented', options: ['Left', 'Center', 'Right'], icons: ['align-left', 'align-center', 'align-right'], group: 'Section alignment' },
      { key: 'alignVertical', label: 'Vertical', type: 'segmented', options: ['Top', 'Center', 'Bottom'], icons: ['align-start-vertical', 'align-center-vertical', 'align-end-vertical'], group: 'Section alignment' },
    ],
  },
  {
    kind: 'pdp-detail',
    title: 'Product Detail',
    icon: 'package',
    locked: true,
    sectionKinds: ['product-detail'],
    fields: [
      { key: 'imageZoom', label: 'Image zoom', type: 'select', options: ['No zoom', 'Zoom on hover', 'Lightbox'] },
      { key: 'sliderLayout', label: 'Slider layout', type: 'select', options: ['Left', 'Right', 'Bottom'], group: 'Style settings' },
      {
        key: 'desktopMediaPosition',
        label: 'Desktop Media Position',
        type: 'select',
        options: ['Left', 'Right'],
        group: 'Style settings',
      },
      { key: 'showReviews', label: 'Show reviews', type: 'toggle' },
    ],
  },
  {
    kind: 'product-grid',
    title: 'Product Grid',
    icon: 'layout-grid',
    locked: true,
    sectionKinds: ['search-results'],
    fields: [
      { key: 'itemsPerRow', label: 'Item per row', type: 'number', min: 1, max: 6 },
      { key: 'totalItems', label: 'Total items', type: 'number', min: 1, max: 999 },
    ],
  },
  {
    kind: 'blog-image-banner',
    title: 'Image Banner',
    icon: 'image',
    locked: true,
    sectionKinds: ['blog-list'],
    fields: [
      { key: 'heroEyebrow', label: 'Eyebrow', type: 'text' },
      { key: 'heroTitle', label: 'Title', type: 'text' },
      { key: 'heroDescription', label: 'Description', type: 'textarea' },
    ],
  },
  {
    kind: 'blog-posts',
    title: 'Blog Posts',
    icon: 'layout-grid',
    locked: true,
    sectionKinds: ['blog-list'],
    fields: [],
  },
  {
    kind: 'category-grid',
    title: 'Collection Grid',
    icon: 'layout-grid',
    locked: true,
    sectionKinds: ['categories'],
    fields: [
      { key: 'itemsPerRow', label: 'Item per row', type: 'number', min: 1, max: 6 },
      { key: 'totalItems', label: 'Total items', type: 'number', min: 1, max: 999 },
      { key: 'layout', label: 'Layout', type: 'select', options: ['Grid', 'Carousel'], group: 'Layout' },
      { key: 'sliderStyle', label: 'Slider style', type: 'select', options: ['Arrows', 'Dots', 'Numbers'], group: 'Style settings' },
      { key: 'autoRotateSlide', label: 'Auto rotate slide', type: 'toggle', group: 'Style settings' },
      {
        key: 'slideChangingTime',
        label: 'Slide changing time',
        type: 'select',
        options: ['3 sec', '5 sec', '10 sec'],
        group: 'Style settings',
      },
      {
        key: 'paginationStyle',
        label: 'Pagination style',
        type: 'select',
        options: ['Combined (Load more)', 'Pages', 'Infinite scroll'],
        group: 'Pagination',
      },
      { key: 'autoLoadTimes', label: 'Auto load times', type: 'number', min: 1, max: 10, group: 'Pagination' },
    ],
  },
]

/** Default settings applied when a block of the given kind is created. */
const blockDefaults: Record<string, Record<string, string | number | boolean>> = {
  heading: { text: 'Section heading' },
  paragraph: { body: 'Add supporting copy to describe this section.' },
  button: { label: 'Shop now', link: '#' },
  image: { alt: '', ratio: '4:3' },
  divider: {},
  spacer: { size: 32 },
  'child-category-grid': {
    label: 'Category Grid',
    layout: 'Grid',
    cardStyle: 'Only Text',
    cardPaddingVertical: 12,
    cardPaddingHorizontal: 32,
    cardPaddingLinked: false,
    borderWidth: 1,
    cornerRadius: 24,
    cardAlignHorizontal: 'Center',
    cardAlignVertical: 'Center',
    cardShadow: false,
  },
  'collection-banner': {
    label: 'Collection Banner',
    showCollectionDescription: false,
    showCollectionImage: true,
    imageOpacity: 100,
    colorSchema: 'Modern Look',
    textSchema: 'Compact',
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingLinked: true,
    alignHorizontal: 'Center',
    alignVertical: 'Center',
  },
  'pdp-detail': {
    label: 'Product Detail',
    imageZoom: 'No zoom',
    sliderLayout: 'Left',
    desktopMediaPosition: 'Left',
    showReviews: true,
  },
  'blog-image-banner': {
    label: 'Image Banner',
    heroEyebrow: 'Our Blog',
    heroTitle: 'Stories & Inspiration',
    heroDescription:
      'Explore the latest trends, inspiring design ideas, and expert advice to create your perfect living space. From choosing the right colors and furniture to adding thoughtful finishing touches, discover practical tips and fresh inspiration to make every room feel stylish, comfortable, and uniquely yours.',
  },
  'blog-posts': {
    itemsPerRow: 3,
    totalItems: 25,
    showFeaturedImage: true,
    featuredImageHeight: 'Medium',
    layout: 'Grid',
    sliderStyle: 'Arrows',
    autoRotateSlide: false,
    slideChangingTime: '5 sec',
    paginationStyle: 'Combined (Load more)',
    autoLoadTimes: 2,
    showExcerpt: true,
    showAuthor: true,
    showDate: true,
  },
  'product-grid': {
    label: 'Product Grid',
    itemsPerRow: 3,
    totalItems: 20,
    showPageTitle: true,
    showSortingOptions: true,
    showFilters: true,
    paginationStyle: 'Pages',
    autoLoadTimes: 2,
    filterPosition: 'Left',
    showFilterBreadcrumbs: true,
    onlyOneOpenFilter: false,
    allowFilterHidden: false,
    allFiltersCollapsed: false,
    showSearchBarAbove: false,
    stickyFilter: true,
  },
  'category-grid': {
    label: 'Collection Grid',
    itemsPerRow: 3,
    totalItems: 25,
    layout: 'Grid',
    sliderStyle: 'Arrows',
    autoRotateSlide: true,
    slideChangingTime: '5 sec',
    paginationStyle: 'Combined (Load more)',
    autoLoadTimes: 2,
  },
}

export function getBlockDef(kind: string): ThemeBlockDef | undefined {
  return blockCatalog.find((def) => def.kind === kind)
}

let blockIdCounter = 0

/**
 * Create a new block of the given kind with cloned default settings.
 * Pass `overrides`/`id` for deterministic seeds; generated ids otherwise.
 * Mirrors createSection.
 */
export function createBlock(
  kind: string,
  overrides: Record<string, string | number | boolean> = {},
  id?: string,
): ThemeBlock {
  blockIdCounter += 1
  return {
    id: id ?? `${kind}-block-${Date.now().toString(36)}-${blockIdCounter}`,
    kind,
    settings: { ...(blockDefaults[kind] ?? {}), ...overrides },
  }
}
