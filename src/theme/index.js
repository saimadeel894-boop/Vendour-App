import { Dimensions } from 'react-native';

export const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

export const Colors = {
  // Backgrounds
  bgWarm: '#F5EDE3',
  bgWarmGradientStart: '#F5EDE3',
  bgWarmGradientEnd: '#F2C4C4',
  bgWhite: '#FFFFFF',
  bgLight: '#F8F5F0',
  bgGray: '#F2F2F2',
  bgHero: '#1C1C1E',

  // Text
  textDark: '#1A1A1A',
  textMid: '#5A5A5A',
  textLight: '#9A9A9A',
  textPlaceholder: '#BBBBBB',
  textWhite: '#FFFFFF',
  textOrange: '#E84E1B',
  textGreen: '#3D8B37',
  textRed: '#CC3333',

  // Accents
  orange: '#E84E1B',
  green: '#3D8B37',
  blue: '#1E4D8C',

  // Borders
  border: '#E8E0D6',
  borderDark: '#2C2C2C',
  borderLight: '#F0EBE5',

  // Tab bar
  tabActive: '#1A1A1A',
  tabInactive: '#AAAAAA',
  tabBg: '#FFFFFF',
  tabActiveBg: '#F0EDE8',

  // Cards
  cardBg: '#FFFFFF',
  cardShadow: '#000000',
};

export const Typography = {
  // Font weights
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',

  // Font sizes
  xs: 11,
  sm: 12,
  base: 14,
  md: 15,
  lg: 16,
  xl: 18,
  xxl: 22,
  xxxl: 28,
  hero: 36,
  giant: 44,
};

export const Spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  full: 999,
};

export const Shadow = {
  sm: {
    shadowColor: Colors.cardShadow,
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  md: {
    shadowColor: Colors.cardShadow,
    shadowOpacity: 0.10,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  lg: {
    shadowColor: Colors.cardShadow,
    shadowOpacity: 0.16,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
};

export const TAB_BAR_HEIGHT = 64;
export const HEADER_HEIGHT = 56;
