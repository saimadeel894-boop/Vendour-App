// src/components/index.js — Shared UI components

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Colors, Typography, Spacing, Radius, TAB_BAR_HEIGHT } from '../theme';

// ─────────────────────────────────────────────
// SVG-like icon primitives (no external deps)
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
// BOTTOM TAB BAR
// ─────────────────────────────────────────────
const TABS = [
  { key: 'home',     label: 'Home',     icon: 'home'     },
  { key: 'magazine', label: 'Magazine', icon: 'magazine' },
  { key: 'shop',     label: 'Shop',     icon: 'shop'     },
  { key: 'recipes',  label: 'Recipes',  icon: 'recipes'  },
  { key: 'account',  label: 'Account',  icon: 'account'  },
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
            <Icon
              name={t.icon}
              size={20}
              color={isActive ? Colors.tabActive : Colors.tabInactive}
            />
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
    backgroundColor: Colors.tabBg,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    height: TAB_BAR_HEIGHT + (Platform.OS === 'ios' ? 20 : 0),
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
    paddingHorizontal: 4,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    borderRadius: Radius.full,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  itemActive: {
    backgroundColor: Colors.tabActiveBg,
  },
  label: {
    fontSize: Typography.xs,
    color: Colors.tabInactive,
    fontWeight: Typography.medium,
  },
  labelActive: {
    color: Colors.tabActive,
    fontWeight: Typography.bold,
  },
});

// ─────────────────────────────────────────────
// DISCOUNT BANNER (Shop top)
// ─────────────────────────────────────────────
export function DiscountBanner({ voucher, percent }) {
  return (
    <View style={dbStyles.bar}>
      <Text style={dbStyles.text}>
        {percent}% DISCOUNT·VOUCHER:{' '}
        <Text style={dbStyles.code}>{voucher}</Text>
      </Text>
    </View>
  );
}

const dbStyles = StyleSheet.create({
  bar: {
    backgroundColor: Colors.bgWhite,
    paddingVertical: 9,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  text: {
    fontSize: Typography.sm,
    color: Colors.textDark,
    letterSpacing: 0.3,
  },
  code: {
    fontWeight: Typography.bold,
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
// MENU ROW (Account screen)
// ─────────────────────────────────────────────
export function MenuRow({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={mrStyles.row} onPress={onPress} activeOpacity={0.7}>
      <View style={mrStyles.left}>
        <Icon name={icon} size={18} color={Colors.textMid} />
        <Text style={mrStyles.label}>{label}</Text>
      </View>
      <Icon name="chevron" size={18} color={Colors.textLight} />
    </TouchableOpacity>
  );
}

const mrStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
    backgroundColor: Colors.bgWhite,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  label: {
    fontSize: Typography.md,
    color: Colors.textDark,
    fontWeight: Typography.medium,
  },
});
