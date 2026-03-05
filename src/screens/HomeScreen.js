// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius, Shadow, SCREEN_W } from '../theme';
import { BottomTabBar, Icon, ToggleSwitch } from '../components';
import { devicesData } from '../data';

// ── FAB MENU ITEMS ──────────────────────────────────────────
const FAB_MENU = [
  { key: 'tap', label: 'Tap to run' },
  { key: 'auto', label: 'Automation' },
  { key: 'home', label: 'Home' },
  { key: 'device', label: 'Device' },
];

export default function HomeScreen({ navigate }) {
  const [devices, setDevices] = useState(devicesData);
  const [fabOpen, setFabOpen] = useState(false);

  const handleToggle = (id) => {
    setDevices(prev =>
      prev.map(d =>
        d.id === id && d.hasToggle
          ? { ...d, isOn: !d.isOn, status: !d.isOn ? 'On' : 'Standby' }
          : d
      )
    );
  };

  const handleFabAction = (key) => {
    setFabOpen(false);
    if (key === 'tap') navigate('taptorun');
    if (key === 'auto') navigate('automations');
    if (key === 'home') navigate('addHome');
    if (key === 'device') navigate('addDevice');
  };

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      {/* ── Gradient Background (simulated: #F5EDE3 -> #F2C4C4) ── */}
      <View style={s.gradientBg}>
        {Array.from({ length: 30 }).map((_, i) => {
          const t = i / 29;
          const r = Math.round(245 + (242 - 245) * t);
          const g = Math.round(237 + (196 - 237) * t);
          const b = Math.round(227 + (196 - 227) * t);
          return (
            <View
              key={i}
              style={[s.gradientStrip, { backgroundColor: `rgb(${r},${g},${b})` }]}
            />
          );
        })}
      </View>

      {/* ── Header ── */}
      <View style={s.header}>
        <TouchableOpacity style={s.headerBtn}>
          <Ionicons name="settings-outline" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={s.headerDash}>– –</Text>
        <TouchableOpacity style={s.headerBtn}>
          <Ionicons name="bulb-outline" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      {/* ── Content ── */}
      <ScrollView
        style={s.scroll}
        contentContainerStyle={s.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={s.homeTitle}>My Home</Text>

        {devices.length === 0 ? (
          <Text style={s.emptyText}>
            Create the lifestyle you want by{'\n'}adding Create accessories.
          </Text>
        ) : (
          <View style={s.deviceGrid}>
            {devices.map(d => (
              <View key={d.id} style={s.deviceCard}>
                {/* Icon */}
                <Icon name={d.icon} size={24} color={Colors.textDark} style={s.deviceIcon} />
                <Text style={s.deviceName}>{d.name}</Text>
                {d.value && <Text style={s.deviceValue}>{d.value}</Text>}
                {d.status && (
                  <Text style={[
                    s.deviceStatus,
                    d.isOn && { color: Colors.textGreen },
                  ]}>
                    {d.status}
                  </Text>
                )}
                {d.hasToggle && (
                  <View style={s.toggleWrap}>
                    <ToggleSwitch
                      isOn={d.isOn}
                      onToggle={() => handleToggle(d.id)}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Spacer for FAB */}
        <View style={{ height: 100 }} />
      </ScrollView>

      {/* ── FAB Overlay ── */}
      {fabOpen && (
        <TouchableOpacity
          style={s.fabOverlay}
          activeOpacity={1}
          onPress={() => setFabOpen(false)}
        >
          <View style={s.fabMenu}>
            {FAB_MENU.map(item => (
              <TouchableOpacity
                key={item.key}
                style={s.fabMenuItem}
                onPress={() => handleFabAction(item.key)}
                activeOpacity={0.85}
              >
                <Text style={s.fabMenuLabel}>{item.label}</Text>
                <View style={s.fabMenuIconWrap}>
                  {item.key === 'tap' && (
                    <Ionicons name="hand-left-outline" size={24} color="#1A1A1A" />
                  )}
                  {item.key === 'auto' && (
                    <Ionicons name="bulb-outline" size={24} color="#1A1A1A" />
                  )}
                  {item.key === 'home' && (
                    <Ionicons name="home-outline" size={24} color="#1A1A1A" />
                  )}
                  {item.key === 'device' && (
                    <MaterialCommunityIcons name="home-wifi-outline" size={24} color="#1A1A1A" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
            {/* Close X */}
            <TouchableOpacity
              style={s.fabClose}
              onPress={() => setFabOpen(false)}
              activeOpacity={0.85}
            >
              <Text style={s.fabCloseText}>×</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}

      {/* ── FAB Add Button ── */}
      {!fabOpen && (
        <TouchableOpacity
          style={s.fab}
          onPress={() => setFabOpen(true)}
          activeOpacity={0.85}
        >
          <Text style={s.fabPlus}>+</Text>
          <Text style={s.fabAdd}>Add</Text>
        </TouchableOpacity>
      )}

      <BottomTabBar active="home" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bgWarmGradientStart,
  },
  gradientBg: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
  },
  gradientStrip: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 8,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDash: {
    fontSize: 14,
    color: '#888888',
    letterSpacing: 4,
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xs,
  },
  homeTitle: {
    fontSize: 34,
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 22,
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
    marginTop: Spacing.md,
  },
  deviceCard: {
    width: (SCREEN_W - Spacing.md * 2 - Spacing.md) / 2,
    backgroundColor: Colors.bgWhite,
    borderRadius: Radius.xl,
    padding: Spacing.lg,
    minHeight: 120,
    ...Shadow.sm,
  },
  deviceIcon: {
    marginBottom: Spacing.xs,
  },
  deviceName: {
    fontSize: Typography.md,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    marginBottom: Spacing.xs,
  },
  deviceValue: {
    fontSize: Typography.sm,
    color: Colors.textLight,
    marginTop: 4,
  },
  deviceStatus: {
    fontSize: Typography.sm,
    color: Colors.textLight,
    marginTop: 4,
  },
  toggleWrap: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
  },
  // FAB
  fabOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(80,73,60,0.75)',
    justifyContent: 'flex-end',
    paddingBottom: 80,
    paddingRight: 20,
    alignItems: 'flex-end',
  },
  fabMenu: {
    alignItems: 'flex-end',
    gap: 14,
  },
  fabMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fabMenuLabel: {
    color: Colors.textWhite,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#1A1A1A',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  fabMenuIconWrap: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -10,
  },
  fabClose: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    transform: [{ rotate: '45deg' }],
    ...Shadow.md,
  },
  fabCloseText: {
    fontSize: 28,
    color: Colors.textDark,
    lineHeight: 32,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  fabPlus: {
    fontSize: 22,
    fontWeight: '300',
    color: '#1A1A1A',
  },
  fabAdd: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A1A',
  },
});
