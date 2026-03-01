// src/screens/ShopScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar,
} from 'react-native';
import { Colors, Typography, Spacing, Radius, Shadow, SCREEN_W } from '../theme';
import { BottomTabBar, DiscountBanner, Icon } from '../components';
import { productsData, appConfig } from '../data';

// ── PRODUCT DETAIL SCREEN ────────────────────────────────────
function ProductDetail({ product, onBack }) {
  const [selectedColor, setSelectedColor] = useState(product.defaultColorIndex);

  return (
    <SafeAreaView style={pd.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back */}
        <TouchableOpacity style={pd.backRow} onPress={onBack}>
          <Text style={pd.backArrow}>←</Text>
          <Text style={pd.backText}>Volver</Text>
        </TouchableOpacity>

        {/* Product Image Area */}
        <View style={[pd.imgArea, {
          backgroundColor: product.colors[selectedColor].hex + '55',
        }]}>
          {/* Illustrated coffee machine */}
          <View style={pd.machineWrap}>
            <View style={[pd.machineBody, {
              backgroundColor: product.colors[selectedColor].hex,
            }]}>
              <View style={pd.machineTop} />
              <View style={pd.machineBtn} />
              <Text style={pd.machineBrand}>CREATE</Text>
            </View>
            <View style={pd.machineArm}>
              <View style={pd.cup} />
            </View>
            <View style={pd.machineBase} />
          </View>
          {/* Dot nav */}
          <View style={pd.dotRow}>
            {[0, 1, 2].map(i => (
              <View key={i} style={[pd.dot, i === 0 && pd.dotActive]} />
            ))}
          </View>
          {/* Bookmark */}
          <TouchableOpacity style={pd.bookmarkBtn}>
            <Icon name="bookmark" size={18} color={Colors.textDark} />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={pd.info}>
          <Text style={pd.title}>{product.name} -{'\n'}{product.subtitle}</Text>
          <Text style={pd.stock}>✓  In Stock, shipping in {product.shippingTime}</Text>

          {/* Color */}
          <View style={pd.colorRow}>
            <Text style={pd.colorBold}>Color: </Text>
            <Text style={pd.colorLight}>{product.colors[selectedColor].label}</Text>
          </View>
          <View style={pd.swatchRow}>
            {product.colors.map((c, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => setSelectedColor(i)}
                style={[
                  pd.swatch,
                  { backgroundColor: c.hex },
                  i === selectedColor && pd.swatchActive,
                ]}
              />
            ))}
          </View>

          {/* Discount banner */}
          <View style={pd.discountBar}>
            <Text style={pd.discountText}>SAVE {product.discount}%</Text>
          </View>

          {/* Price + CTA */}
          <View style={pd.priceCta}>
            <View>
              <Text style={pd.priceMain}>
                {product.price.toFixed(2).replace('.', ',')} €
              </Text>
              <Text style={pd.priceOld}>
                Recommended price {product.originalPrice.toFixed(2)} €
              </Text>
            </View>
            <TouchableOpacity style={pd.cartBtn} activeOpacity={0.85}>
              <Text style={pd.cartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Exclusive Offers banner */}
        <View style={pd.offerBanner}>
          <Text style={pd.offerTag}>EXCLUSIVE OFFERS</Text>
          <Text style={pd.offerText}>
            Buy Create products from the App and access exclusive offers.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const pd = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.bgWhite },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: Spacing.md,
    paddingTop: 14,
    paddingBottom: 4,
  },
  backArrow: { fontSize: 18, color: Colors.textDark },
  backText: { fontSize: Typography.md, color: Colors.textDark, fontWeight: Typography.medium },
  imgArea: {
    height: 290,
    marginHorizontal: Spacing.md,
    borderRadius: Radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  machineWrap: { alignItems: 'center' },
  machineBody: {
    width: 90,
    height: 130,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    ...Shadow.sm,
  },
  machineTop: {
    width: 38,
    height: 22,
    backgroundColor: 'rgba(0,0,0,0.12)',
    borderRadius: 5,
  },
  machineBtn: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#2C2825',
  },
  machineBrand: {
    position: 'absolute',
    top: 10,
    fontSize: 7,
    letterSpacing: 3,
    color: 'rgba(0,0,0,0.4)',
    fontWeight: Typography.bold,
  },
  machineArm: {
    width: 64,
    height: 30,
    backgroundColor: 'rgba(200,190,178,0.9)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 2,
    marginTop: -4,
  },
  cup: {
    width: 28,
    height: 24,
    backgroundColor: Colors.bgWhite,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  machineBase: {
    width: 112,
    height: 10,
    backgroundColor: 'rgba(200,190,178,0.8)',
    borderRadius: 5,
    marginTop: -2,
  },
  dotRow: {
    position: 'absolute',
    bottom: 14,
    flexDirection: 'row',
    gap: 6,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  dotActive: {
    width: 18,
    backgroundColor: Colors.textDark,
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 12,
    right: 14,
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: Radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.lg },
  title: {
    fontSize: Typography.xl,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 10,
  },
  stock: {
    fontSize: Typography.sm,
    color: Colors.green,
    textAlign: 'center',
    fontWeight: Typography.semiBold,
    marginBottom: Spacing.md,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  colorBold: { fontSize: Typography.base, fontWeight: Typography.bold, color: Colors.textDark },
  colorLight: { fontSize: Typography.base, color: Colors.textMid },
  swatchRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: Spacing.lg,
  },
  swatch: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  swatchActive: {
    borderWidth: 2.5,
    borderColor: Colors.textDark,
    ...Shadow.sm,
  },
  discountBar: {
    backgroundColor: Colors.orange,
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: Spacing.md,
  },
  discountText: {
    color: Colors.textWhite,
    fontSize: Typography.base,
    fontWeight: Typography.extraBold,
    letterSpacing: 1.5,
  },
  priceCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  priceMain: {
    fontSize: 28,
    fontWeight: Typography.extraBold,
    color: Colors.textDark,
    letterSpacing: -0.5,
  },
  priceOld: {
    fontSize: Typography.xs,
    color: Colors.textLight,
    textDecorationLine: 'line-through',
    marginTop: 3,
  },
  cartBtn: {
    backgroundColor: Colors.textDark,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 16,
    borderRadius: Radius.sm,
  },
  cartText: { color: Colors.textWhite, fontSize: Typography.md, fontWeight: Typography.bold },
  offerBanner: {
    backgroundColor: Colors.bgWhite,
    margin: Spacing.md,
    marginTop: Spacing.lg,
    borderRadius: Radius.xl,
    padding: Spacing.xl,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  offerTag: {
    fontSize: Typography.xs,
    fontWeight: Typography.extraBold,
    letterSpacing: 3,
    color: Colors.textDark,
    marginBottom: Spacing.xs,
  },
  offerText: {
    fontSize: Typography.xxl,
    fontWeight: Typography.medium,
    color: Colors.textDark,
    lineHeight: 30,
  },
});

// ── SHOP HOME SCREEN ─────────────────────────────────────────
export default function ShopScreen({ navigate }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    );
  }

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="dark-content" />
      <DiscountBanner voucher={appConfig.discountVoucher} percent={appConfig.discountPercent} />

      {/* Shop Header */}
      <View style={s.shopHeader}>
        <TouchableOpacity>
          <Icon name="menu" size={22} color={Colors.textDark} />
        </TouchableOpacity>
        <Text style={s.shopBrand}>CREATE</Text>
        <View style={s.shopHeaderRight}>
          <TouchableOpacity style={s.headerIconBtn}>
            <Icon name="search" size={20} color={Colors.textDark} />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerIconBtn}>
            <Icon name="heart" size={20} color={Colors.textDark} />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerIconBtn}>
            <Icon name="cart" size={20} color={Colors.textDark} />
            <View style={s.cartBadge}><Text style={s.cartBadgeText}>0</Text></View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
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
          <TouchableOpacity style={s.editorialBtn}>
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
              onPress={() => setSelectedProduct(product)}
              activeOpacity={0.85}
            >
              {/* Product image placeholder */}
              <View style={[s.productImg, {
                backgroundColor: product.colors[product.defaultColorIndex].hex + '66',
              }]}>
                {product.discount > 0 && (
                  <View style={s.discountBadge}>
                    <Text style={s.discountBadgeText}>-{product.discount}%</Text>
                  </View>
                )}
                <Text style={s.productEmoji}>☕</Text>
              </View>
              <View style={s.productInfo}>
                <Text style={s.productName}>{product.name}</Text>
                <Text style={s.productSubtitle} numberOfLines={1}>{product.subtitle}</Text>
                <Text style={s.productPrice}>
                  {product.price.toFixed(2).replace('.', ',')} €
                </Text>
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
  shopHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  shopBrand: {
    fontSize: Typography.xl,
    fontWeight: Typography.extraBold,
    color: Colors.textDark,
    letterSpacing: 6,
  },
  shopHeaderRight: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  headerIconBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
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
    height: 320,
    backgroundColor: '#1E4D8C',
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
    gap: 1,
    paddingHorizontal: 1,
    marginTop: Spacing.md,
  },
  productCard: {
    width: (SCREEN_W - 3) / 2,
    backgroundColor: Colors.bgWhite,
  },
  productImg: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: Colors.orange,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  discountBadgeText: {
    fontSize: Typography.xs,
    color: Colors.textWhite,
    fontWeight: Typography.bold,
  },
  productEmoji: { fontSize: 48 },
  productInfo: { padding: 10 },
  productName: {
    fontSize: Typography.sm,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    letterSpacing: 0.5,
  },
  productSubtitle: {
    fontSize: Typography.xs,
    color: Colors.textLight,
    marginTop: 2,
  },
  productPrice: {
    fontSize: Typography.md,
    fontWeight: Typography.bold,
    color: Colors.textDark,
    marginTop: 6,
  },
});
