import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W } = Dimensions.get('window');
const initRecent = ['Patio heater', 'Air fryer', 'Ceiling fan', 'Coffee maker'];
const popular = ['HEATERS', 'FANS', 'KITCHEN', 'SKINCARE', 'BABY'];

export default function SearchScreen({ navigate }) {
    const [query, setQuery] = useState('');
    const [recent, setRecent] = useState(initRecent);

    const removeRecent = (idx) => setRecent(r => r.filter((_, i) => i !== idx));

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('shop')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <TextInput style={s.input} placeholder="Search products..." placeholderTextColor="#AAAAAA" value={query} onChangeText={setQuery} autoFocus />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
                <Text style={s.sectionTitle}>RECENT SEARCHES</Text>
                {recent.map((item, i) => (
                    <View key={i} style={s.recentRow}>
                        <Text style={s.recentText}>{item}</Text>
                        <TouchableOpacity onPress={() => removeRecent(i)}><Ionicons name="close" size={18} color="#AAAAAA" /></TouchableOpacity>
                    </View>
                ))}
                <Text style={[s.sectionTitle, { marginTop: 24 }]}>POPULAR NOW</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.pillScroll} contentContainerStyle={{ paddingHorizontal: 16, gap: 10 }}>
                    {popular.map((tag, i) => (
                        <TouchableOpacity key={i} style={s.pill} onPress={() => { const routes = { HEATERS: 'heaters', FANS: 'ceilingFans', KITCHEN: 'kitchen', SKINCARE: 'skincare', BABY: 'baby' }; navigate(routes[tag] || 'shop'); }}>
                            <Text style={s.pillText}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10, gap: 12, borderBottomWidth: 1, borderBottomColor: '#E8E0D6' },
    input: { flex: 1, fontSize: 16, paddingVertical: 10, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#F5F5F5' },
    sectionTitle: { fontSize: 11, fontWeight: '700', color: '#888888', letterSpacing: 2, marginTop: 20, marginHorizontal: 16, marginBottom: 8 },
    recentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#F0EBE5' },
    recentText: { fontSize: 15, color: '#1A1A1A' },
    pillScroll: { marginTop: 8 },
    pill: { backgroundColor: '#F0EDE8', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8 },
    pillText: { fontSize: 13, fontWeight: '600', color: '#1A1A1A' },
});
