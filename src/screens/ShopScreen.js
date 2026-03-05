// src/screens/ShopScreen.js
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, SafeAreaView, StatusBar, Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors, Typography, Spacing, Radius, Shadow, SCREEN_W } from '../theme';
import { BottomTabBar, DiscountBanner, Icon } from '../components';
import { productsData, appConfig } from '../data';

const HAMBURGER_ITEMS = [
  { label: 'HEATING DEALS', badge: 'SALE', badgeColor: '#E84E1B' },
  { label: 'SKINCARE', badge: 'NEW', badgeColor: '#E0E0E0' },
  { label: 'BABY', badge: 'NEW', badgeColor: '#E0E0E0' },
  { label: 'NEW IN' },
  { label: 'FRIDGES', expand: true },
  { label: 'KITCHEN', expand: true },
  { label: 'CEILING FANS', expand: true },
  { label: 'HEATERS', expand: true },
  { label: 'PERSONAL CARE', expand: true },
  { label: 'AUDIO AND TV', expand: true },
  { label: 'TRAVEL SUITCASES', expand: true },
  { label: 'GARDEN AND OUTDOOR', expand: true },
];

// ── PRODUCT DETAIL SCREEN ────────────────────────────────────
function ProductDetail({ product, onBack }) {
  const [selectedColor, setSelectedColor] = useState(product.defaultColorIndex);

  return (
    <SafeAreaView style={pd.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back */}
        <TouchableOpacity style={pd.backRow} onPress={onBack}>
          <Ionicons name="arrow-back" size={18} color="#888888" />
          <Text style={pd.backText}>Back</Text>
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
            <Ionicons name="bookmark-outline" size={18} color={Colors.textDark} />
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
  const [menuOpen, setMenuOpen] = useState(false);

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
        <TouchableOpacity onPress={() => setMenuOpen(true)}>
          <Ionicons name="menu" size={26} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={s.shopBrand}>CREATE</Text>
        <View style={s.shopHeaderRight}>
          <TouchableOpacity style={s.headerIconBtn}>
            <Ionicons name="search-outline" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerIconBtn}>
            <Ionicons name="heart-outline" size={24} color="#1A1A1A" />
          </TouchableOpacity>
          <TouchableOpacity style={s.headerIconBtn}>
            <Ionicons name="bag-outline" size={24} color="#1A1A1A" />
            <View style={s.cartBadge}><Text style={s.cartBadgeText}>2</Text></View>
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

      {/* Hamburger Menu Modal */}
      <Modal visible={menuOpen} animationType="slide" transparent>
        <View style={s.menuOverlay}>
          <View style={s.menuContent}>
            <View style={s.menuHeader}>
              <Text style={s.menuTitle}>CREATE</Text>
              <TouchableOpacity onPress={() => setMenuOpen(false)}>
                <Ionicons name="close" size={24} color="#1A1A1A" />
              </TouchableOpacity>
            </View>
            {HAMBURGER_ITEMS.map((item, i) => (
              <TouchableOpacity key={i} style={s.menuRow}>
                <View style={s.menuRowLeft}>
                  <Text style={s.menuRowText}>{item.label}</Text>
                  {item.badge && (
                    <View style={[s.menuBadge, { backgroundColor: item.badgeColor }]}>
                      <Text style={[s.menuBadgeText, item.badgeColor === '#E0E0E0' && s.menuBadgeTextGray]}>{item.badge}</Text>
                    </View>
                  )}
                </View>
                {item.expand && (
                  <Text style={s.menuPlus}>+</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

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
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D8D0',
  },
  shopBrand: {
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 22,
    fontWeight: '900',
    color: '#1A1A1A',
    letterSpacing: 6,
    textAlign: 'center',
  },
  shopHeaderRight: {
    flexDirection: 'row',
    gap: 16,
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
    width: SCREEN_W / 2,
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
  productEmoji: { fontSize: 48 },
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
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
  },
  menuContent: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D8D0',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 6,
    color: '#1A1A1A',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E0D6',
  },
  menuRowLeft: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  menuRowText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#1A1A1A',
  },
  menuBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  menuBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  menuBadgeTextGray: { color: '#555555' },
  menuPlus: { fontSize: 20, color: '#AAAAAA' },
});
