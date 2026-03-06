import React, { useState } from 'react';
import {
    View, Text, TouchableOpacity,
    ScrollView, Switch, StyleSheet, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen({ navigate }) {
    const [toggles, setToggles] = useState({
        pushNotifications: true,
        emailNotifications: true,
        smsNotifications: false,
    });

    const toggle = (key) =>
        setToggles((p) => ({ ...p, [key]: !p[key] }));

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('account')}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.title}>Settings</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* NOTIFICATIONS */}
                <Text style={s.sectionLabel}>NOTIFICATIONS</Text>
                <View style={s.group}>
                    {[
                        { label: 'Push notifications', key: 'pushNotifications' },
                        { label: 'Email notifications', key: 'emailNotifications' },
                        { label: 'SMS notifications', key: 'smsNotifications' },
                    ].map((item, i, arr) => (
                        <View key={item.key}
                            style={[s.row,
                            i < arr.length - 1 && s.rowBorder]}>
                            <Text style={s.rowLabel}>{item.label}</Text>
                            <Switch
                                value={toggles[item.key]}
                                onValueChange={() => toggle(item.key)}
                                trackColor={{ false: '#E0E0E0', true: '#1A1A1A' }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                    ))}
                </View>

                {/* PREFERENCES */}
                <Text style={s.sectionLabel}>PREFERENCES</Text>
                <View style={s.group}>
                    {[
                        { label: 'Language', value: 'English' },
                        { label: 'Currency', value: 'GBP £' },
                        { label: 'Country', value: 'United Kingdom' },
                    ].map((item, i, arr) => (
                        <TouchableOpacity key={item.label}
                            style={[s.row,
                            i < arr.length - 1 && s.rowBorder]}>
                            <Text style={s.rowLabel}>{item.label}</Text>
                            <View style={s.rowRight}>
                                <Text style={s.rowValue}>{item.value}</Text>
                                <Ionicons name="chevron-forward"
                                    size={16} color="#AAAAAA" />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* PRIVACY */}
                <Text style={s.sectionLabel}>PRIVACY</Text>
                <View style={s.group}>
                    {[
                        { label: 'Privacy policy' },
                        { label: 'Terms of service' },
                    ].map((item, i, arr) => (
                        <TouchableOpacity key={item.label}
                            style={[s.row,
                            i < arr.length - 1 && s.rowBorder]}>
                            <Text style={s.rowLabel}>{item.label}</Text>
                            <Ionicons name="chevron-forward"
                                size={16} color="#AAAAAA" />
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={s.row}
                        onPress={() =>
                            Alert.alert('Delete Account',
                                'Are you sure you want to delete your account?',
                                [
                                    { text: 'Cancel', style: 'cancel' },
                                    {
                                        text: 'Delete', style: 'destructive',
                                        onPress: () => navigate('login')
                                    },
                                ]
                            )
                        }>
                        <Text style={[s.rowLabel, { color: '#CC0000' }]}>
                            Delete account
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#F8F5F0' },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E0D6',
    },
    title: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    sectionLabel: {
        fontSize: 11, fontWeight: '400',
        color: '#AAAAAA', letterSpacing: 1.5,
        paddingHorizontal: 20,
        paddingTop: 24, paddingBottom: 8,
    },
    group: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E8E0D6',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
    },
    rowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#F0EBE5',
    },
    rowLabel: { fontSize: 15, color: '#1A1A1A' },
    rowRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    rowValue: { fontSize: 14, color: '#888888' },
});
