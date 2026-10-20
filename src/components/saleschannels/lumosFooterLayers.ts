export type FooterPreviewLayer =
  | 'footer-section'
  | 'brand'
  | 'link-columns'
  | 'newsletter'
  | 'social'
  | 'legal'

export const FOOTER_BLOCK_LAYERS: ReadonlyArray<{
  key: Exclude<FooterPreviewLayer, 'footer-section'>
  label: string
  icon: string
}> = [
  { key: 'brand', label: 'Brand', icon: 'image' },
  { key: 'link-columns', label: 'Link columns', icon: 'columns-3' },
  { key: 'newsletter', label: 'Newsletter', icon: 'mail' },
  { key: 'social', label: 'Social', icon: 'share-2' },
  { key: 'legal', label: 'Legal', icon: 'file-text' },
]
