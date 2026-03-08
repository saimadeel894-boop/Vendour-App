import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const W = Dimensions.get('window').width;
const CARD_W = W / 2;

const products = [
  { id:1, name:'AIR FRYER XL', sub:'Digital air fryer 5.5L', price:'89.95', was:'119.95', off:25, badge:'NEW', bg:'#F0EDE8' },
  { id:2, name:'LED FACE MASK', sub:'7-colour LED therapy mask', price:'79.95', was:'99.95', off:20, badge:'NEW', bg:'#F5E8F0' },
  { id:3, name:'ROBOT VACUUM S5', sub:'Smart robot vacuum', price:'249.95', was:'319.95', off:22, badge:'NEW', bg:'#F0F0F5' },
  { id:4, name:'SMART CEILING FAN', sub:'WiFi app controlled fan', price:'279.95', was:'349.95', off:20, badge:'NEW', bg:'#F5F0E8' },
  { id:5, name:'BABY MONITOR HD', sub:'720p WiFi baby camera', price:'89.95', was:'114.95', off:22, badge:'NEW', bg:'#FFF0E8' },
  { id:6, name:'PORTABLE AC 9000 BTU', sub:'Portable air conditioner', price:'349.95', was:'449.95', off:22, badge:'NEW', bg:'#E8F0F5' },
];

function ProductCard({ item, navigate }) {
  const [liked, setLiked] = useState(false);
  return (
    <TouchableOpacity style={s.card} onPress={() => navigate('productDetail')} activeOpacity={0.8}>
      <View style={[s.imageArea, { backgroundColor: item.bg }]}>
        {item.badge && (<View style={s.ukBadge}><Text style={s.ukBadgeText}>{item.badge}</Text></View>)}
        <TouchableOpacity style={s.heartBtn} onPress={() => setLiked(!liked)}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={20} color={liked ? '#E84E1B' : '#888888'} />
        </TouchableOpacity>
      </View>
      <View style={s.info}>
        <Text style={s.name} numberOfLines={2}>{item.name}</Text>
        <Text style={s.sub} numberOfLines={1}>{item.sub}</Text>
        <View style={s.priceRow}>
          <Text style={s.price}>£ {item.price}</Text>
          <Text style={s.original}>£ {item.was}</Text>
          <View style={s.discBadge}><Text style={s.discText}>-{item.off}%</Text></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function NewInScreen({ navigate }) {
  const [view, setView] = useState('grid');
  return (
    <SafeAreaView style={s.root} edges={['top', 'bottom']}>
      <StatusBar style="dark" />
      <View style={s.discBanner}><Text style={s.discBannerText}>5% DISCOUNT-VOUCHER: <Text style={s.bold}>CREATEAPP</Text></Text></View>
      <View style={s.header}>
        <TouchableOpacity style={{ width: 44 }} onPress={() => navigate('shopMenu')}><Ionicons name="menu" size={26} color="#1A1A1A" /></TouchableOpacity>
        <Text style={s.brand}>VENDOM</Text>
        <View style={s.headerRight}>
          <Ionicons name="search-outline" size={22} color="#1A1A1A" />
          <Ionicons name="heart-outline" size={22} color="#1A1A1A" />
          <View><Ionicons name="bag-outline" size={22} color="#1A1A1A" /><View style={s.cartBadge}><Text style={s.cartBadgeText}>2</Text></View></View>
        </View>
      </View>
      <View style={s.dealsBanner}><Text style={s.dealsText}><Text style={s.bold}>UP TO -30%</Text>{' | NEW IN'}</Text><Ionicons name="information-circle-outline" size={20} color="#888888" /></View>
      <TouchableOpacity style={s.backRow} onPress={() => navigate('shopMenu')}><Ionicons name="arrow-back" size={16} color="#888888" /><Text style={s.backText}> Back</Text></TouchableOpacity>
      <View style={s.countRow}>
        <Text style={s.countText}>96 products</Text>
        <View style={s.viewToggle}>
          <TouchableOpacity onPress={() => setView('list')}><MaterialCommunityIcons name="view-sequential-outline" size={22} color={view === 'list' ? '#1A1A1A' : '#AAAAAA'} /></TouchableOpacity>
          <TouchableOpacity onPress={() => setView('grid')}><MaterialCommunityIcons name="view-grid-outline" size={22} color={view === 'grid' ? '#1A1A1A' : '#AAAAAA'} /></TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={s.grid}>{products.map(item => (<ProductCard key={item.id} item={item} navigate={navigate} />))}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#FFFFFF' },
  discBanner: { backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E0D8D0', paddingVertical: 9, alignItems: 'center' },
  discBannerText: { fontSize: 12, color: '#1A1A1A' },
  bold: { fontWeight: '800' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#E0D8D0', position: 'relative' },
  brand: { position: 'absolute', left: 0, right: 0, textAlign: 'center', fontSize: 22, fontWeight: '900', letterSpacing: 6, color: '#1A1A1A', zIndex: -1 },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 16, width: 44, justifyContent: 'flex-end' },
  cartBadge: { position: 'absolute', top: -6, right: -6, backgroundColor: '#1A1A1A', borderRadius: 8, width: 16, height: 16, alignItems: 'center', justifyContent: 'center' },
  cartBadgeText: { color: '#FFF', fontSize: 9, fontWeight: '800' },
  dealsBanner: { backgroundColor: '#F5F0EB', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 13, paddingHorizontal: 16 },
  dealsText: { fontSize: 13, color: '#1A1A1A' },
  backRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12 },
  backText: { fontSize: 15, color: '#888888' },
  countRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E8E0D6' },
  countText: { fontSize: 18, fontWeight: '700', color: '#1A1A1A' },
  viewToggle: { flexDirection: 'row', gap: 12 },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  card: { width: CARD_W, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#E8E0D6' },
  imageArea: { width: CARD_W, height: 200, position: 'relative' },
  ukBadge: { position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(255,255,255,0.92)', paddingHorizontal: 8, paddingVertical: 5 },
  ukBadgeText: { fontSize: 10, fontWeight: '700', color: '#1A1A1A' },
  heartBtn: { position: 'absolute', top: 8, right: 8 },
  info: { padding: 10 },
  name: { fontSize: 12, fontWeight: '700', color: '#1A1A1A', marginBottom: 3 },
  sub: { fontSize: 11, color: '#888888', marginBottom: 8 },
  priceRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: 4 },
  price: { fontSize: 14, fontWeight: '800', color: '#1A1A1A' },
  original: { fontSize: 11, color: '#AAAAAA', textDecorationLine: 'line-through' },
  discBadge: { backgroundColor: '#E84E1B', paddingHorizontal: 5, paddingVertical: 2, borderRadius: 3 },
  discText: { fontSize: 10, fontWeight: '800', color: '#FFF' },
});
