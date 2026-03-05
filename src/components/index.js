// src/components/index.js — Shared UI components

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius, TAB_BAR_HEIGHT } from '../theme';

// ─────────────────────────────────────────────
// SVG-like icon primitives (fallback)
// ─────────────────────────────────────────────
export const Icon = ({ name, size = 22, color = Colors.textDark, style }) => {
  const icons = {
    home:       '⌂',
    magazine:   '▤',
    shop:       '⊞',
    recipes:    '◈',
    account:    '◯',
    settings:   '⚙',
    automation: '◉',
    search:     '⊕',
    heart:      '♡',
    heartFill:  '♥',
    filter:     '≡',
    back:       '←',
    chevron:    '›',
    close:      '×',
    plus:       '+',
    bookmark:   '◻',
    star:       '★',
    menu:       '☰',
    cart:       '◫',
    scale:      '⊡',
    timer:      '◎',
    fan:        '⊛',
    heating:    '⊕',
    towel:      '▦',
    air:        '◈',
    fridge:     '▭',
    oven:       '⊞',
    washer:     '◌',
    kettle:     '◍',
    user:       '◯',
    pin:        '◎',
    order:      '◷',
    returns:    '↩',
    guarantee:  '◻',
    voucher:    '▤',
    lock:       '⊠',
    info:       'ⓘ',
    qr:         '⊞',
    wifi:       '◌',
  };
  return (
    <Text style={[{ fontSize: size, color, lineHeight: size + 4 }, style]}>
      {icons[name] || '○'}
    </Text>
  );
};

// ─────────────────────────────────────────────
// BOTTOM TAB BAR (pixel-perfect CREATE clone)
// ─────────────────────────────────────────────
const TAB_ACTIVE_COLOR = '#1A1A1A';
const TAB_INACTIVE_COLOR = '#888888';

function TabIcon({ tabKey, isActive, size = 24 }) {
  const color = isActive ? TAB_ACTIVE_COLOR : TAB_INACTIVE_COLOR;
  const iconProps = { size, color };
  switch (tabKey) {
    case 'home':
      return isActive ? (
        <Ionicons name="home" {...iconProps} />
      ) : (
        <Ionicons name="home-outline" {...iconProps} />
      );
    case 'magazine':
      return isActive ? (
        <MaterialCommunityIcons name="newspaper-variant" {...iconProps} />
      ) : (
        <MaterialCommunityIcons name="newspaper-variant-outline" {...iconProps} />
      );
    case 'shop':
      return isActive ? (
        <MaterialCommunityIcons name="storefront" {...iconProps} />
      ) : (
        <MaterialCommunityIcons name="storefront-outline" {...iconProps} />
      );
    case 'recipes':
      return <MaterialCommunityIcons name="chef-hat" {...iconProps} />;
    case 'account':
      return isActive ? (
        <Ionicons name="person" {...iconProps} />
      ) : (
        <Ionicons name="person-outline" {...iconProps} />
      );
    default:
      return <Ionicons name="ellipse-outline" {...iconProps} />;
  }
}

const TABS = [
  { key: 'home', label: 'Home' },
  { key: 'magazine', label: 'Magazine' },
  { key: 'shop', label: 'Shop' },
  { key: 'recipes', label: 'Recipes' },
  { key: 'account', label: 'Account' },
];

export function BottomTabBar({ active, onPress }) {
  return (
    <View style={tbStyles.bar}>
      {TABS.map(t => {
        const isActive = t.key === active;
        return (
          <TouchableOpacity
            key={t.key}
            style={[tbStyles.item, isActive && tbStyles.itemActive]}
            onPress={() => onPress(t.key)}
            activeOpacity={0.7}
          >
            <TabIcon tabKey={t.key} isActive={isActive} size={24} />
            <Text style={[tbStyles.label, isActive && tbStyles.labelActive]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const tbStyles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8E0D6',
    height: 60 + (Platform.OS === 'ios' ? 24 : 0),
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 24 : 8,
    paddingHorizontal: 4,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  itemActive: {
    backgroundColor: '#F0EDE8',
    paddingHorizontal: 18,
  },
  label: {
    fontSize: 11,
    color: TAB_INACTIVE_COLOR,
    fontWeight: '400',
  },
  labelActive: {
    color: TAB_ACTIVE_COLOR,
    fontWeight: '700',
  },
});

// ─────────────────────────────────────────────
// DISCOUNT BANNER (Shop top)
// ─────────────────────────────────────────────
export function DiscountBanner({ voucher, percent }) {
  return (
    <View style={dbStyles.bar}>
      <Text style={dbStyles.text}>
        {percent}% DISCOUNT-VOUCHER:{' '}
        <Text style={dbStyles.code}>{voucher}</Text>
      </Text>
    </View>
  );
}

const dbStyles = StyleSheet.create({
  bar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 9,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0D8D0',
  },
  text: {
    fontSize: 12,
    color: '#1A1A1A',
    textAlign: 'center',
  },
  code: {
    fontWeight: '800',
  },
});

// ─────────────────────────────────────────────
// SECTION BANNER (Home/Magazine/Recipes info cards)
// ─────────────────────────────────────────────
export function SectionBanner({ tag, text }) {
  return (
    <View style={sbStyles.card}>
      <Text style={sbStyles.tag}>{tag}</Text>
      <Text style={sbStyles.text}>{text}</Text>
    </View>
  );
}

const sbStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.bgWhite,
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  tag: {
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 3,
    color: Colors.textDark,
    marginBottom: Spacing.xs,
  },
  text: {
    fontSize: Typography.xxl,
    fontWeight: Typography.medium,
    color: Colors.textDark,
    lineHeight: 30,
  },
});

// ─────────────────────────────────────────────
// PILL TOGGLE SWITCH
// ─────────────────────────────────────────────
export function ToggleSwitch({ isOn, onToggle }) {
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.8}
      style={[tsStyles.track, isOn && tsStyles.trackOn]}
    >
      <View style={[tsStyles.thumb, isOn && tsStyles.thumbOn]} />
    </TouchableOpacity>
  );
}

const tsStyles = StyleSheet.create({
  track: {
    width: 40,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#D8D0C8',
    justifyContent: 'center',
    padding: 3,
  },
  trackOn: {
    backgroundColor: Colors.textDark,
  },
  thumb: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: Colors.bgWhite,
    alignSelf: 'flex-start',
  },
  thumbOn: {
    alignSelf: 'flex-end',
  },
});

// ─────────────────────────────────────────────
// ORANGE PILL BUTTON (Save / Add to cart)
// ─────────────────────────────────────────────
export function PrimaryButton({ label, onPress, style, color }) {
  return (
    <TouchableOpacity
      style={[pbStyles.btn, color && { backgroundColor: color }, style]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={pbStyles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const pbStyles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.textDark,
    borderRadius: Radius.full,
    paddingVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.textWhite,
    fontSize: Typography.lg,
    fontWeight: Typography.bold,
    letterSpacing: 0.3,
  },
});

// ─────────────────────────────────────────────
// MENU ROW (Account screen) — supports vector icons
// ─────────────────────────────────────────────
export function MenuRow({ icon, label, onPress, iconComponent }) {
  return (
    <TouchableOpacity style={mrStyles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={mrStyles.left}>
        {iconComponent ? (
          <View style={{ marginRight: 16 }}>{iconComponent}</View>
        ) : icon ? (
          <Icon name={icon} size={18} color={Colors.textMid} style={{ marginRight: 16 }} />
        ) : null}
        <Text style={mrStyles.label}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#CCCCCC" />
    </TouchableOpacity>
  );
}

const mrStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0EBE5',
    backgroundColor: Colors.bgWhite,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '400',
    color: Colors.textDark,
  },
});

// Export vector icon sets for screens
export { Ionicons, MaterialCommunityIcons };
