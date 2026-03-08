import React, { useState } from 'react';
import {
    View, Text, ScrollView, TouchableOpacity,
    StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W, height: H } = Dimensions.get('window');

const COLORS = ['#D4C5A9', '#C8B89A', '#B8A898', '#8B7355', '#1A1A1A'];

export default function ProductDetailScreen({ navigate }) {
    const [selectedColor, setSelectedColor] = useState(0);
    const [bookmarked, setBookmarked] = useState(false);
    const [qty, setQty] = useState(1);

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />

            {/* Header */}
            <View style={s.header}>
                <TouchableOpacity
                    onPress={() => navigate('productCategory')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.headerTitle}>Product</Text>
                <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
                    <Ionicons
                        name={bookmarked ? 'bookmark' : 'bookmark-outline'}
                        size={24} color="#1A1A1A"
                    />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>

                {/* Product image area */}
                <View style={s.imageArea}>
                    <View style={s.imagePlaceholder} />

                    {/* Dot pagination */}
                    <View style={s.dots}>
                        {[0, 1, 2].map(i => (
                            <View key={i} style={[
                                s.dot, i === 0 && s.dotActive
                            ]} />
                        ))}
                    </View>
                </View>

                <View style={s.content}>

                    {/* Product name */}
                    <Text style={s.productName}>
                        PATIO HEATER COMPACT
                    </Text>
                    <Text style={s.productSub}>
                        Infrared Heater for Terraces
                    </Text>

                    {/* In stock */}
                    <View style={s.stockRow}>
                        <Ionicons name="checkmark-circle"
                            size={16} color="#3D8B37" />
                        <Text style={s.stockText}>
                            {'  '}In Stock — shipping in 24-96h
                        </Text>
                    </View>

                    {/* Color swatches */}
                    <Text style={s.colorLabel}>COLOUR</Text>
                    <View style={s.swatches}>
                        {COLORS.map((color, i) => (
                            <TouchableOpacity
                                key={i}
                                onPress={() => setSelectedColor(i)}
                                style={[
                                    s.swatch,
                                    { backgroundColor: color },
                                    selectedColor === i && s.swatchSelected,
                                ]}
                            />
                        ))}
                    </View>

                    {/* SAVE banner */}
                    <View style={s.saveBanner}>
                        <Text style={s.saveBannerText}>SAVE 22%</Text>
                    </View>

                    {/* Price */}
                    <View style={s.priceRow}>
                        <Text style={s.salePrice}>£ 69.95</Text>
                        <View>
                            <Text style={s.originalLabel}>
                                Recommended price
                            </Text>
                            <Text style={s.originalPrice}>£ 89.95</Text>
                        </View>
                    </View>

                    {/* Qty row */}
                    <View style={s.qtyRow}>
                        <TouchableOpacity
                            style={s.qtyBtn}
                            onPress={() => setQty(Math.max(1, qty - 1))}
                        >
                            <Text style={s.qtyBtnText}>−</Text>
                        </TouchableOpacity>
                        <Text style={s.qtyValue}>{qty}</Text>
                        <TouchableOpacity
                            style={s.qtyBtn}
                            onPress={() => setQty(qty + 1)}
                        >
                            <Text style={s.qtyBtnText}>+</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Add to cart */}
                    <TouchableOpacity style={s.cartBtn}>
                        <Text style={s.cartBtnText}>Add to cart</Text>
                    </TouchableOpacity>

                    {/* Exclusive offers info */}
                    <View style={s.offersBanner}>
                        <Ionicons name="pricetag-outline"
                            size={18} color="#888888" />
                        <Text style={s.offersText}>
                            EXCLUSIVE OFFERS AVAILABLE
                        </Text>
                        <Ionicons name="chevron-forward"
                            size={16} color="#888888" />
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E0D6',
    },
    headerTitle: {
        fontSize: 16, fontWeight: '700', color: '#1A1A1A',
    },
    imageArea: {
        width: W,
        height: 300,
        backgroundColor: '#F0E8D8',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePlaceholder: {
        width: W * 0.7,
        height: 220,
        backgroundColor: '#E8DDD0',
        borderRadius: 12,
    },
    dots: {
        position: 'absolute',
        bottom: 12,
        flexDirection: 'row',
        gap: 6,
    },
    dot: {
        width: 6, height: 6,
        borderRadius: 3,
        backgroundColor: '#CCCCCC',
    },
    dotActive: {
        backgroundColor: '#1A1A1A',
        width: 18,
    },
    content: { paddingHorizontal: 20, paddingTop: 20 },
    productName: {
        fontSize: 22, fontWeight: '800',
        color: '#1A1A1A', letterSpacing: 0.3,
    },
    productSub: {
        fontSize: 14, color: '#888888', marginTop: 4,
    },
    stockRow: {
        flexDirection: 'row', alignItems: 'center',
        marginTop: 12,
    },
    stockText: { fontSize: 13, color: '#3D8B37' },
    colorLabel: {
        fontSize: 11, fontWeight: '700',
        color: '#888888', letterSpacing: 2,
        marginTop: 20, marginBottom: 10,
    },
    swatches: {
        flexDirection: 'row', gap: 10,
    },
    swatch: {
        width: 32, height: 32,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    swatchSelected: {
        borderWidth: 2,
        borderColor: '#1A1A1A',
    },
    saveBanner: {
        backgroundColor: '#E84E1B',
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 4,
    },
    saveBannerText: {
        color: '#FFFFFF', fontSize: 15,
        fontWeight: '800', letterSpacing: 2,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    salePrice: {
        fontSize: 32, fontWeight: '800', color: '#1A1A1A',
    },
    originalLabel: {
        fontSize: 11, color: '#AAAAAA', textAlign: 'right',
    },
    originalPrice: {
        fontSize: 14, color: '#AAAAAA',
        textDecorationLine: 'line-through', textAlign: 'right',
    },
    qtyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        gap: 20,
    },
    qtyBtn: {
        width: 40, height: 40,
        borderRadius: 20,
        borderWidth: 1.5, borderColor: '#1A1A1A',
        alignItems: 'center', justifyContent: 'center',
    },
    qtyBtnText: { fontSize: 20, color: '#1A1A1A', lineHeight: 24 },
    qtyValue: { fontSize: 20, fontWeight: '700', color: '#1A1A1A' },
    cartBtn: {
        backgroundColor: '#1A1A1A',
        borderRadius: 999,
        paddingVertical: 18,
        alignItems: 'center',
        marginTop: 24,
    },
    cartBtnText: {
        color: '#FFFFFF', fontSize: 16, fontWeight: '700',
    },
    offersBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 16,
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: '#F8F5F0',
        borderRadius: 8,
    },
    offersText: {
        flex: 1, fontSize: 12,
        fontWeight: '600', color: '#888888',
        letterSpacing: 0.5,
    },
});
