import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius } from '../theme';
import { BottomTabBar, DiscountBanner } from '../components';
import { productsData, appConfig } from '../data';

const { width: W, height: H } = Dimensions.get('window');

// ── SHOP HOME SCREEN ─────────────────────────────────────────
export default function ShopScreen({ navigate }) {
  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <DiscountBanner voucher={appConfig.discountVoucher} percent={appConfig.discountPercent} />

      {/* Shop Header */}
      <View style={s.header}>
        {/* Left - fixed 44px */}
        <TouchableOpacity
          style={{ width: 44, alignItems: 'flex-start', justifyContent: 'center' }}
          onPress={() => navigate('shopMenu')}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons name="menu" size={26} color="#1A1A1A" />
        </TouchableOpacity>

        {/* Center - VENDOM absolutely centered */}
        <Text style={s.brand}>VENDOM</Text>

        {/* Right - fixed 44px */}
        <View style={{
          width: 88, flexDirection: 'row',
          alignItems: 'center', justifyContent: 'flex-end', gap: 14
        }}>
          <TouchableOpacity onPress={() => navigate('search')}>
            <Ionicons name="search-outline" size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('wishlist')}>
            <Ionicons name="heart-outline" size={22} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('cart')}>
            <View>
              <Ionicons name="bag-outline" size={22} color="#1A1A1A" />
              <View style={s.cartBadge}>
                <Text style={s.cartBadgeText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Deals Banner */}
      <View style={s.dealsBanner}>
        <Text style={s.dealsMain}>UP TO -30%</Text>
        <Text style={s.dealsSub}> | HEATING DEALS </Text>
        <Ionicons name="information-circle-outline" size={20} color="#1A1A1A" />
      </View>

      {/* Back Row */}
      <TouchableOpacity style={s.backRow}>
        <Ionicons name="arrow-back" size={18} color="#888888" />
        <Text style={s.backText}>Back</Text>
      </TouchableOpacity>

      {/* Products Count */}
      <View style={s.productsRow}>
        <Text style={s.productsCount}>128 products</Text>
        <View style={s.viewToggle}>
          <TouchableOpacity><MaterialCommunityIcons name="view-sequential-outline" size={22} color="#888888" /></TouchableOpacity>
          <TouchableOpacity><MaterialCommunityIcons name="view-grid-outline" size={22} color="#1A1A1A" /></TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        {/* Hero Banner */}
        <View style={s.heroBanner}>
          <View style={s.heroContent}>
            <Text style={s.heroTitle}>Mix and Match</Text>
          </View>
          {/* Illustrated product row */}
          <View style={s.heroProducts}>
            <View style={[s.heroProduct, { backgroundColor: '#5B7FC4', borderRadius: 12 }]}>
              <Text style={s.heroProductEmoji}>🫙</Text>
            </View>
            <View style={[s.heroProduct, { backgroundColor: '#8BAF8B', borderRadius: 8, height: 90 }]}>
              <Text style={s.heroProductEmoji}>☕</Text>
            </View>
            <View style={[s.heroProduct, { backgroundColor: '#5B7FC4', borderRadius: 10 }]}>
              <Text style={s.heroProductEmoji}>❄️</Text>
            </View>
          </View>
          <TouchableOpacity style={s.editorialBtn} onPress={() => navigate('magazine')}>
            <Text style={s.editorialText}>EXPLORE THE EDITORIAL</Text>
          </TouchableOpacity>
        </View>

        {/* Store info */}
        <View style={s.storeInfo}>
          <Text style={s.storeTitle}>Online appliance store</Text>
          <Text style={s.storeSubtitle}>Designer appliances that transform your home</Text>
          <Text style={s.storeDesc}>
            At Create, we know that appliances should not only serve a practical purpose but also
            fit your lifestyle and vision for your home. That's why we design products that combine
            aesthetics, innovation, and quality.
          </Text>
        </View>

        {/* Product Grid */}
        <View style={s.productGrid}>
          {productsData.map(product => (
            <TouchableOpacity
              key={product.id}
              style={s.productCard}
              onPress={() => navigate('productDetail')}
              activeOpacity={0.85}
            >
              <View style={[s.productImg, { backgroundColor: '#F5F0E8' }]}>
                <View style={s.ukBadge}>
                  <Text style={s.ukBadgeText}>UK ADAPTER</Text>
                </View>
                <TouchableOpacity style={s.productHeart}>
                  <Ionicons name="heart-outline" size={20} color="#888888" />
                </TouchableOpacity>
              </View>
              <View style={s.productInfo}>
                <Text style={s.productName}>{product.name}</Text>
                <Text style={s.productSubtitle} numberOfLines={1}>{product.subtitle}</Text>
                <View style={s.priceRow}>
                  <Text style={s.productPrice}>£ {product.price.toFixed(2)}</Text>
                  <Text style={s.originalPrice}>£ {product.originalPrice.toFixed(2)}</Text>
                  {product.discount > 0 && (
                    <View style={s.discountBadge}>
                      <Text style={s.discountBadgeText}>-{product.discount}%</Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomTabBar active="shop" onPress={navigate} />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D8D0',
    position: 'relative',
  },
  brand: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 6,
    color: '#1A1A1A',
    zIndex: -1,
  },
  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.textDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    fontSize: 9,
    color: Colors.textWhite,
    fontWeight: Typography.bold,
  },
  heroBanner: {
    minHeight: 300,
    height: 320,
    backgroundColor: Colors.blue,
    overflow: 'hidden',
  },
  heroContent: {
    position: 'absolute',
    top: 40,
    left: Spacing.lg,
    right: Spacing.lg,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: Typography.bold,
    color: Colors.textWhite,
    lineHeight: 42,
  },
  heroProducts: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 16,
    justifyContent: 'center',
  },
  heroProduct: {
    width: 70,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroProductEmoji: { fontSize: 32 },
  editorialBtn: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 14,
    backgroundColor: 'rgba(180,170,155,0.85)',
    alignItems: 'center',
  },
  editorialText: {
    fontSize: Typography.sm,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    letterSpacing: 1.5,
  },
  storeInfo: {
    padding: Spacing.lg,
    paddingBottom: Spacing.sm,
  },
  storeTitle: {
    fontSize: Typography.xxl,
    fontWeight: Typography.regular,
    color: Colors.textDark,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  storeSubtitle: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    marginBottom: Spacing.sm,
    lineHeight: 26,
  },
  storeDesc: {
    fontSize: Typography.sm,
    color: Colors.textMid,
    lineHeight: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacing.md,
  },
  productCard: {
    width: W / 2,
    backgroundColor: Colors.bgWhite,
    borderRightWidth: 1,
    borderRightColor: Colors.border,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  productImg: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountBadge: {
    backgroundColor: '#E84E1B',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 3,
    marginLeft: 6,
  },
  discountBadgeText: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '800',
  },
  productInfo: { padding: 10 },
  productName: {
    fontSize: Typography.sm,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  productSubtitle: {
    fontSize: 11,
    color: '#888888',
    marginTop: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    flexWrap: 'wrap',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  originalPrice: {
    fontSize: 11,
    color: '#AAAAAA',
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
  ukBadge: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  ukBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  productHeart: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  dealsBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F0EB',
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  dealsMain: { fontSize: 13, fontWeight: '800', color: '#1A1A1A' },
  dealsSub: { fontSize: 13, color: '#1A1A1A', flex: 1 },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 6,
  },
  backText: { fontSize: 15, color: '#888888' },
  productsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  productsCount: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
  viewToggle: { flexDirection: 'row', gap: 16 },
});
