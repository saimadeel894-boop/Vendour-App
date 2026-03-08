import React from 'react';
import {
    View, Text, ScrollView, TouchableOpacity,
    StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W, height: H } = Dimensions.get('window');

const menuItems = [
    { label: 'HEATING DEALS', badge: 'SALE', badgeColor: '#E84E1B', hasPlus: false, route: 'heatingDeals' },
    { label: 'SKINCARE', badge: 'NEW', badgeColor: '#888888', hasPlus: false, route: 'skincare' },
    { label: 'BABY', badge: 'NEW', badgeColor: '#888888', hasPlus: false, route: 'baby' },
    { label: 'NEW IN', badge: null, hasPlus: false, route: 'newIn' },
    { label: 'FRIDGES', hasPlus: true, route: 'fridges' },
    { label: 'KITCHEN', hasPlus: true, route: 'kitchen' },
    { label: 'CEILING FANS', hasPlus: true, route: 'ceilingFans' },
    { label: 'HEATERS', hasPlus: true, route: 'heaters' },
    { label: 'PERSONAL CARE', hasPlus: true, route: 'personalCare' },
    { label: 'AUDIO AND TV', hasPlus: true, route: 'audioTV' },
    { label: 'TRAVEL SUITCASES', hasPlus: true, route: 'travelSuitcases' },
    { label: 'GARDEN AND OUTDOOR', hasPlus: true, route: 'gardenOutdoor' },
    { label: 'HOME AND CLEANING', hasPlus: true, route: 'homeCleaning' },
    { label: 'CLIMATE APPLIANCES', hasPlus: true, route: 'climateAppliances' },
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

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
            >
                {/* Main category rows */}
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={s.row}
                        onPress={() => navigate(item.route)}
                        activeOpacity={0.6}
                    >
                        <View style={s.rowLeft}>
                            <Text style={s.rowLabel}>{item.label}</Text>
                            {item.badge && (
                                <View style={[s.badge, { backgroundColor: item.badgeColor }]}>
                                    <Text style={s.badgeText}>{item.badge}</Text>
                                </View>
                            )}
                        </View>
                        {item.hasPlus && (
                            <Text style={s.plus}>+</Text>
                        )}
                    </TouchableOpacity>
                ))}

                {/* Spacer between categories and footer */}
                <View style={s.footerSpacer} />

                {/* Footer links */}
                {footerLinks.map((link, index) => (
                    <TouchableOpacity
                        key={index}
                        style={s.footerRow}
                        activeOpacity={0.6}
                    >
                        <Text style={s.footerLabel}>{link}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E0D8D0',
        position: 'relative',
    },
    brand: {
        position: 'absolute',
        left: 0, right: 0,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',
        letterSpacing: 6,
        color: '#1A1A1A',
        zIndex: -1,
    },
    closeBtn: {
        position: 'absolute',
        right: 16,
        padding: 4,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
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
        letterSpacing: 1.5,
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
        color: '#BBBBBB',
        fontWeight: '300',
    },
    footerSpacer: {
        height: 24,
        backgroundColor: '#F8F5F0',
    },
    footerRow: {
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F0EBE5',
        borderLeftWidth: 0,
    },
    footerLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#666666',
    },
});
