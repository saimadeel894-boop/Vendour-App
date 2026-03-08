import React, { useState } from 'react';
import {
    View, Text, ScrollView, TouchableOpacity,
    StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width: W, height: H } = Dimensions.get('window');

const dummyProducts = [
    {
        id: 1,
        name: 'PATIO HEATER COMPACT',
        subtitle: 'Infrared Heater for Terraces',
        price: 129.95,
        originalPrice: 159.95,
        discount: 18,
        badge: 'UK ADAPTER',
        bgColor: '#F0E8D8',
    },
    {
        id: 2,
        name: 'PATIO HEATER',
        subtitle: 'Infrared patio and garden heater',
        price: 199.95,
        originalPrice: 259.95,
        discount: 23,
        badge: 'UK ADAPTER',
        bgColor: '#E8E0D0',
    },
    {
        id: 3,
        name: 'TOWER HEATER PRO',
        subtitle: 'Ceramic tower heater with remote',
        price: 89.95,
        originalPrice: 109.95,
        discount: 18,
        badge: null,
        bgColor: '#F5F0E8',
    },
    {
        id: 4,
        name: 'WALL HEATER SLIM',
        subtitle: 'Electric panel wall heater',
        price: 149.95,
        originalPrice: 179.95,
        discount: 17,
        badge: 'UK ADAPTER',
        bgColor: '#EDE5D8',
    },
    {
        id: 5,
        name: 'BATHROOM HEATER',
        subtitle: 'Infrared bathroom safe heater',
        price: 109.95,
        originalPrice: 139.95,
        discount: 21,
        badge: null,
        bgColor: '#E8EDF0',
    },
    {
        id: 6,
        name: 'DESK HEATER MINI',
        subtitle: 'Portable personal space heater',
        price: 39.95,
        originalPrice: 49.95,
        discount: 20,
        badge: null,
        bgColor: '#F0EDE8',
    },
];

function ProductCard({ item, navigate }) {
    const [liked, setLiked] = useState(false);
    return (
        <TouchableOpacity
            style={s.card}
            onPress={() => navigate('productDetail')}
        >
            <View style={[s.imageArea, { backgroundColor: item.bgColor }]}>
                {item.badge && (
                    <View style={s.ukBadge}>
                        <Text style={s.ukBadgeText}>{item.badge}</Text>
                    </View>
                )}
                <TouchableOpacity
                    style={s.heartBtn}
                    onPress={() => setLiked(!liked)}
                >
                    <Ionicons
                        name={liked ? 'heart' : 'heart-outline'}
                        size={20}
                        color={liked ? '#E84E1B' : '#888888'}
                    />
                </TouchableOpacity>
            </View>

            <View style={s.info}>
                <Text style={s.productName} numberOfLines={2}>
                    {item.name}
                </Text>
                <Text style={s.productSubtitle} numberOfLines={1}>
                    {item.subtitle}
                </Text>
                <View style={s.priceRow}>
                    <Text style={s.salePrice}>£ {item.price.toFixed(2)}</Text>
                    <Text style={s.originalPrice}>
                        £ {item.originalPrice.toFixed(2)}
                    </Text>
                    <View style={s.discountBadge}>
                        <Text style={s.discountText}>-{item.discount}%</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default function ProductCategoryScreen({ navigate }) {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />

            {/* Discount banner */}
            <View style={s.discountBanner}>
                <Text style={s.discountBannerText}>
                    5% DISCOUNT-VOUCHER: <Text style={s.bold}>CREATEAPP</Text>
                </Text>
            </View>

            {/* Header */}
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
                    width: 44, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'flex-end', gap: 14
                }}>
                    <TouchableOpacity>
                        <Ionicons name="search-outline" size={22} color="#1A1A1A" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="heart-outline" size={22} color="#1A1A1A" />
                    </TouchableOpacity>
                    <View>
                        <Ionicons name="bag-outline" size={22} color="#1A1A1A" />
                        <View style={s.cartBadge}>
                            <Text style={s.cartBadgeText}>2</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Deals banner */}
            <View style={s.dealsBanner}>
                <Text style={s.dealsText}>
                    <Text style={s.bold}>UP TO -30%</Text>
                    {' | HEATING DEALS'}
                </Text>
                <Ionicons
                    name="information-circle-outline"
                    size={20}
                    color="#888888"
                />
            </View>

            {/* Back row */}
            <TouchableOpacity
                style={s.backRow}
                onPress={() => navigate('shopMenu')}
            >
                <Ionicons name="arrow-back" size={16} color="#888888" />
                <Text style={s.backText}> Back</Text>
            </TouchableOpacity>

            {/* Products count row */}
            <View style={s.countRow}>
                <Text style={s.countText}>128 products</Text>
                <View style={s.viewToggle}>
                    <TouchableOpacity onPress={() => setViewMode('list')}>
                        <MaterialCommunityIcons
                            name="view-sequential-outline"
                            size={22}
                            color={viewMode === 'list' ? '#1A1A1A' : '#AAAAAA'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setViewMode('grid')}>
                        <MaterialCommunityIcons
                            name="view-grid-outline"
                            size={22}
                            color={viewMode === 'grid' ? '#1A1A1A' : '#AAAAAA'}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Product grid */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
                <View style={s.grid}>
                    {dummyProducts.map((item) => (
                        <ProductCard key={item.id} item={item} navigate={navigate} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    discountBanner: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0D8D0',
        paddingVertical: 9,
        alignItems: 'center',
    },
    discountBannerText: { fontSize: 12, color: '#1A1A1A' },
    bold: { fontWeight: '800' },
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
        top: -6, right: -6,
        backgroundColor: '#1A1A1A',
        borderRadius: 8,
        width: 16, height: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cartBadgeText: { color: '#FFF', fontSize: 9, fontWeight: '800' },
    dealsBanner: {
        backgroundColor: '#F5F0EB',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 13,
        paddingHorizontal: 16,
    },
    dealsText: { fontSize: 13, color: '#1A1A1A' },
    backRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    backText: { fontSize: 15, color: '#888888' },
    countRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E0D6',
    },
    countText: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
    viewToggle: { flexDirection: 'row', gap: 12 },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        width: W / 2,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E8E0D6',
    },
    imageArea: {
        width: W / 2,
        height: 200,
        position: 'relative',
    },
    ukBadge: {
        position: 'absolute',
        top: 0, left: 0,
        backgroundColor: 'rgba(255,255,255,0.92)',
        paddingHorizontal: 8,
        paddingVertical: 5,
    },
    ukBadgeText: { fontSize: 10, fontWeight: '700', color: '#1A1A1A' },
    heartBtn: {
        position: 'absolute',
        top: 8, right: 8,
    },
    info: { padding: 10 },
    productName: {
        fontSize: 12, fontWeight: '700',
        letterSpacing: 0.3, color: '#1A1A1A',
        marginBottom: 3,
    },
    productSubtitle: {
        fontSize: 11, color: '#888888', marginBottom: 8,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 4,
    },
    salePrice: { fontSize: 14, fontWeight: '800', color: '#1A1A1A' },
    originalPrice: {
        fontSize: 11, color: '#AAAAAA',
        textDecorationLine: 'line-through',
    },
    discountBadge: {
        backgroundColor: '#E84E1B',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
    },
    discountText: { fontSize: 10, fontWeight: '800', color: '#FFF' },
});
