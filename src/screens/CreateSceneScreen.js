// src/screens/CreateSceneScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar, ScrollView,
} from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../theme';
import { Icon } from '../components';

export default function CreateSceneScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => navigate('home')}>
          <Text style={s.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        <Text style={s.title}>Create Scene</Text>

        {/* Card 1: If */}
        <View style={s.card}>
          <View style={s.cardHeader}>
            <Text style={s.cardLabel}>If</Text>
            <TouchableOpacity style={s.addBtn}>
              <Text style={s.addBtnText}>＋</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={s.dropdownRow}>
            <Text style={s.dropdownText}>When any condition is met ∨</Text>
          </TouchableOpacity>
          <Text style={s.placeholder}>Add Condition</Text>
        </View>

        {/* Card 2: Then */}
        <View style={s.card}>
          <View style={s.cardHeader}>
            <Text style={s.cardLabel}>Then</Text>
            <TouchableOpacity style={s.addBtn}>
              <Text style={s.addBtnText}>＋</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.placeholder}>Add Task</Text>
        </View>

        {/* Card 3: Validity Scope */}
        <View style={s.card}>
          <TouchableOpacity style={s.cardRow}>
            <Text style={s.cardLabel}>Validity Scope</Text>
            <View style={s.cardRight}>
              <Text style={s.cardValue}>All day</Text>
              <Icon name="chevron" size={16} color={Colors.textLight} />
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
            <Icon name="chevron" size={16} color={Colors.textLight} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 80 }} />
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
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  header: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
  },
  cancelText: {
    fontSize: Typography.md,
    color: Colors.textDark,
    fontWeight: Typography.medium,
  },
  content: {
    paddingHorizontal: Spacing.lg,
  },
  title: {
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    marginBottom: Spacing.xl,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.bgWhite,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  cardLabel: {
    fontSize: Typography.md,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: {
    color: Colors.bgWhite,
    fontSize: 18,
    fontWeight: Typography.bold,
    lineHeight: 20,
  },
  dropdownRow: {
    marginBottom: Spacing.sm,
  },
  dropdownText: {
    fontSize: Typography.base,
    color: Colors.textDark,
  },
  placeholder: {
    fontSize: Typography.base,
    color: Colors.textPlaceholder,
    marginTop: Spacing.xs,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  cardValue: {
    fontSize: Typography.base,
    color: Colors.textLight,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.lg,
    backgroundColor: Colors.bgWhite,
  },
  saveBtn: {
    backgroundColor: Colors.orange,
    borderRadius: Radius.full,
    paddingVertical: 17,
    alignItems: 'center',
  },
  saveBtnText: {
    color: Colors.bgWhite,
    fontSize: Typography.lg,
    fontWeight: Typography.bold,
  },
});
