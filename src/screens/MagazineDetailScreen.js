import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W } = Dimensions.get('window');

export default function MagazineDetailScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('magazine')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
                <View style={s.hero}>
                    <View style={s.catBadge}><Text style={s.catBadgeText}>KITCHEN & HOME</Text></View>
                </View>
                <View style={s.content}>
                    <Text style={s.category}>KITCHEN & HOME</Text>
                    <Text style={s.title}>5 Must-Have Kitchen Gadgets for 2024</Text>
                    <Text style={s.date}>March 2024</Text>
                    <View style={s.divider} />
                    <Text style={s.body}>The kitchen is the heart of every home, and having the right gadgets can transform your cooking experience. From smart air fryers that crisp to perfection to sleek kettles with temperature control, these five appliances are game-changers for any modern kitchen.</Text>
                    <Text style={s.body}>Our design team has carefully curated this selection based on three criteria: functionality, aesthetics, and value for money. Each product combines cutting-edge technology with the minimalist design philosophy that VENDOM is known for, ensuring they look as good on your countertop as they perform.</Text>
                    <Text style={s.body}>Whether you're a seasoned home chef or just starting your culinary journey, investing in quality kitchen appliances makes all the difference. Browse our full kitchen collection to discover even more products designed to elevate your cooking and your kitchen's style.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14 },
    hero: { width: W, height: 280, backgroundColor: '#1A3A5C', justifyContent: 'flex-end' },
    catBadge: { position: 'absolute', bottom: 16, left: 16, backgroundColor: 'rgba(0,0,0,0.4)', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3 },
    catBadgeText: { fontSize: 11, fontWeight: '800', letterSpacing: 2, color: '#FFFFFF' },
    content: { paddingHorizontal: 20 },
    category: { fontSize: 11, fontWeight: '800', letterSpacing: 2, color: '#888888', marginTop: 20 },
    title: { fontSize: 24, fontWeight: '800', color: '#1A1A1A', lineHeight: 32, marginTop: 8 },
    date: { fontSize: 12, color: '#AAAAAA', marginTop: 6 },
    divider: { height: 1, backgroundColor: '#E8E0D6', marginVertical: 20 },
    body: { fontSize: 15, color: '#3A3A3A', lineHeight: 24, marginBottom: 16 },
});
