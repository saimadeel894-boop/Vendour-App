import React from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function OrderHistoryScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('account')}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.title}>Order History</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={s.empty}>
                <Ionicons name="bag-outline" size={64} color="#CCCCCC" />
                <Text style={s.emptyTitle}>No orders yet</Text>
                <Text style={s.emptySubtitle}>
                    Your order history will appear here
                </Text>
                <TouchableOpacity
                    style={s.shopBtn}
                    onPress={() => navigate('shop')}
                >
                    <Text style={s.shopBtnText}>Start shopping</Text>
                </TouchableOpacity>
            </View>
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
    title: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    emptyTitle: {
        fontSize: 20, fontWeight: '700',
        color: '#1A1A1A', marginTop: 16,
    },
    emptySubtitle: {
        fontSize: 14, color: '#888888',
        marginTop: 8, textAlign: 'center',
    },
    shopBtn: {
        borderWidth: 1.5,
        borderColor: '#1A1A1A',
        borderRadius: 999,
        paddingVertical: 14,
        paddingHorizontal: 40,
        marginTop: 32,
    },
    shopBtnText: { fontSize: 15, fontWeight: '700', color: '#1A1A1A' },
});
