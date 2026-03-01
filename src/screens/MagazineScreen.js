// src/screens/MagazineScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar, ActivityIndicator,
} from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow } from '../theme';
import { BottomTabBar } from '../components';
import { articlesData } from '../data';

export default function MagazineScreen({ navigate }) {
  // Simulates loading state seen in video
  const [loading] = useState(false);

  if (loading) {
    return (
      <SafeAreaView style={s.loadRoot}>
        <ActivityIndicator size="large" color={Colors.textDark} />
        <Text style={s.loadText}>Loading</Text>
        <BottomTabBar active="magazine" onPress={navigate} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>

        {/* ── Section Banner ── */}
        <View style={s.heroBanner}>
          <Text style={s.heroTag}>MAGAZINE</Text>
          <Text style={s.heroText}>
            Dive into the Create universe and discover all the stories in our magazine.
          </Text>
        </View>

        {/* ── Article Cards ── */}
        {articlesData.map((article, index) => (
          <TouchableOpacity key={article.id} style={s.articleCard} activeOpacity={0.9}>
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
              <Text style={s.categoryBadge}>{article.category}</Text>
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
    paddingBottom: 30,
  },
  heroBanner: {
    backgroundColor: Colors.bgWarm,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
    marginBottom: Spacing.xs,
  },
  heroTag: {
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 3,
    color: Colors.textDark,
    marginBottom: Spacing.xs,
  },
  heroText: {
    fontSize: Typography.xxl,
    fontWeight: Typography.medium,
    color: Colors.textDark,
    lineHeight: 30,
  },
  articleCard: {
    backgroundColor: Colors.bgWhite,
    marginBottom: 1,
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
  categoryBadge: {
    margin: Spacing.md,
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 2,
    color: Colors.textDark,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
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
    whiteSpace: 'nowrap',
  },
  articleDesc: {
    fontSize: Typography.sm,
    color: Colors.textLight,
    lineHeight: 19,
  },
});
