// src/screens/MagazineScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography, Spacing, Radius, Shadow } from '../theme';
import { BottomTabBar } from '../components';
import { articlesData } from '../data';

const { width: W, height: H } = Dimensions.get('window');

export default function MagazineScreen({ navigate }) {
  // Simulates loading state seen in video
  const [loading] = useState(false);

  if (loading) {
    return (
      <SafeAreaView style={s.loadRoot} edges={['top', 'bottom']}>
        <ActivityIndicator size="large" color={Colors.textDark} />
        <Text style={s.loadText}>Loading</Text>
        <BottomTabBar active="magazine" onPress={navigate} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>

        {/* ── Article Cards ── */}
        {articlesData.map((article, index) => (
          <TouchableOpacity key={article.id} style={s.articleCard} activeOpacity={0.9}>
            {/* Category label ABOVE image */}
            <Text style={s.categoryLabel}>{article.category}</Text>

            {/* Image area */}
            <View style={[s.articleImg, { backgroundColor: article.bgColor }]}>
              {/* Decorative store illustration */}
              <View style={s.storeIllustration}>
                <View style={s.storeCounter} />
                <View style={[s.storeShelf, { top: 30 }]} />
                <View style={[s.storeShelf, { top: 55 }]} />
                <View style={[s.storeShelf, { top: 80 }]} />
                <View style={[s.storeStool, { left: '30%' }]} />
                <View style={[s.storeStool, { left: '45%' }]} />
              </View>
            </View>

            {/* Body */}
            <View style={s.articleBody}>
              <View style={s.articleRow}>
                <Text style={s.articleTitle}>{article.title}</Text>
                <TouchableOpacity style={s.readMoreBtn}>
                  <Text style={s.readMoreText}>Read more</Text>
                </TouchableOpacity>
              </View>
              <Text style={s.articleDesc}>{article.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {/* Separator between articles - last item has borderBottom on articleCard */}
      </ScrollView>

      <BottomTabBar active="magazine" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  loadRoot: {
    flex: 1,
    backgroundColor: Colors.bgWhite,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  loadText: {
    fontSize: Typography.md,
    color: Colors.textMid,
  },
  content: {
    paddingBottom: 80,
  },
  categoryLabel: {
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 2,
    color: Colors.textDark,
    textTransform: 'uppercase',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.xs,
  },
  articleCard: {
    backgroundColor: Colors.bgWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  articleImg: {
    height: 220,
    overflow: 'hidden',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  storeIllustration: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  storeCounter: {
    position: 'absolute',
    bottom: 20,
    left: '20%',
    width: '50%',
    height: 60,
    backgroundColor: 'rgba(200,185,165,0.6)',
    borderRadius: 30,
  },
  storeShelf: {
    position: 'absolute',
    left: '55%',
    right: 10,
    height: 5,
    backgroundColor: 'rgba(190,175,155,0.5)',
    borderRadius: 2,
  },
  storeStool: {
    position: 'absolute',
    bottom: 10,
    width: 24,
    height: 38,
    backgroundColor: 'rgba(190,175,155,0.6)',
    borderRadius: 6,
  },
  articleBody: {
    padding: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  articleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: Spacing.xs,
  },
  articleTitle: {
    flex: 1,
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    lineHeight: 26,
  },
  readMoreBtn: {
    paddingTop: 4,
  },
  readMoreText: {
    fontSize: Typography.sm,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    textDecorationLine: 'underline',
    letterSpacing: 0.3,
  },
  articleDesc: {
    fontSize: Typography.sm,
    color: Colors.textLight,
    lineHeight: 19,
  },
});
