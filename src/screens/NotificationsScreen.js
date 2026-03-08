import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const dummyNotifs = [
    { id: 1, icon: 'bag-outline', title: 'Order confirmed', body: 'Your order #VD-2041 has been confirmed.', time: '2 min ago', unread: true },
    { id: 2, icon: 'pricetag-outline', title: 'Flash sale starts now!', body: 'Up to 30% off on all heaters today only.', time: '1 hr ago', unread: true },
    { id: 3, icon: 'checkmark-circle-outline', title: 'Order delivered', body: 'Your order #VD-2038 has been delivered.', time: 'Yesterday', unread: false },
    { id: 4, icon: 'heart-outline', title: 'Back in stock', body: 'Patio Heater Compact is back in stock.', time: '2 days ago', unread: false },
    { id: 5, icon: 'star-outline', title: 'Rate your purchase', body: 'How was your Tower Heater Pro?', time: '3 days ago', unread: false },
];

export default function NotificationsScreen({ navigate }) {
    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('home')}><Ionicons name="arrow-back" size={24} color="#1A1A1A" /></TouchableOpacity>
                <Text style={s.title}>Notifications</Text>
                <TouchableOpacity><Text style={s.markAll}>Mark all read</Text></TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
                {dummyNotifs.map(n => (
                    <TouchableOpacity key={n.id} style={[s.row, n.unread && s.rowUnread]}>
                        <View style={s.iconWrap}><Ionicons name={n.icon} size={24} color="#1A1A1A" /></View>
                        <View style={s.textWrap}>
                            <Text style={s.notifTitle}>{n.title}</Text>
                            <Text style={s.notifBody} numberOfLines={2}>{n.body}</Text>
                            <Text style={s.notifTime}>{n.time}</Text>
                        </View>
                        {n.unread && <View style={s.unreadDot} />}
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderColor: '#E8E0D6' },
    title: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    markAll: { fontSize: 13, color: '#888', fontWeight: '500' },
    row: { flexDirection: 'row', alignItems: 'flex-start', paddingVertical: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#F0EBE5', gap: 14 },
    rowUnread: { backgroundColor: '#FBF8F5' },
    iconWrap: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#F0EDE8', alignItems: 'center', justifyContent: 'center' },
    textWrap: { flex: 1 },
    notifTitle: { fontSize: 14, fontWeight: '700', color: '#1A1A1A' },
    notifBody: { fontSize: 13, color: '#666', marginTop: 3, lineHeight: 18 },
    notifTime: { fontSize: 11, color: '#AAA', marginTop: 4 },
    unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#E84E1B', marginTop: 6 },
});
