import React from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function MyAddressesScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('account')}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.title}>My addresses</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={s.empty}>
                <Ionicons name="location-outline" size={64} color="#CCCCCC" />
                <Text style={s.emptyTitle}>No addresses saved</Text>
                <Text style={s.emptySubtitle}>
                    Add your delivery addresses here
                </Text>
            </View>
            <View style={s.footer}>
                <TouchableOpacity style={s.addBtn}>
                    <Text style={s.addBtnText}>+ Add new address</Text>
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
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#E8E0D6',
        backgroundColor: '#FFFFFF',
    },
    addBtn: {
        backgroundColor: '#1A1A1A',
        borderRadius: 999,
        paddingVertical: 16,
        alignItems: 'center',
    },
    addBtnText: {
        color: '#FFFFFF', fontSize: 16, fontWeight: '700',
    },
});
