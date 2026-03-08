import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const { width: W, height: H } = Dimensions.get('window');

export default function MyInformationScreen({ navigate }) {
    const [form, setForm] = useState({
        firstName: 'Saim',
        lastName: 'Adeel',
        email: 'saimdigitalworks@gmail.com',
        phone: '',
        dob: '',
    });

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('account')}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.title}>My information</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 80 , flexGrow: 1}}
                showsVerticalScrollIndicator={false}
            >
                {[
                    { label: 'First name', key: 'firstName', editable: true },
                    { label: 'Last name', key: 'lastName', editable: true },
                    { label: 'Email', key: 'email', editable: false },
                    {
                        label: 'Phone', key: 'phone', editable: true,
                        placeholder: 'Add phone number'
                    },
                    {
                        label: 'Date of birth', key: 'dob', editable: true,
                        placeholder: 'DD/MM/YYYY'
                    },
                ].map((field) => (
                    <View key={field.key} style={s.field}>
                        <Text style={s.fieldLabel}>{field.label}</Text>
                        <TextInput
                            style={[s.fieldInput,
                            !field.editable && { color: '#AAAAAA' }]}
                            value={form[field.key]}
                            onChangeText={(v) =>
                                field.editable &&
                                setForm((p) => ({ ...p, [field.key]: v }))
                            }
                            placeholder={field.placeholder || ''}
                            placeholderTextColor="#CCCCCC"
                            editable={field.editable}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={s.footer}>
                <TouchableOpacity style={s.saveBtn}>
                    <Text style={s.saveBtnText}>Save changes</Text>
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
    field: {
        marginHorizontal: 20,
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E0D8D0',
    },
    fieldLabel: { fontSize: 12, color: '#888888', marginBottom: 6 },
    fieldInput: { fontSize: 16, color: '#1A1A1A', padding: 0 },
    footer: {
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E8E0D6',
    },
    saveBtn: {
        backgroundColor: '#1A1A1A',
        borderRadius: 999,
        paddingVertical: 16,
        alignItems: 'center',
    },
    saveBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});
