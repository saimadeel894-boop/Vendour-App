// src/screens/LoginScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography, Spacing, Radius, SCREEN_H } from '../theme';

const { width: W, height: H } = Dimensions.get('window');

export default function LoginScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="light" />

      {/* ── Dark Hero ── */}
      <View style={s.hero}>
        <Text style={s.brand}>VENDOM</Text>

        {/* Illustrated toaster */}
        <View style={s.toasterScene}>
          {/* Main body - white/cream */}
          <View style={s.toasterBody}>
            <View style={s.slotRow}>
              <View style={s.slot} />
              <View style={s.slot} />
            </View>
            {/* Shine highlight */}
            <View style={s.shine} />
            {/* CREATE label on toaster */}
            <Text style={s.toasterLabel}>CREATE</Text>
          </View>
          {/* Dark side panel */}
          <View style={s.sidePanel} />
          {/* Brown levers */}
          <View style={[s.lever, { left: 44 }]} />
          <View style={[s.lever, { right: 44 }]} />
          {/* Base */}
          <View style={s.toasterBase} />
          {/* Shadow */}
          <View style={s.toasterShadow} />
        </View>

        <Text style={s.note}>
          If you have previously registered on our{' '}
          <Text style={s.noteLink}>create-store.com</Text>
          {'\n'}website, please log in.
        </Text>
      </View>

      {/* ── Actions ── */}
      <View style={s.actions}>
        <TouchableOpacity
          style={s.btnDark}
          onPress={() => navigate('home')}
          activeOpacity={0.85}
        >
          <Text style={s.btnDarkText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.btnOutline} activeOpacity={0.85}>
          <Text style={s.btnOutlineText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('home')}
          activeOpacity={0.7}
        >
          <Text style={s.guestText}>Continue as guest</Text>
        </TouchableOpacity>

        <View style={s.vendomSeparator} />
        <Text style={s.vendomLogo}>VENDOM</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
  },
  hero: {
    flex: 0.65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 20,
    backgroundColor: Colors.bgHero,
  },
  brand: {
    color: Colors.textWhite,
    fontSize: 24,
    fontWeight: Typography.extraBold,
    letterSpacing: 10,
    marginBottom: 44,
  },
  toasterScene: {
    width: 220,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  toasterBody: {
    width: 190,
    height: 115,
    backgroundColor: '#E8E2D8',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 28,
    shadowOffset: { width: 8, height: 16 },
    elevation: 16,
  },
  slotRow: {
    flexDirection: 'row',
    gap: 22,
  },
  slot: {
    width: 32,
    height: 58,
    backgroundColor: '#2C2825',
    borderRadius: 6,
  },
  shine: {
    position: 'absolute',
    top: 10,
    left: 14,
    width: 70,
    height: 20,
    backgroundColor: 'rgba(255,255,255,0.22)',
    borderRadius: 14,
    transform: [{ rotate: '-10deg' }],
  },
  toasterLabel: {
    position: 'absolute',
    bottom: 14,
    fontSize: 8,
    letterSpacing: 4,
    color: '#8A8278',
    fontWeight: Typography.semiBold,
  },
  sidePanel: {
    position: 'absolute',
    right: 2,
    top: 12,
    width: 16,
    height: 100,
    backgroundColor: '#2C2825',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 10,
  },
  lever: {
    position: 'absolute',
    bottom: 8,
    width: 11,
    height: 28,
    backgroundColor: '#C8A87A',
    borderRadius: 4,
  },
  toasterBase: {
    position: 'absolute',
    bottom: 0,
    left: 14,
    right: 14,
    height: 13,
    backgroundColor: '#C8A87A',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  toasterShadow: {
    position: 'absolute',
    bottom: -16,
    width: 160,
    height: 16,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 50,
  },
  note: {
    color: '#8A8278',
    fontSize: Typography.sm,
    textAlign: 'center',
    lineHeight: 20,
  },
  noteLink: {
    color: Colors.textWhite,
    fontWeight: Typography.bold,
  },
  actions: {
    backgroundColor: Colors.bgWhite,
    paddingHorizontal: Spacing.xl,
    paddingTop: Spacing.xxl,
    paddingBottom: Platform.OS === 'ios' ? 48 : 36,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    gap: 14,
    flex: 0.35,
  },
  btnDark: {
    backgroundColor: '#2C2C2C',
    borderRadius: Radius.full,
    paddingVertical: 17,
    alignItems: 'center',
  },
  btnDarkText: {
    color: Colors.textWhite,
    fontSize: Typography.lg,
    fontWeight: Typography.bold,
    letterSpacing: 0.3,
  },
  btnOutline: {
    borderWidth: 1.5,
    borderColor: '#2C2C2C',
    borderRadius: Radius.full,
    paddingVertical: 17,
    alignItems: 'center',
  },
  btnOutlineText: {
    color: Colors.textDark,
    fontSize: Typography.lg,
    fontWeight: Typography.bold,
  },
  guestText: {
    color: Colors.textDark,
    fontSize: Typography.md,
    fontWeight: Typography.bold,
    textAlign: 'center',
    paddingVertical: 6,
  },
  vendomSeparator: {
    height: 1,
    backgroundColor: '#AAAAAA',
    alignSelf: 'stretch',
    marginTop: Spacing.xl,
    marginBottom: Spacing.sm,
  },
  vendomLogo: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 6,
    color: '#AAAAAA',
    textAlign: 'center',
  },
});
