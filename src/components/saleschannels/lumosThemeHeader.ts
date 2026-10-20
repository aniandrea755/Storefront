import {
  LOGO_POSITION_OPTIONS,
  MENU_DESIGN_OPTIONS,
  MENU_LAYOUT_TYPE_OPTIONS,
  SEARCH_POSITION_OPTIONS,
  SEARCH_STYLE_OPTIONS,
} from '@/components/saleschannels/lumosHeaderLayers'

export function normalizeMenuLayoutType(value: string | undefined): (typeof MENU_LAYOUT_TYPE_OPTIONS)[number] {
  if (value === 'Horizontal') return 'Horizontal Menu'
  if (value === 'Vertical' || value === 'Vertical Menu') return 'Drawer'
  if (MENU_LAYOUT_TYPE_OPTIONS.includes(value as (typeof MENU_LAYOUT_TYPE_OPTIONS)[number])) {
    return value as (typeof MENU_LAYOUT_TYPE_OPTIONS)[number]
  }
  return 'Horizontal Menu'
}

export function normalizeMenuDesign(value: string | undefined, legacyLayout?: string): (typeof MENU_DESIGN_OPTIONS)[number] {
  if (MENU_DESIGN_OPTIONS.includes(value as (typeof MENU_DESIGN_OPTIONS)[number])) {
    return value as (typeof MENU_DESIGN_OPTIONS)[number]
  }
  if (legacyLayout === 'Dropdown') return 'Dropdown'
  if (value === 'Inline' || value === 'Centered' || value === 'Minimal') return 'Inline'
  return 'Dropdown'
}

export function normalizeSearchPosition(value: string | undefined): (typeof SEARCH_POSITION_OPTIONS)[number] {
  if (value === 'Top Left' || value === 'Top left') return 'Top left'
  if (value === 'Top Right' || value === 'Top right') return 'Top right'
  if (SEARCH_POSITION_OPTIONS.includes(value as (typeof SEARCH_POSITION_OPTIONS)[number])) {
    return value as (typeof SEARCH_POSITION_OPTIONS)[number]
  }
  if (value === 'Top Center' || value === 'Middle Left' || value === 'Middle Center') return 'Top left'
  return 'Top left'
}

export function normalizeSearchStyle(value: string | undefined): (typeof SEARCH_STYLE_OPTIONS)[number] {
  if (value === 'Icon only' || value === 'Input only') return 'Only Search icon'
  if (SEARCH_STYLE_OPTIONS.includes(value as (typeof SEARCH_STYLE_OPTIONS)[number])) {
    return value as (typeof SEARCH_STYLE_OPTIONS)[number]
  }
  return 'Search icon & input'
}

export function normalizeLogoPosition(value: string | undefined): (typeof LOGO_POSITION_OPTIONS)[number] {
  if (value === 'Left') return 'Top Left'
  if (value === 'Center') return 'Top Center'
  if (value === 'Top Right' || value === 'Right') return 'Middle Center'
  if (LOGO_POSITION_OPTIONS.includes(value as (typeof LOGO_POSITION_OPTIONS)[number])) {
    return value as (typeof LOGO_POSITION_OPTIONS)[number]
  }
  return 'Top Center'
}

export function lumosSettingText(
  bag: Record<string, string | number | boolean> | undefined,
  key: string,
  fallback: string,
): string {
  const value = bag?.[key]
  return typeof value === 'string' && value.trim() ? value : fallback
}

export function lumosSettingFlag(
  bag: Record<string, string | number | boolean> | undefined,
  key: string,
  fallback = true,
): boolean {
  const value = bag?.[key]
  return typeof value === 'boolean' ? value : fallback
}

export function lumosSettingNum(
  bag: Record<string, string | number | boolean> | undefined,
  key: string,
  fallback: number,
): number {
  const value = bag?.[key]
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}

export function lumosHeaderPartClass(
  layer: string,
  selectedLayer: string | null | undefined,
  editActive: boolean,
) {
  if (!editActive) return {}
  return {
    'lumos-hdr-part': true,
    'lumos-hdr-part--selected': selectedLayer === layer,
  }
}
