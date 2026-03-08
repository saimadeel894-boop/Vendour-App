import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigate }) {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    if (sent) return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.successWrap}>
                <Ionicons name="checkmark-circle" size={72} color="#3D8B37" />
                <Text style={s.successTitle}>Email sent!</Text>
                <Text style={s.successBody}>Check your inbox for password{'\n'}reset instructions.</Text>
                <TouchableOpacity style={s.backBtn} onPress={() => navigate('login')}>
                    <Text style={s.backBtnTxt}>Back to Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('login')}><Ionicons name="arrow-back" size={24} color="#1A1A1A" /></TouchableOpacity>
                <Text style={s.headerTitle}>Forgot password</Text>
                <View style={{ width: 24 }} />
            </View>
            <View style={s.content}>
                <Text style={s.desc}>Enter your email address and we will send you a link to reset your password.</Text>
                <Text style={s.label}>Email address</Text>
                <TextInput style={s.input} value={email} onChangeText={setEmail} placeholder="Enter your email" placeholderTextColor="#CCCCCC" keyboardType="email-address" autoCapitalize="none" />
                <TouchableOpacity style={[s.sendBtn, !email && s.sendBtnDisabled]} disabled={!email} onPress={() => setSent(true)}>
                    <Text style={s.sendBtnTxt}>Send reset link</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderColor: '#E8E0D6' },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    content: { paddingHorizontal: 24, paddingTop: 32 },
    desc: { fontSize: 15, color: '#555', lineHeight: 22, marginBottom: 32, textAlign: 'center' },
    label: { fontSize: 12, color: '#888', fontWeight: '600', marginBottom: 8 },
    input: { borderWidth: 1, borderColor: '#E8E0D6', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: '#1A1A1A', marginBottom: 24 },
    sendBtn: { backgroundColor: '#1A1A1A', borderRadius: 999, paddingVertical: 16, alignItems: 'center' },
    sendBtnDisabled: { backgroundColor: '#CCCCCC' },
    sendBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
    successWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 },
    successTitle: { fontSize: 24, fontWeight: '800', color: '#1A1A1A', marginTop: 20 },
    successBody: { fontSize: 15, color: '#666', textAlign: 'center', marginTop: 12, lineHeight: 22 },
    backBtn: { marginTop: 40, borderWidth: 1.5, borderColor: '#1A1A1A', borderRadius: 999, paddingVertical: 14, paddingHorizontal: 48 },
    backBtnTxt: { fontSize: 15, fontWeight: '700', color: '#1A1A1A' },
});
