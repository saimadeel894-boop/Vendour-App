import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W } = Dimensions.get('window');

const ingredients = ['1 ripe banana', '200ml coconut milk', '1 shot espresso', '1 tbsp honey', 'Ice cubes'];
const steps = ['Blend banana and coconut milk until smooth.', 'Add espresso and honey, blend 30 seconds.', 'Pour over ice cubes and serve immediately.'];

export default function RecipeDetailScreen({ navigate }) {
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('recipes')}><Ionicons name="arrow-back" size={24} color="#1A1A1A" /></TouchableOpacity>
                <Text style={s.headerTitle}>Banana Coffee Smoothie</Text>
                <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
                    <Ionicons name={bookmarked ? 'heart' : 'heart-outline'} size={24} color={bookmarked ? '#E84E1B' : '#1A1A1A'} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
                <View style={s.hero} />
                <View style={s.infoRow}>
                    <Text style={s.infoItem}>🍴 1 serving</Text>
                    <Text style={s.infoItem}>⏰ 5 min prep</Text>
                    <Text style={s.infoItem}>🍲 0 min cook</Text>
                </View>
                <View style={s.section}>
                    <Text style={s.sectionTitle}>INGREDIENTS</Text>
                    {ingredients.map((ing, i) => (
                        <View key={i} style={s.ingRow}>
                            <Text style={s.dot}>•</Text>
                            <Text style={s.ingText}>{ing}</Text>
                        </View>
                    ))}
                </View>
                <View style={s.section}>
                    <Text style={s.sectionTitle}>INSTRUCTIONS</Text>
                    {steps.map((step, i) => (
                        <View key={i} style={s.stepRow}>
                            <View style={s.stepNum}><Text style={s.stepNumText}>{i + 1}</Text></View>
                            <Text style={s.stepText}>{step}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E8E0D6' },
    headerTitle: { fontSize: 16, fontWeight: '700', color: '#1A1A1A' },
    hero: { width: W, height: 260, backgroundColor: '#8B4513' },
    infoRow: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#E8E0D6' },
    infoItem: { fontSize: 13, color: '#1A1A1A', fontWeight: '600' },
    section: { paddingHorizontal: 20 },
    sectionTitle: { fontSize: 18, fontWeight: '800', color: '#1A1A1A', marginTop: 24, marginBottom: 12, letterSpacing: 1 },
    ingRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F0EBE5' },
    dot: { fontSize: 18, color: '#E84E1B', marginRight: 12, fontWeight: '800' },
    ingText: { fontSize: 15, color: '#1A1A1A' },
    stepRow: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F0EBE5' },
    stepNum: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
    stepNumText: { color: '#FFFFFF', fontSize: 13, fontWeight: '700' },
    stepText: { flex: 1, fontSize: 15, color: '#1A1A1A', lineHeight: 22 },
});
