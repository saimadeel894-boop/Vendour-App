// src/screens/RecipesScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors, Typography, Spacing } from '../theme';
import { BottomTabBar, Icon } from '../components';
import { recipesData } from '../data';

export default function RecipesScreen({ navigate }) {
  const [recipes, setRecipes] = useState(recipesData);

  const toggleFavorite = (id) => {
    setRecipes(prev =>
      prev.map(r => r.id === id ? { ...r, isFavorite: !r.isFavorite } : r)
    );
  };

  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />

      {/* ── Header ── */}
      <View style={s.header}>
        <Text style={s.headerTitle}>Recipes</Text>
        <View style={s.headerActions}>
          <TouchableOpacity style={s.headerBtn}>
            <Icon name="heart" size={20} color={Colors.textDark} />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerBtn}>
            <Icon name="filter" size={20} color={Colors.textDark} />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerBtn}>
            <Icon name="search" size={20} color={Colors.textDark} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.content}>
        {recipes.map(recipe => (
          <View key={recipe.id} style={s.recipeCard}>
            {/* Image area - white/empty placeholder */}
            <View style={s.recipeImg} />

            {/* Separator */}
            <View style={s.recipeSeparator} />

            {/* Info */}
            <View style={s.recipeInfo}>
              <View style={s.recipeTopRow}>
                <Text style={s.recipeDate}>{recipe.date}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(recipe.id)}>
                  <Text style={[
                    s.heartIcon,
                    recipe.isFavorite && { color: Colors.orange },
                  ]}>
                    {recipe.isFavorite ? '♥' : '♡'}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={s.recipeTitle}>{recipe.title}</Text>
              <View style={s.recipeMeta}>
                {/* Servings */}
                <View style={s.metaItem}>
                  <Text style={s.metaIcon}>⊹</Text>
                  <Text style={s.metaText}>{recipe.servings}</Text>
                </View>
                {/* Prep */}
                <View style={s.metaItem}>
                  <Text style={s.metaIcon}>◷</Text>
                  <Text style={s.metaText}>{recipe.prepTime}</Text>
                </View>
                {/* Cook */}
                <View style={s.metaItem}>
                  <Text style={s.metaIcon}>⊡</Text>
                  <Text style={s.metaText}>{recipe.cookTime}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <BottomTabBar active="recipes" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: 14,
  },
  headerTitle: {
    fontSize: Typography.xxxl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 4,
  },
  headerBtn: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingBottom: 30,
  },
  recipeCard: {
    backgroundColor: Colors.bgWhite,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  recipeImg: {
    height: 200,
    backgroundColor: Colors.bgLight,
  },
  recipeSeparator: {
    height: 1,
    backgroundColor: Colors.borderLight,
  },
  recipeInfo: {
    padding: Spacing.md,
  },
  recipeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  recipeDate: {
    fontSize: Typography.sm,
    color: Colors.textLight,
    letterSpacing: 0.5,
  },
  heartIcon: {
    fontSize: 20,
    color: Colors.textLight,
  },
  recipeTitle: {
    fontSize: Typography.xxl,
    fontWeight: Typography.extraBold,
    color: Colors.textDark,
    marginBottom: Spacing.sm,
    lineHeight: 26,
  },
  recipeMeta: {
    flexDirection: 'row',
    gap: 20,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  metaIcon: {
    fontSize: 14,
    color: Colors.textMid,
  },
  metaText: {
    fontSize: Typography.sm,
    color: Colors.textMid,
    fontWeight: Typography.medium,
  },
});
