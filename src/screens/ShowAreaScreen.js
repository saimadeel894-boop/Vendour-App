// src/screens/ShowAreaScreen.js
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  SafeAreaView, StatusBar,
} from 'react-native';
import { Colors, Typography, Spacing } from '../theme';

export default function ShowAreaScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={s.header}>
        <View style={s.headerSpacer} />
        <Text style={s.title}>Show Area</Text>
        <TouchableOpacity onPress={() => navigate('home')} style={s.completeBtn}>
          <Text style={s.completeText}>Complete</Text>
        </TouchableOpacity>
      </View>

      {/* Empty content - rooms/areas will load from API */}
      <View style={s.content}>
        <Text style={s.emptyText}>Rooms and areas will load from API</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  headerSpacer: {
    width: 80,
  },
  title: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    textAlign: 'center',
  },
  completeBtn: {
    width: 80,
    alignItems: 'flex-end',
  },
  completeText: {
    fontSize: Typography.md,
    color: Colors.orange,
    fontWeight: Typography.bold,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.xl,
  },
  emptyText: {
    fontSize: Typography.sm,
    color: Colors.textLight,
  },
});
