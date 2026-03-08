import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const W = Dimensions.get('window').width;

export default function RegisterScreen({ navigate }) {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' });
    const [showPass, setShowPass] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const update = (k, v) => setForm(p => ({ ...p, [k]: v }));
    const valid = form.firstName && form.lastName && form.email && form.password && form.password === form.confirm && agreed;

    return (
        <SafeAreaView style={s.root} edges={['top', 'bottom']}>
            <StatusBar style="dark" />
            <View style={s.header}>
                <TouchableOpacity onPress={() => navigate('login')} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
                </TouchableOpacity>
                <Text style={s.headerTitle}>Create account</Text>
                <View style={{ width: 24 }} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={s.content}>
                    <Text style={s.brand}>VENDOM</Text>
                    <Text style={s.subtitle}>Join us for exclusive deals and offers</Text>
                    {[
                        { label: 'First name', key: 'firstName', placeholder: 'Enter first name' },
                        { label: 'Last name', key: 'lastName', placeholder: 'Enter last name' },
                        { label: 'Email', key: 'email', placeholder: 'Enter email address', keyboardType: 'email-address', autoCapitalize: 'none' },
                    ].map(f => (
                        <View key={f.key} style={s.field}>
                            <Text style={s.fieldLabel}>{f.label}</Text>
                            <TextInput style={s.input} value={form[f.key]} onChangeText={v => update(f.key, v)} placeholder={f.placeholder} placeholderTextColor="#CCCCCC" keyboardType={f.keyboardType || 'default'} autoCapitalize={f.autoCapitalize || 'words'} />
                        </View>
                    ))}
                    <View style={s.field}>
                        <Text style={s.fieldLabel}>Password</Text>
                        <View style={s.passWrap}>
                            <TextInput style={[s.input, { flex: 1, borderWidth: 0 }]} value={form.password} onChangeText={v => update('password', v)} placeholder="Create password" placeholderTextColor="#CCCCCC" secureTextEntry={!showPass} autoCapitalize="none" />
                            <TouchableOpacity onPress={() => setShowPass(v => !v)} style={s.eyeBtn}>
                                <Ionicons name={showPass ? 'eye-off-outline' : 'eye-outline'} size={20} color="#888" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={s.field}>
                        <Text style={s.fieldLabel}>Confirm password</Text>
                        <TextInput style={[s.input, form.confirm && form.confirm !== form.password && { borderColor: '#E84E1B' }]} value={form.confirm} onChangeText={v => update('confirm', v)} placeholder="Repeat password" placeholderTextColor="#CCCCCC" secureTextEntry={!showPass} autoCapitalize="none" />
                        {form.confirm && form.confirm !== form.password && <Text style={s.errorTxt}>Passwords do not match</Text>}
                    </View>
                    <TouchableOpacity style={s.termsRow} onPress={() => setAgreed(v => !v)}>
                        <View style={[s.checkbox, agreed && s.checkboxChecked]}>{agreed && <Ionicons name="checkmark" size={14} color="#FFF" />}</View>
                        <Text style={s.termsTxt}>I agree to the <Text style={s.termsLink}>Terms & Conditions</Text> and <Text style={s.termsLink}>Privacy Policy</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={s.footer}>
                <TouchableOpacity style={[s.registerBtn, !valid && s.registerBtnDisabled]} disabled={!valid} onPress={() => navigate('home')}>
                    <Text style={s.registerBtnTxt}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.loginLink} onPress={() => navigate('login')}>
                    <Text style={s.loginLinkTxt}>Already have an account? <Text style={s.loginLinkBold}>Sign in</Text></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const s = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#FFFFFF' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderColor: '#E8E0D6' },
    headerTitle: { fontSize: 17, fontWeight: '700', color: '#1A1A1A' },
    content: { paddingHorizontal: 24, paddingTop: 32 },
    brand: { fontSize: 28, fontWeight: '900', letterSpacing: 8, color: '#1A1A1A', textAlign: 'center', marginBottom: 8 },
    subtitle: { fontSize: 14, color: '#888888', textAlign: 'center', marginBottom: 32 },
    field: { marginBottom: 20 },
    fieldLabel: { fontSize: 12, color: '#888', marginBottom: 8, fontWeight: '600' },
    input: { borderWidth: 1, borderColor: '#E8E0D6', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: '#1A1A1A' },
    passWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E8E0D6', borderRadius: 8, paddingHorizontal: 16 },
    eyeBtn: { padding: 8 },
    errorTxt: { fontSize: 12, color: '#E84E1B', marginTop: 4 },
    termsRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 8, gap: 12 },
    checkbox: { width: 22, height: 22, borderRadius: 4, borderWidth: 1.5, borderColor: '#CCCCCC', alignItems: 'center', justifyContent: 'center' },
    checkboxChecked: { backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' },
    termsTxt: { flex: 1, fontSize: 13, color: '#555', lineHeight: 20 },
    termsLink: { color: '#1A1A1A', fontWeight: '700' },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#FFF', borderTopWidth: 1, borderColor: '#E8E0D6', padding: 16, gap: 12 },
    registerBtn: { backgroundColor: '#1A1A1A', borderRadius: 999, paddingVertical: 16, alignItems: 'center' },
    registerBtnDisabled: { backgroundColor: '#CCCCCC' },
    registerBtnTxt: { color: '#FFF', fontSize: 16, fontWeight: '700' },
    loginLink: { alignItems: 'center', paddingVertical: 4 },
    loginLinkTxt: { fontSize: 14, color: '#888' },
    loginLinkBold: { color: '#1A1A1A', fontWeight: '700' },
});
