// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar, Modal,
  TextInput, Platform,
} from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow, SCREEN_W, SCREEN_H } from '../theme';
import { BottomTabBar, Icon, ToggleSwitch, PrimaryButton } from '../components';
import { devicesData, deviceTypesData } from '../data';

// ── FAB MENU ITEMS ──────────────────────────────────────────
const FAB_MENU = [
  { key: 'tap',       label: 'Tap to run',  icon: 'automation' },
  { key: 'auto',      label: 'Automation',  icon: 'timer'      },
  { key: 'home',      label: 'Home',        icon: 'home'       },
  { key: 'device',    label: 'Device',      icon: 'wifi'       },
];

export default function HomeScreen({ navigate }) {
  const [devices, setDevices] = useState(devicesData);
  const [fabOpen, setFabOpen] = useState(false);
  const [showAddDevice, setShowAddDevice] = useState(false);
  const [showAddHome, setShowAddHome] = useState(false);
  const [houseName, setHouseName] = useState('');
  const [houseAddress, setHouseAddress] = useState('');
  const [nameError, setNameError] = useState(false);

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
    if (key === 'tap')    navigate('taptorun');
    if (key === 'auto')   navigate('createscene');
    if (key === 'device') setShowAddDevice(true);
    if (key === 'home')   setShowAddHome(true);
  };

  const handleSaveHome = () => {
    if (!houseName.trim()) {
      setNameError(true);
      return;
    }
    setShowAddHome(false);
    setHouseName('');
    setHouseAddress('');
    setNameError(false);
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
          <Icon name="settings" size={22} color={Colors.textDark} />
        </TouchableOpacity>
        <Text style={s.headerDash}>– –</Text>
        <TouchableOpacity style={s.headerBtn}>
          <Icon name="automation" size={22} color={Colors.textDark} />
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
            Create the lifestyle you want by adding Create accessories.
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
                  <Icon name={item.icon} size={18} color={Colors.textWhite} />
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
          <Text style={s.fabText}>＋  Add</Text>
        </TouchableOpacity>
      )}

      <BottomTabBar active="home" onPress={navigate} />

      {/* ── ADD DEVICE MODAL ── */}
      <Modal
        visible={showAddDevice}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={s.modalRoot}>
          <View style={s.modalHeader}>
            <Text style={s.modalTitle}>Add device</Text>
            <TouchableOpacity onPress={() => setShowAddDevice(false)}>
              <Text style={s.modalClose}>×</Text>
            </TouchableOpacity>
          </View>

          {/* WiFi row */}
          <View style={s.wifiRow}>
            <Text style={s.wifiText}>Select a 2.4G network</Text>
            <TouchableOpacity>
              <Text style={s.wifiSelect}>SELECT</Text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={s.modalContent}>
            <Text style={s.selectTitle}>Select device</Text>
            <Text style={s.selectSubtitle}>
              Scan the QR code or select your device from the list
            </Text>

            {/* QR Button */}
            <TouchableOpacity style={s.qrBtn} activeOpacity={0.8}>
              <Icon name="qr" size={16} color={Colors.textDark} />
              <Text style={s.qrText}>QR scanner</Text>
            </TouchableOpacity>

            {/* Device Type Grid */}
            <View style={s.deviceTypeGrid}>
              {deviceTypesData.map(dt => (
                <TouchableOpacity
                  key={dt.id}
                  style={s.deviceTypeCard}
                  activeOpacity={0.8}
                  onPress={() => setShowAddDevice(false)}
                >
                  <Icon name={dt.icon} size={32} color={Colors.textDark} />
                  <Text style={s.deviceTypeName}>{dt.name}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity>
              <Text style={s.failSafeText}>
                Still having trouble?{' '}
                <Text style={s.failSafeLink}>Try the fail-safe mode</Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* ── ADD HOME MODAL ── */}
      <Modal
        visible={showAddHome}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={s.modalRoot}>
          <View style={s.addHomeHeader}>
            <TouchableOpacity onPress={() => setShowAddHome(false)}>
              <Icon name="back" size={20} color={Colors.textDark} />
            </TouchableOpacity>
            <Text style={s.addHomeTitle}>Add home</Text>
          </View>

          <View style={s.addHomeContent}>
            {/* House name field */}
            <View style={s.fieldWrap}>
              <View style={[s.fieldRow, nameError && s.fieldRowError]}>
                <Text style={[s.fieldLabel, nameError && { color: Colors.orange }]}>
                  House name
                </Text>
                {nameError && <Icon name="info" size={18} color={Colors.orange} />}
              </View>
              <View style={[s.fieldBorder, nameError && { borderColor: Colors.orange }]} />
              <TextInput
                style={s.fieldInput}
                value={houseName}
                onChangeText={t => { setHouseName(t); setNameError(false); }}
                maxLength={25}
                placeholder=""
              />
              {nameError && (
                <View style={s.errorRow}>
                  <Text style={s.errorText}>This field cannot be empty</Text>
                  <Text style={s.charCount}>{houseName.length}/25</Text>
                </View>
              )}
            </View>

            {/* Address dropdown */}
            <TouchableOpacity style={s.addressRow}>
              <Text style={s.addressLabel}>House address</Text>
              <Icon name="chevron" size={16} color={Colors.textLight} />
            </TouchableOpacity>
            <View style={s.fieldBorder} />

            <View style={{ flex: 1 }} />

            <PrimaryButton
              label="Save"
              onPress={handleSaveHome}
              style={s.saveBtn}
              color={nameError ? Colors.textLight : Colors.textDark}
            />
          </View>
        </SafeAreaView>
      </Modal>
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
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xs,
  },
  headerBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDash: {
    fontSize: Typography.base,
    color: Colors.textLight,
    letterSpacing: 6,
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xs,
  },
  homeTitle: {
    fontSize: Typography.hero,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    textAlign: 'center',
    marginTop: Spacing.xs,
    marginBottom: Spacing.xs,
    letterSpacing: -0.5,
  },
  emptyText: {
    fontSize: Typography.base,
    color: Colors.textLight,
    textAlign: 'center',
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.xxl,
    lineHeight: 20,
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
    backgroundColor: 'rgba(30,26,22,0.7)',
    justifyContent: 'flex-end',
    paddingBottom: 80,
    paddingRight: Spacing.lg,
    alignItems: 'flex-end',
  },
  fabMenu: {
    alignItems: 'flex-end',
    gap: 14,
  },
  fabMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fabMenuLabel: {
    color: Colors.textWhite,
    fontSize: Typography.lg,
    fontWeight: Typography.semiBold,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: Radius.full,
  },
  fabMenuIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabClose: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    ...Shadow.md,
  },
  fabCloseText: {
    fontSize: 28,
    color: Colors.textDark,
    lineHeight: 32,
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: Spacing.md,
    backgroundColor: Colors.bgWhite,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.md,
    borderRadius: Radius.full,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    ...Shadow.md,
  },
  fabText: {
    fontSize: Typography.md,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  // Modal shared
  modalRoot: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  modalTitle: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  modalClose: {
    fontSize: 28,
    color: Colors.textDark,
    lineHeight: 32,
  },
  // Add Device
  wifiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 12,
    backgroundColor: Colors.bgGray,
  },
  wifiText: {
    fontSize: Typography.sm,
    color: Colors.textMid,
  },
  wifiSelect: {
    fontSize: Typography.sm,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    letterSpacing: 1,
  },
  modalContent: {
    padding: Spacing.lg,
    paddingBottom: 40,
  },
  selectTitle: {
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    marginBottom: Spacing.xs,
    marginTop: Spacing.sm,
  },
  selectSubtitle: {
    fontSize: Typography.base,
    color: Colors.textMid,
    marginBottom: Spacing.lg,
    lineHeight: 20,
  },
  qrBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: Colors.textDark,
    borderRadius: Radius.full,
    paddingVertical: 14,
    marginBottom: Spacing.lg,
  },
  qrText: {
    fontSize: Typography.md,
    fontWeight: Typography.semiBold,
    color: Colors.textDark,
  },
  deviceTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: Spacing.lg,
  },
  deviceTypeCard: {
    width: (SCREEN_W - Spacing.lg * 2 - 12) / 2,
    backgroundColor: Colors.bgGray,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    gap: Spacing.sm,
    minHeight: 100,
    justifyContent: 'flex-end',
  },
  deviceTypeName: {
    fontSize: Typography.md,
    fontWeight: Typography.semiBold,
    color: Colors.textDark,
  },
  failSafeText: {
    fontSize: Typography.sm,
    color: Colors.textMid,
    textAlign: 'center',
  },
  failSafeLink: {
    fontWeight: Typography.bold,
    color: Colors.textDark,
    textDecorationLine: 'underline',
  },
  // Add Home
  addHomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  addHomeTitle: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  addHomeContent: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
  },
  fieldWrap: {
    marginBottom: Spacing.md,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  fieldRowError: {},
  fieldLabel: {
    fontSize: Typography.base,
    color: Colors.textMid,
    fontWeight: Typography.medium,
  },
  fieldBorder: {
    height: 1,
    backgroundColor: Colors.border,
    marginBottom: 4,
  },
  fieldInput: {
    fontSize: Typography.md,
    color: Colors.textDark,
    paddingVertical: Spacing.xs,
  },
  errorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    fontSize: Typography.sm,
    color: Colors.orange,
  },
  charCount: {
    fontSize: Typography.sm,
    color: Colors.textLight,
  },
  addressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  addressLabel: {
    fontSize: Typography.base,
    color: Colors.textLight,
  },
  saveBtn: {
    marginBottom: Platform.OS === 'ios' ? 40 : 24,
    opacity: 0.4,
  },
});
