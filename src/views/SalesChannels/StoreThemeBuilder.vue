<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import MpAlert from '@/components/MpAlert.vue'
import MpBuilderShell from '@/components/MpBuilderShell.vue'
import MpStatusChip from '@/components/MpStatusChip.vue'
import MpEmptyState from '@/components/MpEmptyState.vue'
import MpConfirmDialog from '@/components/MpConfirmDialog.vue'
import MpMenuItem from '@/components/MpMenuItem.vue'
import MpRowActionsMenu from '@/components/MpRowActionsMenu.vue'
import MpSegmentedControl from '@/components/MpSegmentedControl.vue'
import MpOptionCard from '@/components/MpOptionCard.vue'
import MpFormGrid from '@/components/MpFormGrid.vue'
import MpFormField from '@/components/MpFormField.vue'
import MpFormSection from '@/components/MpFormSection.vue'
import StorefrontPreview from '@/components/saleschannels/StorefrontPreview.vue'
import {
  HEADER_ACCOUNT_SUB_LAYERS,
  LOGO_POSITION_OPTIONS,
  LOGO_SELECT_OPTIONS,
  MENU_DESIGN_OPTIONS,
  MENU_LAYOUT_TYPE_OPTIONS,
  MENU_SELECT_OPTIONS,
  DROPDOWN_SHADOW_OPTIONS,
  SEARCH_POSITION_OPTIONS,
  SEARCH_STYLE_OPTIONS,
  SEARCH_SUGGESTIONS_LAYOUT_OPTIONS,
  type HeaderAccountSubLayer,
  type HeaderPreviewLayer,
} from '@/components/saleschannels/lumosHeaderLayers'
import {
  normalizeLogoPosition,
  normalizeMenuDesign,
  normalizeMenuLayoutType,
  normalizeSearchPosition,
  normalizeSearchStyle,
} from '@/components/saleschannels/lumosThemeHeader'
import {
  FOOTER_BLOCK_LAYERS,
  type FooterPreviewLayer,
} from '@/components/saleschannels/lumosFooterLayers'
import {
  BLOG_FEATURED_IMAGE_HEIGHT_OPTIONS,
  BLOG_SLIDER_STYLE_OPTIONS,
  normalizeBlogFeaturedImageHeight,
  normalizeBlogSliderStyle,
} from '@/components/saleschannels/lumosBlogPosts'
import {
  lumosChildCardStyleIcons,
  lumosLayoutPickerIcons,
  lumosFilterPositionIcons,
  lumosPdpMediaPositionIcons,
  lumosPdpSliderLayoutIcons,
} from '@/components/saleschannels/lumosThemeBuilderIcons'
import AddSectionDialog from '@/components/saleschannels/AddSectionDialog.vue'
import ThemeDaVinciPanel, { type ThemeChatMessage } from '@/components/saleschannels/ThemeDaVinciPanel.vue'
import { generateSections } from '@/composables/useThemeGenerator'
import { useDirtyLeaveGuard } from '@/composables/useDirtyLeaveGuard'
import { useToast } from '@/composables/useToast'
import { useCopilotStore } from '@/stores/useCopilot'
import { useSalesChannelsStore } from '@/stores/useSalesChannels'
import { useStoreThemesStore } from '@/stores/useStoreThemes'
import {
  blockCatalog,
  getBlockDef,
  getSectionDef,
  themeFonts,
  TEMPLATE_TYPES,
  TEMPLATE_TYPE_LABELS,
  type TemplateType,
  type ThemeBlock,
  type ThemeSection,
  type ThemeSectionDef,
  type ThemeStyles,
} from '@/stores/themeBuilderData'
import {
  mp_color_blue_500,
  mp_color_light_aiAccent_primary,
  mp_color_light_error,
  mp_color_light_primary,
  mp_color_light_success,
  mp_color_light_textPrimary,
  mp_color_light_warning,
  mp_color_neutral_0,
} from '@/design-tokens/generated/tokens'

const route = useRoute()
const router = useRouter()
const accountId = computed(() => route.params.accountId as string)
const channelId = computed(() => route.params.channelId as string)

const salesChannelsStore = useSalesChannelsStore()
const themesStore = useStoreThemesStore()
const { themes } = storeToRefs(themesStore)
const toast = useToast()

const channel = computed(() => salesChannelsStore.getChannel(accountId.value, channelId.value))
const theme = computed(() => themes.value.find((entry) => entry.channelId === channelId.value))

const backRoute = computed(() =>
  channel.value
    ? { name: 'SalesChannelDetail', params: { accountId: accountId.value, channelId: channelId.value } }
    : { name: 'SalesChannels', params: { accountId: accountId.value } },
)

// ── Active template + sections ────────────────────────────────────────────────
function templateFromRoute(): TemplateType {
  const raw = route.query.template
  if (raw === 'home' || raw === 'product' || raw === 'collection' || raw === 'search' || raw === 'cart' || raw === 'blogs') return raw
  return 'home'
}

const activeTemplate = ref<TemplateType>(templateFromRoute())
const templateTypeItems = TEMPLATE_TYPES.map((t) => ({ title: TEMPLATE_TYPE_LABELS[t], value: t }))
const activeSections = computed<ThemeSection[]>(() => {
  const current = themes.value.find((entry) => entry.channelId === channelId.value)
  return current?.templates[activeTemplate.value] ?? []
})

/** Template body sections only — header + announcement are edited in Header surface. */
const templateLayerSections = computed(() =>
  activeSections.value.filter((section) => !getSectionDef(section.kind)?.hideFromLayerList),
)

type LeftTab = 'sections' | 'header' | 'footer' | 'styles'
const leftTab = ref<LeftTab>('sections')

const announcementSection = computed(() =>
  activeSections.value.find((section) => section.kind === 'announcement-bar'),
)
const storeHeaderSection = computed(() =>
  activeSections.value.find((section) => section.kind === 'header'),
)
const storeFooterSection = computed(() =>
  activeSections.value.find((section) => section.kind === 'footer'),
)

const selectedHeaderLayer = ref<HeaderPreviewLayer | null>(null)
const announcementTreeOpen = ref(false)
const headerSectionTreeOpen = ref(true)
const accountTreeOpen = ref(false)
const headerStyleSettingsOpen = ref(true)
const menuLayoutCardOpen = ref(true)
const menuStyleCardOpen = ref(true)
const menuDropdownStyleOpen = ref(false)
const searchLimitationsCardOpen = ref(true)
const searchInputStyleCardOpen = ref(true)
const blogImageBannerTreeOpen = ref(false)
const featuredBlogsTreeOpen = ref(true)

const isDrawerMenuLayout = computed(() => headerMenuLayoutType() === 'Drawer')

const selectedFooterLayer = ref<FooterPreviewLayer | null>(null)
const footerSectionTreeOpen = ref(true)
const footerStyleSettingsOpen = ref(true)

/** Figma Lumos header layer list uses the generic Section icon on top-level rows. */
const headerLayerSectionIcon = 'layout-grid'
const footerLayerSectionIcon = 'layout-grid'

function openPageBuilder() {
  leftTab.value = 'sections'
  selectedHeaderLayer.value = null
  selectedFooterLayer.value = null
}

function openHeaderBuilder() {
  if (theme.value) {
    themesStore.ensureAnnouncementSection(theme.value.id, activeTemplate.value)
  }
  selectedFooterLayer.value = null
  leftTab.value = 'header'
  selected.value = null
  if (!selectedHeaderLayer.value) selectedHeaderLayer.value = 'header-section'
}

function onEditHeaderFromPreview() {
  leftPanelOpen.value = true
  openHeaderBuilder()
  selectedHeaderLayer.value = 'header-section'
  headerSectionTreeOpen.value = true
  const header = storeHeaderSection.value
  if (header) selected.value = { type: 'section', id: header.id }
}

function openFooterBuilder() {
  selectedHeaderLayer.value = null
  leftTab.value = 'footer'
  selected.value = null
  if (!selectedFooterLayer.value) selectedFooterLayer.value = 'footer-section'
}

function onEditFooterFromPreview() {
  leftPanelOpen.value = true
  openFooterBuilder()
  selectedFooterLayer.value = 'footer-section'
  footerSectionTreeOpen.value = true
  const footer = storeFooterSection.value
  if (footer) selected.value = { type: 'section', id: footer.id }
}

function footerLayerPanelMeta(layer: FooterPreviewLayer): { title: string; icon: string } {
  if (layer === 'footer-section') return { title: 'Footer Section', icon: footerLayerSectionIcon }
  const block = FOOTER_BLOCK_LAYERS.find((entry) => entry.key === layer)
  if (block) return { title: block.label, icon: block.icon }
  return { title: 'Footer Section', icon: footerLayerSectionIcon }
}

function selectFooterLayer(layer: FooterPreviewLayer) {
  selectedFooterLayer.value = layer
  leftTab.value = 'footer'
  if (storeFooterSection.value) {
    selected.value = { type: 'section', id: storeFooterSection.value.id }
  } else {
    selected.value = null
  }
}

function updateFooterSectionSetting(key: string, value: string | number | boolean) {
  const section = storeFooterSection.value
  if (!theme.value || !section) return
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, {
    settings: { ...section.settings, [key]: value },
  })
}

function footerText(key: string, fallback = ''): string {
  const value = storeFooterSection.value?.settings[key]
  return typeof value === 'string' ? value : fallback
}

function footerNum(key: string, fallback: number): number {
  const value = storeFooterSection.value?.settings[key]
  return typeof value === 'number' ? value : fallback
}

function footerFlag(key: string, fallback = false): boolean {
  const value = storeFooterSection.value?.settings[key]
  return typeof value === 'boolean' ? value : fallback
}

function toggleFooterSectionHidden() {
  const section = storeFooterSection.value
  if (!theme.value || !section) return
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, { hidden: !section.hidden })
}

function onFooterSectionDelete() {
  toast.info('The footer section is required on every template.')
}

function isAccountSubLayer(layer: HeaderPreviewLayer): layer is HeaderAccountSubLayer {
  return HEADER_ACCOUNT_SUB_LAYERS.some((entry) => entry.key === layer)
}

const selectedAccountSubLayer = computed(() => {
  const layer = selectedHeaderLayer.value
  if (!layer || !isAccountSubLayer(layer)) return null
  return HEADER_ACCOUNT_SUB_LAYERS.find((entry) => entry.key === layer) ?? null
})

function headerLayerPanelMeta(layer: HeaderPreviewLayer): { title: string; icon: string } {
  if (layer === 'announcement') return { title: 'Announcement Banner', icon: headerLayerSectionIcon }
  if (layer === 'header-section') return { title: 'Header Section', icon: headerLayerSectionIcon }
  if (layer === 'logo') return { title: 'Logo', icon: 'image' }
  if (layer === 'menu') return { title: 'Menu', icon: 'menu' }
  if (layer === 'search') return { title: 'Search Input', icon: 'search' }
  if (layer === 'account') return { title: 'Account', icon: 'users' }
  const sub = HEADER_ACCOUNT_SUB_LAYERS.find((entry) => entry.key === layer)
  if (sub) return { title: sub.label, icon: sub.icon }
  return { title: 'Header Section', icon: headerLayerSectionIcon }
}

function selectHeaderLayer(layer: HeaderPreviewLayer) {
  selectedHeaderLayer.value = layer
  leftTab.value = 'header'
  if (layer === 'announcement' && announcementSection.value) {
    selected.value = { type: 'section', id: announcementSection.value.id }
  } else if (
    storeHeaderSection.value
    && (layer === 'header-section'
      || layer === 'logo'
      || layer === 'menu'
      || layer === 'search'
      || layer === 'account'
      || isAccountSubLayer(layer))
  ) {
    selected.value = { type: 'section', id: storeHeaderSection.value.id }
  } else {
    selected.value = null
  }
  if (layer === 'account' || isAccountSubLayer(layer)) accountTreeOpen.value = true
}

function updateAnnouncementSetting(key: string, value: string | number | boolean) {
  const section = announcementSection.value
  if (!theme.value || !section) return
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, {
    settings: { ...section.settings, [key]: value },
  })
}

function updateHeaderSectionSetting(key: string, value: string | number | boolean) {
  const section = storeHeaderSection.value
  if (!theme.value || !section) return
  const settings = { ...section.settings, [key]: value }
  if (key === 'headerScroll') {
    settings.sticky = value === 'Sticky header'
  }
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, { settings })
}

function announcementText(key: string, fallback = ''): string {
  const value = announcementSection.value?.settings[key]
  return typeof value === 'string' ? value : fallback
}

function headerText(key: string, fallback = ''): string {
  const value = storeHeaderSection.value?.settings[key]
  return typeof value === 'string' ? value : fallback
}

function headerNum(key: string, fallback: number): number {
  const value = storeHeaderSection.value?.settings[key]
  return typeof value === 'number' ? value : fallback
}

function setHeaderNumeric(key: string, raw: string | number, min = 0, max = 99) {
  const parsed = typeof raw === 'number' ? raw : raw === '' ? min : Number(raw)
  const next = Number.isFinite(parsed) ? Math.min(max, Math.max(min, parsed)) : min
  updateHeaderSectionSetting(key, next)
}

function headerLogoSelect(fallback = 'Main logo'): string {
  return headerText('logoSelect', fallback)
}

function headerLogoPosition(): string {
  const raw = storeHeaderSection.value?.settings.logoPosition
  return normalizeLogoPosition(typeof raw === 'string' ? raw : undefined)
}

function headerFlag(key: string, fallback = false): boolean {
  const value = storeHeaderSection.value?.settings[key]
  return typeof value === 'boolean' ? value : fallback
}

const headerPaddingLinked = computed(() => headerFlag('headerPaddingLinked', true))

function setHeaderPadding(key: 'headerPaddingVertical' | 'headerPaddingHorizontal', raw: string) {
  const value = raw === '' ? 0 : Number(raw)
  updateHeaderSectionSetting(key, Number.isFinite(value) ? value : 0)
  if (headerPaddingLinked.value && key === 'headerPaddingVertical') {
    updateHeaderSectionSetting('headerPaddingHorizontal', Number.isFinite(value) ? value : 0)
  }
}

function toggleHeaderPaddingLinked() {
  const next = !headerPaddingLinked.value
  updateHeaderSectionSetting('headerPaddingLinked', next)
  if (next) {
    updateHeaderSectionSetting('headerPaddingHorizontal', headerNum('headerPaddingVertical', 24))
  }
}

function headerMenuSelect(fallback = 'Main Menu'): string {
  return headerText('menuSelect', fallback)
}

function headerSearchStyle(): string {
  const raw = storeHeaderSection.value?.settings.searchStyle
  return normalizeSearchStyle(typeof raw === 'string' ? raw : undefined)
}

function headerSearchPosition(): string {
  const raw = storeHeaderSection.value?.settings.searchPosition
  return normalizeSearchPosition(typeof raw === 'string' ? raw : undefined)
}

function headerMenuLayoutType(): string {
  const raw = storeHeaderSection.value?.settings.menuLayoutType
  if (typeof raw === 'string' && raw) {
    return normalizeMenuLayoutType(raw)
  }
  return normalizeMenuLayoutType(headerText('menuLayout', 'Horizontal'))
}

function headerMenuDesign(): string {
  const raw = storeHeaderSection.value?.settings.menuDesign
  if (typeof raw === 'string' && raw) {
    return normalizeMenuDesign(raw)
  }
  return normalizeMenuDesign(headerText('menuStyle', 'Inline'), headerText('menuLayout', 'Horizontal'))
}

function cycleMenuLayoutType(offset: number) {
  const current = headerMenuLayoutType()
  const index = MENU_LAYOUT_TYPE_OPTIONS.indexOf(current as (typeof MENU_LAYOUT_TYPE_OPTIONS)[number])
  const base = index === -1 ? 0 : index
  const next = MENU_LAYOUT_TYPE_OPTIONS[(base + offset + MENU_LAYOUT_TYPE_OPTIONS.length) % MENU_LAYOUT_TYPE_OPTIONS.length]
  updateHeaderSectionSetting('menuLayoutType', next)
  if (next === 'Drawer') menuDropdownStyleOpen.value = false
}

watch(isDrawerMenuLayout, (drawer) => {
  if (drawer) menuDropdownStyleOpen.value = false
})

const menuPaddingLinked = computed(() => headerFlag('menuPaddingLinked', true))

function setMenuPadding(key: 'menuPaddingVertical' | 'menuPaddingHorizontal', raw: string) {
  const value = raw === '' ? 0 : Number(raw)
  updateHeaderSectionSetting(key, Number.isFinite(value) ? value : 0)
  if (menuPaddingLinked.value && key === 'menuPaddingVertical') {
    updateHeaderSectionSetting('menuPaddingHorizontal', Number.isFinite(value) ? value : 0)
  }
}

function toggleMenuPaddingLinked() {
  const next = !menuPaddingLinked.value
  updateHeaderSectionSetting('menuPaddingLinked', next)
  if (next) {
    updateHeaderSectionSetting('menuPaddingHorizontal', headerNum('menuPaddingVertical', 24))
  }
}

const dropdownPaddingLinked = computed(() => headerFlag('dropdownPaddingLinked', true))

function setDropdownPadding(key: 'dropdownPaddingVertical' | 'dropdownPaddingHorizontal', raw: string) {
  const value = raw === '' ? 0 : Number(raw)
  updateHeaderSectionSetting(key, Number.isFinite(value) ? value : 0)
  if (dropdownPaddingLinked.value && key === 'dropdownPaddingVertical') {
    updateHeaderSectionSetting('dropdownPaddingHorizontal', Number.isFinite(value) ? value : 0)
  }
}

function toggleDropdownPaddingLinked() {
  const next = !dropdownPaddingLinked.value
  updateHeaderSectionSetting('dropdownPaddingLinked', next)
  if (next) {
    updateHeaderSectionSetting('dropdownPaddingHorizontal', headerNum('dropdownPaddingVertical', 24))
  }
}

function toggleHeaderSectionHidden() {
  const section = storeHeaderSection.value
  if (!theme.value || !section) return
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, { hidden: !section.hidden })
}

function onHeaderSectionDelete() {
  toast.info('The header section is required on every template.')
}

const categoriesSection = computed(() =>
  activeSections.value.find((section) => section.kind === 'categories'),
)

watch(
  () => route.query.template,
  () => {
    activeTemplate.value = templateFromRoute()
  },
)

type CollectionSubLayer =
  | { key: string; kind: 'collection-banner'; label: string; icon: string }
  | { key: string; kind: 'child-category-grid'; label: string; icon: string }
  | { key: string; kind: 'blog-image-banner'; label: string; icon: string }
  | { key: string; kind: 'featured-blogs'; label: string; icon: string }
  | { key: string; kind: 'block'; label: string; icon: string; block: ThemeBlock }

// Discriminated selection: a section, or a block within a section. `null` = nothing.
type Selection =
  | { type: 'section'; id: string }
  | { type: 'block'; sectionId: string; id: string }
  | null
const selected = ref<Selection>(null)

// The section the tree/canvas highlights: the selected section, or a selected
// block's parent section.
const selectedSectionId = computed(() =>
  selected.value?.type === 'section'
    ? selected.value.id
    : selected.value?.type === 'block'
      ? selected.value.sectionId
      : null,
)

function selectSection(id: string) {
  const section = activeSections.value.find((entry) => entry.id === id)
  if (leftTab.value === 'header') {
    if (section?.kind === 'header') {
      selectHeaderLayer('header-section')
      selected.value = { type: 'section', id }
      newSectionIds.value.delete(id)
      return
    }
    if (section?.kind === 'announcement-bar') {
      selectHeaderLayer('announcement')
      selected.value = { type: 'section', id }
      newSectionIds.value.delete(id)
      return
    }
  }
  if (leftTab.value === 'footer' && section?.kind === 'footer') {
    selectFooterLayer('footer-section')
    selected.value = { type: 'section', id }
    newSectionIds.value.delete(id)
    return
  }
  if (section?.kind === 'header' || section?.kind === 'footer') {
    selected.value = { type: 'section', id }
    newSectionIds.value.delete(id)
    return
  }
  openPageBuilder()
  selected.value = { type: 'section', id }
  // Selecting/editing a generated section clears its transient "New" cue.
  newSectionIds.value.delete(id)
  leftTab.value = 'sections'
  void nextTick(() => {
    document.querySelector<HTMLElement>(`.tb-section-row[data-section-id="${id}"]`)
      ?.scrollIntoView({ block: 'nearest' })
  })
}

function selectBlock(sectionId: string, blockId: string) {
  openPageBuilder()
  selected.value = { type: 'block', sectionId, id: blockId }
  newBlockIds.value.delete(blockId)
}

// Switching templates drops the selection — it belongs to the old template —
// and clears any pending "New" cues (they're a transient, per-template review aid).
watch(activeTemplate, (template) => {
  selected.value = null
  if (leftTab.value === 'header') {
    selectedHeaderLayer.value = 'header-section'
  }
  if (leftTab.value === 'footer') {
    selectedFooterLayer.value = 'footer-section'
  }
  newSectionIds.value.clear()
  newBlockIds.value.clear()
  if (route.query.template !== template) {
    router.replace({ query: { ...route.query, template } })
  }
})

watch(
  [theme, activeTemplate],
  () => {
    if (!theme.value) return
    themesStore.ensureBlogTemplate(theme.value.id)
    themesStore.ensureAnnouncementSection(theme.value.id, activeTemplate.value)
    themesStore.ensureHeaderSectionSettings(theme.value.id, activeTemplate.value)
    themesStore.ensureFooterSectionSettings(theme.value.id, activeTemplate.value)
    if (activeTemplate.value === 'blogs') {
      themesStore.ensureBlogListSectionSettings(theme.value.id, activeTemplate.value)
      themesStore.ensureBlogBlocks(theme.value.id, activeTemplate.value)
    }
    if (activeTemplate.value === 'collection') {
      themesStore.ensureCategoriesBlocks(theme.value.id, activeTemplate.value)
    }
    if (activeTemplate.value === 'search') {
      themesStore.ensureSearchBlocks(theme.value.id, activeTemplate.value)
    }
    if (activeTemplate.value === 'product') {
      themesStore.ensureProductDetailBlocks(theme.value.id, activeTemplate.value)
    }
  },
  { immediate: true },
)

watch(
  () => activeSections.value.find((section) => section.kind === 'categories')?.settings.showCollectionBanner,
  () => {
    if (!theme.value || activeTemplate.value !== 'collection') return
    themesStore.ensureCategoriesBlocks(theme.value.id, activeTemplate.value)
  },
)

watch(
  () => activeSections.value.find((section) => section.kind === 'categories')?.settings.showChildEntities,
  () => {
    if (!theme.value || activeTemplate.value !== 'collection') return
    themesStore.ensureCategoriesBlocks(theme.value.id, activeTemplate.value)
  },
)

// ── Device frames ─────────────────────────────────────────────────────────────
type Device = 'desktop' | 'tablet' | 'mobile'
const device = ref<Device>('desktop')
const deviceOptions: { value: Device; icon: string; label: string }[] = [
  { value: 'desktop', icon: 'monitor', label: 'Desktop preview' },
  { value: 'tablet', icon: 'tablet', label: 'Tablet preview' },
  { value: 'mobile', icon: 'smartphone', label: 'Mobile preview' },
]

// Frame widths clamp to the stage (PosPreview pattern); CSS transitions the change.
const DEVICE_WIDTHS: Record<Device, number> = { desktop: 1080, tablet: 820, mobile: 420 }
const stageStyle = computed(() => ({ width: `min(${DEVICE_WIDTHS[device.value]}px, 100%)` }))

const previewRefreshNonce = ref(0)
const storefrontPreviewKey = computed(() => `${theme.value?.updatedAt ?? 'none'}-${previewRefreshNonce.value}`)

function refreshPreview() {
  previewRefreshNonce.value += 1
}

// Draft has unpublished changes: never published, or edited since last publish.
const isDirty = computed(() => {
  const t = theme.value
  if (!t) return false
  return !t.publishedAt || t.updatedAt !== t.publishedAt
})

const {
  confirmLeave,
  allowNextLeave,
  discardAndLeave,
  leaveTitle,
  leaveMessage,
  leaveConfirmLabel,
} = useDirtyLeaveGuard(isDirty, {
  title: 'Leave theme builder?',
  message: 'You have unpublished draft changes. Leaving now will keep them as a draft, but you may want to publish or discard first.',
  confirmLabel: 'Leave anyway',
})

function sectionIcon(kind: string) {
  return getSectionDef(kind)?.icon ?? 'square'
}

// ── Section list actions ──────────────────────────────────────────────────────
function toggleHidden(section: ThemeSection) {
  if (!theme.value || isRequiredSection(section)) return
  themesStore.updateSection(theme.value.id, activeTemplate.value, section.id, { hidden: !section.hidden })
}

function isRequiredSection(section: ThemeSection) {
  return Boolean(getSectionDef(section.kind)?.required)
}

function isLockedBlock(block: ThemeBlock) {
  return Boolean(getBlockDef(block.kind)?.locked)
}

function canAddBlocks(section: ThemeSection) {
  return sectionAcceptsBlocks(section)
    && section.kind !== 'categories'
    && section.kind !== 'search-results'
    && section.kind !== 'product-detail'
    && section.kind !== 'blog-list'
}

function canMoveSection(section: ThemeSection, offset: number) {
  if (isRequiredSection(section)) return false
  const neighbor = activeSections.value[activeSections.value.indexOf(section) + offset]
  return Boolean(neighbor) && !isRequiredSection(neighbor)
}

function viewCollectionPage() {
  allowNextLeave()
  router.push({
    name: 'CollectionStorefront',
    params: { accountId: accountId.value, channelId: channelId.value, handle: 'bedroom-collections-1' },
  })
}

function moveSection(section: ThemeSection, offset: number) {
  if (!theme.value || !canMoveSection(section, offset)) return
  themesStore.moveSection(theme.value.id, activeTemplate.value, section.id, offset)
}

const removeDialog = ref(false)
const removeTargetId = ref<string | null>(null)
const removeTarget = computed(() => activeSections.value.find((s) => s.id === removeTargetId.value))

function askRemove(section: ThemeSection) {
  if (isRequiredSection(section)) return
  removeTargetId.value = section.id
  removeDialog.value = true
}

function confirmRemove() {
  if (theme.value && removeTargetId.value) {
    // Drop the selection if it was on this section, or on one of its blocks.
    if (selectedSectionId.value === removeTargetId.value) selected.value = null
    newSectionIds.value.delete(removeTargetId.value)
    themesStore.removeSection(theme.value.id, activeTemplate.value, removeTargetId.value)
  }
  removeTargetId.value = null
}

// ── Blocks within sections (layer tree) ───────────────────────────────────────
// A section shows a block sub-tree when its kind accepts blocks, or it already
// has some. Expand state lives here (default collapsed).
function sectionAcceptsBlocks(section: ThemeSection): boolean {
  return Boolean(getSectionDef(section.kind)?.acceptsBlocks) || Boolean(section.blocks?.length)
}

const expandedSectionIds = ref<Set<string>>(new Set())

watch(activeTemplate, (template) => {
  if (template !== 'collection' && template !== 'search' && template !== 'product' && template !== 'blogs') return
  const next = new Set(expandedSectionIds.value)
  for (const section of activeSections.value) {
    if (
      section.kind === 'categories'
      || section.kind === 'search-results'
      || section.kind === 'product-detail'
      || section.kind === 'blog-list'
    ) next.add(section.id)
  }
  expandedSectionIds.value = next
}, { immediate: true })
function toggleExpanded(sectionId: string) {
  const next = new Set(expandedSectionIds.value)
  if (next.has(sectionId)) next.delete(sectionId)
  else next.add(sectionId)
  expandedSectionIds.value = next
}

function blockIcon(kind: string) {
  return getBlockDef(kind)?.icon ?? 'square'
}

function blocksFor(section: ThemeSection) {
  return blockCatalog.filter((def) => !def.sectionKinds || def.sectionKinds.includes(section.kind))
}

function categoryGridBlocks(section: ThemeSection): ThemeBlock[] {
  return (section.blocks ?? []).filter((block) => block.kind === 'category-grid')
}

function collectionSubLayers(section: ThemeSection): CollectionSubLayer[] {
  if (section.kind === 'blog-list') {
    return []
  }

  if (section.kind === 'search-results') {
    return (section.blocks ?? [])
      .filter((block) => block.kind === 'product-grid')
      .map((block) => ({
        key: block.id,
        kind: 'block' as const,
        label: blockLabel(block),
        icon: blockIcon(block.kind),
        block,
      }))
  }

  if (section.kind === 'product-detail') {
    return (section.blocks ?? [])
      .filter((block) => block.kind === 'pdp-detail')
      .map((block) => ({
        key: block.id,
        kind: 'block' as const,
        label: blockLabel(block),
        icon: blockIcon(block.kind),
        block,
      }))
  }

  if (section.kind !== 'categories') {
    return (section.blocks ?? []).map((block) => ({
      key: block.id,
      kind: 'block' as const,
      label: blockLabel(block),
      icon: blockIcon(block.kind),
      block,
    }))
  }

  const layers: CollectionSubLayer[] = []
  if (section.settings.showCollectionBanner === true) {
    layers.push({
      key: `${section.id}-collection-banner`,
      kind: 'collection-banner',
      label: 'Collection Banner',
      icon: 'image',
    })
  }
  if (section.settings.showChildEntities === true) {
    layers.push({
      key: `${section.id}-child-category-grid`,
      kind: 'child-category-grid',
      label: 'Child Category Grid',
      icon: 'scan',
    })
  }
  for (const block of categoryGridBlocks(section)) {
    layers.push({
      key: block.id,
      kind: 'block',
      label: blockLabel(block),
      icon: blockIcon(block.kind),
      block,
    })
  }
  return layers
}

const collectionSubLayersMap = computed(() => {
  const map = new Map<string, CollectionSubLayer[]>()
  for (const section of activeSections.value) {
    map.set(section.id, collectionSubLayers(section))
  }
  return map
})

function isSubLayerSelected(section: ThemeSection, layer: CollectionSubLayer): boolean {
  if (selected.value?.type !== 'block' || selected.value.sectionId !== section.id) return false
  if (layer.kind === 'collection-banner') {
    return selectedBlock.value?.kind === 'collection-banner'
  }
  if (layer.kind === 'child-category-grid') {
    return selectedBlock.value?.kind === 'child-category-grid'
  }
  if (layer.kind === 'blog-image-banner') {
    return selectedBlock.value?.kind === 'blog-image-banner'
  }
  if (layer.kind === 'featured-blogs') {
    return selectedBlock.value?.kind === 'blog-posts'
  }
  return selected.value.id === layer.block.id
}

function selectSubLayer(section: ThemeSection, layer: CollectionSubLayer) {
  if (layer.kind === 'collection-banner') selectCollectionBanner(section)
  else if (layer.kind === 'child-category-grid') selectChildCategoryGrid(section)
  else if (layer.kind === 'blog-image-banner') selectBlogImageBanner(section)
  else if (layer.kind === 'featured-blogs') selectFeaturedBlogs(section)
  else selectBlock(section.id, layer.block.id)
}

function selectBlogImageBanner(section: ThemeSection) {
  if (!theme.value) return
  themesStore.ensureBlogBlocks(theme.value.id, activeTemplate.value)
  const bannerId = activeSections.value
    .find((entry) => entry.id === section.id)
    ?.blocks?.find((block) => block.kind === 'blog-image-banner')?.id
  if (bannerId) selectBlock(section.id, bannerId)
}

function selectFeaturedBlogs(section: ThemeSection) {
  if (!theme.value) return
  themesStore.ensureBlogBlocks(theme.value.id, activeTemplate.value)
  const postsId = activeSections.value
    .find((entry) => entry.id === section.id)
    ?.blocks?.find((block) => block.kind === 'blog-posts')?.id
  if (postsId) selectBlock(section.id, postsId)
}

function blogPostsBlock(section: ThemeSection): ThemeBlock | undefined {
  return section.blocks?.find((block) => block.kind === 'blog-posts')
}

function selectCollectionBanner(section: ThemeSection) {
  if (!theme.value) return
  themesStore.ensureCategoriesBlocks(theme.value.id, activeTemplate.value)
  const bannerId = activeSections.value
    .find((entry) => entry.id === section.id)
    ?.blocks?.find((block) => block.kind === 'collection-banner')?.id
  if (bannerId) selectBlock(section.id, bannerId)
}

function selectChildCategoryGrid(section: ThemeSection) {
  if (!theme.value) return
  themesStore.ensureCategoriesBlocks(theme.value.id, activeTemplate.value)
  const childId = activeSections.value
    .find((entry) => entry.id === section.id)
    ?.blocks?.find((block) => block.kind === 'child-category-grid')?.id
  if (childId) selectBlock(section.id, childId)
}

/** Tree label for a block: its def title, or a snippet of its primary setting. */
function blockLabel(block: ThemeBlock): string {
  if (block.kind === 'blog-image-banner') return 'Image Banner'
  if (block.kind === 'blog-posts') return 'Blog Posts'
  const def = getBlockDef(block.kind)
  const name = String(block.settings.label ?? '').trim()
  if (name) return name.length > 28 ? `${name.slice(0, 28)}…` : name
  const snippet = String(block.settings.text ?? block.settings.body ?? '').trim()
  if (snippet) return snippet.length > 28 ? `${snippet.slice(0, 28)}…` : snippet
  return def?.title ?? block.kind
}

function moveBlock(sectionId: string, blockId: string, offset: number) {
  if (!theme.value) return
  themesStore.moveBlock(theme.value.id, activeTemplate.value, sectionId, blockId, offset)
}

/** Add a block, keep the section expanded, then select + flag it "New". */
function addBlockToSection(sectionId: string, kind: string) {
  if (!theme.value) return
  const block = themesStore.addBlock(theme.value.id, activeTemplate.value, sectionId, kind)
  if (!block) return
  const next = new Set(expandedSectionIds.value)
  next.add(sectionId)
  expandedSectionIds.value = next
  newBlockIds.value.add(block.id)
  selected.value = { type: 'block', sectionId, id: block.id }
}

// Block removal confirm (mirrors the section confirm).
const blockRemoveDialog = ref(false)
const blockRemoveTarget = ref<{ sectionId: string; blockId: string } | null>(null)
const blockRemoveLabel = computed(() => {
  const t = blockRemoveTarget.value
  if (!t) return 'This block'
  const section = activeSections.value.find((s) => s.id === t.sectionId)
  const block = section?.blocks?.find((b) => b.id === t.blockId)
  return block ? blockLabel(block) : 'This block'
})

function askRemoveBlock(sectionId: string, blockId: string) {
  const section = activeSections.value.find((entry) => entry.id === sectionId)
  const block = section?.blocks?.find((entry) => entry.id === blockId)
  if (block && isLockedBlock(block)) return
  blockRemoveTarget.value = { sectionId, blockId }
  blockRemoveDialog.value = true
}

function confirmRemoveBlock() {
  const t = blockRemoveTarget.value
  if (theme.value && t) {
    if (selected.value?.type === 'block' && selected.value.id === t.blockId) selected.value = null
    newBlockIds.value.delete(t.blockId)
    themesStore.removeBlock(theme.value.id, activeTemplate.value, t.sectionId, t.blockId)
  }
  blockRemoveTarget.value = null
}

// ── Add-section picker (two-pane dialog) ──────────────────────────────────────
const addDialog = ref(false)

function isKindDisabled(def: ThemeSectionDef) {
  if (def.hideFromLayerList) return true
  return Boolean(def.unique) && activeSections.value.some((s) => s.kind === def.kind)
}

/** No-variant kind: add immediately (dialog closes on the child's click). */
function addSection(def: ThemeSectionDef) {
  if (!theme.value) return
  const section = themesStore.addSection(theme.value.id, activeTemplate.value, def.kind)
  if (section) selectSection(section.id)
  addDialog.value = false
}

/** Variant-bearing kind: add with the chosen variant's preset merged in. */
function addSectionVariant(def: ThemeSectionDef, variantId: string) {
  if (!theme.value) return
  const section = themesStore.addSection(theme.value.id, activeTemplate.value, def.kind, undefined, variantId)
  if (section) selectSection(section.id)
  addDialog.value = false
}

// ── Settings panel: section OR block (schema-driven, live edits) ─────────────
// selectedSection = the selected section, or the parent of a selected block.
const selectedSection = computed(() =>
  activeSections.value.find((s) => s.id === selectedSectionId.value),
)
const selectedSectionDef = computed(() =>
  selectedSection.value ? getSectionDef(selectedSection.value.kind) : undefined,
)
const selectedBlock = computed(() =>
  selected.value?.type === 'block'
    ? selectedSection.value?.blocks?.find((b) => b.id === selected.value!.id)
    : undefined,
)
const selectedBlockDef = computed(() =>
  selectedBlock.value ? getBlockDef(selectedBlock.value.kind) : undefined,
)

function closePanel() {
  selected.value = null
}

function renameSection(label: string) {
  if (!theme.value || selected.value?.type !== 'section') return
  const fallback = selectedSectionDef.value?.title ?? selectedSection.value?.label ?? 'Collections'
  themesStore.updateSection(theme.value.id, activeTemplate.value, selected.value.id, {
    label: label.trim() || fallback,
  })
}

// ── Section-setting helpers (read/write the selected section) ────────────────
function setSetting(key: string, value: string | number | boolean) {
  if (!theme.value || !selectedSection.value) return
  if (selectedSection.value.kind === 'categories' && collectionsLeadKeys.has(key) && typeof value === 'boolean') {
    setCollectionsLeadSetting(key, value)
    return
  }
  themesStore.updateSection(theme.value.id, activeTemplate.value, selectedSection.value.id, {
    settings: { [key]: value },
  })
}

function setCollectionsLeadSetting(key: string, value: boolean) {
  if (!theme.value) return
  if (activeTemplate.value !== 'collection') {
    activeTemplate.value = 'collection'
  }
  const section = categoriesSection.value
    ?? theme.value.templates.collection.find((entry) => entry.kind === 'categories')
  if (!section) {
    toast.error('Collection layers are only available on the Collection template.')
    return
  }
  themesStore.updateSection(theme.value.id, 'collection', section.id, {
    settings: { [key]: value },
  })
  if (key === 'showCollectionBanner' || key === 'showChildEntities') {
    themesStore.ensureCategoriesBlocks(theme.value.id, 'collection')
    expandedSectionIds.value = new Set([...expandedSectionIds.value, section.id])
    if (
      value !== true
      && selected.value?.type === 'block'
      && selectedBlock.value?.kind === (key === 'showCollectionBanner' ? 'collection-banner' : 'child-category-grid')
    ) {
      selected.value = null
    }
  }
}

function settingText(key: string): string {
  return String(selectedSection.value?.settings[key] ?? '')
}

function settingNum(key: string, fallback: number): number {
  const value = selectedSection.value?.settings[key]
  return typeof value === 'number' ? value : fallback
}

// ── Block-setting helpers (mirror the section ones, via updateBlock) ─────────
function setBlockSetting(key: string, value: string | number | boolean) {
  if (!theme.value || selected.value?.type !== 'block') return
  themesStore.updateBlock(theme.value.id, activeTemplate.value, selected.value.sectionId, selected.value.id, {
    settings: { [key]: value },
  })
}

function blockSettingText(key: string): string {
  return String(selectedBlock.value?.settings[key] ?? '')
}

function blockSettingNum(key: string, fallback: number): number {
  const value = selectedBlock.value?.settings[key]
  return typeof value === 'number' ? value : fallback
}

// ── Unified panel accessors ──────────────────────────────────────────────────
// One schema field-loop drives both section and block settings — these dispatch
// to the section or block helpers based on the current selection type.
const isBlockSelected = computed(() => selected.value?.type === 'block')
const panelSettings = computed(() => (isBlockSelected.value ? selectedBlock.value?.settings : selectedSection.value?.settings) ?? {})
const panelFields = computed(() => {
  const fields = isBlockSelected.value ? (selectedBlockDef.value?.fields ?? []) : (selectedSectionDef.value?.fields ?? [])
  return fields.filter((field) => {
    if (!field.visibleWhen) return true
    const rules = Array.isArray(field.visibleWhen) ? field.visibleWhen : [field.visibleWhen]
    return rules.every((rule) => panelSettings.value[rule.key] === rule.equals)
  })
})

const collectionsLeadKeys = new Set(['showCollectionBanner', 'showChildEntities'])
const isCollectionsContext = computed(() => selectedSection.value?.kind === 'categories')
const isSearchResultsContext = computed(() => selectedSection.value?.kind === 'search-results')
const isProductDetailContext = computed(() => selectedSection.value?.kind === 'product-detail')
const collectionsLeadFields = computed(() => {
  if (!isCollectionsContext.value) return []
  return (getSectionDef('categories')?.fields ?? []).filter((field) => collectionsLeadKeys.has(field.key))
})
const collectionsLeadSettings = computed(() => selectedSection.value?.settings ?? {})
const isCollectionBannerBlock = computed(() => selectedBlock.value?.kind === 'collection-banner')
const isChildCategoryGridBlock = computed(() => selectedBlock.value?.kind === 'child-category-grid')
const isCollectionGridBlock = computed(() => selectedBlock.value?.kind === 'category-grid')
const isProductGridBlock = computed(() => selectedBlock.value?.kind === 'product-grid')
const isBlogPostsBlock = computed(() => selectedBlock.value?.kind === 'blog-posts')
const blogFeaturedImageHeightOptions = BLOG_FEATURED_IMAGE_HEIGHT_OPTIONS
const blogFeaturedImageHeight = computed(() => normalizeBlogFeaturedImageHeight(panelText('featuredImageHeight')))
const blogSliderStyle = computed(() => normalizeBlogSliderStyle(panelText('sliderStyle')))
const isBlogPostsCarousel = computed(() => (
  isBlogPostsBlock.value && panelText('layout') === 'Carousel'
))
const isPdpDetailBlock = computed(() => selectedBlock.value?.kind === 'pdp-detail')
const productGridFilterPosition = computed<'Left' | 'Top'>(() => (
  panelText('filterPosition') === 'Top' ? 'Top' : 'Left'
))
const isCollectionsSectionPanel = computed(() => !isBlockSelected.value && isCollectionsContext.value)
const isSearchResultsSectionPanel = computed(() => !isBlockSelected.value && isSearchResultsContext.value)
const isPdpInformationSectionPanel = computed(() => !isBlockSelected.value && isProductDetailContext.value)
const settingsFields = computed(() => {
  if (
    isCollectionBannerBlock.value
    || isChildCategoryGridBlock.value
    || isCollectionGridBlock.value
    || isProductGridBlock.value
    || isBlogPostsBlock.value
    || isPdpDetailBlock.value
  ) return []
  if (isSearchResultsSectionPanel.value) return []
  if (isPdpInformationSectionPanel.value) return []
  return isCollectionsSectionPanel.value
    ? panelFields.value.filter((field) => !collectionsLeadKeys.has(field.key))
    : panelFields.value
})

const bannerContentOpen = ref(true)
const bannerStyleOpen = ref(true)
const childLayoutStyleOpen = ref(true)
const childCategoryCardOpen = ref(true)
const gridPaginationOpen = ref(true)
const gridStyleSettingsOpen = ref(true)
const searchStyleSettingsOpen = ref(true)
const searchProductPaginationOpen = ref(true)
const searchFilterSettingsOpen = ref(true)
const pdpStyleSettingsOpen = ref(true)
const pdpDetailStyleSettingsOpen = ref(true)
const blogPostsPaginationOpen = ref(true)
const blogPostsStyleSettingsOpen = ref(true)

const pdpSliderLayouts = ['Left', 'Right', 'Bottom'] as const
const pdpSliderLayout = computed(() => {
  const raw = panelText('sliderLayout')
  if (raw === 'Right' || raw === 'Bottom') return raw
  if (raw === 'Stacked') return 'Bottom'
  return 'Left'
})
const pdpMediaPosition = computed<'Left' | 'Right'>(() => (
  panelText('desktopMediaPosition') === 'Right' ? 'Right' : 'Left'
))

function cyclePdpSliderLayout(offset: number) {
  const current = pdpSliderLayout.value
  const index = pdpSliderLayouts.indexOf(current)
  const safeIndex = index >= 0 ? index : 0
  const next = pdpSliderLayouts[(safeIndex + offset + pdpSliderLayouts.length) % pdpSliderLayouts.length]
  setBlockSetting('sliderLayout', next)
}

function pdpSliderLayoutIcon(layout: string) {
  if (layout === 'Right') return lumosPdpSliderLayoutIcons.Right
  if (layout === 'Bottom') return lumosPdpSliderLayoutIcons.Bottom
  return lumosPdpSliderLayoutIcons.Left
}

watch(
  () => (isProductGridBlock.value ? selectedBlock.value?.settings.filterPosition : undefined),
  (value) => {
    if (!isProductGridBlock.value || !theme.value || selected.value?.type !== 'block') return
    if (value === 'Top' || value === 'Left') return
    setBlockSetting('filterPosition', 'Left')
  },
  { immediate: true },
)

const collectionGridLayouts = ['Grid', 'Carousel'] as const
/** Lumos Category Grid card styles (Figma 3568-92818 carousel). */
const childCategoryCardStyles = ['Image & Title', 'Only Text', 'Small image'] as const

function normalizeChildCardStyle(raw: string): (typeof childCategoryCardStyles)[number] {
  if (raw === 'Compact Image & Text' || raw === 'Compact') return 'Small image'
  if (raw === 'Title Only' || raw === 'Title only') return 'Only Text'
  if (childCategoryCardStyles.includes(raw as (typeof childCategoryCardStyles)[number])) {
    return raw as (typeof childCategoryCardStyles)[number]
  }
  return 'Only Text'
}

const childCategoryCardStyle = computed(() => (
  isChildCategoryGridBlock.value
    ? normalizeChildCardStyle(panelText('cardStyle'))
    : 'Only Text'
))

const childCategoryCardStyleIcon = computed(() => (
  lumosChildCardStyleIcons[childCategoryCardStyle.value]
))

function lumosLayoutPickerIcon(layout: string) {
  return layout === 'Carousel' ? lumosLayoutPickerIcons.Carousel : lumosLayoutPickerIcons.Grid
}
const collectionSliderStyles = ['Arrows', 'Dots', 'Numbers'] as const

function cycleCollectionGridLayout(offset: number) {
  const current = panelText('layout') || 'Grid'
  const index = collectionGridLayouts.indexOf(current as (typeof collectionGridLayouts)[number])
  const base = index === -1 ? 0 : index
  const next = collectionGridLayouts[(base + offset + collectionGridLayouts.length) % collectionGridLayouts.length]
  setBlockSetting('layout', next)
}

function cycleChildCategoryLayout(offset: number) {
  const current = panelText('layout') || 'Grid'
  const index = collectionGridLayouts.indexOf(current as (typeof collectionGridLayouts)[number])
  const base = index === -1 ? 0 : index
  const next = collectionGridLayouts[(base + offset + collectionGridLayouts.length) % collectionGridLayouts.length]
  setBlockSetting('layout', next)
}

function cycleChildCategoryCardStyle(offset: number) {
  const current = normalizeChildCardStyle(panelText('cardStyle'))
  const index = childCategoryCardStyles.indexOf(current)
  const base = index === -1 ? 0 : index
  const next = childCategoryCardStyles[(base + offset + childCategoryCardStyles.length) % childCategoryCardStyles.length]
  setBlockSetting('cardStyle', next)
}

const childCardPaddingLinked = computed(() => panelSettings.value.cardPaddingLinked === true)

function setCardPadding(key: 'cardPaddingVertical' | 'cardPaddingHorizontal', raw: string) {
  const value = raw === '' ? 0 : Number(raw)
  setBlockSetting(key, Number.isFinite(value) ? value : 0)
  if (childCardPaddingLinked.value) {
    setBlockSetting(
      key === 'cardPaddingVertical' ? 'cardPaddingHorizontal' : 'cardPaddingVertical',
      Number.isFinite(value) ? value : 0,
    )
  }
}

function toggleChildCardPaddingLink() {
  const next = !childCardPaddingLinked.value
  setBlockSetting('cardPaddingLinked', next)
  if (next) setBlockSetting('cardPaddingHorizontal', blockSettingNum('cardPaddingVertical', 12))
}

function cycleCollectionSliderStyle(offset: number) {
  const current = panelText('sliderStyle') || 'Arrows'
  const index = collectionSliderStyles.indexOf(current as (typeof collectionSliderStyles)[number])
  const base = index === -1 ? 0 : index
  const next = collectionSliderStyles[(base + offset + collectionSliderStyles.length) % collectionSliderStyles.length]
  setBlockSetting('sliderStyle', next)
}

function cycleBlogPostsSliderStyle(offset: number) {
  const current = normalizeBlogSliderStyle(panelText('sliderStyle'))
  const index = BLOG_SLIDER_STYLE_OPTIONS.indexOf(current)
  const base = index === -1 ? 0 : index
  const next = BLOG_SLIDER_STYLE_OPTIONS[(base + offset + BLOG_SLIDER_STYLE_OPTIONS.length) % BLOG_SLIDER_STYLE_OPTIONS.length]
  setBlockSetting('sliderStyle', next)
}

const isCollectionGridCarousel = computed(() => (
  isCollectionGridBlock.value && panelSettings.value.layout === 'Carousel'
))

function panelSet(key: string, value: string | number | boolean) {
  if (isBlockSelected.value) setBlockSetting(key, value)
  else setSetting(key, value)
}
function panelText(key: string): string {
  return isBlockSelected.value ? blockSettingText(key) : settingText(key)
}
function panelNum(key: string, fallback: number): number {
  return isBlockSelected.value ? blockSettingNum(key, fallback) : settingNum(key, fallback)
}

const paddingLinked = computed(() => panelSettings.value.paddingLinked === true)

function setPadding(key: 'paddingVertical' | 'paddingHorizontal', raw: string) {
  const value = raw === '' ? 0 : Number(raw)
  panelSet(key, Number.isFinite(value) ? value : 0)
  if (paddingLinked.value) {
    panelSet(key === 'paddingVertical' ? 'paddingHorizontal' : 'paddingVertical', Number.isFinite(value) ? value : 0)
  }
}

function togglePaddingLink() {
  const next = !paddingLinked.value
  panelSet('paddingLinked', next)
  if (next) panelSet('paddingHorizontal', panelNum('paddingVertical', 24))
}

// Escape closes the settings panel (JourneyBuilder precedent).
function onEscape(e: KeyboardEvent) {
  if (e.key === 'Escape' && selected.value) selected.value = null
}
onMounted(() => window.addEventListener('keydown', onEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', onEscape))

// ── Left panel mode: the Sections/Styles tabs, or the Da Vinci generator ──────
// 'davinci' fully replaces the tab strip while active (legacy parity).
const leftMode = ref<'panel' | 'davinci'>('panel')

function openDaVinci() {
  leftMode.value = 'davinci'
  addDialog.value = false
}

// ── Theme styles panel ────────────────────────────────────────────────────────
// The styles tab and the section/block settings panel both edit state — keep
// them from fighting over the right rail by clearing the selection on switch.
watch(leftTab, (t) => {
  if (t === 'styles') selected.value = null
  if (t === 'header') {
    selectedFooterLayer.value = null
    if (!selectedHeaderLayer.value) selectedHeaderLayer.value = 'header-section'
  }
  if (t === 'footer') {
    selectedHeaderLayer.value = null
    if (!selectedFooterLayer.value) selectedFooterLayer.value = 'footer-section'
  }
  if (t === 'sections') {
    selectedHeaderLayer.value = null
    selectedFooterLayer.value = null
  }
})

// Vertical icon rail (Layers / Theme styles) roving-focus keyboard support.
function onModeRailKeydown(e: KeyboardEvent) {
  if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return
  e.preventDefault()
  const rail = (e.currentTarget as HTMLElement).closest('.tb-mode-rail')
  if (!rail) return
  const btns = Array.from(rail.querySelectorAll<HTMLButtonElement>('.tb-mode-rail__btn'))
  const modes: LeftTab[] = ['sections', 'header', 'footer', 'styles']
  const cur = btns.indexOf(e.currentTarget as HTMLButtonElement)
  let next = cur
  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (cur + 1) % btns.length
  else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (cur - 1 + btns.length) % btns.length
  else if (e.key === 'Home') next = 0
  else if (e.key === 'End') next = btns.length - 1
  const mode = modes[next]
  if (mode) leftTab.value = mode
  btns[next]?.focus()
}

/** Preset swatches from the token palette (shared by style rows + color fields). */
const swatchPalette = [
  { label: 'Maropost blue', value: mp_color_light_primary },
  { label: 'Sky', value: mp_color_blue_500 },
  { label: 'Cobalt', value: mp_color_light_aiAccent_primary },
  { label: 'Green', value: mp_color_light_success },
  { label: 'Amber', value: mp_color_light_warning },
  { label: 'Red', value: mp_color_light_error },
  { label: 'Ink', value: mp_color_light_textPrimary },
  { label: 'White', value: mp_color_neutral_0 },
]

const styleColorRows: { key: 'brandColor' | 'accentColor' | 'background' | 'textColor'; label: string }[] = [
  { key: 'brandColor', label: 'Brand color' },
  { key: 'accentColor', label: 'Accent color' },
  { key: 'background', label: 'Background' },
  { key: 'textColor', label: 'Text color' },
]

const buttonStyleOptions: { value: ThemeStyles['buttonStyle']; title: string; description: string; icon: string }[] = [
  { value: 'solid', title: 'Solid', description: 'Filled buttons in your brand color.', icon: 'square' },
  { value: 'outline', title: 'Outline', description: 'Bordered buttons, transparent fill.', icon: 'square-dashed' },
  { value: 'pill', title: 'Pill', description: 'Fully rounded, filled buttons.', icon: 'rectangle-horizontal' },
]

function setStyle(patch: Partial<ThemeStyles>) {
  if (!theme.value) return
  themesStore.updateStyles(theme.value.id, patch)
}

// ── Swatch radiogroup keyboard support (roving tabindex) ─────────────────────
// Both swatch loops (styles tab + inspector color field) render swatchPalette
// in the same order, so array-index alignment resolves the next value without
// extra DOM data attributes.
function swatchTabindex(swatch: { value: string }, currentValue: string): number {
  const checkedIndex = swatchPalette.findIndex((s) => s.value === currentValue)
  const targetIndex = checkedIndex === -1 ? 0 : checkedIndex
  return swatchPalette[targetIndex]?.value === swatch.value ? 0 : -1
}

function onSwatchKeydown(e: KeyboardEvent, setValue: (value: string) => void) {
  const key = e.key
  if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(key)) return
  e.preventDefault()
  const target = e.currentTarget as HTMLButtonElement | null
  const row = target?.closest('.tb-swatch-row')
  const buttons = Array.from(row?.querySelectorAll<HTMLButtonElement>('button[role="radio"]') ?? [])
  const currentIndex = target ? buttons.indexOf(target) : -1
  if (currentIndex === -1 || buttons.length === 0) return

  let nextIndex = currentIndex
  if (key === 'ArrowRight' || key === 'ArrowDown') nextIndex = (currentIndex + 1) % buttons.length
  else if (key === 'ArrowLeft' || key === 'ArrowUp') nextIndex = (currentIndex - 1 + buttons.length) % buttons.length
  else if (key === 'Home') nextIndex = 0
  else if (key === 'End') nextIndex = buttons.length - 1

  const nextSwatch = swatchPalette[nextIndex]
  if (!nextSwatch) return
  setValue(nextSwatch.value)
  buttons[nextIndex]?.focus()
}

// ── Ask Da Vinci ──────────────────────────────────────────────────────────────
const copilot = useCopilotStore()
function askDaVinci() {
  copilot.openWithPrompt(`Review my storefront theme "${theme.value?.name ?? ''}" and suggest improvements to layout and colors.`)
}

// ── Da Vinci generator (parent owns state + store writes) ─────────────────────
const chatMessages = ref<ThemeChatMessage[]>([])
// Transient "New" cue for sections Da Vinci just added — cleared on select,
// undo, or template switch. Not persisted (it's a review affordance).
const newSectionIds = ref<Set<string>>(new Set())
// Same review cue for freshly-added blocks — cleared on select or template switch.
const newBlockIds = ref<Set<string>>(new Set())

let chatIdCounter = 0
function chatId(prefix: string) {
  chatIdCounter += 1
  return `${prefix}-${chatIdCounter}`
}

// The conversation is per-template: each turn is stamped with the template it
// ran on, and the panel only shows the active template's turns. That keeps an
// Undo card from acting on a template the user has since switched away from.
const visibleMessages = computed(() =>
  chatMessages.value.filter((m) => !m.template || m.template === activeTemplate.value),
)

function onGenerate(prompt: string) {
  if (!theme.value) return
  const template = activeTemplate.value
  chatMessages.value.push({ id: chatId('u'), role: 'user', text: prompt, template })

  const result = generateSections(prompt, {
    template,
    existingKinds: activeSections.value.map((s) => s.kind),
  })

  if (!result.matched || result.kinds.length === 0) {
    chatMessages.value.push({ id: chatId('d'), role: 'davinci', text: result.reply, template })
    return
  }

  const created = themesStore.addSections(theme.value.id, template, result.kinds, result.overrides)
  if (created.length === 0) {
    // Everything requested already exists (unique kinds) — reply, no store write.
    chatMessages.value.push({
      id: chatId('d'),
      role: 'davinci',
      text: 'Those sections are already on this template.',
      template,
    })
    return
  }

  const addedIds = created.map((s) => s.id)
  chatMessages.value.push({
    id: chatId('d'),
    role: 'davinci',
    text: result.reply,
    template,
    addedIds,
    addedTitles: created.map((s) => s.label),
  })

  addedIds.forEach((id) => newSectionIds.value.add(id))
  // Select the first added section without clearing its "New" cue (review aid).
  selected.value = { type: 'section', id: created[0]!.id }
  toast.success(`Da Vinci added ${created.length} section${created.length === 1 ? '' : 's'}`)
}

function onUndo(ids: string[]) {
  if (!theme.value) return
  const idSet = new Set(ids)
  // Remove from the template the turn ran on (not necessarily the active one).
  const turn = chatMessages.value.find((m) => m.addedIds && m.addedIds.some((id) => idSet.has(id)))
  const template = turn?.template ?? activeTemplate.value
  themesStore.removeSections(theme.value.id, template, ids)
  ids.forEach((id) => newSectionIds.value.delete(id))
  if (selectedSectionId.value && idSet.has(selectedSectionId.value)) selected.value = null
  // Drop the ids off that turn's result card so Undo can't double-fire.
  if (turn) {
    turn.addedIds = undefined
    turn.text = 'Removed.'
  }
}

// Switching channel reuses this component instance (param-only route change) —
// reset the per-theme conversation + review state so one store's draft chat
// never leaks into another's panel.
watch(channelId, () => {
  chatMessages.value = []
  newSectionIds.value.clear()
  newBlockIds.value.clear()
  selected.value = null
  leftMode.value = 'panel'
})

const totalSectionCount = computed(() =>
  TEMPLATE_TYPES.reduce((sum, template) => sum + (theme.value?.templates[template].length ?? 0), 0),
)

const publishDialog = ref(false)
const publishMessage = computed(
  () =>
    `This publishes ${TEMPLATE_TYPES.length} templates (${totalSectionCount.value} sections) to your live storefront. Visitors see the changes immediately.`,
)

function confirmPublish() {
  if (!theme.value) return
  themesStore.publishTheme(theme.value.id)
  allowNextLeave()
  toast.success('Theme published')
}

const discardDialog = ref(false)

function confirmDiscard() {
  if (!theme.value) return
  themesStore.discardDraft(theme.value.id)
  selected.value = null
  newSectionIds.value.clear()
  newBlockIds.value.clear()
  allowNextLeave()
  toast.success('Draft changes discarded')
}

// ── Narrow viewport: left panel collapses behind a toolbar toggle ─────────────
const narrowQuery = window.matchMedia('(max-width: 900px)')
const isNarrow = ref(narrowQuery.matches)
const leftPanelOpen = ref(!narrowQuery.matches)

function onNarrowChange(e: MediaQueryListEvent) {
  isNarrow.value = e.matches
  leftPanelOpen.value = !e.matches
}
onMounted(() => narrowQuery.addEventListener('change', onNarrowChange))
onBeforeUnmount(() => narrowQuery.removeEventListener('change', onNarrowChange))
</script>

<template>
  <div v-if="!channel || !theme" class="tb-missing d-flex align-center justify-center">
    <MpEmptyState
      icon="paintbrush"
      :title="channel ? 'No theme for this channel' : 'Sales channel not found'"
      :description="channel
        ? 'This channel doesn\'t have a store theme yet. Themes are available for channels with Store Builder enabled.'
        : 'This sales channel doesn\'t exist or was removed.'"
      :actionLabel="channel ? 'Back to channel' : 'Back to sales channels'"
      actionIcon="arrow-left"
      @action="router.push(backRoute)"
    />
  </div>

  <MpBuilderShell
    v-else
    :back-label="`Back to ${channel.name}`"
    :title="theme.name"
    :dirty="isDirty"
    persistence-mode="live"
    @back="router.push(backRoute)"
  >
    <template #title>
      <v-btn
        v-if="isNarrow"
        :icon="leftPanelOpen ? 'panel-left-close' : 'panel-left'"
        variant="text"
        size="small"
        :aria-label="leftPanelOpen ? 'Hide sections panel' : 'Show sections panel'"
        @click="leftPanelOpen = !leftPanelOpen"
      ></v-btn>
      <div class="font-weight-bold text-body-1 text-truncate">{{ theme.name }}</div>
      <MpStatusChip :status="theme.status" type="general" size="sm" />
      <MpRowActionsMenu ariaLabel="Theme actions">
        <MpMenuItem
          icon="code"
          title="Edit Code"
          @click="router.push({ name: 'StoreThemeCode', params: { accountId, channelId } })"
        ></MpMenuItem>
      </MpRowActionsMenu>
    </template>

    <template #toolbar-center>
      <!-- Builder toolbar control: compact density and detail suppression are deliberate here. -->
      <v-select
        v-model="activeTemplate"
        :items="templateTypeItems"
        hide-details
        class="tb-template-select flex-shrink-0"
        aria-label="Template type"
      ></v-select>
    </template>

    <template #actions>
      <MpSegmentedControl
        :model-value="device"
        size="sm"
        ariaLabel="Preview device"
        :items="deviceOptions.map(o => ({ value: o.value, icon: o.icon, label: o.label, tooltip: o.label }))"
        @update:model-value="(v) => { if (v) device = v as Device }"
      />
      <v-tooltip text="Refresh preview" location="bottom">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="refresh-cw"
            variant="text"
            size="small"
            aria-label="Refresh preview"
            @click="refreshPreview"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-divider vertical class="mx-1" style="height:24px;"></v-divider>
      <v-tooltip text="Ask Da Vinci to review this theme" location="bottom">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="sparkles"
            variant="text"
            size="small"
            color="primary"
            aria-label="Ask Da Vinci to review this theme"
            @click="askDaVinci"
          ></v-btn>
        </template>
      </v-tooltip>
      <v-divider vertical class="mx-1" style="height:24px;"></v-divider>
      <v-btn
        v-if="activeTemplate === 'collection'"
        variant="text"
        size="small"
        class="text-none"
        prepend-icon="external-link"
        @click="viewCollectionPage"
      >
        View page
      </v-btn>
      <v-btn variant="outlined" size="small" class="text-none" :disabled="!isDirty" @click="discardDialog = true">
        Discard draft
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        size="small"
        class="text-none"
        :prepend-icon="isDirty ? 'rocket' : 'circle-check'"
        :disabled="!isDirty"
        @click="publishDialog = true"
      >
        {{ isDirty ? 'Publish' : 'Published' }}
      </v-btn>
    </template>

    <!-- Body -->
    <div class="tb-body d-flex h-100" style="overflow:hidden;">
      <!-- Left panel: Sections / Theme styles -->
      <!-- Scoped flex styles (not d-flex): the utility's !important would defeat v-show -->
      <aside
        v-show="leftPanelOpen"
        class="tb-panel-left border-r bg-surface"
        :class="{ 'tb-panel-left--overlay': isNarrow }"
      >
        <!-- Da Vinci generator fully replaces the tab strip while active -->
        <ThemeDaVinciPanel
          v-if="leftMode === 'davinci'"
          :messages="visibleMessages"
          @generate="onGenerate"
          @undo="onUndo"
          @close="leftMode = 'panel'"
        />

        <template v-else>
        <div class="tb-panel-mode d-flex flex-grow-1" style="overflow:hidden;">
          <nav class="tb-mode-rail" role="tablist" aria-label="Editor panel">
            <v-tooltip text="Sections" location="end">
              <template #activator="{ props }">
                <button
                  v-bind="props"
                  type="button"
                  class="tb-mode-rail__btn"
                  :class="{ 'tb-mode-rail__btn--active': leftTab === 'sections' }"
                  role="tab"
                  :aria-selected="leftTab === 'sections'"
                  :tabindex="leftTab === 'sections' ? 0 : -1"
                  aria-label="Sections"
                  @click="leftTab = 'sections'"
                  @keydown="onModeRailKeydown"
                >
                  <v-icon size="18">layers</v-icon>
                </button>
              </template>
            </v-tooltip>
            <v-tooltip text="Header" location="end">
              <template #activator="{ props }">
                <button
                  v-bind="props"
                  type="button"
                  class="tb-mode-rail__btn"
                  :class="{ 'tb-mode-rail__btn--active': leftTab === 'header' }"
                  role="tab"
                  :aria-selected="leftTab === 'header'"
                  :tabindex="leftTab === 'header' ? 0 : -1"
                  aria-label="Header"
                  @click="openHeaderBuilder"
                  @keydown="onModeRailKeydown"
                >
                  <v-icon size="18">panel-top</v-icon>
                </button>
              </template>
            </v-tooltip>
            <v-tooltip text="Footer" location="end">
              <template #activator="{ props }">
                <button
                  v-bind="props"
                  type="button"
                  class="tb-mode-rail__btn"
                  :class="{ 'tb-mode-rail__btn--active': leftTab === 'footer' }"
                  role="tab"
                  :aria-selected="leftTab === 'footer'"
                  :tabindex="leftTab === 'footer' ? 0 : -1"
                  aria-label="Footer"
                  @click="openFooterBuilder"
                  @keydown="onModeRailKeydown"
                >
                  <v-icon size="18">panel-bottom</v-icon>
                </button>
              </template>
            </v-tooltip>
            <v-tooltip text="Theme styles" location="end">
              <template #activator="{ props }">
                <button
                  v-bind="props"
                  type="button"
                  class="tb-mode-rail__btn"
                  :class="{ 'tb-mode-rail__btn--active': leftTab === 'styles' }"
                  role="tab"
                  :aria-selected="leftTab === 'styles'"
                  :tabindex="leftTab === 'styles' ? 0 : -1"
                  aria-label="Theme styles"
                  @click="leftTab = 'styles'"
                  @keydown="onModeRailKeydown"
                >
                  <v-icon size="18">palette</v-icon>
                </button>
              </template>
            </v-tooltip>
          </nav>

          <div class="tb-panel-content d-flex flex-column flex-grow-1">

        <div
          v-if="leftTab === 'header'"
          class="flex-grow-1 overflow-y-auto pa-2"
          role="list"
          aria-label="Header layers"
        >
          <p class="text-body-2 font-weight-bold px-2 mb-2">Header Layers</p>
          <div
            v-if="announcementSection"
            role="listitem"
            class="tb-section-row"
            :class="{ 'tb-section-row--selected': selectedHeaderLayer === 'announcement' }"
          >
            <v-btn
              :icon="announcementTreeOpen ? 'chevron-down' : 'chevron-right'"
              variant="text"
              size="small"
              density="comfortable"
              class="tb-section-row__expand"
              :aria-expanded="announcementTreeOpen"
              aria-label="Expand Announcement Banner"
              @click="announcementTreeOpen = !announcementTreeOpen"
            ></v-btn>
            <button
              class="tb-section-row__main"
              :class="{ 'tb-section-row--selected': selectedHeaderLayer === 'announcement' }"
              aria-label="Select Announcement Banner"
              @click="selectHeaderLayer('announcement')"
            >
              <v-icon size="16" class="tb-section-row__icon">{{ headerLayerSectionIcon }}</v-icon>
              <span class="tb-section-row__label text-truncate">Announcement Banner</span>
            </button>
          </div>
          <div v-if="storeHeaderSection" role="listitem">
            <div
              class="tb-section-row"
              :class="{ 'tb-section-row--selected': selectedHeaderLayer === 'header-section' }"
            >
              <v-btn
                :icon="headerSectionTreeOpen ? 'chevron-down' : 'chevron-right'"
                variant="text"
                size="small"
                density="comfortable"
                class="tb-section-row__expand"
                :aria-expanded="headerSectionTreeOpen"
                aria-label="Expand Header Section layers"
                @click="headerSectionTreeOpen = !headerSectionTreeOpen"
              ></v-btn>
              <button
                class="tb-section-row__main"
                :class="{ 'tb-section-row--selected': selectedHeaderLayer === 'header-section' }"
                aria-label="Select Header Section"
                @click="selectHeaderLayer('header-section')"
              >
                <v-icon size="16" class="tb-section-row__icon">{{ headerLayerSectionIcon }}</v-icon>
                <span class="tb-section-row__label text-truncate">Header Section</span>
              </button>
              <div class="tb-section-row__actions">
                <v-btn
                  :icon="storeHeaderSection.hidden ? 'eye-off' : 'eye'"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :aria-label="storeHeaderSection.hidden ? 'Show Header Section' : 'Hide Header Section'"
                  @click="toggleHeaderSectionHidden"
                ></v-btn>
                <v-btn
                  icon="trash-2"
                  variant="text"
                  size="small"
                  density="comfortable"
                  aria-label="Remove Header Section"
                  @click="onHeaderSectionDelete"
                ></v-btn>
              </div>
            </div>
            <div v-show="headerSectionTreeOpen" class="tb-blocks" role="list" aria-label="Header Section layers">
              <div
                role="listitem"
                class="tb-block-row"
                :class="{ 'tb-block-row--selected': selectedHeaderLayer === 'logo' }"
              >
                <button
                  class="tb-block-row__main"
                  aria-label="Select Logo"
                  @click="selectHeaderLayer('logo')"
                >
                  <v-icon size="16" class="tb-block-row__icon">image</v-icon>
                  <span class="tb-block-row__label text-truncate">Logo</span>
                </button>
              </div>
              <div
                role="listitem"
                class="tb-block-row"
                :class="{ 'tb-block-row--selected': selectedHeaderLayer === 'menu' }"
              >
                <button
                  class="tb-block-row__main"
                  aria-label="Select Menu"
                  @click="selectHeaderLayer('menu')"
                >
                  <v-icon size="16" class="tb-block-row__icon">menu</v-icon>
                  <span class="tb-block-row__label text-truncate">Menu</span>
                </button>
              </div>
              <div
                role="listitem"
                class="tb-block-row"
                :class="{ 'tb-block-row--selected': selectedHeaderLayer === 'search' }"
              >
                <button
                  class="tb-block-row__main"
                  aria-label="Select Search Input"
                  @click="selectHeaderLayer('search')"
                >
                  <v-icon size="16" class="tb-block-row__icon">search</v-icon>
                  <span class="tb-block-row__label text-truncate">Search Input</span>
                </button>
              </div>
              <div role="listitem">
                <div
                  class="tb-block-row"
                  :class="{ 'tb-block-row--selected': selectedHeaderLayer === 'account' }"
                >
                  <v-btn
                    :icon="accountTreeOpen ? 'chevron-down' : 'chevron-right'"
                    variant="text"
                    size="small"
                    density="comfortable"
                    class="tb-section-row__expand tb-block-row__expand"
                    :aria-expanded="accountTreeOpen"
                    aria-label="Expand Account layers"
                    @click="accountTreeOpen = !accountTreeOpen"
                  ></v-btn>
                  <button
                    class="tb-block-row__main"
                    aria-label="Select Account"
                    @click="selectHeaderLayer('account')"
                  >
                    <v-icon size="16" class="tb-block-row__icon">users</v-icon>
                    <span class="tb-block-row__label text-truncate">Account</span>
                  </button>
                </div>
                <div
                  v-show="accountTreeOpen"
                  class="tb-blocks tb-blocks--account"
                  role="list"
                  aria-label="Account layers"
                >
                  <div
                    v-for="sub in HEADER_ACCOUNT_SUB_LAYERS"
                    :key="sub.key"
                    role="listitem"
                    class="tb-block-row"
                    :class="{ 'tb-block-row--selected': selectedHeaderLayer === sub.key }"
                  >
                    <button
                      class="tb-block-row__main"
                      :aria-label="`Select ${sub.label}`"
                      @click="selectHeaderLayer(sub.key)"
                    >
                      <v-icon size="16" class="tb-block-row__icon">{{ sub.icon }}</v-icon>
                      <span class="tb-block-row__label text-truncate">{{ sub.label }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="leftTab === 'footer'"
          class="flex-grow-1 overflow-y-auto pa-2"
          role="list"
          aria-label="Footer layers"
        >
          <p class="text-body-2 font-weight-bold px-2 mb-2">Footer Layers</p>
          <div v-if="storeFooterSection" role="listitem">
            <div
              class="tb-section-row"
              :class="{ 'tb-section-row--selected': selectedFooterLayer === 'footer-section' }"
            >
              <v-btn
                :icon="footerSectionTreeOpen ? 'chevron-down' : 'chevron-right'"
                variant="text"
                size="small"
                density="comfortable"
                class="tb-section-row__expand"
                :aria-expanded="footerSectionTreeOpen"
                aria-label="Expand Footer Section layers"
                @click="footerSectionTreeOpen = !footerSectionTreeOpen"
              ></v-btn>
              <button
                class="tb-section-row__main"
                :class="{ 'tb-section-row--selected': selectedFooterLayer === 'footer-section' }"
                aria-label="Select Footer Section"
                @click="selectFooterLayer('footer-section')"
              >
                <v-icon size="16" class="tb-section-row__icon">{{ footerLayerSectionIcon }}</v-icon>
                <span class="tb-section-row__label text-truncate">Footer Section</span>
              </button>
              <div class="tb-section-row__actions">
                <v-btn
                  :icon="storeFooterSection.hidden ? 'eye-off' : 'eye'"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :aria-label="storeFooterSection.hidden ? 'Show Footer Section' : 'Hide Footer Section'"
                  @click="toggleFooterSectionHidden"
                ></v-btn>
                <v-btn
                  icon="trash-2"
                  variant="text"
                  size="small"
                  density="comfortable"
                  aria-label="Remove Footer Section"
                  @click="onFooterSectionDelete"
                ></v-btn>
              </div>
            </div>
            <div v-show="footerSectionTreeOpen" class="tb-blocks" role="list" aria-label="Footer Section layers">
              <div
                v-for="block in FOOTER_BLOCK_LAYERS"
                :key="block.key"
                role="listitem"
                class="tb-block-row"
                :class="{ 'tb-block-row--selected': selectedFooterLayer === block.key }"
              >
                <button
                  class="tb-block-row__main"
                  :aria-label="`Select ${block.label}`"
                  @click="selectFooterLayer(block.key)"
                >
                  <v-icon size="16" class="tb-block-row__icon">{{ block.icon }}</v-icon>
                  <span class="tb-block-row__label text-truncate">{{ block.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="leftTab === 'sections'" class="flex-grow-1 overflow-y-auto pa-2" role="list" aria-label="Template sections">
          <div
            v-for="section in templateLayerSections"
            :key="section.kind === 'categories' ? `${section.id}-${String(section.settings.showCollectionBanner)}-${String(section.settings.showChildEntities)}` : section.id"
            role="listitem"
          >
            <div
              class="tb-section-row"
              :data-section-id="section.id"
              :class="{ 'tb-section-row--selected': section.id === selectedSectionId, 'tb-section-row--hidden': section.hidden }"
            >
              <v-btn
                v-if="sectionAcceptsBlocks(section)"
                :icon="expandedSectionIds.has(section.id) ? 'chevron-down' : 'chevron-right'"
                variant="text"
                size="small"
                density="comfortable"
                class="tb-section-row__expand"
                :aria-label="expandedSectionIds.has(section.id) ? `Collapse ${section.label} blocks` : `Expand ${section.label} blocks`"
                :aria-expanded="expandedSectionIds.has(section.id)"
                @click="toggleExpanded(section.id)"
              ></v-btn>
              <span v-else class="tb-section-row__expand-spacer" aria-hidden="true"></span>
              <button class="tb-section-row__main" :aria-label="`Select ${section.label}`" @click="selectSection(section.id)">
                <v-icon size="16" class="tb-section-row__icon">{{ sectionIcon(section.kind) }}</v-icon>
                <span class="tb-section-row__label text-truncate">{{ section.label }}</span>
                <span
                  v-if="newSectionIds.has(section.id)"
                  class="tb-section-row__new"
                  role="status"
                  aria-label="New — added by Da Vinci"
                >New</span>
              </button>
              <div v-if="!isRequiredSection(section)" class="tb-section-row__actions">
                <v-btn
                  :icon="section.hidden ? 'eye-off' : 'eye'"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :aria-label="section.hidden ? `Show ${section.label}` : `Hide ${section.label}`"
                  @click="toggleHidden(section)"
                ></v-btn>
                <v-btn
                  icon="chevron-up"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :disabled="!canMoveSection(section, -1)"
                  :aria-label="`Move ${section.label} up`"
                  @click="moveSection(section, -1)"
                ></v-btn>
                <v-btn
                  icon="chevron-down"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :disabled="!canMoveSection(section, 1)"
                  :aria-label="`Move ${section.label} down`"
                  @click="moveSection(section, 1)"
                ></v-btn>
                <v-btn
                  icon="trash-2"
                  variant="text"
                  size="small"
                  density="comfortable"
                  :aria-label="`Remove ${section.label}`"
                  @click="askRemove(section)"
                ></v-btn>
              </div>
            </div>

            <!-- Nested block sub-tree (expanded, block-accepting sections) -->
            <div
              v-if="sectionAcceptsBlocks(section) && expandedSectionIds.has(section.id)"
              class="tb-blocks"
              role="list"
              :aria-label="`${section.label} blocks`"
              :key="section.kind === 'categories'
                ? `${section.id}-${String(section.settings.showCollectionBanner)}-${String(section.settings.showChildEntities)}`
                : section.id"
            >
              <template v-if="section.kind === 'blog-list'">
                <div
                  role="listitem"
                  class="tb-block-row"
                  :class="{ 'tb-block-row--selected': isSubLayerSelected(section, { key: `${section.id}-blog-image-banner`, kind: 'blog-image-banner', label: 'Image Banner', icon: 'image' }) }"
                >
                  <v-btn
                    :icon="blogImageBannerTreeOpen ? 'chevron-down' : 'chevron-right'"
                    variant="text"
                    size="small"
                    density="comfortable"
                    class="tb-section-row__expand tb-block-row__expand"
                    :aria-expanded="blogImageBannerTreeOpen"
                    aria-label="Expand Image Banner"
                    @click="blogImageBannerTreeOpen = !blogImageBannerTreeOpen"
                  ></v-btn>
                  <button
                    class="tb-block-row__main"
                    aria-label="Select Image Banner block"
                    @click="selectBlogImageBanner(section)"
                  >
                    <v-icon size="16" class="tb-block-row__icon">image</v-icon>
                    <span class="tb-block-row__label text-truncate">Image Banner</span>
                  </button>
                </div>

                <div
                  role="listitem"
                  class="tb-block-row"
                  :class="{ 'tb-block-row--selected': isSubLayerSelected(section, { key: `${section.id}-featured-blogs`, kind: 'featured-blogs', label: 'Featured Blogs', icon: 'layout-grid' }) }"
                >
                  <v-btn
                    :icon="featuredBlogsTreeOpen ? 'chevron-down' : 'chevron-right'"
                    variant="text"
                    size="small"
                    density="comfortable"
                    class="tb-section-row__expand tb-block-row__expand"
                    :aria-expanded="featuredBlogsTreeOpen"
                    aria-label="Expand Featured Blogs"
                    @click="featuredBlogsTreeOpen = !featuredBlogsTreeOpen"
                  ></v-btn>
                  <button
                    class="tb-block-row__main"
                    aria-label="Select Featured Blogs"
                    @click="selectFeaturedBlogs(section)"
                  >
                    <v-icon size="16" class="tb-block-row__icon">layout-grid</v-icon>
                    <span class="tb-block-row__label text-truncate">Featured Blogs</span>
                  </button>
                </div>

                <div v-show="featuredBlogsTreeOpen" class="tb-blocks tb-blocks--nested" role="list" aria-label="Featured Blogs blocks">
                  <div
                    v-if="blogPostsBlock(section)"
                    role="listitem"
                    class="tb-block-row tb-block-row--nested"
                    :class="{ 'tb-block-row--selected': selected?.type === 'block' && selected.sectionId === section.id && selectedBlock?.kind === 'blog-posts' }"
                  >
                    <span class="tb-section-row__expand-spacer" aria-hidden="true"></span>
                    <button
                      class="tb-block-row__main"
                      aria-label="Select Blog Posts block"
                      @click="selectBlock(section.id, blogPostsBlock(section)!.id)"
                    >
                      <v-icon size="16" class="tb-block-row__icon">layout-grid</v-icon>
                      <span class="tb-block-row__label text-truncate">Blog Posts</span>
                    </button>
                  </div>
                  <button type="button" class="tb-block-add tb-block-add--nested" disabled aria-label="Add block to Featured Blogs">
                    <v-icon size="16" class="tb-block-row__icon">plus</v-icon>
                    <span class="tb-block-row__label">Add Block</span>
                  </button>
                </div>
              </template>

              <template v-else>
                <div
                  v-for="(layer, layerIndex) in collectionSubLayersMap.get(section.id) ?? []"
                  :key="layer.key"
                  role="listitem"
                  class="tb-block-row"
                  :class="{ 'tb-block-row--selected': isSubLayerSelected(section, layer) }"
                >
                  <button
                    class="tb-block-row__main"
                    :aria-label="`Select ${layer.label} block`"
                    @click="selectSubLayer(section, layer)"
                  >
                    <v-icon size="16" class="tb-block-row__icon">{{ layer.icon }}</v-icon>
                    <span class="tb-block-row__label text-truncate">{{ layer.label }}</span>
                    <span
                      v-if="layer.kind === 'block' && newBlockIds.has(layer.block.id)"
                      class="tb-section-row__new"
                      role="status"
                      aria-label="New block"
                    >New</span>
                  </button>
                  <div v-if="layer.kind === 'block' && !isLockedBlock(layer.block)" class="tb-section-row__actions">
                    <v-btn
                      icon="chevron-up"
                      variant="text"
                      size="small"
                      density="comfortable"
                      :disabled="layerIndex === 0"
                      :aria-label="`Move ${layer.label} up`"
                      @click="moveBlock(section.id, layer.block.id, -1)"
                    ></v-btn>
                    <v-btn
                      icon="chevron-down"
                      variant="text"
                      size="small"
                      density="comfortable"
                      :disabled="layerIndex === (collectionSubLayersMap.get(section.id)?.length ?? 1) - 1"
                      :aria-label="`Move ${layer.label} down`"
                      @click="moveBlock(section.id, layer.block.id, 1)"
                    ></v-btn>
                    <v-btn
                      icon="trash-2"
                      variant="text"
                      size="small"
                      density="comfortable"
                      :aria-label="`Remove ${layer.label}`"
                      @click="askRemoveBlock(section.id, layer.block.id)"
                    ></v-btn>
                  </div>
                </div>

                <!-- Add block: menu over the block catalog -->
                <v-menu v-if="canAddBlocks(section)" location="bottom start">
                  <template #activator="{ props: menuProps }">
                    <button v-bind="menuProps" class="tb-block-add" :aria-label="`Add a block to ${section.label}`">
                      <v-icon size="16" class="tb-block-row__icon">plus</v-icon>
                      <span class="tb-block-row__label">Add block</span>
                    </button>
                  </template>
                  <v-list density="compact">
                    <v-list-item
                      v-for="def in blocksFor(section)"
                      :key="def.kind"
                      @click="addBlockToSection(section.id, def.kind)"
                    >
                      <template #prepend>
                        <v-icon size="16">{{ def.icon }}</v-icon>
                      </template>
                      <v-list-item-title class="text-body-2">{{ def.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
            </div>
          </div>

          <div v-if="!templateLayerSections.length" class="text-caption text-medium-emphasis text-center pa-4">
            No sections yet — add one below.
          </div>
        </div>

        <!-- Theme styles tab: global colors, fonts, radius, button style -->
        <div v-else class="flex-grow-1 overflow-y-auto pa-3">
          <MpFormGrid>
            <MpFormField v-for="row in styleColorRows" :key="row.key" :label="row.label">
              <template #default="{ labelId }">
                <div class="tb-swatch-row" role="radiogroup" :aria-labelledby="labelId">
                  <button
                    v-for="swatch in swatchPalette"
                    :key="swatch.value"
                    class="tb-swatch"
                    :class="{ 'tb-swatch--selected': theme.styles[row.key] === swatch.value }"
                    :style="{ background: swatch.value }"
                    role="radio"
                    :tabindex="swatchTabindex(swatch, theme.styles[row.key])"
                    :aria-checked="theme.styles[row.key] === swatch.value"
                    :aria-label="`${row.label}: ${swatch.label}`"
                    @click="setStyle({ [row.key]: swatch.value })"
                    @keydown="onSwatchKeydown($event, (v: string) => setStyle({ [row.key]: v }))"
                  ></button>
                </div>
              </template>
            </MpFormField>

            <v-divider></v-divider>

            <v-select
              :model-value="theme.styles.headingFont"
              label="Heading font"
              :items="themeFonts"
              @update:model-value="(v: string) => setStyle({ headingFont: v })"
            ></v-select>
            <v-select
              :model-value="theme.styles.bodyFont"
              label="Body font"
              :items="themeFonts"
              @update:model-value="(v: string) => setStyle({ bodyFont: v })"
            ></v-select>

            <MpFormField label="Corner radius">
              <template #default="{ labelId }">
                <v-slider
                  :model-value="theme.styles.cornerRadius"
                  :min="0"
                  :max="24"
                  :step="2"
                  thumb-label
                  :aria-labelledby="labelId"
                  @update:model-value="(v: number) => setStyle({ cornerRadius: v })"
                ></v-slider>
              </template>
            </MpFormField>

            <MpFormField label="Button style">
              <div class="d-flex flex-column gap-2">
                <MpOptionCard
                  v-for="option in buttonStyleOptions"
                  :key="option.value"
                  :selected="theme.styles.buttonStyle === option.value"
                  :title="option.title"
                  :description="option.description"
                  :icon="option.icon"
                  @click="setStyle({ buttonStyle: option.value })"
                />
              </div>
            </MpFormField>
          </MpFormGrid>
        </div>

        <div v-if="leftTab === 'sections'" class="pa-3 border-t">
          <v-btn variant="outlined" size="small" class="text-none" prepend-icon="plus" block @click="addDialog = true">
            Add section
          </v-btn>
        </div>
          </div>
        </div>
        </template>
      </aside>

      <!-- Canvas -->
      <div class="tb-canvas bg-background">
        <div class="tb-canvas__scroll">
          <div class="tb-stage mx-auto pa-6" :style="stageStyle">
            <StorefrontPreview
              :key="storefrontPreviewKey"
              :homepage="activeTemplate === 'home'
                ? 'lumos'
                : activeTemplate === 'product'
                  ? 'lumos-product'
                  : activeTemplate === 'collection'
                    ? 'lumos-collection'
                    : activeTemplate === 'search'
                      ? 'lumos-search'
                      : activeTemplate === 'blogs'
                        ? 'lumos-blogs'
                        : 'default'"
              collection-title="Bedroom Collections"
              :sections="activeSections"
              :styles="theme.styles"
              :device="device"
              interactive
              :selected-id="selectedSectionId"
              :selected-block-id="selected?.type === 'block' ? selected.id : null"
              :pending-ids="[...newSectionIds]"
              :pending-block-ids="[...newBlockIds]"
              :header-edit-active="leftTab === 'header'"
              :selected-header-layer="leftTab === 'header' ? selectedHeaderLayer : null"
              :footer-edit-active="leftTab === 'footer'"
              :selected-footer-layer="leftTab === 'footer' ? selectedFooterLayer : null"
              @select="selectSection"
              @select-block="selectBlock"
              @edit-header="onEditHeaderFromPreview"
              @select-header-layer="selectHeaderLayer"
              @edit-footer="onEditFooterFromPreview"
              @select-footer-layer="selectFooterLayer"
            />
          </div>
        </div>
      </div>

      <!-- Header settings panel (Figma Lumos Header 2928-53208) -->
      <aside
        v-if="leftTab === 'header' && selectedHeaderLayer"
        class="tb-panel-right border-l bg-surface d-flex flex-column"
      >
        <div class="pa-4 border-b d-flex align-center justify-space-between flex-shrink-0">
          <div class="d-flex align-center gap-3" style="min-width:0;">
            <v-avatar color="primary" variant="tonal" size="32" rounded="lg" class="flex-shrink-0">
              <v-icon size="16">{{ headerLayerPanelMeta(selectedHeaderLayer).icon }}</v-icon>
            </v-avatar>
            <div class="text-body-2 font-weight-bold text-truncate">
              {{ headerLayerPanelMeta(selectedHeaderLayer).title }}
            </div>
          </div>
          <v-btn icon="x" variant="text" size="small" aria-label="Close settings panel" @click="selectedHeaderLayer = null"></v-btn>
        </div>
        <div class="pa-4 flex-grow-1 overflow-y-auto">
          <MpFormGrid>
            <template v-if="selectedHeaderLayer === 'announcement'">
              <v-text-field
                :model-value="announcementText('text')"
                label="Announcement text"
                @update:model-value="(value: string) => updateAnnouncementSetting('text', value)"
              ></v-text-field>
              <v-text-field
                :model-value="announcementText('link')"
                label="Link label"
                @update:model-value="(value: string) => updateAnnouncementSetting('link', value)"
              ></v-text-field>
            </template>

            <template v-else-if="selectedHeaderLayer === 'header-section'">
              <v-divider class="mb-1"></v-divider>
              <v-text-field
                :model-value="headerText('label', 'Header Section')"
                label="Section Name"
                @update:model-value="(value: string) => updateHeaderSectionSetting('label', value)"
              ></v-text-field>
              <v-btn class="text-none tb-davinci-btn" color="primary" variant="tonal" block prepend-icon="sparkles" @click="askDaVinci">
                Edit with Da Vinci
              </v-btn>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="headerStyleSettingsOpen"
                  @click="headerStyleSettingsOpen = !headerStyleSettingsOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Style settings
                  </span>
                  <v-icon size="16">{{ headerStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="headerStyleSettingsOpen" class="tb-settings-card__body">
                  <v-select
                    :model-value="headerText('textSchema', 'Compact')"
                    label="Select Text Schema"
                    :items="['Theme default', 'Compact']"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('textSchema', value)"
                  >
                    <template #selection="{ item }">
                      <div class="tb-schema-field__selection">
                        <span class="tb-schema-field__chip tb-schema-field__chip--text" aria-hidden="true">
                          <span class="tb-schema-field__chip-label">Aa</span>
                          <span class="tb-schema-field__chip-body">Body</span>
                        </span>
                        <span class="tb-schema-field__value">{{ item.title }}</span>
                      </div>
                    </template>
                  </v-select>
                  <v-select
                    :model-value="headerText('colorSchema', 'Modern Look')"
                    label="Select Color Schema"
                    :items="['Theme default', 'Modern Look']"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('colorSchema', value)"
                  >
                    <template #selection="{ item }">
                      <div class="tb-schema-field__selection">
                        <span class="tb-schema-field__chip tb-schema-field__chip--color" aria-hidden="true">
                          <span class="tb-schema-field__swatch tb-schema-field__swatch--primary"></span>
                          <span class="tb-schema-field__swatch tb-schema-field__swatch--muted"></span>
                        </span>
                        <span class="tb-schema-field__value">{{ item.title }}</span>
                      </div>
                    </template>
                  </v-select>
                  <v-select
                    :model-value="headerText('headerScroll', 'Scroll with site')"
                    label="Header Scroll Settings"
                    :items="['Scroll with site', 'Sticky header']"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('headerScroll', value)"
                  ></v-select>

                  <MpFormSection title="Header padding" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical header padding"
                          :model-value="String(headerNum('headerPaddingVertical', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setHeaderPadding('headerPaddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal header padding"
                          :model-value="String(headerNum('headerPaddingHorizontal', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setHeaderPadding('headerPaddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="headerPaddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="headerPaddingLinked ? 'primary' : undefined"
                      :aria-pressed="headerPaddingLinked"
                      :aria-label="headerPaddingLinked ? 'Unlink vertical and horizontal padding' : 'Link vertical and horizontal padding'"
                      @click="toggleHeaderPaddingLinked"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="Section alignment" />
                  <div class="tb-align">
                    <MpSegmentedControl
                      :model-value="headerText('alignHorizontal', 'Left')"
                      size="sm"
                      ariaLabel="Horizontal section alignment"
                      :items="[
                        { value: 'Left', icon: 'align-left', tooltip: 'Left' },
                        { value: 'Center', icon: 'align-center', tooltip: 'Center' },
                        { value: 'Right', icon: 'align-right', tooltip: 'Right' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('alignHorizontal', value) }"
                    />
                    <MpSegmentedControl
                      :model-value="headerText('alignVertical', 'Center')"
                      size="sm"
                      ariaLabel="Vertical section alignment"
                      :items="[
                        { value: 'Top', icon: 'align-start-vertical', tooltip: 'Top' },
                        { value: 'Center', icon: 'align-center-vertical', tooltip: 'Center' },
                        { value: 'Bottom', icon: 'align-end-vertical', tooltip: 'Bottom' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('alignVertical', value) }"
                    />
                  </div>

                  <v-divider class="my-2"></v-divider>
                  <div class="tb-grid-metric">
                    <span class="tb-grid-metric__label">
                      <v-icon size="16">layers</v-icon>
                      Shadow
                    </span>
                    <v-switch
                      :model-value="headerFlag('showShadow', false)"
                      hide-details
                      density="compact"
                      color="primary"
                      aria-label="Shadow"
                      @update:model-value="(value: unknown) => updateHeaderSectionSetting('showShadow', value === true)"
                    ></v-switch>
                  </div>
                </div>
              </div>

              <v-divider class="my-2"></v-divider>
              <MpFormSection title="Logo" />
              <v-select
                :model-value="headerLogoSelect()"
                label="Select Logo"
                :items="[...LOGO_SELECT_OPTIONS]"
                @update:model-value="(value: string) => updateHeaderSectionSetting('logoSelect', value)"
              ></v-select>
              <v-select
                :model-value="headerLogoPosition()"
                label="Logo Position"
                :items="[...LOGO_POSITION_OPTIONS]"
                @update:model-value="(value: string) => updateHeaderSectionSetting('logoPosition', value)"
              ></v-select>
            </template>

            <template v-else-if="selectedHeaderLayer === 'logo'">
              <v-divider class="mb-1"></v-divider>
              <v-select
                :model-value="headerLogoSelect()"
                label="Select Logo"
                :items="[...LOGO_SELECT_OPTIONS]"
                @update:model-value="(value: string) => updateHeaderSectionSetting('logoSelect', value)"
              ></v-select>
              <v-select
                :model-value="headerLogoPosition()"
                label="Logo Position"
                :items="[...LOGO_POSITION_OPTIONS]"
                @update:model-value="(value: string) => updateHeaderSectionSetting('logoPosition', value)"
              ></v-select>
            </template>

            <template v-else-if="selectedHeaderLayer === 'menu'">
              <v-divider class="mb-1"></v-divider>
              <v-select
                :model-value="headerMenuSelect()"
                label="Select Menu"
                :items="[...MENU_SELECT_OPTIONS]"
                @update:model-value="(value: string) => updateHeaderSectionSetting('menuSelect', value)"
              ></v-select>
              <v-checkbox
                :model-value="headerFlag('menuUseLinkForHidden', false)"
                label="Use link to see hidden items"
                hide-details
                density="compact"
                color="primary"
                @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('menuUseLinkForHidden', value === true)"
              ></v-checkbox>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="menuLayoutCardOpen"
                  @click="menuLayoutCardOpen = !menuLayoutCardOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">layout-grid</v-icon>
                    Layout
                  </span>
                  <v-icon size="16">{{ menuLayoutCardOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="menuLayoutCardOpen" class="tb-settings-card__body">
                  <p class="tb-layout-section__subhead">Menu Layout</p>
                  <div class="tb-layout-picker">
                    <v-btn
                      icon="chevron-left"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Previous menu layout"
                      @click="cycleMenuLayoutType(-1)"
                    ></v-btn>
                    <div class="tb-layout-picker__card">
                      <div class="tb-layout-picker__icon-well" aria-hidden="true">
                        <div
                          class="tb-menu-layout-preview"
                          :class="{
                            'tb-menu-layout-preview--horizontal': headerMenuLayoutType() === 'Horizontal Menu',
                            'tb-menu-layout-preview--drawer': headerMenuLayoutType() === 'Drawer',
                          }"
                        >
                          <span v-for="bar in (headerMenuLayoutType() === 'Drawer' ? 3 : 4)" :key="bar" />
                        </div>
                      </div>
                      <span class="tb-layout-picker__name">{{ headerMenuLayoutType() }}</span>
                    </div>
                    <v-btn
                      icon="chevron-right"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Next menu layout"
                      @click="cycleMenuLayoutType(1)"
                    ></v-btn>
                  </div>
                  <v-select
                    :model-value="headerMenuDesign()"
                    label="Menu Design"
                    :items="[...MENU_DESIGN_OPTIONS]"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('menuDesign', value)"
                  ></v-select>
                </div>
              </div>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="menuStyleCardOpen"
                  @click="menuStyleCardOpen = !menuStyleCardOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Menu Style
                  </span>
                  <v-icon size="16">{{ menuStyleCardOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="menuStyleCardOpen" class="tb-settings-card__body">
                  <MpFormSection title="Section padding" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical menu padding"
                          :model-value="String(headerNum('menuPaddingVertical', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setMenuPadding('menuPaddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal menu padding"
                          :model-value="String(headerNum('menuPaddingHorizontal', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setMenuPadding('menuPaddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="menuPaddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="menuPaddingLinked ? 'primary' : undefined"
                      :aria-pressed="menuPaddingLinked"
                      :aria-label="menuPaddingLinked ? 'Unlink menu vertical and horizontal padding' : 'Link menu vertical and horizontal padding'"
                      @click="toggleMenuPaddingLinked"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="Section alignment" />
                  <div class="tb-align">
                    <MpSegmentedControl
                      :model-value="headerText('menuAlignHorizontal', 'Center')"
                      size="sm"
                      ariaLabel="Horizontal menu alignment"
                      :items="[
                        { value: 'Left', icon: 'align-left', tooltip: 'Left' },
                        { value: 'Center', icon: 'align-center', tooltip: 'Center' },
                        { value: 'Right', icon: 'align-right', tooltip: 'Right' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('menuAlignHorizontal', value) }"
                    />
                    <MpSegmentedControl
                      :model-value="headerText('menuAlignVertical', 'Center')"
                      size="sm"
                      ariaLabel="Vertical menu alignment"
                      :items="[
                        { value: 'Top', icon: 'align-start-vertical', tooltip: 'Top' },
                        { value: 'Center', icon: 'align-center-vertical', tooltip: 'Center' },
                        { value: 'Bottom', icon: 'align-end-vertical', tooltip: 'Bottom' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('menuAlignVertical', value) }"
                    />
                  </div>

                  <template v-if="!isDrawerMenuLayout">
                    <v-divider class="my-2"></v-divider>
                    <v-checkbox
                      :model-value="headerFlag('menuHighlightSelected', false)"
                      label="Highlight selected"
                      hide-details
                      density="compact"
                      color="primary"
                      @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('menuHighlightSelected', value === true)"
                    ></v-checkbox>
                    <v-checkbox
                      :model-value="headerFlag('menuAddDivider', false)"
                      label="Add divider"
                      hide-details
                      density="compact"
                      color="primary"
                      @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('menuAddDivider', value === true)"
                    ></v-checkbox>
                    <v-checkbox
                      :model-value="headerFlag('menuAddBackground', false)"
                      label="Add background"
                      hide-details
                      density="compact"
                      color="primary"
                      @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('menuAddBackground', value === true)"
                    ></v-checkbox>
                  </template>
                </div>
              </div>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="menuDropdownStyleOpen"
                  @click="menuDropdownStyleOpen = !menuDropdownStyleOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Dropdown Style
                  </span>
                  <v-icon size="16">{{ menuDropdownStyleOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="menuDropdownStyleOpen" class="tb-settings-card__body">
                  <MpFormSection title="Section padding" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical dropdown padding"
                          :model-value="String(headerNum('dropdownPaddingVertical', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setDropdownPadding('dropdownPaddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal dropdown padding"
                          :model-value="String(headerNum('dropdownPaddingHorizontal', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setDropdownPadding('dropdownPaddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="dropdownPaddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="dropdownPaddingLinked ? 'primary' : undefined"
                      :aria-pressed="dropdownPaddingLinked"
                      :aria-label="dropdownPaddingLinked ? 'Unlink dropdown vertical and horizontal padding' : 'Link dropdown vertical and horizontal padding'"
                      @click="toggleDropdownPaddingLinked"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="Section alignment" />
                  <div class="tb-align">
                    <MpSegmentedControl
                      :model-value="headerText('dropdownAlignHorizontal', 'Center')"
                      size="sm"
                      ariaLabel="Horizontal dropdown alignment"
                      :items="[
                        { value: 'Left', icon: 'align-left', tooltip: 'Left' },
                        { value: 'Center', icon: 'align-center', tooltip: 'Center' },
                        { value: 'Right', icon: 'align-right', tooltip: 'Right' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('dropdownAlignHorizontal', value) }"
                    />
                    <MpSegmentedControl
                      :model-value="headerText('dropdownAlignVertical', 'Center')"
                      size="sm"
                      ariaLabel="Vertical dropdown alignment"
                      :items="[
                        { value: 'Top', icon: 'align-start-vertical', tooltip: 'Top' },
                        { value: 'Center', icon: 'align-center-vertical', tooltip: 'Center' },
                        { value: 'Bottom', icon: 'align-end-vertical', tooltip: 'Bottom' },
                      ]"
                      @update:model-value="(value) => { if (value) updateHeaderSectionSetting('dropdownAlignVertical', value) }"
                    />
                  </div>

                  <v-divider class="my-2"></v-divider>
                  <v-switch
                    :model-value="headerFlag('dropdownShowSubcategoryImages', true)"
                    label="Show subcategory images"
                    hide-details
                    density="compact"
                    color="primary"
                    @update:model-value="(value: unknown) => updateHeaderSectionSetting('dropdownShowSubcategoryImages', value === true)"
                  ></v-switch>

                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="CTA Button" />
                  <v-text-field
                    :model-value="headerText('dropdownCtaLabel', 'SEE MORE')"
                    label="Button label"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('dropdownCtaLabel', value)"
                  ></v-text-field>
                  <v-text-field
                    :model-value="headerText('dropdownCtaLink', 'https://demo.maropost.com')"
                    label="Link"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('dropdownCtaLink', value)"
                  ></v-text-field>

                  <v-divider class="my-2"></v-divider>
                  <div class="tb-grid-metric">
                    <span class="tb-grid-metric__label">
                      <v-icon size="16">layers</v-icon>
                      Shadow
                    </span>
                    <v-switch
                      :model-value="headerFlag('dropdownShowShadow', true)"
                      hide-details
                      density="compact"
                      color="primary"
                      aria-label="Dropdown shadow"
                      @update:model-value="(value: unknown) => updateHeaderSectionSetting('dropdownShowShadow', value === true)"
                    ></v-switch>
                  </div>
                  <v-select
                    v-if="headerFlag('dropdownShowShadow', true)"
                    :model-value="headerText('dropdownShadowPreset', 'Primary shadow')"
                    label="Select shadow"
                    :items="[...DROPDOWN_SHADOW_OPTIONS]"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('dropdownShadowPreset', value)"
                  ></v-select>
                </div>
              </div>
            </template>

            <template v-else-if="selectedHeaderLayer === 'search'">
              <v-divider class="mb-1"></v-divider>
              <v-checkbox
                :model-value="headerFlag('searchShowSuggestionsWhenTyping', true)"
                label="Show suggestions when user is typing"
                hide-details
                density="compact"
                color="primary"
                @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('searchShowSuggestionsWhenTyping', value === true)"
              ></v-checkbox>
              <v-checkbox
                :model-value="headerFlag('searchShowTrendingBeforeStart', false)"
                label="Show trending items before user starts"
                hide-details
                density="compact"
                color="primary"
                @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('searchShowTrendingBeforeStart', value === true)"
              ></v-checkbox>
              <v-checkbox
                :model-value="headerFlag('searchUseLinkForHidden', false)"
                label="Use link to see hidden items"
                hide-details
                density="compact"
                color="primary"
                @update:model-value="(value: boolean | null) => updateHeaderSectionSetting('searchUseLinkForHidden', value === true)"
              ></v-checkbox>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="searchLimitationsCardOpen"
                  @click="searchLimitationsCardOpen = !searchLimitationsCardOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Limitations
                  </span>
                  <v-icon size="16">{{ searchLimitationsCardOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="searchLimitationsCardOpen" class="tb-settings-card__body">
                  <v-text-field
                    type="number"
                    :model-value="String(headerNum('searchSuggestionsLimit', 5))"
                    label="Suggestions limit"
                    min="1"
                    max="20"
                    @update:model-value="(value: string) => setHeaderNumeric('searchSuggestionsLimit', value, 1, 20)"
                  ></v-text-field>
                  <v-text-field
                    type="number"
                    :model-value="String(headerNum('searchProductMatchesLimit', 5))"
                    label="Product matches limit"
                    min="1"
                    max="20"
                    @update:model-value="(value: string) => setHeaderNumeric('searchProductMatchesLimit', value, 1, 20)"
                  ></v-text-field>
                  <v-select
                    :model-value="headerText('searchSuggestionsLayout', 'Vertical')"
                    label="Suggestions layout"
                    :items="[...SEARCH_SUGGESTIONS_LAYOUT_OPTIONS]"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('searchSuggestionsLayout', value)"
                  ></v-select>
                </div>
              </div>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="searchInputStyleCardOpen"
                  @click="searchInputStyleCardOpen = !searchInputStyleCardOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Search Input Style
                  </span>
                  <v-icon size="16">{{ searchInputStyleCardOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="searchInputStyleCardOpen" class="tb-settings-card__body">
                  <v-select
                    :model-value="headerSearchStyle()"
                    label="Search Style"
                    :items="[...SEARCH_STYLE_OPTIONS]"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('searchStyle', value)"
                  ></v-select>
                  <v-select
                    :model-value="headerSearchPosition()"
                    label="Search Position"
                    :items="[...SEARCH_POSITION_OPTIONS]"
                    @update:model-value="(value: string) => updateHeaderSectionSetting('searchPosition', value)"
                  ></v-select>

                  <MpFormField label="Border Width">
                    <template #default>
                      <div class="tb-opacity">
                        <v-slider
                          :model-value="headerNum('searchBorderWidth', 1)"
                          :min="0"
                          :max="8"
                          :step="1"
                          hide-details
                          color="primary"
                          @update:model-value="(value: number) => setHeaderNumeric('searchBorderWidth', value, 0, 8)"
                        ></v-slider>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-opacity__field tb-opacity__field--px"
                          aria-label="Search border width in pixels"
                          suffix="px"
                          :model-value="String(headerNum('searchBorderWidth', 1))"
                          min="0"
                          max="8"
                          @update:model-value="(value: string) => setHeaderNumeric('searchBorderWidth', value, 0, 8)"
                        ></v-text-field>
                      </div>
                    </template>
                  </MpFormField>

                  <v-divider class="my-2"></v-divider>

                  <MpFormField label="Corner Radius">
                    <template #default>
                      <div class="tb-opacity">
                        <v-slider
                          :model-value="headerNum('searchCornerRadius', 4)"
                          :min="0"
                          :max="24"
                          :step="1"
                          hide-details
                          color="primary"
                          @update:model-value="(value: number) => setHeaderNumeric('searchCornerRadius', value, 0, 24)"
                        ></v-slider>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-opacity__field tb-opacity__field--px"
                          aria-label="Search corner radius in pixels"
                          suffix="px"
                          :model-value="String(headerNum('searchCornerRadius', 4))"
                          min="0"
                          max="24"
                          @update:model-value="(value: string) => setHeaderNumeric('searchCornerRadius', value, 0, 24)"
                        ></v-text-field>
                      </div>
                    </template>
                  </MpFormField>
                </div>
              </div>
            </template>

            <template v-else-if="selectedHeaderLayer === 'account'">
              <p class="text-body-2 text-medium-emphasis mb-0">
                Account groups the storefront utilities in the header toolbar.
              </p>
              <v-switch
                v-for="sub in HEADER_ACCOUNT_SUB_LAYERS"
                :key="sub.key"
                :model-value="headerFlag(sub.settingKey, true)"
                :label="sub.toggleLabel"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => updateHeaderSectionSetting(sub.settingKey, value === true)"
              ></v-switch>
            </template>

            <template v-else-if="selectedAccountSubLayer">
              <v-switch
                :model-value="headerFlag(selectedAccountSubLayer!.settingKey, true)"
                :label="selectedAccountSubLayer!.toggleLabel"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => updateHeaderSectionSetting(selectedAccountSubLayer!.settingKey, value === true)"
              ></v-switch>
            </template>

            <MpAlert tone="info" live="off">
              Header changes apply to the preview for this template. Publish to go live.
            </MpAlert>
          </MpFormGrid>
        </div>
      </aside>

      <!-- Footer settings panel -->
      <aside
        v-else-if="leftTab === 'footer' && selectedFooterLayer"
        class="tb-panel-right border-l bg-surface d-flex flex-column"
      >
        <div class="pa-4 border-b d-flex align-center justify-space-between flex-shrink-0">
          <div class="d-flex align-center gap-3" style="min-width:0;">
            <v-avatar color="primary" variant="tonal" size="32" rounded="lg" class="flex-shrink-0">
              <v-icon size="16">{{ footerLayerPanelMeta(selectedFooterLayer).icon }}</v-icon>
            </v-avatar>
            <div class="text-body-2 font-weight-bold text-truncate">
              {{ footerLayerPanelMeta(selectedFooterLayer).title }}
            </div>
          </div>
          <v-btn icon="x" variant="text" size="small" aria-label="Close settings panel" @click="selectedFooterLayer = null"></v-btn>
        </div>
        <div class="pa-4 flex-grow-1 overflow-y-auto">
          <MpFormGrid>
            <template v-if="selectedFooterLayer === 'footer-section'">
              <v-divider class="mb-1"></v-divider>
              <v-text-field
                :model-value="footerText('label', 'Footer Section')"
                label="Section Name"
                @update:model-value="(value: string) => updateFooterSectionSetting('label', value)"
              ></v-text-field>
              <v-btn class="text-none tb-davinci-btn" color="primary" variant="tonal" block prepend-icon="sparkles" @click="askDaVinci">
                Edit with Da Vinci
              </v-btn>
              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="footerStyleSettingsOpen"
                  @click="footerStyleSettingsOpen = !footerStyleSettingsOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Style settings
                  </span>
                  <v-icon size="16">{{ footerStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="footerStyleSettingsOpen" class="tb-settings-card__body">
                  <v-select
                    :model-value="footerText('textSchema', 'Compact')"
                    label="Select Text Schema"
                    :items="['Theme default', 'Compact']"
                    @update:model-value="(value: string) => updateFooterSectionSetting('textSchema', value)"
                  ></v-select>
                  <v-select
                    :model-value="footerText('colorSchema', 'Modern Look')"
                    label="Select Color Schema"
                    :items="['Theme default', 'Modern Look']"
                    @update:model-value="(value: string) => updateFooterSectionSetting('colorSchema', value)"
                  ></v-select>
                  <v-slider
                    :model-value="footerNum('columns', 3)"
                    label="Link columns"
                    :min="2"
                    :max="4"
                    :step="1"
                    show-ticks="always"
                    tick-size="2"
                    thumb-label
                    @update:model-value="(value: number) => updateFooterSectionSetting('columns', value)"
                  ></v-slider>
                  <v-switch
                    :model-value="footerFlag('showSocial', true)"
                    label="Show social icons"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => updateFooterSectionSetting('showSocial', value === true)"
                  ></v-switch>
                  <v-switch
                    :model-value="footerFlag('showNewsletter', true)"
                    label="Show newsletter"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => updateFooterSectionSetting('showNewsletter', value === true)"
                  ></v-switch>
                </div>
              </div>
            </template>
            <template v-else-if="selectedFooterLayer === 'link-columns'">
              <v-slider
                :model-value="footerNum('columns', 3)"
                label="Link columns"
                :min="2"
                :max="4"
                :step="1"
                show-ticks="always"
                tick-size="2"
                thumb-label
                @update:model-value="(value: number) => updateFooterSectionSetting('columns', value)"
              ></v-slider>
            </template>
            <template v-else-if="selectedFooterLayer === 'social'">
              <v-switch
                :model-value="footerFlag('showSocial', true)"
                label="Show social icons"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => updateFooterSectionSetting('showSocial', value === true)"
              ></v-switch>
            </template>
            <template v-else-if="selectedFooterLayer === 'newsletter'">
              <v-switch
                :model-value="footerFlag('showNewsletter', true)"
                label="Show newsletter"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => updateFooterSectionSetting('showNewsletter', value === true)"
              ></v-switch>
            </template>
            <template v-else-if="selectedFooterLayer === 'brand' || selectedFooterLayer === 'legal'">
              <p class="text-body-2 text-medium-emphasis mb-0">
                Edit brand copy and legal links in Da Vinci or your theme code.
              </p>
            </template>
            <MpAlert tone="info" live="off">
              Footer changes apply to the preview for this template. Publish to go live.
            </MpAlert>
          </MpFormGrid>
        </div>
      </aside>

      <!-- Settings panel: section OR block (schema-driven, edits apply live) -->
      <aside
        v-else-if="leftTab === 'sections' && selectedSection && selectedSection.kind !== 'header' && selectedSection.kind !== 'footer' && (isBlockSelected ? selectedBlockDef : selectedSectionDef)"
        class="tb-panel-right border-l bg-surface d-flex flex-column"
      >
        <div class="pa-4 border-b d-flex align-center justify-space-between flex-shrink-0">
          <div class="d-flex align-center gap-3" style="min-width:0;">
            <v-avatar color="primary" variant="tonal" size="32" rounded="lg" class="flex-shrink-0">
              <v-icon size="16">{{ (isBlockSelected ? selectedBlockDef : selectedSectionDef)?.icon }}</v-icon>
            </v-avatar>
            <div style="min-width:0;">
              <div class="text-body-2 font-weight-bold text-truncate">
                {{ isBlogPostsBlock ? 'Blog Posts' : isBlockSelected ? blockLabel(selectedBlock!) : selectedSection.label }}
              </div>
              <div v-if="isBlockSelected" class="text-caption text-medium-emphasis text-truncate">
                in {{ selectedSection.label }}
              </div>
            </div>
          </div>
          <v-btn icon="x" variant="text" size="small" aria-label="Close settings panel" @click="closePanel"></v-btn>
        </div>

        <div class="pa-4 flex-grow-1 overflow-y-auto">
          <MpFormGrid>
            <template v-if="isCollectionsContext && !isCollectionBannerBlock && !isChildCategoryGridBlock && !isCollectionGridBlock">
              <v-checkbox
                v-for="field in collectionsLeadFields"
                :key="field.key"
                :model-value="collectionsLeadSettings[field.key] === true"
                :label="field.label"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => setCollectionsLeadSetting(field.key, value === true)"
              ></v-checkbox>
            </template>

            <!-- Collection Banner block (Figma Lumos settings panel) -->
            <template v-if="isCollectionBannerBlock">
              <v-text-field
                :model-value="blockSettingText('label')"
                label="Section name"
                @update:model-value="(value: string) => setBlockSetting('label', value)"
              ></v-text-field>
              <v-btn
                class="text-none tb-davinci-btn"
                color="primary"
                variant="tonal"
                prepend-icon="sparkles"
                block
                @click="askDaVinci"
              >
                Edit with Da Vinci
              </v-btn>

              <div class="tb-settings-card">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="bannerContentOpen"
                  @click="bannerContentOpen = !bannerContentOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">palette</v-icon>
                    Content settings
                  </span>
                  <v-icon size="16">{{ bannerContentOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="bannerContentOpen" class="tb-settings-card__body">
                  <v-checkbox
                    :model-value="panelSettings.showCollectionDescription === true"
                    label="Show collection description"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('showCollectionDescription', value === true)"
                  ></v-checkbox>
                  <v-divider class="my-2"></v-divider>
                  <v-checkbox
                    :model-value="panelSettings.showCollectionImage === true"
                    label="Show collection image"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('showCollectionImage', value === true)"
                  ></v-checkbox>
                  <v-btn
                    class="text-none mt-2"
                    variant="outlined"
                    block
                    prepend-icon="scan"
                    @click="toast.info('Focus point editor is coming soon.')"
                  >
                    Focus point
                  </v-btn>
                  <MpFormField label="Image opacity">
                    <template #default>
                      <div class="tb-opacity">
                        <v-slider
                          :model-value="panelNum('imageOpacity', 100)"
                          :min="0"
                          :max="100"
                          :step="1"
                          hide-details
                          color="primary"
                          @update:model-value="(value: number) => setBlockSetting('imageOpacity', value)"
                        ></v-slider>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-opacity__field"
                          aria-label="Image opacity"
                          :model-value="String(panelNum('imageOpacity', 100))"
                          min="0"
                          max="100"
                          @update:model-value="(value: string) => setBlockSetting('imageOpacity', value === '' ? 0 : Number(value))"
                        ></v-text-field>
                      </div>
                    </template>
                  </MpFormField>
                </div>
              </div>

              <div class="tb-settings-card">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="bannerStyleOpen"
                  @click="bannerStyleOpen = !bannerStyleOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">palette</v-icon>
                    Style settings
                  </span>
                  <v-icon size="16">{{ bannerStyleOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="bannerStyleOpen" class="tb-settings-card__body">
                  <v-select
                    :model-value="panelText('colorSchema')"
                    label="Color schema"
                    :items="['Theme default', 'Modern Look']"
                    @update:model-value="(value: string) => setBlockSetting('colorSchema', value)"
                  ></v-select>
                  <v-select
                    :model-value="panelText('textSchema')"
                    label="Text schema"
                    :items="['Theme default', 'Compact']"
                    @update:model-value="(value: string) => setBlockSetting('textSchema', value)"
                  ></v-select>
                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="Section padding" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical padding"
                          :model-value="String(panelNum('paddingVertical', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setPadding('paddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal padding"
                          :model-value="String(panelNum('paddingHorizontal', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setPadding('paddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="paddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="paddingLinked ? 'primary' : undefined"
                      :aria-pressed="paddingLinked"
                      :aria-label="paddingLinked ? 'Unlink vertical and horizontal padding' : 'Link vertical and horizontal padding'"
                      @click="togglePaddingLink"
                    ></v-btn>
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <MpFormSection title="Section alignment" />
                  <div class="tb-align">
                    <MpSegmentedControl
                      :model-value="panelText('alignHorizontal')"
                      size="sm"
                      aria-label="Horizontal alignment"
                      :items="[
                        { value: 'Left', icon: 'align-left', tooltip: 'Left' },
                        { value: 'Center', icon: 'align-center', tooltip: 'Center' },
                        { value: 'Right', icon: 'align-right', tooltip: 'Right' },
                      ]"
                      @update:model-value="(value) => { if (value) setBlockSetting('alignHorizontal', value) }"
                    />
                    <MpSegmentedControl
                      :model-value="panelText('alignVertical')"
                      size="sm"
                      aria-label="Vertical alignment"
                      :items="[
                        { value: 'Top', icon: 'align-start-vertical', tooltip: 'Top' },
                        { value: 'Center', icon: 'align-center-vertical', tooltip: 'Center' },
                        { value: 'Bottom', icon: 'align-end-vertical', tooltip: 'Bottom' },
                      ]"
                      @update:model-value="(value) => { if (value) setBlockSetting('alignVertical', value) }"
                    />
                  </div>
                </div>
              </div>
            </template>

            <!-- Child Category Grid (Figma 3183-95252) -->
            <template v-if="isChildCategoryGridBlock">
              <div class="tb-settings-card">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="childLayoutStyleOpen"
                  @click="childLayoutStyleOpen = !childLayoutStyleOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">palette</v-icon>
                    Layout Style
                  </span>
                  <v-icon size="16">{{ childLayoutStyleOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="childLayoutStyleOpen" class="tb-settings-card__body">
                  <p class="tb-layout-section__subhead">Layout</p>
                  <div class="tb-layout-picker">
                    <v-btn
                      icon="chevron-left"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Previous layout"
                      @click="cycleChildCategoryLayout(-1)"
                    ></v-btn>
                    <div class="tb-layout-picker__card">
                      <div class="tb-layout-picker__icon-well" aria-hidden="true">
                        <img
                          class="tb-layout-picker__icon"
                          :src="lumosLayoutPickerIcon(panelText('layout') || 'Grid')"
                          alt=""
                        >
                      </div>
                      <span class="tb-layout-picker__name">{{ panelText('layout') || 'Grid' }}</span>
                    </div>
                    <v-btn
                      icon="chevron-right"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Next layout"
                      @click="cycleChildCategoryLayout(1)"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <p class="tb-layout-section__subhead">Card Style</p>
                  <div class="tb-layout-picker">
                    <v-btn
                      icon="chevron-left"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Previous card style"
                      @click="cycleChildCategoryCardStyle(-1)"
                    ></v-btn>
                    <div class="tb-layout-picker__card">
                      <div class="tb-layout-picker__icon-well" aria-hidden="true">
                        <img
                          class="tb-layout-picker__icon"
                          :src="childCategoryCardStyleIcon"
                          alt=""
                        >
                      </div>
                      <span class="tb-layout-picker__name">{{ childCategoryCardStyle }}</span>
                    </div>
                    <v-btn
                      icon="chevron-right"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Next card style"
                      @click="cycleChildCategoryCardStyle(1)"
                    ></v-btn>
                  </div>
                </div>
              </div>

              <div class="tb-settings-card">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="childCategoryCardOpen"
                  @click="childCategoryCardOpen = !childCategoryCardOpen"
                >
                  <span class="tb-settings-card__title">Child Category Card</span>
                  <v-icon size="16">{{ childCategoryCardOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="childCategoryCardOpen" class="tb-settings-card__body">
                  <MpFormSection title="Card Padding" :heading-level="4" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical card padding"
                          :model-value="String(panelNum('cardPaddingVertical', 12))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setCardPadding('cardPaddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal card padding"
                          :model-value="String(panelNum('cardPaddingHorizontal', 32))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setCardPadding('cardPaddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="childCardPaddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="childCardPaddingLinked ? 'primary' : undefined"
                      :aria-pressed="childCardPaddingLinked"
                      :aria-label="childCardPaddingLinked ? 'Unlink vertical and horizontal card padding' : 'Link vertical and horizontal card padding'"
                      @click="toggleChildCardPaddingLink"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <MpFormField label="Border Width">
                    <template #default>
                      <div class="tb-opacity">
                        <v-slider
                          :model-value="panelNum('borderWidth', 1)"
                          :min="0"
                          :max="8"
                          :step="1"
                          hide-details
                          color="primary"
                          @update:model-value="(value: number) => setBlockSetting('borderWidth', value)"
                        ></v-slider>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-opacity__field tb-opacity__field--px"
                          aria-label="Border width in pixels"
                          suffix="px"
                          :model-value="String(panelNum('borderWidth', 1))"
                          min="0"
                          max="8"
                          @update:model-value="(value: string) => setBlockSetting('borderWidth', value === '' ? 0 : Number(value))"
                        ></v-text-field>
                      </div>
                    </template>
                  </MpFormField>

                  <MpFormField label="Corner Radius">
                    <template #default>
                      <div class="tb-opacity">
                        <v-slider
                          :model-value="panelNum('cornerRadius', 24)"
                          :min="0"
                          :max="48"
                          :step="1"
                          hide-details
                          color="primary"
                          @update:model-value="(value: number) => setBlockSetting('cornerRadius', value)"
                        ></v-slider>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-opacity__field tb-opacity__field--px"
                          aria-label="Corner radius in pixels"
                          suffix="px"
                          :model-value="String(panelNum('cornerRadius', 24))"
                          min="0"
                          max="48"
                          @update:model-value="(value: string) => setBlockSetting('cornerRadius', value === '' ? 0 : Number(value))"
                        ></v-text-field>
                      </div>
                    </template>
                  </MpFormField>

                  <v-divider class="my-2"></v-divider>

                  <p class="tb-layout-section__subhead">Card Alignment</p>
                  <div class="tb-align">
                    <MpSegmentedControl
                      :model-value="panelText('cardAlignHorizontal')"
                      size="sm"
                      aria-label="Horizontal card alignment"
                      :items="[
                        { value: 'Left', icon: 'align-left', tooltip: 'Left' },
                        { value: 'Center', icon: 'align-center', tooltip: 'Center' },
                        { value: 'Right', icon: 'align-right', tooltip: 'Right' },
                      ]"
                      @update:model-value="(value) => { if (value) setBlockSetting('cardAlignHorizontal', value) }"
                    />
                    <MpSegmentedControl
                      :model-value="panelText('cardAlignVertical')"
                      size="sm"
                      aria-label="Vertical card alignment"
                      :items="[
                        { value: 'Top', icon: 'align-start-vertical', tooltip: 'Top' },
                        { value: 'Center', icon: 'align-center-vertical', tooltip: 'Center' },
                        { value: 'Bottom', icon: 'align-end-vertical', tooltip: 'Bottom' },
                      ]"
                      @update:model-value="(value) => { if (value) setBlockSetting('cardAlignVertical', value) }"
                    />
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="d-flex align-center justify-space-between">
                    <span class="tb-settings-card__title">
                      <v-icon size="16">square</v-icon>
                      Shadow
                    </span>
                    <v-switch
                      :model-value="panelSettings.cardShadow === true"
                      hide-details
                      color="primary"
                      density="compact"
                      aria-label="Card shadow"
                      @update:model-value="(value: unknown) => setBlockSetting('cardShadow', value === true)"
                    ></v-switch>
                  </div>
                </div>
              </div>
            </template>

            <!-- PDP Product Detail block (Figma Lumos 3580-93444) -->
            <template v-if="isPdpDetailBlock">
              <v-select
                :model-value="panelText('imageZoom') || 'No zoom'"
                label="Image zoom"
                :items="['No zoom', 'Zoom on hover', 'Lightbox']"
                @update:model-value="(value: string) => setBlockSetting('imageZoom', value)"
              ></v-select>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="pdpDetailStyleSettingsOpen"
                  @click="pdpDetailStyleSettingsOpen = !pdpDetailStyleSettingsOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">sliders-horizontal</v-icon>
                    Style settings
                  </span>
                  <v-icon size="16">{{ pdpDetailStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="pdpDetailStyleSettingsOpen" class="tb-settings-card__body">
                  <p class="tb-layout-section__subhead">Slider layout</p>
                  <div class="tb-layout-picker">
                    <v-btn
                      icon="chevron-left"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Previous slider layout"
                      @click="cyclePdpSliderLayout(-1)"
                    ></v-btn>
                    <div class="tb-layout-picker__card">
                      <div class="tb-layout-picker__icon-well" aria-hidden="true">
                        <img
                          class="tb-layout-picker__icon"
                          :src="pdpSliderLayoutIcon(pdpSliderLayout)"
                          alt=""
                        >
                      </div>
                      <span class="tb-layout-picker__name">{{ pdpSliderLayout }}</span>
                    </div>
                    <v-btn
                      icon="chevron-right"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Next slider layout"
                      @click="cyclePdpSliderLayout(1)"
                    ></v-btn>
                  </div>

                  <v-divider class="my-2"></v-divider>

                  <div class="tb-filter-position">
                    <p class="tb-filter-position__label">Desktop Media Position</p>
                    <div class="tb-filter-position__track" role="radiogroup" aria-label="Desktop Media Position">
                      <button
                        type="button"
                        class="tb-filter-position__chip"
                        :class="{ 'tb-filter-position__chip--selected': pdpMediaPosition === 'Left' }"
                        role="radio"
                        :aria-checked="pdpMediaPosition === 'Left'"
                        @click="setBlockSetting('desktopMediaPosition', 'Left')"
                      >
                        <span class="tb-filter-position__name">Left</span>
                        <img
                          class="tb-filter-position__icon"
                          :src="lumosPdpMediaPositionIcons.Left"
                          alt=""
                          width="42"
                          height="42"
                        >
                      </button>
                      <button
                        type="button"
                        class="tb-filter-position__chip"
                        :class="{ 'tb-filter-position__chip--selected': pdpMediaPosition === 'Right' }"
                        role="radio"
                        :aria-checked="pdpMediaPosition === 'Right'"
                        @click="setBlockSetting('desktopMediaPosition', 'Right')"
                      >
                        <span class="tb-filter-position__name">Right</span>
                        <img
                          class="tb-filter-position__icon"
                          :src="lumosPdpMediaPositionIcons.Right"
                          alt=""
                          width="42"
                          height="42"
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <!-- Blog Posts block (Figma Lumos 3321-97540) -->
            <template v-if="isBlogPostsBlock">
              <v-divider class="mb-1"></v-divider>
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">table-columns-split</v-icon>
                  Item per row
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field"
                  aria-label="Item per row"
                  :model-value="String(panelNum('itemsPerRow', 3))"
                  min="1"
                  max="6"
                  @update:model-value="(value: string) => setBlockSetting('itemsPerRow', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">layout-grid</v-icon>
                  Total Items
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field tb-grid-metric__field--wide"
                  aria-label="Total items"
                  :model-value="String(panelNum('totalItems', 25))"
                  min="1"
                  max="999"
                  @update:model-value="(value: string) => setBlockSetting('totalItems', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>
              <v-divider class="my-1"></v-divider>
              <v-checkbox
                :model-value="panelSettings.showFeaturedImage === true"
                label="Show featured image"
                hide-details
                density="compact"
                color="primary"
                @update:model-value="(value: boolean | null) => setBlockSetting('showFeaturedImage', value === true)"
              ></v-checkbox>
              <v-select
                :model-value="blogFeaturedImageHeight"
                label="Featured image height"
                :items="[...blogFeaturedImageHeightOptions]"
                @update:model-value="(value: string) => setBlockSetting('featuredImageHeight', value)"
              ></v-select>

              <!-- Grid layout: layout picker + pagination (Figma 3321-97540) -->
              <template v-if="!isBlogPostsCarousel">
                <div class="tb-settings-card tb-settings-card--panel">
                  <div class="tb-layout-section">
                    <div class="tb-layout-section__heading">
                      <v-icon size="16">palette</v-icon>
                      <span>Layout</span>
                    </div>
                    <div class="tb-layout-picker">
                      <v-btn
                        icon="chevron-left"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Previous layout"
                        @click="cycleCollectionGridLayout(-1)"
                      ></v-btn>
                      <div class="tb-layout-picker__card">
                        <div class="tb-layout-picker__icon-well" aria-hidden="true">
                          <img
                            class="tb-layout-picker__icon"
                            :src="lumosLayoutPickerIcon(panelText('layout') || 'Grid')"
                            alt=""
                          >
                        </div>
                        <span class="tb-layout-picker__name">{{ panelText('layout') || 'Grid' }}</span>
                      </div>
                      <v-btn
                        icon="chevron-right"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Next layout"
                        @click="cycleCollectionGridLayout(1)"
                      ></v-btn>
                    </div>
                  </div>
                </div>

                <div class="tb-settings-card tb-settings-card--panel">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="blogPostsPaginationOpen"
                    @click="blogPostsPaginationOpen = !blogPostsPaginationOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">book-open</v-icon>
                      Pagination
                    </span>
                    <v-icon size="16">{{ blogPostsPaginationOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="blogPostsPaginationOpen" class="tb-settings-card__body">
                    <v-select
                      :model-value="panelText('paginationStyle') || 'Combined (Load more)'"
                      label="Pagination Style"
                      :items="['Combined (Load more)', 'Pages', 'Infinite scroll']"
                      @update:model-value="(value: string) => setBlockSetting('paginationStyle', value)"
                    ></v-select>
                    <v-text-field
                      type="number"
                      :model-value="String(panelNum('autoLoadTimes', 2))"
                      label="Auto load times"
                      min="1"
                      max="10"
                      @update:model-value="(value: string) => setBlockSetting('autoLoadTimes', value === '' ? 1 : Number(value))"
                    ></v-text-field>
                  </div>
                </div>
              </template>

              <!-- Carousel layout: Style Settings (Figma 3325-130800) -->
              <template v-else>
                <div class="tb-settings-card tb-settings-card--panel">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="blogPostsStyleSettingsOpen"
                    @click="blogPostsStyleSettingsOpen = !blogPostsStyleSettingsOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">palette</v-icon>
                      Style Settings
                    </span>
                    <v-icon size="16">{{ blogPostsStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="blogPostsStyleSettingsOpen" class="tb-settings-card__body">
                    <p class="tb-layout-section__subhead">Layout</p>
                    <div class="tb-layout-picker">
                      <v-btn
                        icon="chevron-left"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Previous layout"
                        @click="cycleCollectionGridLayout(-1)"
                      ></v-btn>
                      <div class="tb-layout-picker__card">
                        <div class="tb-layout-picker__icon-well" aria-hidden="true">
                          <img
                            class="tb-layout-picker__icon"
                            :src="lumosLayoutPickerIcons.Carousel"
                            alt=""
                          >
                        </div>
                        <span class="tb-layout-picker__name">Carousel</span>
                      </div>
                      <v-btn
                        icon="chevron-right"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Next layout"
                        @click="cycleCollectionGridLayout(1)"
                      ></v-btn>
                    </div>

                    <v-divider class="my-2"></v-divider>

                    <p class="tb-layout-section__subhead">Slider style</p>
                    <div class="tb-layout-picker">
                      <v-btn
                        icon="chevron-left"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Previous slider style"
                        @click="cycleBlogPostsSliderStyle(-1)"
                      ></v-btn>
                      <div class="tb-layout-picker__card">
                        <div class="tb-layout-picker__preview" aria-hidden="true">
                          <div
                            v-if="blogSliderStyle === 'Dots'"
                            class="tb-slider-style-preview tb-slider-style-preview--dots-arrows"
                          >
                            <span class="tb-slider-style-preview__btn"><v-icon size="14">chevron-left</v-icon></span>
                            <span v-for="n in 4" :key="n" class="tb-slider-style-preview__dot"></span>
                            <span class="tb-slider-style-preview__btn"><v-icon size="14">chevron-right</v-icon></span>
                          </div>
                          <div
                            v-else-if="blogSliderStyle === 'Numbers'"
                            class="tb-slider-style-preview tb-slider-style-preview--numbers"
                          >
                            1 · 2 · 3
                          </div>
                          <div v-else class="tb-slider-style-preview tb-slider-style-preview--arrows">
                            <span class="tb-slider-style-preview__btn"><v-icon size="18">chevron-left</v-icon></span>
                            <span class="tb-slider-style-preview__btn"><v-icon size="18">chevron-right</v-icon></span>
                          </div>
                        </div>
                        <span class="tb-layout-picker__name">{{ blogSliderStyle }}</span>
                      </div>
                      <v-btn
                        icon="chevron-right"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Next slider style"
                        @click="cycleBlogPostsSliderStyle(1)"
                      ></v-btn>
                    </div>

                    <v-divider class="my-2"></v-divider>

                    <v-switch
                      :model-value="panelSettings.autoRotateSlide === true"
                      label="Auto rotate slide"
                      hide-details
                      color="primary"
                      @update:model-value="(value: unknown) => setBlockSetting('autoRotateSlide', value === true)"
                    ></v-switch>
                    <v-select
                      :model-value="panelText('slideChangingTime') || '5 sec'"
                      label="Slide changing time"
                      :items="['3 sec', '5 sec', '10 sec']"
                      :disabled="panelSettings.autoRotateSlide !== true"
                      @update:model-value="(value: string) => setBlockSetting('slideChangingTime', value)"
                    ></v-select>
                  </div>
                </div>
              </template>
            </template>

            <!-- Search Product Grid block (Figma Lumos 2787-27863) -->
            <template v-if="isProductGridBlock">
              <v-divider class="mb-1"></v-divider>
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">table-columns-split</v-icon>
                  Item per row
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field"
                  aria-label="Item per row"
                  :model-value="String(panelNum('itemsPerRow', 3))"
                  min="1"
                  max="6"
                  @update:model-value="(value: string) => setBlockSetting('itemsPerRow', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">layout-grid</v-icon>
                  Total Products
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field tb-grid-metric__field--wide"
                  aria-label="Total products"
                  :model-value="String(panelNum('totalItems', 20))"
                  min="1"
                  max="999"
                  @update:model-value="(value: string) => setBlockSetting('totalItems', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>
              <v-divider class="my-1"></v-divider>
              <v-checkbox
                :model-value="panelSettings.showPageTitle === true"
                label="Show Page Title"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => setBlockSetting('showPageTitle', value === true)"
              ></v-checkbox>
              <v-checkbox
                :model-value="panelSettings.showSortingOptions === true"
                label="Show Sorting Options"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => setBlockSetting('showSortingOptions', value === true)"
              ></v-checkbox>
              <v-checkbox
                :model-value="panelSettings.showFilters === true"
                label="Show Filters"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => setBlockSetting('showFilters', value === true)"
              ></v-checkbox>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="searchProductPaginationOpen"
                  @click="searchProductPaginationOpen = !searchProductPaginationOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">book-open</v-icon>
                    Pagination
                  </span>
                  <v-icon size="16">{{ searchProductPaginationOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="searchProductPaginationOpen" class="tb-settings-card__body">
                  <v-select
                    :model-value="panelText('paginationStyle')"
                    label="Pagination Style"
                    :items="['Combined (Load more)', 'Pages', 'Infinite scroll']"
                    @update:model-value="(value: string) => setBlockSetting('paginationStyle', value)"
                  ></v-select>
                  <v-text-field
                    type="number"
                    :model-value="String(panelNum('autoLoadTimes', 2))"
                    label="Auto load times"
                    min="1"
                    max="10"
                    @update:model-value="(value: string) => setBlockSetting('autoLoadTimes', value === '' ? 1 : Number(value))"
                  ></v-text-field>
                </div>
              </div>

              <div class="tb-settings-card tb-settings-card--panel">
                <button
                  type="button"
                  class="tb-settings-card__header"
                  :aria-expanded="searchFilterSettingsOpen"
                  @click="searchFilterSettingsOpen = !searchFilterSettingsOpen"
                >
                  <span class="tb-settings-card__title">
                    <v-icon size="16">list-filter</v-icon>
                    Filter Settings
                  </span>
                  <v-icon size="16">{{ searchFilterSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                </button>
                <div v-show="searchFilterSettingsOpen" class="tb-settings-card__body">
                  <div class="tb-filter-position">
                    <p class="tb-filter-position__label">Filter Position</p>
                    <div class="tb-filter-position__track" role="radiogroup" aria-label="Filter position">
                      <button
                        type="button"
                        class="tb-filter-position__chip"
                        :class="{ 'tb-filter-position__chip--selected': productGridFilterPosition === 'Left' }"
                        role="radio"
                        :aria-checked="productGridFilterPosition === 'Left'"
                        @click="setBlockSetting('filterPosition', 'Left')"
                      >
                        <span class="tb-filter-position__name">Left</span>
                        <img
                          class="tb-filter-position__icon"
                          :src="lumosFilterPositionIcons.Left"
                          alt=""
                          width="42"
                          height="42"
                        >
                      </button>
                      <button
                        type="button"
                        class="tb-filter-position__chip"
                        :class="{ 'tb-filter-position__chip--selected': productGridFilterPosition === 'Top' }"
                        role="radio"
                        :aria-checked="productGridFilterPosition === 'Top'"
                        @click="setBlockSetting('filterPosition', 'Top')"
                      >
                        <span class="tb-filter-position__name">Top</span>
                        <img
                          class="tb-filter-position__icon"
                          :src="lumosFilterPositionIcons.Top"
                          alt=""
                          width="42"
                          height="42"
                        >
                      </button>
                    </div>
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <v-checkbox
                    :model-value="panelSettings.showFilterBreadcrumbs === true"
                    label="Show Filter Breadcrumbs"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('showFilterBreadcrumbs', value === true)"
                  ></v-checkbox>
                  <v-checkbox
                    :model-value="panelSettings.onlyOneOpenFilter === true"
                    label="Only one open filter at a time"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('onlyOneOpenFilter', value === true)"
                  ></v-checkbox>
                  <v-checkbox
                    :model-value="panelSettings.allowFilterHidden === true"
                    label="Allow filter block to be hidden"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('allowFilterHidden', value === true)"
                  ></v-checkbox>
                  <v-checkbox
                    :model-value="panelSettings.allFiltersCollapsed === true"
                    label="All filters initially collapsed"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('allFiltersCollapsed', value === true)"
                  ></v-checkbox>
                  <v-checkbox
                    :model-value="panelSettings.showSearchBarAbove === true"
                    label="Show search bar above"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('showSearchBarAbove', value === true)"
                  ></v-checkbox>
                  <v-checkbox
                    :model-value="panelSettings.stickyFilter === true"
                    label="Sticky filter"
                    hide-details
                    color="primary"
                    @update:model-value="(value: unknown) => setBlockSetting('stickyFilter', value === true)"
                  ></v-checkbox>
                </div>
              </div>
            </template>

            <!-- Collection Grid block (Figma Lumos settings panel) -->
            <template v-if="isCollectionGridBlock">
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">table-columns-split</v-icon>
                  Item per row
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field"
                  aria-label="Item per row"
                  :model-value="String(panelNum('itemsPerRow', 3))"
                  min="1"
                  max="6"
                  @update:model-value="(value: string) => setBlockSetting('itemsPerRow', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>
              <div class="tb-grid-metric">
                <span class="tb-grid-metric__label">
                  <v-icon size="16">layout-grid</v-icon>
                  Total items
                </span>
                <v-text-field
                  type="number"
                  density="compact"
                  hide-details
                  class="tb-grid-metric__field tb-grid-metric__field--wide"
                  aria-label="Total items"
                  :model-value="String(panelNum('totalItems', 25))"
                  min="1"
                  max="999"
                  @update:model-value="(value: string) => setBlockSetting('totalItems', value === '' ? 1 : Number(value))"
                ></v-text-field>
              </div>

              <!-- Grid layout: standalone layout picker + pagination -->
              <template v-if="!isCollectionGridCarousel">
                <div class="tb-layout-section">
                  <div class="tb-layout-section__heading">
                    <v-icon size="16">palette</v-icon>
                    <span>Layout</span>
                  </div>
                  <div class="tb-layout-picker">
                    <v-btn
                      icon="chevron-left"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Previous layout"
                      @click="cycleCollectionGridLayout(-1)"
                    ></v-btn>
                    <div class="tb-layout-picker__card">
                      <div class="tb-layout-picker__icon-well" aria-hidden="true">
                        <img
                          class="tb-layout-picker__icon"
                          :src="lumosLayoutPickerIcon(panelText('layout') || 'Grid')"
                          alt=""
                        >
                      </div>
                      <span class="tb-layout-picker__name">{{ panelText('layout') || 'Grid' }}</span>
                    </div>
                    <v-btn
                      icon="chevron-right"
                      variant="text"
                      density="comfortable"
                      class="tb-layout-picker__nav"
                      aria-label="Next layout"
                      @click="cycleCollectionGridLayout(1)"
                    ></v-btn>
                  </div>
                </div>

                <div class="tb-settings-card">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="gridPaginationOpen"
                    @click="gridPaginationOpen = !gridPaginationOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">layers</v-icon>
                      Pagination
                    </span>
                    <v-icon size="16">{{ gridPaginationOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="gridPaginationOpen" class="tb-settings-card__body">
                    <v-select
                      :model-value="panelText('paginationStyle')"
                      label="Pagination style"
                      :items="['Combined (Load more)', 'Pages', 'Infinite scroll']"
                      @update:model-value="(value: string) => setBlockSetting('paginationStyle', value)"
                    ></v-select>
                    <v-text-field
                      type="number"
                      :model-value="String(panelNum('autoLoadTimes', 2))"
                      label="Auto load times"
                      min="1"
                      max="10"
                      @update:model-value="(value: string) => setBlockSetting('autoLoadTimes', value === '' ? 1 : Number(value))"
                    ></v-text-field>
                  </div>
                </div>
              </template>

              <!-- Carousel layout: style settings + auto-rotate (Figma 3565-92695) -->
              <template v-else>
                <div class="tb-settings-card">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="gridStyleSettingsOpen"
                    @click="gridStyleSettingsOpen = !gridStyleSettingsOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">palette</v-icon>
                      Style settings
                    </span>
                    <v-icon size="16">{{ gridStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="gridStyleSettingsOpen" class="tb-settings-card__body">
                    <p class="tb-layout-section__subhead">Layout</p>
                    <div class="tb-layout-picker">
                      <v-btn
                        icon="chevron-left"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Previous layout"
                        @click="cycleCollectionGridLayout(-1)"
                      ></v-btn>
                      <div class="tb-layout-picker__card">
                        <div class="tb-layout-picker__icon-well" aria-hidden="true">
                          <img
                            class="tb-layout-picker__icon"
                            :src="lumosLayoutPickerIcons.Carousel"
                            alt=""
                          >
                        </div>
                        <span class="tb-layout-picker__name">Carousel</span>
                      </div>
                      <v-btn
                        icon="chevron-right"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Next layout"
                        @click="cycleCollectionGridLayout(1)"
                      ></v-btn>
                    </div>

                    <v-divider class="my-2"></v-divider>

                    <p class="tb-layout-section__subhead">Slider style</p>
                    <div class="tb-layout-picker">
                      <v-btn
                        icon="chevron-left"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Previous slider style"
                        @click="cycleCollectionSliderStyle(-1)"
                      ></v-btn>
                      <div class="tb-layout-picker__card">
                        <div class="tb-layout-picker__preview" aria-hidden="true">
                          <div
                            v-if="panelText('sliderStyle') === 'Dots'"
                            class="tb-slider-style-preview tb-slider-style-preview--dots"
                          >
                            <span v-for="n in 3" :key="n"></span>
                          </div>
                          <div
                            v-else-if="panelText('sliderStyle') === 'Numbers'"
                            class="tb-slider-style-preview tb-slider-style-preview--numbers"
                          >
                            1 · 2 · 3
                          </div>
                          <div v-else class="tb-slider-style-preview tb-slider-style-preview--arrows">
                            <span class="tb-slider-style-preview__btn"><v-icon size="18">chevron-left</v-icon></span>
                            <span class="tb-slider-style-preview__btn"><v-icon size="18">chevron-right</v-icon></span>
                          </div>
                        </div>
                        <span class="tb-layout-picker__name">{{ panelText('sliderStyle') || 'Arrows' }}</span>
                      </div>
                      <v-btn
                        icon="chevron-right"
                        variant="text"
                        density="comfortable"
                        class="tb-layout-picker__nav"
                        aria-label="Next slider style"
                        @click="cycleCollectionSliderStyle(1)"
                      ></v-btn>
                    </div>
                  </div>
                </div>

                <v-switch
                  :model-value="panelSettings.autoRotateSlide === true"
                  label="Auto rotate slide"
                  hide-details
                  color="primary"
                  @update:model-value="(value: unknown) => setBlockSetting('autoRotateSlide', value === true)"
                ></v-switch>
                <v-select
                  :model-value="panelText('slideChangingTime')"
                  label="Slide changing time"
                  :items="['3 sec', '5 sec', '10 sec']"
                  :disabled="panelSettings.autoRotateSlide !== true"
                  @update:model-value="(value: string) => setBlockSetting('slideChangingTime', value)"
                ></v-select>
              </template>
            </template>

            <!-- Section rename (section-only) -->
            <template v-if="!isBlockSelected">
              <v-text-field
                :model-value="selectedSection.label"
                :label="selectedSection.kind === 'categories'
                  || selectedSection.kind === 'search-results'
                  || selectedSection.kind === 'product-detail'
                  ? 'Section name'
                  : 'Section label'"
                @update:model-value="renameSection"
              ></v-text-field>
              <v-checkbox
                v-if="isPdpInformationSectionPanel"
                :model-value="panelSettings.showVariantSelector === true"
                label="Show variant selector"
                hide-details
                color="primary"
                @update:model-value="(value: unknown) => panelSet('showVariantSelector', value === true)"
              ></v-checkbox>

              <v-btn
                v-if="selectedSection.kind === 'categories'
                  || selectedSection.kind === 'search-results'
                  || selectedSection.kind === 'product-detail'"
                :class="selectedSection.kind === 'categories' ? 'text-none' : 'text-none tb-davinci-btn'"
                color="primary"
                variant="tonal"
                :block="selectedSection.kind === 'search-results' || selectedSection.kind === 'product-detail'"
                prepend-icon="sparkles"
                @click="askDaVinci"
              >
                Edit with Da Vinci
              </v-btn>

              <!-- PDP Information section (Figma Lumos 3580-93115) -->
              <template v-if="isPdpInformationSectionPanel">
                <div class="tb-settings-card tb-settings-card--panel">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="pdpStyleSettingsOpen"
                    @click="pdpStyleSettingsOpen = !pdpStyleSettingsOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">sliders-horizontal</v-icon>
                      Style settings
                    </span>
                    <v-icon size="16">{{ pdpStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="pdpStyleSettingsOpen" class="tb-settings-card__body">
                    <v-select
                      :model-value="panelText('colorSchema')"
                      label="Color schema"
                      :items="['Theme default', 'Modern Look']"
                      @update:model-value="(value: string) => panelSet('colorSchema', value)"
                    ></v-select>
                    <v-select
                      :model-value="panelText('textSchema')"
                      label="Text schema"
                      :items="['Theme default', 'Compact']"
                      @update:model-value="(value: string) => panelSet('textSchema', value)"
                    ></v-select>
                    <v-select
                      :model-value="panelText('buttonSchema')"
                      label="Button schema"
                      :items="['Theme default', 'Modern']"
                      @update:model-value="(value: string) => panelSet('buttonSchema', value)"
                    ></v-select>
                  </div>
                </div>
              </template>

              <!-- Search Results section (Figma Lumos 2787-27525) -->
              <template v-if="isSearchResultsSectionPanel">
                <div class="tb-settings-card tb-settings-card--panel">
                  <button
                    type="button"
                    class="tb-settings-card__header"
                    :aria-expanded="searchStyleSettingsOpen"
                    @click="searchStyleSettingsOpen = !searchStyleSettingsOpen"
                  >
                    <span class="tb-settings-card__title">
                      <v-icon size="16">sliders-horizontal</v-icon>
                      Style settings
                    </span>
                    <v-icon size="16">{{ searchStyleSettingsOpen ? 'chevron-up' : 'chevron-down' }}</v-icon>
                  </button>
                  <div v-show="searchStyleSettingsOpen" class="tb-settings-card__body">
                    <v-select
                      :model-value="panelText('colorSchema')"
                      label="Color schema"
                      :items="['Theme default', 'Modern Look']"
                      @update:model-value="(value: string) => panelSet('colorSchema', value)"
                    ></v-select>
                    <v-select
                      :model-value="panelText('textSchema')"
                      label="Text schema"
                      :items="['Theme default', 'Compact']"
                      @update:model-value="(value: string) => panelSet('textSchema', value)"
                    ></v-select>
                    <v-select
                      :model-value="panelText('productCardSchema')"
                      label="Product card schema"
                      :items="['Theme default', 'Modern']"
                      @update:model-value="(value: string) => panelSet('productCardSchema', value)"
                    ></v-select>
                  </div>
                </div>
              </template>

              <v-divider v-if="settingsFields.length || isCollectionsContext"></v-divider>
            </template>

            <!-- Shared schema-driven field renderer (section + block) -->
            <template v-for="(f, index) in settingsFields" :key="f.key">
              <template v-if="f.group === 'Section padding'">
                <template v-if="settingsFields[index - 1]?.group !== f.group">
                  <MpFormSection title="Section padding" />
                  <div class="tb-padding">
                    <div class="tb-padding__rows">
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-vertical</v-icon>
                          Vertical
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Vertical padding"
                          :model-value="String(panelNum('paddingVertical', 24))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setPadding('paddingVertical', value)"
                        ></v-text-field>
                      </div>
                      <div class="tb-padding__row">
                        <span class="tb-padding__name">
                          <v-icon size="16">move-horizontal</v-icon>
                          Horizontal
                        </span>
                        <v-text-field
                          type="number"
                          density="compact"
                          hide-details
                          class="tb-padding__field"
                          aria-label="Horizontal padding"
                          :model-value="String(panelNum('paddingHorizontal', 56))"
                          min="0"
                          max="120"
                          @update:model-value="(value: string) => setPadding('paddingHorizontal', value)"
                        ></v-text-field>
                      </div>
                    </div>
                    <v-btn
                      :icon="paddingLinked ? 'link' : 'unlink'"
                      variant="text"
                      size="small"
                      :color="paddingLinked ? 'primary' : undefined"
                      :aria-pressed="paddingLinked"
                      :aria-label="paddingLinked ? 'Unlink vertical and horizontal padding' : 'Link vertical and horizontal padding'"
                      @click="togglePaddingLink"
                    ></v-btn>
                  </div>
                </template>
              </template>
              <template v-else-if="f.group === 'Section alignment'">
                <template v-if="settingsFields[index - 1]?.group !== f.group">
                  <MpFormSection title="Section alignment" />
                  <div class="tb-align">
                    <MpSegmentedControl
                      v-for="field in settingsFields.filter((field) => field.group === 'Section alignment')"
                      :key="field.key"
                      :model-value="panelText(field.key)"
                      size="sm"
                      :aria-label="field.label"
                      :items="(field.options ?? []).map((option, optionIndex) => ({
                        value: option,
                        label: option,
                        icon: field.icons?.[optionIndex],
                        tooltip: option,
                      }))"
                      @update:model-value="(value) => { if (value) panelSet(field.key, value) }"
                    />
                  </div>
                </template>
              </template>
              <template v-else>
              <MpFormSection
                v-if="f.group && settingsFields[index - 1]?.group !== f.group"
                :title="f.group"
              />
              <v-textarea
                v-if="f.type === 'textarea'"
                :model-value="panelText(f.key)"
                :label="f.label"
                rows="3"
                auto-grow
                @update:model-value="(v: string) => panelSet(f.key, v)"
              ></v-textarea>
              <v-select
                v-else-if="f.type === 'select'"
                :model-value="panelText(f.key)"
                :label="f.label"
                :items="f.options"
                @update:model-value="(v: string) => panelSet(f.key, v)"
              ></v-select>
              <v-text-field
                v-else-if="f.type === 'number'"
                type="number"
                :model-value="String(panelNum(f.key, 0))"
                :label="f.label"
                :min="f.min"
                :max="f.max"
                @update:model-value="(v: string) => panelSet(f.key, v === '' ? 0 : Number(v))"
              ></v-text-field>
              <MpFormField v-else-if="f.type === 'segmented'" :label="f.label">
                <template #default>
                  <MpSegmentedControl
                    :model-value="panelText(f.key)"
                    size="sm"
                    :aria-label="f.label"
                    :items="(f.options ?? []).map((option, optionIndex) => ({
                      value: option,
                      label: option,
                      icon: f.icons?.[optionIndex],
                      tooltip: option,
                    }))"
                    @update:model-value="(value) => { if (value) panelSet(f.key, value) }"
                  />
                </template>
              </MpFormField>
              <v-switch
                v-else-if="f.type === 'toggle'"
                :model-value="panelSettings[f.key] === true"
                :label="f.label"
                @update:model-value="(v: unknown) => panelSet(f.key, v === true)"
              ></v-switch>
              <MpFormField v-else-if="f.type === 'color'" :label="f.label">
                <template #default="{ labelId }">
                  <div class="tb-swatch-row" role="radiogroup" :aria-labelledby="labelId">
                    <button
                      v-for="swatch in swatchPalette"
                      :key="swatch.value"
                      class="tb-swatch"
                      :class="{ 'tb-swatch--selected': panelText(f.key) === swatch.value }"
                      :style="{ background: swatch.value }"
                      role="radio"
                      :tabindex="swatchTabindex(swatch, panelText(f.key))"
                      :aria-checked="panelText(f.key) === swatch.value"
                      :aria-label="`${f.label}: ${swatch.label}`"
                      @click="panelSet(f.key, swatch.value)"
                      @keydown="onSwatchKeydown($event, (v: string) => panelSet(f.key, v))"
                    ></button>
                  </div>
                </template>
              </MpFormField>
              <MpFormField v-else-if="f.type === 'slider'" :label="f.label">
                <template #default="{ labelId }">
                  <v-slider
                    :model-value="panelNum(f.key, f.min ?? 0)"
                    :min="f.min ?? 0"
                    :max="f.max ?? 10"
                    :step="1"
                    thumb-label
                    :aria-labelledby="labelId"
                    @update:model-value="(v: number) => panelSet(f.key, v)"
                  ></v-slider>
                </template>
              </MpFormField>
              <v-text-field
                v-else
                :model-value="panelText(f.key)"
                :label="f.label"
                @update:model-value="(v: string) => panelSet(f.key, v)"
              ></v-text-field>
              </template>
            </template>

            <MpAlert tone="info" live="off">
              Changes apply to the preview as you type. Publish the theme to make them live.
            </MpAlert>
          </MpFormGrid>
        </div>
      </aside>
    </div>

    <AddSectionDialog
      v-model="addDialog"
      :is-kind-disabled="isKindDisabled"
      @add="addSection"
      @add-variant="addSectionVariant"
      @generate="openDaVinci"
    />

    <MpConfirmDialog
      v-model="removeDialog"
      danger
      title="Remove this section?"
      :message="`&quot;${removeTarget?.label ?? 'This section'}&quot; will be removed from the ${activeTemplate} template. You can add it back later from the section picker.`"
      confirm-label="Remove section"
      @confirm="confirmRemove"
    />

    <MpConfirmDialog
      v-model="blockRemoveDialog"
      danger
      title="Remove this block?"
      :message="`&quot;${blockRemoveLabel}&quot; will be removed from this section. You can add it back later.`"
      confirm-label="Remove block"
      @confirm="confirmRemoveBlock"
    />

    <MpConfirmDialog
      v-model="publishDialog"
      :title="`Publish &quot;${theme.name}&quot;?`"
      :message="publishMessage"
      confirm-label="Publish theme"
      @confirm="confirmPublish"
    />

    <MpConfirmDialog
      v-model="discardDialog"
      danger
      title="Discard draft changes?"
      :message="theme.publishedAt
        ? 'All edits since the last publish will be reverted. This can\'t be undone.'
        : 'All edits will be reverted to the theme\'s starting point. This can\'t be undone.'"
      confirm-label="Discard changes"
      @confirm="confirmDiscard"
    />

    <MpConfirmDialog
      v-model="confirmLeave"
      danger
      :title="leaveTitle"
      :message="leaveMessage"
      :confirm-label="leaveConfirmLabel"
      @confirm="discardAndLeave"
    />
  </MpBuilderShell>
</template>

<style scoped>
.tb-missing { min-height: 60vh; }

.border-b { border-bottom: 1px solid var(--mp-border-subtle); }
.border-t { border-top: 1px solid var(--mp-border-subtle); }
.border-r { border-right: 1px solid var(--mp-border-subtle); }
.border-l { border-left: 1px solid var(--mp-border-subtle); }

/* ── Sections panel ──────────────────────────────────────────────── */
.tb-panel-left {
  display: flex;
  flex-direction: column;
  width: 324px;
  flex-shrink: 0;
  overflow: hidden;
}

/* Left icon rail — Layers / Theme styles mode switch (replaces the old tabs) */
.tb-mode-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--mp-space-4);
  width: 44px;
  flex-shrink: 0;
  padding: var(--mp-space-8) 0;
  border-right: 1px solid var(--mp-border-subtle);
  background: var(--surface-primary);
}
.tb-mode-rail__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--mp-space-32);
  height: var(--mp-space-32);
  border-radius: var(--r-chip);
  color: var(--muted);
  cursor: pointer;
  transition: background var(--dur-fast) var(--ease), color var(--dur-fast) var(--ease);
}
.tb-mode-rail__btn:hover {
  background: var(--surface-secondary);
  color: var(--text-primary);
}
.tb-mode-rail__btn--active {
  background: var(--accent-soft);
  color: var(--accent);
}
.tb-mode-rail__btn:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}
.tb-panel-content {
  min-width: 0;
  overflow: hidden;
}
.tb-template-select {
  max-width: 190px;
}

/* <900px: panel overlays the canvas, toggled from the toolbar */
.tb-body { position: relative; }
.tb-panel-left--overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  box-shadow: var(--mp-shadow-lg);
}

.tb-section-row {
  display: flex;
  align-items: center;
  gap: var(--mp-space-2);
  padding: var(--mp-space-2) var(--mp-space-4) var(--mp-space-2) 0;
  border-radius: var(--r-chip);
  transition: background 0.15s;
}
.tb-section-row:hover { background: var(--surface-secondary); }
.tb-section-row--selected,
.tb-section-row--selected:hover { background: var(--accent-soft); }
.tb-section-row--selected .tb-section-row__main { color: var(--accent); }
.tb-section-row--hidden .tb-section-row__icon,
.tb-section-row--hidden .tb-section-row__label { color: var(--text-disabled); }

.tb-section-row__main {
  display: flex;
  align-items: center;
  gap: var(--mp-space-8);
  flex: 1;
  min-width: 0;
  padding: var(--mp-space-6) var(--mp-space-8);
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: var(--r-chip);
  text-align: left;
  color: var(--text-primary);
}
.tb-section-row__main:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.tb-section-row__icon { color: var(--muted); flex-shrink: 0; }
.tb-section-row__label { font-size: var(--mp-text-label-fontSize); font-weight: var(--mp-fontWeight-semibold); }
.tb-section-row__new {
  flex-shrink: 0;
  padding: var(--mp-space-2) var(--mp-space-6);
  border-radius: var(--r-pill);
  background: var(--accent);
  color: rgb(var(--v-theme-on-primary));
  font-size: var(--mp-fontSize-10);
  font-weight: var(--mp-fontWeight-bold);
  letter-spacing: 0.04em;
}

.tb-section-row__actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.15s;
}
.tb-section-row:hover .tb-section-row__actions,
.tb-section-row:focus-within .tb-section-row__actions,
.tb-section-row--selected .tb-section-row__actions,
.tb-block-row:hover .tb-section-row__actions,
.tb-block-row:focus-within .tb-section-row__actions,
.tb-block-row--selected .tb-section-row__actions { width: auto; overflow: visible; opacity: 1; }

/* Expand chevron + spacer keep section rows aligned whether or not they nest */
.tb-section-row__expand { flex-shrink: 0; }
.tb-section-row__expand-spacer { width: var(--mp-space-28); flex-shrink: 0; }

/* ── Block sub-tree (nested under a section) ─────────────────────── */
.tb-blocks {
  display: flex;
  flex-direction: column;
  margin: 0 0 var(--mp-space-4) var(--mp-space-24);
  padding-left: var(--mp-space-8);
  border-left: 1px solid var(--mp-border-subtle);
}
.tb-blocks--nested {
  padding-left: var(--mp-space-18, 18px);
}

.tb-block-row--nested .tb-block-row__main {
  padding-left: 0;
}

.tb-block-add--nested {
  margin-left: var(--mp-space-18, 18px);
}

.tb-blocks--account {
  margin-left: var(--mp-space-28);
  margin-bottom: 0;
}

.tb-block-row {
  display: flex;
  align-items: center;
  gap: var(--mp-space-2);
  padding: var(--mp-space-2) var(--mp-space-4) var(--mp-space-2) 0;
  border-radius: var(--r-chip);
  transition: background 0.15s;
}
.tb-block-row:hover { background: var(--surface-secondary); }
.tb-block-row--selected,
.tb-block-row--selected:hover { background: var(--accent-soft); }
.tb-block-row--selected .tb-block-row__main { color: var(--accent); }

.tb-block-row__main {
  display: flex;
  align-items: center;
  gap: var(--mp-space-6);
  flex: 1;
  min-width: 0;
  padding: var(--mp-space-4) var(--mp-space-8);
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: var(--r-chip);
  text-align: left;
  color: var(--text-primary);
}
.tb-block-row__main:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.tb-block-row__icon { color: var(--muted); flex-shrink: 0; }
.tb-block-row__label { font-size: var(--mp-fontSize-12); font-weight: var(--mp-fontWeight-medium); }
.tb-block-row__expand {
  flex-shrink: 0;
  margin-left: calc(var(--mp-space-8) * -1);
}

.tb-block-add {
  display: flex;
  align-items: center;
  gap: var(--mp-space-6);
  width: 100%;
  padding: var(--mp-space-4) var(--mp-space-8);
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: var(--r-chip);
  text-align: left;
  color: var(--accent);
}
.tb-block-add:hover { background: var(--accent-soft); }
.tb-block-add:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: -2px; }
.tb-block-add .tb-block-row__icon { color: var(--accent); }
.tb-block-add .tb-block-row__label { font-weight: var(--mp-fontWeight-semibold); }

/* ── Canvas ──────────────────────────────────────────────────────── */
.tb-canvas { flex: 1 1 auto; position: relative; overflow: hidden; background: var(--surface-0); }
.tb-canvas__scroll { position: absolute; inset: 0; overflow: auto; }
.tb-stage { transition: width 280ms ease; margin-inline: auto; }
.tb-stage :deep(.sf-preview) { box-shadow: var(--mp-shadow-md); }
.tb-stage :deep(.sf-preview__viewport--lumos) {
  max-height: min(72vh, 860px);
  overflow: auto;
}

/* ── Settings panel ──────────────────────────────────────────────── */
.tb-panel-right { width: 340px; flex-shrink: 0; overflow: hidden; }

/* ── Color swatches (token palette presets) ──────────────────────── */
.tb-swatch-row { display: flex; flex-wrap: wrap; gap: var(--mp-space-10); }

.tb-swatch {
  width: var(--mp-space-28);
  height: var(--mp-space-28);
  padding: 0;
  border: 0;
  border-radius: var(--r-pill);
  cursor: pointer;
  box-shadow: inset 0 0 0 1px var(--mp-border-subtle);
  transition: transform 0.15s, box-shadow 0.15s;
}
.tb-swatch:hover { transform: scale(1.12); }
.tb-swatch:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.tb-swatch--selected {
  box-shadow:
    inset 0 0 0 1px var(--mp-border-subtle),
    0 0 0 2px var(--surface-primary),
    0 0 0 4px var(--accent);
}

.tb-padding {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--mp-space-8);
}
.tb-padding__rows {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-8);
}
.tb-padding__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-12);
  min-height: var(--mp-component-field-height-sm);
}
.tb-padding__name {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-8);
  color: var(--text-primary);
  font-size: var(--mp-fontSize-14);
}
.tb-padding__field {
  flex: 0 0 var(--mp-space-64);
  max-width: var(--mp-space-64);
}

.tb-schema-field__selection {
  display: flex;
  align-items: center;
  gap: var(--mp-space-8);
  min-width: 0;
}

.tb-schema-field__chip {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  border-radius: var(--mp-radius-8);
  border: 1px solid var(--mp-border-subtle);
  background: var(--surface-secondary);
  overflow: hidden;
}

.tb-schema-field__chip--text {
  flex-direction: column;
  width: var(--mp-space-48);
  padding: var(--mp-space-2) var(--mp-space-4);
  gap: var(--mp-space-2);
}

.tb-schema-field__chip-label {
  font-size: var(--mp-fontSize-10);
  font-weight: var(--mp-fontWeight-bold);
  line-height: 1;
  color: var(--text-primary);
}

.tb-schema-field__chip-body {
  font-size: var(--mp-fontSize-10);
  line-height: 1;
  color: var(--text-secondary);
}

.tb-schema-field__chip--color {
  gap: var(--mp-space-2);
  padding: var(--mp-space-4);
}

.tb-schema-field__swatch {
  width: var(--mp-space-20);
  height: var(--mp-space-12);
  border-radius: var(--mp-radius-4);
}

.tb-schema-field__swatch--primary {
  background: var(--accent-default);
}

.tb-schema-field__swatch--muted {
  background: var(--surface-3);
  box-shadow: inset 0 0 0 1px var(--mp-border-subtle);
}

.tb-schema-field__value {
  font-size: var(--mp-fontSize-14);
  color: var(--text-primary);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.tb-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-12);
}

.tb-settings-card {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-8);
}

.tb-settings-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--mp-space-4) var(--mp-space-8);
  border: 0;
  background: transparent;
  cursor: pointer;
  border-radius: var(--mp-radius-4);
  color: var(--text-primary);
}

.tb-settings-card__header--static {
  cursor: default;
  padding-left: 0;
  padding-right: 0;
}

.tb-grid-metric {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--mp-space-12);
  min-height: var(--mp-component-field-height-sm);
}

.tb-grid-metric__label {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-4);
  font-size: var(--mp-fontSize-14);
  font-weight: var(--mp-fontWeight-bold);
  color: var(--text-primary);
}

.tb-grid-metric__field {
  flex: 0 0 var(--mp-space-64);
  max-width: var(--mp-space-64);
}

.tb-grid-metric__field--wide {
  flex-basis: calc(var(--mp-space-64) + var(--mp-space-8));
  max-width: calc(var(--mp-space-64) + var(--mp-space-8));
}

.tb-layout-section {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-16);
  width: 100%;
}

.tb-layout-section__heading {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-4);
  font-size: var(--mp-fontSize-14);
  font-weight: var(--mp-fontWeight-bold);
  line-height: var(--mp-lineHeight-compact);
  color: var(--text-primary);
}

.tb-layout-section__subhead {
  margin: 0;
  font-size: var(--mp-fontSize-14);
  font-weight: var(--mp-fontWeight-regular);
  line-height: var(--mp-lineHeight-compact);
  color: var(--text-secondary);
}

.tb-layout-picker {
  --tb-picker-icon-color: #3171A7;
  display: flex;
  align-items: center;
  gap: var(--mp-space-4);
  width: 100%;
}

.tb-layout-picker__nav {
  flex-shrink: 0;
  color: var(--text-primary);
}

.tb-layout-picker__card {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--mp-space-4);
  padding: var(--mp-space-4) var(--mp-space-8);
  border-radius: var(--mp-radius-4);
  background: var(--surface-primary);
  box-shadow: var(--mp-shadow-sm);
}

.tb-layout-picker__preview {
  width: 100%;
  min-height: var(--mp-space-48);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--mp-space-4) 0;
}

.tb-layout-picker__icon-well {
  width: 100%;
  min-height: var(--mp-space-40);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--mp-space-4) 0;
}

.tb-layout-picker__icon {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
}

.tb-layout-picker__grid {
  display: grid;
  grid-template-columns: repeat(3, var(--mp-space-12));
  grid-template-rows: repeat(3, var(--mp-space-12));
  gap: var(--mp-space-2);
}

.tb-layout-picker__cell {
  width: var(--mp-space-12);
  height: var(--mp-space-12);
  border-radius: var(--mp-radius-4);
  background: var(--tb-picker-icon-color);
}

.tb-layout-picker__preview--carousel-track {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mp-space-6);
  color: var(--accent);
}

.tb-layout-picker__carousel-cells {
  display: flex;
  align-items: center;
  gap: var(--mp-space-4);
}

.tb-layout-picker__cell--carousel {
  width: var(--mp-space-12);
  height: var(--mp-space-12);
}

.tb-slider-style-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mp-space-8);
  min-height: var(--mp-space-32);
  color: var(--accent);
}

.tb-slider-style-preview--arrows {
  gap: var(--mp-space-12);
}

.tb-slider-style-preview__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--mp-space-28);
  height: var(--mp-space-28);
  border-radius: var(--r-pill);
  background: var(--accent-soft);
  color: var(--accent);
}

.tb-slider-style-preview--dots-arrows {
  gap: var(--mp-space-4);
}

.tb-slider-style-preview__dot {
  width: var(--mp-space-8);
  height: var(--mp-space-8);
  border-radius: var(--r-pill);
  background: var(--accent);
}

.tb-slider-style-preview--dots-arrows .tb-slider-style-preview__btn {
  width: var(--mp-space-20);
  height: var(--mp-space-20);
}

.tb-slider-style-preview--dots span {
  width: var(--mp-space-8);
  height: var(--mp-space-8);
  border-radius: var(--r-pill);
  background: var(--accent);
}

.tb-slider-style-preview--numbers {
  font-size: var(--mp-fontSize-13);
  font-weight: var(--mp-fontWeight-medium);
  color: var(--text-primary);
}

.tb-menu-layout-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--mp-space-4);
  width: 100%;
  min-height: 34px;
}

.tb-menu-layout-preview--drawer {
  flex-direction: column;
  gap: var(--mp-space-2);
}

.tb-menu-layout-preview span {
  display: block;
  width: 18px;
  height: 6px;
  border-radius: var(--mp-radius-4, 4px);
  background: var(--accent);
}

.tb-menu-layout-preview--drawer span {
  width: 37px;
  height: 4px;
}

.tb-layout-picker__name {
  font-size: var(--mp-fontSize-14);
  font-weight: var(--mp-fontWeight-regular);
  line-height: var(--mp-lineHeight-compact);
  color: var(--text-primary);
}

.tb-settings-card__header:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

.tb-settings-card__title {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-4);
  font-size: var(--mp-fontSize-14);
  font-weight: var(--mp-fontWeight-bold);
}

.tb-settings-card--panel {
  padding: var(--mp-space-8) var(--mp-space-4);
  border-radius: var(--mp-radius-4);
  background: var(--mp-color-surface-subtle, var(--surface-variant));
  box-shadow: var(--mp-shadow-sm);
}

.tb-settings-card--panel .tb-settings-card__header {
  padding-inline: var(--mp-space-4);
}

.tb-settings-card__body {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-8);
  padding: 0 var(--mp-space-4) var(--mp-space-4);
}

.tb-opacity {
  display: grid;
  grid-template-columns: minmax(0, 1fr) var(--mp-space-64);
  align-items: center;
  gap: var(--mp-space-8);
}

.tb-opacity__field {
  max-width: var(--mp-space-64);
}

.tb-opacity__field--px {
  max-width: calc(var(--mp-space-64) + var(--mp-space-8));
}

.tb-davinci-btn :deep(.v-btn__prepend) {
  margin-inline-end: var(--mp-space-8);
}

.tb-filter-position {
  display: flex;
  flex-direction: column;
  gap: var(--mp-space-8);
  width: 100%;
}

.tb-filter-position__label {
  margin: 0;
  font-size: var(--mp-fontSize-14);
  color: var(--text-secondary);
  line-height: var(--mp-lineHeight-compact);
}

.tb-filter-position__track {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--mp-space-4);
  width: 100%;
}

.tb-filter-position__chip {
  display: inline-flex;
  align-items: center;
  gap: var(--mp-space-4);
  min-height: var(--mp-space-48);
  padding: var(--mp-space-4);
  border: 2px solid transparent;
  border-radius: var(--mp-radius-4);
  background: transparent;
  cursor: pointer;
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: background 0.15s, border-color 0.15s, box-shadow 0.15s, color 0.15s;
}

.tb-filter-position__chip--selected {
  background: var(--surface);
  border-color: rgb(var(--v-theme-primary));
  box-shadow: var(--mp-shadow-sm);
  color: var(--text-primary);
}

.tb-filter-position__chip--selected .tb-filter-position__name {
  font-weight: var(--mp-fontWeight-bold);
}

.tb-filter-position__name {
  font-size: var(--mp-fontSize-14);
  line-height: var(--mp-lineHeight-compact);
  white-space: nowrap;
}

.tb-filter-position__icon {
  display: block;
  width: var(--mp-space-48);
  height: var(--mp-space-48);
  flex-shrink: 0;
  object-fit: contain;
}

.tb-filter-position__chip:focus-visible {
  outline: 2px solid rgb(var(--v-theme-primary));
  outline-offset: 2px;
}

</style>
