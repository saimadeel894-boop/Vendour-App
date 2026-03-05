// src/screens/AddDeviceScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SCREEN_W } from '../theme';
import { deviceTypesData } from '../data';

const ICON_MAP = {
  fan: 'ceiling-fan',
  heating: 'home-thermometer-outline',
  towel: 'radiator',
  air: 'air-purifier',
  fridge: 'fridge-outline',
  oven: 'stove',
  washer: 'washing-machine',
  kettle: 'kettle-outline',
};

export default function AddDeviceScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      <View style={s.header}>
        <View style={{ width: 40 }} />
        <Text style={s.headerTitle}>Add device</Text>
        <TouchableOpacity onPress={() => navigate('home')} style={{ width: 40, alignItems: 'flex-end' }}>
          <Ionicons name="close" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <View style={s.wifiBanner}>
        <Text style={s.wifiText}>Select a 2.4G network</Text>
        <TouchableOpacity>
          <Text style={s.wifiSelect}>SELECT</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <Text style={s.selectTitle}>Select device</Text>
        <Text style={s.selectSubtitle}>
          Scan the QR code or select your device from the list
        </Text>

        <TouchableOpacity style={s.qrBtn} activeOpacity={0.8}>
          <MaterialCommunityIcons name="qrcode-scan" size={22} color="#1A1A1A" />
          <Text style={s.qrText}>QR scanner</Text>
        </TouchableOpacity>

        <View style={s.grid}>
          {deviceTypesData.map(dt => (
            <TouchableOpacity
              key={dt.id}
              style={s.card}
              activeOpacity={0.8}
              onPress={() => navigate('home')}
            >
              <MaterialCommunityIcons
                name={ICON_MAP[dt.icon] || 'cellphone'}
                size={36}
                color="#1A1A1A"
                style={{ marginBottom: 12 }}
              />
              <Text style={s.cardLabel}>{dt.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={s.failSafe}>
          Still having trouble?{' '}
          <Text style={s.failSafeLink}>Try the fail-safe mode</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E0D6',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A1A',
    flex: 1,
    textAlign: 'center',
  },
  wifiBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  wifiText: { fontSize: 14, color: '#888888' },
  wifiSelect: { fontSize: 14, fontWeight: '800', color: '#1A1A1A' },
  content: { padding: 20, paddingBottom: 40 },
  selectTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  selectSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 16,
  },
  qrBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: '#1A1A1A',
    borderRadius: 50,
    paddingVertical: 16,
    marginBottom: 20,
  },
  qrText: { fontSize: 16, fontWeight: '600', color: '#1A1A1A' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  card: {
    width: (SCREEN_W - 48) / 2,
    backgroundColor: '#F5F5F5',
    borderRadius: 14,
    padding: 20,
    margin: 4,
    aspectRatio: 1.1,
    justifyContent: 'flex-end',
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  failSafe: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    marginTop: 24,
  },
  failSafeLink: { fontWeight: '800', color: '#1A1A1A' },
});
