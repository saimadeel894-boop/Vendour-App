import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W } = Dimensions.get('window');

export default function CartScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('shop')}><Ionicons name="arrow-back" size={24} color="#1A1A1A" /></TouchableOpacity>
                <Text style={s.headerTitle}>My Cart</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={s.empty}>
                <Ionicons name="bag-outline" size={64} color="#CCCCCC" />
                <Text style={s.emptyTitle}>Your cart is empty</Text>
                <Text style={s.emptySub}>Start shopping to add items</Text>
                <TouchableOpacity style={s.shopBtn} onPress={() => navigate('shop')}>
                    <Text style={s.shopBtnText}>Start shopping</Text>
                </TouchableOpacity>
            </View>
            <View style={s.promoRow}>
                <TextInput style={s.promoInput} placeholder="Enter promo code" placeholderTextColor="#AAAAAA" />
                <TouchableOpacity style={s.applyBtn}><Text style={s.applyText}>Apply</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E8E0D6' },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    empty: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 },
    emptyTitle: { fontSize: 20, fontWeight: '700', color: '#1A1A1A', marginTop: 16 },
    emptySub: { fontSize: 14, color: '#888888', marginTop: 8, textAlign: 'center' },
    shopBtn: { marginTop: 24, borderWidth: 1.5, borderColor: '#1A1A1A', borderRadius: 999, paddingVertical: 14, paddingHorizontal: 40 },
    shopBtnText: { fontSize: 15, fontWeight: '700', color: '#1A1A1A' },
    promoRow: { flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 16, borderTopWidth: 1, borderTopColor: '#E8E0D6', gap: 10 },
    promoInput: { flex: 1, fontSize: 14, paddingVertical: 12, paddingHorizontal: 16, borderRadius: 8, backgroundColor: '#F5F5F5' },
    applyBtn: { backgroundColor: '#1A1A1A', borderRadius: 8, paddingHorizontal: 20, justifyContent: 'center' },
    applyText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
});
