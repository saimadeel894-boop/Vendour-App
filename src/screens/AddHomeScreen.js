// src/screens/AddHomeScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar, TextInput, Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Typography } from '../theme';

export default function AddHomeScreen({ navigate }) {
  const [houseName, setHouseName] = useState('');
  const canSave = houseName.trim().length > 0;

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      <View style={s.header}>
        <TouchableOpacity style={s.backBtn} onPress={() => navigate('home')}>
          <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={s.title}>Add home</Text>
        <Text style={[s.saveText, !canSave && s.saveDisabled]}>Save</Text>
      </View>

      <View style={s.content}>
        <View style={s.field}>
          <Text style={s.label}>House name</Text>
          <View style={s.inputRow}>
            <TextInput
              style={s.input}
              value={houseName}
              onChangeText={setHouseName}
              placeholder="House name"
              placeholderTextColor="#888888"
              maxLength={25}
            />
            <Text style={s.charCount}>{houseName.length}/25</Text>
          </View>
          <View style={s.border} />
        </View>

        <TouchableOpacity style={s.dropdownRow}>
          <Text style={s.dropdownLabel}>House address</Text>
          <Ionicons name="chevron-down" size={18} color="#888888" />
        </TouchableOpacity>
        <View style={s.border} />

        <TouchableOpacity
          style={[s.saveBtn, canSave ? s.saveBtnActive : s.saveBtnDisabled]}
          onPress={() => canSave && navigate('home')}
          activeOpacity={0.85}
        >
          <Text style={[s.saveBtnText, canSave ? s.saveBtnTextActive : s.saveBtnTextDisabled]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E0D6',
  },
  backBtn: { padding: 4 },
  title: {
    flex: 1,
    fontSize: Typography.xl,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  saveText: { fontSize: 15, color: '#1A1A1A', fontWeight: '600' },
  saveDisabled: { color: '#888888' },
  content: { flex: 1, paddingHorizontal: 16, paddingTop: 24 },
  field: { marginBottom: 16 },
  label: { fontSize: 12, color: '#888888', marginBottom: 4 },
  inputRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: { fontSize: 16, color: '#1A1A1A', paddingVertical: 12, flex: 1 },
  charCount: { fontSize: 12, color: '#888888' },
  border: { height: 1, backgroundColor: '#E0D8D0' },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  dropdownLabel: { fontSize: 16, color: '#888888' },
  saveBtn: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 40 : 24,
    left: 16,
    right: 16,
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
  },
  saveBtnDisabled: { backgroundColor: '#E0E0E0' },
  saveBtnActive: { backgroundColor: '#1A1A1A' },
  saveBtnText: { fontSize: 16, fontWeight: '600' },
  saveBtnTextDisabled: { color: '#888888' },
  saveBtnTextActive: { color: '#FFFFFF' },
});
