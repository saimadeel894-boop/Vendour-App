// src/screens/AccountScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar,
} from 'react-native';
import { Colors, Typography, Spacing } from '../theme';
import { BottomTabBar, Icon, MenuRow } from '../components';
import { userData } from '../data';

const MY_ACCOUNT_ITEMS = [
  { key: 'info',     icon: 'user',      label: 'My information'      },
  { key: 'security', icon: 'lock',      label: 'Account and security' },
];

const WALLET_ITEMS = [
  { key: 'address',   icon: 'pin',       label: 'My addresses'       },
  { key: 'orders',    icon: 'order',     label: 'Order History'      },
  { key: 'returns',   icon: 'returns',   label: 'Returns'            },
  { key: 'guarantee', icon: 'guarantee', label: 'Guarantee registry' },
  { key: 'vouchers',  icon: 'voucher',   label: 'Discount vouchers'  },
];

export default function AccountScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>

        {/* ── User Profile Header ── */}
        <View style={s.profileSection}>
          {/* Avatar */}
          <View style={[s.avatar, { backgroundColor: userData.avatarColor }]}>
            <Text style={s.avatarText}>{userData.initials}</Text>
          </View>
          {/* Name + Email */}
          <View style={s.profileInfo}>
            <Text style={s.userName}>{userData.firstName} {userData.lastName}</Text>
            <Text style={s.userEmail}>{userData.email}</Text>
          </View>
        </View>

        {/* ── MY ACCOUNT Section ── */}
        <Text style={s.sectionLabel}>MY ACCOUNT</Text>
        <View style={s.menuGroup}>
          {MY_ACCOUNT_ITEMS.map((item, index) => (
            <View key={item.key}>
              <MenuRow icon={item.icon} label={item.label} onPress={() => {}} />
            </View>
          ))}
        </View>

        {/* ── WALLET Section ── */}
        <Text style={s.sectionLabel}>WALLET</Text>
        <View style={s.menuGroup}>
          {WALLET_ITEMS.map((item) => (
            <View key={item.key}>
              <MenuRow icon={item.icon} label={item.label} onPress={() => {}} />
            </View>
          ))}
        </View>

      </ScrollView>

      <BottomTabBar active="account" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgLight },
  content: { paddingBottom: 30 },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Colors.bgWhite,
    marginBottom: Spacing.md,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: Typography.xxl,
    fontWeight: Typography.bold,
    color: Colors.textWhite,
  },
  profileInfo: {
    flex: 1,
    gap: 4,
  },
  userName: {
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  userEmail: {
    fontSize: Typography.sm,
    color: Colors.textMid,
    marginTop: 3,
  },
  sectionLabel: {
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 2,
    color: Colors.textLight,
    paddingHorizontal: Spacing.md,
    paddingTop: 20,
    paddingBottom: Spacing.sm,
  },
  menuGroup: {
    backgroundColor: Colors.bgWhite,
    marginBottom: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
