// src/screens/AccountScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomTabBar, MenuRow } from '../components';
import { userData } from '../data';

export default function AccountScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>

        {/* Profile Header */}
        <View style={s.profileSection}>
          <View style={[s.avatar, { backgroundColor: userData.avatarColor }]}>
            <Text style={s.avatarText}>{userData.initials}</Text>
          </View>
          <View style={s.profileInfo}>
            <Text style={s.userName}>{userData.firstName} {userData.lastName}</Text>
            <Text style={s.userEmail}>{userData.email}</Text>
          </View>
        </View>

        {/* MY ACCOUNT */}
        <Text style={s.sectionLabel}>MY ACCOUNT</Text>
        <View style={s.menuGroup}>
          <MenuRow
            iconComponent={<Ionicons name="person-outline" size={20} color="#1A1A1A" />}
            label="My information"
            onPress={() => navigate('myInformation')}
          />
          <MenuRow
            iconComponent={<Ionicons name="lock-closed-outline" size={20} color="#1A1A1A" />}
            label="Account and security"
            onPress={() => Alert.alert('Coming soon')}
          />
        </View>

        {/* WALLET */}
        <Text style={s.sectionLabel}>WALLET</Text>
        <View style={s.menuGroup}>
          <MenuRow
            iconComponent={<Ionicons name="location-outline" size={20} color="#1A1A1A" />}
            label="My addresses"
            onPress={() => navigate('myAddresses')}
          />
          <MenuRow
            iconComponent={<Ionicons name="time-outline" size={20} color="#1A1A1A" />}
            label="Order History"
            onPress={() => navigate('orderHistory')}
          />
          <MenuRow
            iconComponent={<MaterialCommunityIcons name="package-variant" size={20} color="#1A1A1A" />}
            label="Returns"
            onPress={() => Alert.alert('Coming soon')}
          />
          <MenuRow
            iconComponent={<Ionicons name="shield-checkmark-outline" size={20} color="#1A1A1A" />}
            label="Guarantee registry"
            onPress={() => Alert.alert('Coming soon')}
          />
          <MenuRow
            iconComponent={<MaterialCommunityIcons name="ticket-percent-outline" size={20} color="#1A1A1A" />}
            label="Discount vouchers"
            onPress={() => Alert.alert('Coming soon')}
          />
        </View>

        {/* Contact, Settings, About */}
        <View style={s.menuGroup}>
          <MenuRow
            iconComponent={<Ionicons name="headset-outline" size={20} color="#1A1A1A" />}
            label="Contact"
            onPress={() => Alert.alert('Contact', 'contact@vendom.com')}
          />
          <MenuRow
            iconComponent={<Ionicons name="settings-outline" size={20} color="#1A1A1A" />}
            label="Settings"
            onPress={() => navigate('settings')}
          />
          <MenuRow
            iconComponent={<Ionicons name="help-circle-outline" size={20} color="#1A1A1A" />}
            label="About"
            onPress={() => Alert.alert('About', 'VENDOM App v1.0.0')}
          />
        </View>

        {/* Text-only rows */}
        <View style={s.menuGroup}>
          <MenuRow label="Social media" onPress={() => Alert.alert('Coming soon')} iconComponent={null} />
          <MenuRow label="Rate this app" onPress={() => Alert.alert('Coming soon')} iconComponent={null} />
          <MenuRow label="Recommend this app" onPress={() => Alert.alert('Coming soon')} iconComponent={null} />
        </View>

        {/* Log out */}
        <TouchableOpacity style={s.logoutBtn} onPress={() => navigate('login')} activeOpacity={0.85}>
          <Text style={s.logoutText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar active="account" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F8F5F0' },
  content: { paddingBottom: 40 },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 22, fontWeight: '700', color: '#FFFFFF' },
  profileInfo: { flex: 1 },
  userName: { fontSize: 20, fontWeight: '700', color: '#1A1A1A' },
  userEmail: { fontSize: 13, color: '#888888', marginTop: 2 },
  sectionLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    letterSpacing: 1.5,
    fontWeight: '400',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 8,
    backgroundColor: '#F8F5F0',
  },
  menuGroup: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8E0D6',
  },
  logoutBtn: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#CC0000',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#CC0000',
  },
});
