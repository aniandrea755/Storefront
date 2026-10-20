/** Lumos theme-builder picker glyphs exported from Figma (Card Style + Layout). Icon fill: #3171A7. */
import layoutGrid from '@/assets/storefront/lumos/theme-builder/layout-grid.png'
import layoutCarousel from '@/assets/storefront/lumos/theme-builder/layout-carousel.png'
import cardStyleOnlyText from '@/assets/storefront/lumos/theme-builder/card-style-only-text.png'
import cardStyleImageTitle from '@/assets/storefront/lumos/theme-builder/card-style-image-title.png'
import cardStyleSmallImage from '@/assets/storefront/lumos/theme-builder/card-style-small-image.png'
import filterPositionLeft from '@/assets/storefront/lumos/theme-builder/filter-position-left.png'
import filterPositionTop from '@/assets/storefront/lumos/theme-builder/filter-position-top.png'
import pdpSliderLayoutLeft from '@/assets/storefront/lumos/theme-builder/pdp-slider-layout-left.png'
import pdpSliderLayoutRight from '@/assets/storefront/lumos/theme-builder/pdp-slider-layout-right.png'
import pdpSliderLayoutBottom from '@/assets/storefront/lumos/theme-builder/pdp-slider-layout-bottom.png'
import pdpMediaPositionLeft from '@/assets/storefront/lumos/theme-builder/pdp-media-position-left.png'
import pdpMediaPositionRight from '@/assets/storefront/lumos/theme-builder/pdp-media-position-right.png'

export const lumosLayoutPickerIcons = {
  Grid: layoutGrid,
  Carousel: layoutCarousel,
} as const

/** Filter Position wireframes (Figma 3573-92924). Filter bar #0073AB · grid tint #93C4DB on #EFF4F8 well. */
export const lumosFilterPositionIcons = {
  Left: filterPositionLeft,
  Top: filterPositionTop,
} as const

/** PDP Product Detail — slider layout wireframes (Figma 3582-93873). */
export const lumosPdpSliderLayoutIcons = {
  Left: pdpSliderLayoutLeft,
  Right: pdpSliderLayoutRight,
  Bottom: pdpSliderLayoutBottom,
} as const

/** PDP desktop media position wireframes (Figma 3582-93964). */
export const lumosPdpMediaPositionIcons = {
  Left: pdpMediaPositionLeft,
  Right: pdpMediaPositionRight,
} as const

export const lumosChildCardStyleIcons = {
  'Only Text': cardStyleOnlyText,
  'Image & Title': cardStyleImageTitle,
  'Small image': cardStyleSmallImage,
} as const

export type LumosLayoutPickerIconKey = keyof typeof lumosLayoutPickerIcons
export type LumosChildCardStyleIconKey = keyof typeof lumosChildCardStyleIcons
