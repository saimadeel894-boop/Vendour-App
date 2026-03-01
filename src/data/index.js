// ─────────────────────────────────────────────────────────────
// src/data/index.js
// All dummy data — replace with API calls for backend integration
// ─────────────────────────────────────────────────────────────

// ── USER ─────────────────────────────────────────────────────
// Backend: GET /api/user/profile
export const userData = {
  id: 'u001',
  firstName: 'SAIM',
  lastName: 'adeel',
  email: 'saimdigitalworks@gmail.com',
  initials: 'Sa',
  avatarColor: '#5B7FC4',
};

// ── DEVICES ──────────────────────────────────────────────────
// Backend: GET /api/homes/:homeId/devices
export const devicesData = [
  {
    id: 'd001',
    name: 'Scale',
    icon: 'scale',
    value: '82.3 Kg',
    status: null,
    hasToggle: false,
    isOn: false,
  },
  {
    id: 'd002',
    name: 'S40',
    icon: 'timer',
    value: null,
    status: 'Standby',
    hasToggle: true,
    isOn: false,
  },
];

// ── HOMES ────────────────────────────────────────────────────
// Backend: GET /api/homes
export const homesData = [
  { id: 'h001', name: 'My Home', address: '123 Main St, Madrid' },
];

// ── DEVICE TYPES (Add Device screen) ─────────────────────────
// Backend: GET /api/device-types
export const deviceTypesData = [
  { id: 'dt001', name: 'Fan',         icon: 'fan'         },
  { id: 'dt002', name: 'Heating',     icon: 'heating'     },
  { id: 'dt003', name: 'Towel racks', icon: 'towel'       },
  { id: 'dt004', name: 'Air purifier',icon: 'air'         },
  { id: 'dt005', name: 'Fridge',      icon: 'fridge'      },
  { id: 'dt006', name: 'Oven',        icon: 'oven'        },
  { id: 'dt007', name: 'Washer',      icon: 'washer'      },
  { id: 'dt008', name: 'Kettle',      icon: 'kettle'      },
];

// ── PRODUCTS (Shop) ───────────────────────────────────────────
// Backend: GET /api/products
export const productsData = [
  {
    id: 'p001',
    name: 'POTTS STYLANCE',
    subtitle: 'Multi-capsule Espresso Coffee Machine',
    price: 69.95,
    originalPrice: 89.95,
    discount: 22,
    inStock: true,
    shippingTime: '24-96h',
    colors: [
      { label: 'Grey',          hex: '#9E9E9E' },
      { label: 'Cream',         hex: '#F5EDE3' },
      { label: 'Sage green',    hex: '#B2CEB2' },
      { label: 'Pastel yellow', hex: '#F5E6A0' },
      { label: 'Pink',          hex: '#F4C2C2' },
    ],
    defaultColorIndex: 3,
    category: 'coffee',
  },
  {
    id: 'p002',
    name: 'TOAST RETRO',
    subtitle: '2-Slot Wide Toaster',
    price: 49.95,
    originalPrice: 59.95,
    discount: 17,
    inStock: true,
    shippingTime: '24-96h',
    colors: [
      { label: 'White', hex: '#F5F5F5' },
      { label: 'Black', hex: '#2C2C2C' },
      { label: 'Blue',  hex: '#7EB0D4' },
    ],
    defaultColorIndex: 0,
    category: 'kitchen',
  },
  {
    id: 'p003',
    name: 'BLEND PRO',
    subtitle: 'Personal Blender 600W',
    price: 39.95,
    originalPrice: 54.95,
    discount: 27,
    inStock: true,
    shippingTime: '24-96h',
    colors: [
      { label: 'Sand',  hex: '#C8A87A' },
      { label: 'Sage',  hex: '#B2CEB2' },
    ],
    defaultColorIndex: 0,
    category: 'kitchen',
  },
  {
    id: 'p004',
    name: 'KETTLE SLIM',
    subtitle: 'Electric Temperature Control Kettle',
    price: 59.95,
    originalPrice: 74.95,
    discount: 20,
    inStock: true,
    shippingTime: '24-96h',
    colors: [
      { label: 'White', hex: '#F5F5F5' },
      { label: 'Green', hex: '#B2CEB2' },
    ],
    defaultColorIndex: 0,
    category: 'kitchen',
  },
];

// ── MAGAZINE ARTICLES ─────────────────────────────────────────
// Backend: GET /api/magazine/articles
export const articlesData = [
  {
    id: 'a001',
    category: 'EDITORIAL',
    title: "We're opening a new store in Madrid",
    description: "We'll be in La Vaguada, the most iconic shopping centre in Madrid.",
    bgColor: '#E8E2DA',
  },
  {
    id: 'a002',
    category: 'CAMPAIGN',
    title: 'Fridge Studio and Pilsferrer',
    description: 'An exploration of the influence of color on our lives and the role of the Fridge Studio as the core of identity in the home.',
    bgColor: '#DAE2D8',
  },
  {
    id: 'a003',
    category: 'CAMPAIGN',
    title: 'Fridge Studio Collection: Redefine the ordinary',
    description: 'A collection of fridges that redefine the ordinary through design and color.',
    bgColor: '#D8DAE2',
  },
  {
    id: 'a004',
    category: 'LIFESTYLE',
    title: 'The art of slow mornings with CREATE',
    description: 'How our products transform your daily routine into a mindful ritual.',
    bgColor: '#E2DAD8',
  },
];

// ── RECIPES ───────────────────────────────────────────────────
// Backend: GET /api/recipes
export const recipesData = [
  {
    id: 'r001',
    date: '28 Jan 2026',
    title: 'Banana, coconut & coffee latte',
    servings: 1,
    prepTime: "5'",
    cookTime: "0'",
    isFavorite: false,
    bgColor: '#E8D8C0',
  },
  {
    id: 'r002',
    date: '28 Jan 2026',
    title: 'Golden milk',
    servings: 1,
    prepTime: "5'",
    cookTime: "5'",
    isFavorite: false,
    bgColor: '#F0E8C8',
  },
  {
    id: 'r003',
    date: '02 Dec 2025',
    title: 'White sangría slush',
    servings: 4,
    prepTime: "0'",
    cookTime: "0'",
    isFavorite: false,
    bgColor: '#D8E8F0',
  },
  {
    id: 'r004',
    date: '02 Dec 2025',
    title: 'Salted caramel panna cotta',
    servings: 4,
    prepTime: "0'",
    cookTime: "0'",
    isFavorite: false,
    bgColor: '#F0E0D0',
  },
  {
    id: 'r005',
    date: '09 Jun 2022',
    title: 'Tuna tartar',
    servings: 2,
    prepTime: "15'",
    cookTime: "0'",
    isFavorite: false,
    bgColor: '#E8D0C8',
  },
  {
    id: 'r006',
    date: '09 Jun 2022',
    title: 'Garapiña',
    servings: 4,
    prepTime: "30'",
    cookTime: "30'",
    isFavorite: false,
    bgColor: '#C8D8C0',
  },
];

// ── APP CONFIG ────────────────────────────────────────────────
// Backend: GET /api/config
export const appConfig = {
  discountVoucher: 'CREATEAPP',
  discountPercent: 5,
  websiteUrl: 'https://www.create-store.com',
  supportEmail: 'app@create-store.com',
};
