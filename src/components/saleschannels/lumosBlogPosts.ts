/** Blog Posts block — Featured image height (Figma Lumos 3321-99669). */
export const BLOG_FEATURED_IMAGE_HEIGHT_OPTIONS = [
  'Adapt to image',
  'Small',
  'Medium',
  'Large',
] as const

export type BlogFeaturedImageHeight = (typeof BLOG_FEATURED_IMAGE_HEIGHT_OPTIONS)[number]

export function normalizeBlogFeaturedImageHeight(raw: string | undefined): BlogFeaturedImageHeight {
  if (raw && (BLOG_FEATURED_IMAGE_HEIGHT_OPTIONS as readonly string[]).includes(raw)) {
    return raw as BlogFeaturedImageHeight
  }
  return 'Medium'
}

/** Carousel slider style (Figma Lumos Blogs → Slider Style, 380-1150). */
export const BLOG_SLIDER_STYLE_OPTIONS = ['Arrows', 'Numbers', 'Dots'] as const

export type BlogSliderStyle = (typeof BLOG_SLIDER_STYLE_OPTIONS)[number]

export function normalizeBlogSliderStyle(raw: string | undefined): BlogSliderStyle {
  if (raw && (BLOG_SLIDER_STYLE_OPTIONS as readonly string[]).includes(raw)) {
    return raw as BlogSliderStyle
  }
  return 'Arrows'
}
