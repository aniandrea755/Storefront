/**
 * Outdoor child categories for the Lumos category landing (Figma Home Page Op 21).
 * Parent shoppers land on Bedroom Collections; each tile opens that child's listing.
 */
import seating from '@/assets/storefront/lumos/outdoor/seating.jpg'
import dining from '@/assets/storefront/lumos/outdoor/dining.jpg'
import accessories from '@/assets/storefront/lumos/outdoor/accessories.jpg'
import shade from '@/assets/storefront/lumos/outdoor/shade.jpg'
import comfort from '@/assets/storefront/lumos/outdoor/comfort.jpg'
import storage from '@/assets/storefront/lumos/outdoor/storage.jpg'
import garden from '@/assets/storefront/lumos/outdoor/garden.jpg'
import luxury from '@/assets/storefront/lumos/outdoor/luxury.jpg'
import lights from '@/assets/storefront/lumos/outdoor/lights.jpg'
import heaters from '@/assets/storefront/lumos/outdoor/heaters.jpg'
import chair from '@/assets/storefront/lumos/product-chair.png'
import sofa from '@/assets/storefront/lumos/product-sofa.png'
import table from '@/assets/storefront/lumos/product-table.png'
import diningProduct from '@/assets/storefront/lumos/product-dining.png'
import stool from '@/assets/storefront/lumos/product-stool.png'

export const LUMOS_PARENT_HANDLE = 'bedroom-collections-1'
export const LUMOS_PARENT_TITLE = 'Bedroom Collections'

export interface LumosProduct {
  name: string
  price: string
  image: string
}

export interface LumosCategory {
  title: string
  handle: string
  image: string
  support: string
  description: string
  products: LumosProduct[]
}

const shots = [
  { image: chair, name: 'Lounge chair' },
  { image: sofa, name: 'Two-seat sofa' },
  { image: table, name: 'Slatted dining table' },
  { image: diningProduct, name: 'Armchair' },
  { image: stool, name: 'Counter stool' },
]

function products(prices: string[]): LumosProduct[] {
  return shots.slice(0, prices.length).map((shot, index) => ({
    name: shot.name,
    price: prices[index] ?? '',
    image: shot.image,
  }))
}

export const lumosCategories: LumosCategory[] = [
  {
    title: 'Seating & Lounge',
    handle: 'seating-lounge-1',
    image: seating,
    support: 'Shop seating',
    description: 'Sofas, lounge chairs, and deep seats made for long evenings outside.',
    products: products(['$640', '$1,280', '$420', '$480']),
  },
  {
    title: 'Dining Sets',
    handle: 'dining-sets-1',
    image: dining,
    support: 'Shop dining sets',
    description: 'Tables and seating for lunches on the terrace and late dinners outside.',
    products: products(['$480', '$1,280', '$1,640', '$420']),
  },
  {
    title: 'Accessories',
    handle: 'accessories-1',
    image: accessories,
    support: 'Shop accessories',
    description: 'Hammocks, cushions, and the small pieces that finish an outdoor room.',
    products: products(['$220', '$640', '$160', '$310']),
  },
  {
    title: 'Shade & Protection',
    handle: 'shade-protection-1',
    image: shade,
    support: 'Shop shade',
    description: 'Pergolas, umbrellas, and shade structures for bright afternoons.',
    products: products(['$540', '$1,280', '$420', '$380']),
  },
  {
    title: 'Outdoor Comfort',
    handle: 'outdoor-comfort-1',
    image: comfort,
    support: 'Shop comfort',
    description: 'Adirondack chairs and easy seats for porches, lawns, and quiet corners.',
    products: products(['$380', '$1,280', '$420', '$310']),
  },
  {
    title: 'Storage',
    handle: 'storage-1',
    image: storage,
    support: 'Shop storage',
    description: 'Cabinets and deck boxes that keep cushions and tools out of the weather.',
    products: products(['$420', '$720', '$260', '$540']),
  },
  {
    title: 'Garden & Balcony',
    handle: 'garden-balcony-1',
    image: garden,
    support: 'Shop garden',
    description: 'Compact sets for balconies, terraces, and small city gardens.',
    products: products(['$210', '$460', '$180', '$150']),
  },
  {
    title: 'Luxury Outdoor',
    handle: 'luxury-outdoor-1',
    image: luxury,
    support: 'Shop luxury',
    description: 'Poolside lounges and low tables for a more finished outdoor room.',
    products: products(['$860', '$2,180', '$390', '$740']),
  },
  {
    title: 'Lights',
    handle: 'lights-1',
    image: lights,
    support: 'Shop lights',
    description: 'Lanterns and string lights that keep the table usable after dusk.',
    products: products(['$85', '$120', '$64', '$42']),
  },
  {
    title: 'Heaters',
    handle: 'heaters-1',
    image: heaters,
    support: 'Shop heaters',
    description: 'Freestanding heaters for patios that stay in use past summer.',
    products: products(['$160', '$490', '$280', '$360']),
  },
]

export function lumosCategoryByHandle(handle: string): LumosCategory | undefined {
  return lumosCategories.find((category) => category.handle === handle)
}
