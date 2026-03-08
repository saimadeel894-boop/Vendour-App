// src/screens/CreateSceneScreen.js — SECTION 8 pixel-perfect
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W, height: H } = Dimensions.get('window');

export default function CreateSceneScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      <TouchableOpacity style={s.cancelBtn} onPress={() => navigate('home')}>
        <Text style={s.cancelText}>Cancel</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <Text style={s.title}>Create Scene</Text>

        {/* Card 1: If */}
        <View style={s.card}>
          <View style={s.cardHeader}>
            <Text style={s.cardLabel}>If</Text>
            <TouchableOpacity style={s.orangePlus}>
              <Text style={s.orangePlusText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={s.dropdownRow}>
            <Text style={s.dropdownText}>When any condition is met</Text>
            <Ionicons name="chevron-down" size={18} color="#555555" />
          </TouchableOpacity>
          <View style={s.placeholderBox}>
            <Text style={s.placeholderText}>Add Condition</Text>
          </View>
        </View>

        {/* Card 2: Then */}
        <View style={s.card}>
          <View style={s.cardHeader}>
            <Text style={s.cardLabel}>Then</Text>
            <TouchableOpacity style={s.orangePlus}>
              <Text style={s.orangePlusText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={s.placeholderBox}>
            <Text style={s.placeholderText}>Add Task</Text>
          </View>
        </View>

        {/* Card 3: Validity Scope */}
        <View style={s.card}>
          <TouchableOpacity style={s.cardRow}>
            <Text style={s.cardLabel}>Validity Scope</Text>
            <View style={s.cardRight}>
              <Text style={s.cardValue}>All day</Text>
              <Ionicons name="chevron-forward" size={18} color="#888888" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Card 4: Display Area */}
        <View style={s.card}>
          <TouchableOpacity
            style={s.cardRow}
            onPress={() => navigate('showarea')}
          >
            <Text style={s.cardLabel}>Display Area</Text>
            <Ionicons name="chevron-forward" size={18} color="#888888" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Save button */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.saveBtn}
          onPress={() => navigate('home')}
          activeOpacity={0.85}
        >
          <Text style={s.saveBtnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F5F5F5' },
  cancelBtn: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cancelText: {
    fontSize: 16,
    color: '#888888',
  },
  content: {
    paddingHorizontal: 16,
    paddingLeft: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
    marginLeft: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  orangePlus: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E84E1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orangePlusText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dropdownText: {
    fontSize: 14,
    color: '#555555',
  },
  placeholderBox: {
    borderWidth: 1,
    borderColor: '#E8E0D6',
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 15,
    color: '#CCCCCC',
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cardValue: {
    fontSize: 14,
    color: '#888888',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingBottom: 24,
    backgroundColor: '#F5F5F5',
  },
  saveBtn: {
    backgroundColor: '#E84E1B',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  saveBtnText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
