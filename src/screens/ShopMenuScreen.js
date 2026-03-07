import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
    {
        label: 'HEATING DEALS', badge: 'SALE',
        badgeColor: '#E84E1B', hasArrow: false
    },
    {
        label: 'SKINCARE', badge: 'NEW',
        badgeColor: '#666666', hasArrow: false
    },
    {
        label: 'BABY', badge: 'NEW',
        badgeColor: '#666666', hasArrow: false
    },
    { label: 'NEW IN', badge: null, hasArrow: false },
    { label: 'FRIDGES', hasArrow: true },
    { label: 'KITCHEN', hasArrow: true },
    { label: 'CEILING FANS', hasArrow: true },
    { label: 'HEATERS', hasArrow: true },
    { label: 'PERSONAL CARE', hasArrow: true },
    { label: 'AUDIO AND TV', hasArrow: true },
    { label: 'TRAVEL SUITCASES', hasArrow: true },
    { label: 'GARDEN AND OUTDOOR', hasArrow: true },
    { label: 'HOME AND CLEANING', hasArrow: true },
    { label: 'CLIMATE APPLIANCES', hasArrow: true },
];

const footerLinks = [
    'FAQS',
    'NEWSLETTER',
    'VENDOM BUSINESS',
    'GENERAL CONDITIONS',
    'STORE LOCATOR',
];

export default function ShopMenuScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />

            {/* Header */}
            <View style={s.header}>
                <Text style={s.brand}>VENDOM</Text>
                <TouchableOpacity
                    style={s.closeBtn}
                    onPress={() => navigate('shop')}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name="close" size={24} color="#1A1A1A" />
                </TouchableOpacity>
            </View>

            <View style={s.divider} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            >
                {/* Main category rows */}
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={s.row}
                        onPress={() => navigate('productCategory')}
                        activeOpacity={0.6}
                    >
                        <View style={s.rowLeft}>
                            <Text style={s.rowLabel}>{item.label}</Text>
                            {item.badge && (
                                <View style={[
                                    s.badge,
                                    { backgroundColor: item.badgeColor }
                                ]}>
                                    <Text style={s.badgeText}>{item.badge}</Text>
                                </View>
                            )}
                        </View>
                        {item.hasArrow && (
                            <Text style={s.plus}>+</Text>
                        )}
                    </TouchableOpacity>
                ))}

                {/* Spacer between categories and footer */}
                <View style={s.footerSpacer} />

                {/* Footer links — smaller text, no arrows */}
                {footerLinks.map((link, index) => (
                    <TouchableOpacity
                        key={index}
                        style={s.footerRow}
                        activeOpacity={0.6}
                    >
                        <Text style={s.footerLabel}>{link}</Text>
                    </TouchableOpacity>
                ))}

                <View style={{ height: 32 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
        position: 'relative',
    },
    brand: {
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 6,
        color: '#1A1A1A',
        textAlign: 'center',
    },
    closeBtn: {
        position: 'absolute',
        right: 20,
        padding: 4,
    },
    divider: {
        height: 1,
        backgroundColor: '#E0D8D0',
    },

    // Category rows
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E0D6',
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    rowLabel: {
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.8,
        color: '#1A1A1A',
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 3,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    plus: {
        fontSize: 22,
        color: '#AAAAAA',
        fontWeight: '300',
    },

    // Footer section
    footerSpacer: {
        height: 32,
        backgroundColor: '#FFFFFF',
    },
    footerRow: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0EBE5',
    },
    footerLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#555555',
        letterSpacing: 0.3,
    },
});
