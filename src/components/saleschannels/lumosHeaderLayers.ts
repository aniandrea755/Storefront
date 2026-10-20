export type HeaderAccountSubLayer = 'language-selector' | 'wishlist' | 'login-bar' | 'cart'

export type HeaderPreviewLayer =
  | 'announcement'
  | 'header-section'
  | 'logo'
  | 'menu'
  | 'search'
  | 'account'
  | HeaderAccountSubLayer

/** Figma Lumos header logo settings (2928-58020). */
export const LOGO_SELECT_OPTIONS = ['Main logo', 'Secondary logo', 'Icon mark'] as const
/** Figma Lumos logo position menu (2928-58439). */
export const LOGO_POSITION_OPTIONS = ['Middle Center', 'Top Center', 'Middle Left', 'Top Left'] as const

/** Figma Lumos header menu settings (2928-53605). */
export const MENU_SELECT_OPTIONS = ['Main Menu', 'Secondary Menu', 'Mobile Menu'] as const
/** Figma Lumos header flow (2928-53208) — carousel: Horizontal Menu, Drawer. */
export const MENU_LAYOUT_TYPE_OPTIONS = ['Horizontal Menu', 'Drawer'] as const
export const MENU_DESIGN_OPTIONS = ['Dropdown', 'Inline', 'Megamenu'] as const

/** Figma Lumos dropdown style (2928-58973). */
export const DROPDOWN_SHADOW_OPTIONS = ['Primary shadow', 'Secondary shadow', 'Soft shadow'] as const

/** Figma Lumos header search input settings (2928-61592). */
export const SEARCH_SUGGESTIONS_LAYOUT_OPTIONS = ['Vertical', 'Horizontal'] as const
/** Figma Lumos search style menu (2928-63259). */
export const SEARCH_STYLE_OPTIONS = ['Only Search icon', 'Search icon & input'] as const
/** Figma Lumos search position menu (2928-63256). */
export const SEARCH_POSITION_OPTIONS = ['Top right', 'Top left'] as const

export const HEADER_ACCOUNT_SUB_LAYERS: ReadonlyArray<{
  key: HeaderAccountSubLayer
  label: string
  icon: string
  settingKey: 'showLanguageSelector' | 'showWishlist' | 'showSignIn' | 'showCart'
  toggleLabel: string
}> = [
  { key: 'language-selector', label: 'Language Selector', icon: 'globe', settingKey: 'showLanguageSelector', toggleLabel: 'Show language selector' },
  { key: 'wishlist', label: 'Wishlist', icon: 'heart', settingKey: 'showWishlist', toggleLabel: 'Show wishlist' },
  { key: 'login-bar', label: 'Login Bar', icon: 'log-in', settingKey: 'showSignIn', toggleLabel: 'Show login bar' },
  { key: 'cart', label: 'Cart', icon: 'shopping-bag', settingKey: 'showCart', toggleLabel: 'Show cart' },
]
