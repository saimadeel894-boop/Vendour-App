/**
 * generate_shop_screens.js
 * Generates all 14 shop category screens from template
 */
const fs = require('fs');
const path = require('path');

const shopDir = path.join(__dirname, 'src', 'screens', 'shop');
if (!fs.existsSync(shopDir)) fs.mkdirSync(shopDir, { recursive: true });

const screens = [
    {
        file: 'KitchenScreen.js', fn: 'KitchenScreen', cat: 'KITCHEN', count: 64,
        products: `[
  { id:1, name:'AIR FRYER XL', sub:'Digital air fryer 5.5L capacity', price:'89.95', was:'119.95', off:25, badge:null, bg:'#F0EDE8' },
  { id:2, name:'BLENDER PRO 1000', sub:'Professional blender 1000W', price:'69.95', was:'89.95', off:22, badge:null, bg:'#E8F0E8' },
  { id:3, name:'TOASTER 4-SLICE', sub:'Stainless steel wide slot toaster', price:'49.95', was:'64.95', off:23, badge:null, bg:'#F5EDDE' },
  { id:4, name:'KETTLE ELEGANCE', sub:'Temperature control kettle 1.7L', price:'59.95', was:'79.95', off:25, badge:null, bg:'#EDE8F0' },
  { id:5, name:'COFFEE MAKER DELUXE', sub:'Filter coffee machine with timer', price:'79.95', was:'99.95', off:20, badge:null, bg:'#F0E8E8' },
  { id:6, name:'STAND MIXER 1200W', sub:'Professional stand mixer with bowl', price:'149.95', was:'199.95', off:25, badge:null, bg:'#E8EDE8' },
]`
    },
    {
        file: 'CeilingFansScreen.js', fn: 'CeilingFansScreen', cat: 'CEILING FANS', count: 32,
        products: `[
  { id:1, name:'CEILING FAN DC MOTOR', sub:'Silent DC motor with remote 52"', price:'199.95', was:'249.95', off:20, badge:null, bg:'#EDE8F5' },
  { id:2, name:'CEILING FAN WITH LIGHT', sub:'LED ceiling fan 42" with remote', price:'169.95', was:'219.95', off:23, badge:null, bg:'#E8F0F5' },
  { id:3, name:'INDUSTRIAL FAN BLADE', sub:'Industrial style 5 blade 56"', price:'249.95', was:'299.95', off:17, badge:null, bg:'#F5EDE8' },
  { id:4, name:'MINI CEILING FAN', sub:'Compact ceiling fan 36" for small rooms', price:'119.95', was:'149.95', off:20, badge:null, bg:'#EEF5E8' },
  { id:5, name:'SMART CEILING FAN', sub:'WiFi smart fan with app control', price:'279.95', was:'349.95', off:20, badge:null, bg:'#F5F0E8' },
  { id:6, name:'OUTDOOR CEILING FAN', sub:'Weatherproof ceiling fan for patios', price:'229.95', was:'289.95', off:21, badge:null, bg:'#E8F5EE' },
]`
    },
    {
        file: 'FridgesScreen.js', fn: 'FridgesScreen', cat: 'FRIDGES', count: 28,
        products: `[
  { id:1, name:'MINI FRIDGE 60L', sub:'Compact fridge for bedroom or office', price:'149.95', was:'189.95', off:21, badge:null, bg:'#E8F0F5' },
  { id:2, name:'WINE COOLER 18 BOTTLE', sub:'Dual zone wine refrigerator', price:'249.95', was:'319.95', off:22, badge:null, bg:'#F0E8F5' },
  { id:3, name:'RETRO FRIDGE 100L', sub:'Vintage style fridge with freezer', price:'349.95', was:'429.95', off:19, badge:null, bg:'#F5EDE8' },
  { id:4, name:'DRINKS COOLER 45L', sub:'Beverage cooler with glass door', price:'199.95', was:'249.95', off:20, badge:null, bg:'#E8F5F0' },
  { id:5, name:'CAMPING FRIDGE 25L', sub:'Portable cooler for travel', price:'129.95', was:'159.95', off:19, badge:null, bg:'#EEF5E8' },
  { id:6, name:'COUNTERTOP FRIDGE 20L', sub:'Small countertop refrigerator', price:'99.95', was:'129.95', off:23, badge:null, bg:'#F5F5E8' },
]`
    },
    {
        file: 'PersonalCareScreen.js', fn: 'PersonalCareScreen', cat: 'PERSONAL CARE', count: 56,
        products: `[
  { id:1, name:'HAIR DRYER PRO 2200W', sub:'Professional ionic hair dryer', price:'59.95', was:'79.95', off:25, badge:null, bg:'#F5E8EE' },
  { id:2, name:'HAIR STRAIGHTENER', sub:'Ceramic plates 230°C fast heat', price:'49.95', was:'64.95', off:23, badge:null, bg:'#EEE8F5' },
  { id:3, name:'EPILATOR PRECISION', sub:'Cordless epilator with 4 heads', price:'69.95', was:'89.95', off:22, badge:null, bg:'#F5EEE8' },
  { id:4, name:'ELECTRIC SHAVER', sub:'Wet and dry rotary shaver', price:'79.95', was:'99.95', off:20, badge:null, bg:'#E8EEF5' },
  { id:5, name:'FACE MASSAGER SONIC', sub:'Sonic facial cleansing brush', price:'39.95', was:'54.95', off:27, badge:null, bg:'#F5F5E8' },
  { id:6, name:'HAIR CURLER AUTO', sub:'Automatic rotating hair curler', price:'54.95', was:'69.95', off:21, badge:null, bg:'#EEF5E8' },
]`
    },
    {
        file: 'AudioTVScreen.js', fn: 'AudioTVScreen', cat: 'AUDIO AND TV', count: 40,
        products: `[
  { id:1, name:'BLUETOOTH SPEAKER 360', sub:'360° surround sound portable speaker', price:'79.95', was:'99.95', off:20, badge:null, bg:'#E8E8F5' },
  { id:2, name:'SOUNDBAR 2.1 120W', sub:'Home cinema soundbar with subwoofer', price:'149.95', was:'199.95', off:25, badge:null, bg:'#F5E8E8' },
  { id:3, name:'WIRELESS HEADPHONES', sub:'Active noise cancelling over-ear', price:'99.95', was:'129.95', off:23, badge:null, bg:'#E8F5E8' },
  { id:4, name:'SMART TV 32" HD', sub:'Android smart TV with WiFi', price:'299.95', was:'379.95', off:21, badge:null, bg:'#F5F0E8' },
  { id:5, name:'PORTABLE PROJECTOR', sub:'Mini LED projector 200 lumens', price:'129.95', was:'169.95', off:24, badge:null, bg:'#E8F0F5' },
  { id:6, name:'DAB RADIO RETRO', sub:'DAB+ FM digital retro radio', price:'59.95', was:'79.95', off:25, badge:null, bg:'#F0F5E8' },
]`
    },
    {
        file: 'TravelSuitcasesScreen.js', fn: 'TravelSuitcasesScreen', cat: 'TRAVEL SUITCASES', count: 24,
        products: `[
  { id:1, name:'CABIN SUITCASE 36L', sub:'Hard shell spinner cabin bag', price:'89.95', was:'119.95', off:25, badge:null, bg:'#EDE8F5' },
  { id:2, name:'MEDIUM SUITCASE 65L', sub:'Lightweight 4-wheel spinner', price:'119.95', was:'149.95', off:20, badge:null, bg:'#F5EDE8' },
  { id:3, name:'LARGE SUITCASE 95L', sub:'Large expandable hard suitcase', price:'149.95', was:'189.95', off:21, badge:null, bg:'#E8F5ED' },
  { id:4, name:'SET OF 3 SUITCASES', sub:'Matching set cabin + medium + large', price:'249.95', was:'319.95', off:22, badge:'BEST VALUE', bg:'#F5F0E8' },
  { id:5, name:'KIDS SUITCASE', sub:'Children spinner suitcase with lock', price:'59.95', was:'79.95', off:25, badge:null, bg:'#F5E8E8' },
  { id:6, name:'CARRY-ON BAG 30L', sub:'Flexible carry-on weekend bag', price:'69.95', was:'89.95', off:22, badge:null, bg:'#E8EDF5' },
]`
    },
    {
        file: 'GardenOutdoorScreen.js', fn: 'GardenOutdoorScreen', cat: 'GARDEN AND OUTDOOR', count: 36,
        products: `[
  { id:1, name:'ELECTRIC LAWNMOWER', sub:'Corded electric lawnmower 1400W', price:'149.95', was:'189.95', off:21, badge:null, bg:'#E8F5E8' },
  { id:2, name:'PRESSURE WASHER 1500W', sub:'High pressure cleaner 130 bar', price:'129.95', was:'169.95', off:24, badge:null, bg:'#E8EEF5' },
  { id:3, name:'GARDEN LIGHT SOLAR', sub:'Set of 6 solar LED garden lights', price:'39.95', was:'54.95', off:27, badge:null, bg:'#F5F5E8' },
  { id:4, name:'OUTDOOR HEATER PATIO', sub:'Free standing patio gas heater', price:'199.95', was:'249.95', off:20, badge:'UK ADAPTER', bg:'#F5EDE8' },
  { id:5, name:'ELECTRIC HEDGE TRIMMER', sub:'Cordless hedge trimmer 18V', price:'89.95', was:'114.95', off:22, badge:null, bg:'#EEF5E8' },
  { id:6, name:'GARDEN WATER PUMP', sub:'Submersible pump for ponds 1000L/h', price:'49.95', was:'64.95', off:23, badge:null, bg:'#E8F5F0' },
]`
    },
    {
        file: 'HomeCleaningScreen.js', fn: 'HomeCleaningScreen', cat: 'HOME AND CLEANING', count: 52,
        products: `[
  { id:1, name:'ROBOT VACUUM S5', sub:'Smart robot vacuum with mapping', price:'249.95', was:'319.95', off:22, badge:null, bg:'#F0F0F5' },
  { id:2, name:'STEAM MOP PRO', sub:'Steam floor mop 1500W', price:'79.95', was:'99.95', off:20, badge:null, bg:'#E8F5F5' },
  { id:3, name:'CORDLESS VACUUM 22V', sub:'Stick vacuum with HEPA filter', price:'129.95', was:'169.95', off:24, badge:null, bg:'#F5E8F5' },
  { id:4, name:'AIR PURIFIER HEPA', sub:'True HEPA air purifier 50m²', price:'149.95', was:'189.95', off:21, badge:null, bg:'#E8F0F5' },
  { id:5, name:'WINDOW CLEANER ELECTRIC', sub:'Electric window vac cleaner', price:'59.95', was:'79.95', off:25, badge:null, bg:'#F5F0E8' },
  { id:6, name:'CARPET CLEANER', sub:'Deep clean carpet washer 800W', price:'199.95', was:'249.95', off:20, badge:null, bg:'#EEF5EE' },
]`
    },
    {
        file: 'ClimateAppliancesScreen.js', fn: 'ClimateAppliancesScreen', cat: 'CLIMATE APPLIANCES', count: 30,
        products: `[
  { id:1, name:'PORTABLE AC 9000 BTU', sub:'Portable air conditioner with remote', price:'349.95', was:'449.95', off:22, badge:null, bg:'#E8F0F5' },
  { id:2, name:'DEHUMIDIFIER 12L', sub:'12L/day dehumidifier with tank', price:'199.95', was:'249.95', off:20, badge:null, bg:'#F5F0E8' },
  { id:3, name:'HUMIDIFIER ULTRA', sub:'Ultrasonic cool mist humidifier', price:'69.95', was:'89.95', off:22, badge:null, bg:'#E8F5F0' },
  { id:4, name:'AIR COOLER EVAPORATIVE', sub:'Evaporative air cooler 65W', price:'129.95', was:'164.95', off:21, badge:null, bg:'#F0E8F5' },
  { id:5, name:'TOWER FAN SMART', sub:'WiFi smart tower fan with remote', price:'99.95', was:'129.95', off:23, badge:null, bg:'#F5EEE8' },
  { id:6, name:'WINDOW AC 7000 BTU', sub:'Fixed window air conditioner unit', price:'299.95', was:'379.95', off:21, badge:null, bg:'#EEF5E8' },
]`
    },
    {
        file: 'HeatingDealsScreen.js', fn: 'HeatingDealsScreen', cat: 'HEATING DEALS', count: 72,
        products: `[
  { id:1, name:'PATIO HEATER COMPACT', sub:'Infrared Heater for Terraces', price:'129.95', was:'159.95', off:18, badge:'UK ADAPTER', bg:'#F0E8D8' },
  { id:2, name:'PATIO HEATER', sub:'Infrared patio and garden heater', price:'199.95', was:'259.95', off:23, badge:'UK ADAPTER', bg:'#E8E0D0' },
  { id:3, name:'TOWER HEATER PRO', sub:'Ceramic tower heater with remote', price:'89.95', was:'109.95', off:18, badge:null, bg:'#F5F0E8' },
  { id:4, name:'WALL HEATER SLIM', sub:'Electric panel wall heater', price:'149.95', was:'179.95', off:17, badge:'UK ADAPTER', bg:'#EDE5D8' },
  { id:5, name:'BATHROOM HEATER', sub:'Infrared bathroom safe heater', price:'109.95', was:'139.95', off:21, badge:null, bg:'#E8EDF0' },
  { id:6, name:'DESK HEATER MINI', sub:'Portable personal space heater', price:'39.95', was:'49.95', off:20, badge:null, bg:'#F0EDE8' },
]`
    },
    {
        file: 'SkincareScreen.js', fn: 'SkincareScreen', cat: 'SKINCARE', count: 18,
        products: `[
  { id:1, name:'LED FACE MASK', sub:'7-colour LED light therapy mask', price:'79.95', was:'99.95', off:20, badge:'NEW', bg:'#F5E8F0' },
  { id:2, name:'FACIAL STEAMER', sub:'Nano ionic facial steamer', price:'39.95', was:'54.95', off:27, badge:'NEW', bg:'#F0F5E8' },
  { id:3, name:'MICRODERMABRASION', sub:'Diamond microdermabrasion device', price:'89.95', was:'114.95', off:22, badge:'NEW', bg:'#E8F0F5' },
  { id:4, name:'GLOW SERUM WAND', sub:'EMS radio frequency skin wand', price:'59.95', was:'79.95', off:25, badge:'NEW', bg:'#F5F0E8' },
  { id:5, name:'EYE MASSAGER', sub:'Heated eye massager with vibration', price:'49.95', was:'64.95', off:23, badge:'NEW', bg:'#EEF5E8' },
  { id:6, name:'ULTRASONIC CLEANER', sub:'Ultrasonic facial cleansing device', price:'44.95', was:'59.95', off:25, badge:'NEW', bg:'#F5E8E8' },
]`
    },
    {
        file: 'BabyScreen.js', fn: 'BabyScreen', cat: 'BABY', count: 22,
        products: `[
  { id:1, name:'BABY MONITOR HD', sub:'720p WiFi baby monitor with app', price:'89.95', was:'114.95', off:22, badge:'NEW', bg:'#FFF0E8' },
  { id:2, name:'BOTTLE STERILISER', sub:'Electric steam steriliser 6 bottles', price:'49.95', was:'64.95', off:23, badge:'NEW', bg:'#F0FFF0' },
  { id:3, name:'BABY FOOD MAKER', sub:'Steam blender for baby food', price:'69.95', was:'89.95', off:22, badge:'NEW', bg:'#F0F0FF' },
  { id:4, name:'NIGHT LIGHT PROJECTOR', sub:'Star projector nightlight with music', price:'34.95', was:'44.95', off:22, badge:'NEW', bg:'#FFF0F0' },
  { id:5, name:'BABY HUMIDIFIER', sub:'Cool mist humidifier for nursery', price:'44.95', was:'59.95', off:24, badge:'NEW', bg:'#F0FFF5' },
  { id:6, name:'BOTTLE WARMER', sub:'Fast bottle and food warmer', price:'29.95', was:'39.95', off:25, badge:'NEW', bg:'#FFFAF0' },
]`
    },
    {
        file: 'NewInScreen.js', fn: 'NewInScreen', cat: 'NEW IN', count: 96,
        products: `[
  { id:1, name:'AIR FRYER XL', sub:'Digital air fryer 5.5L', price:'89.95', was:'119.95', off:25, badge:'NEW', bg:'#F0EDE8' },
  { id:2, name:'LED FACE MASK', sub:'7-colour LED therapy mask', price:'79.95', was:'99.95', off:20, badge:'NEW', bg:'#F5E8F0' },
  { id:3, name:'ROBOT VACUUM S5', sub:'Smart robot vacuum', price:'249.95', was:'319.95', off:22, badge:'NEW', bg:'#F0F0F5' },
  { id:4, name:'SMART CEILING FAN', sub:'WiFi app controlled fan', price:'279.95', was:'349.95', off:20, badge:'NEW', bg:'#F5F0E8' },
  { id:5, name:'BABY MONITOR HD', sub:'720p WiFi baby camera', price:'89.95', was:'114.95', off:22, badge:'NEW', bg:'#FFF0E8' },
  { id:6, name:'PORTABLE AC 9000 BTU', sub:'Portable air conditioner', price:'349.95', was:'449.95', off:22, badge:'NEW', bg:'#E8F0F5' },
]`
    },
];

const template = (fn, cat, count, productsStr) => `import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const W = Dimensions.get('window').width;
const CARD_W = W / 2;

const products = ${productsStr};

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

export default function ${fn}({ navigate }) {
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
      <View style={s.dealsBanner}><Text style={s.dealsText}><Text style={s.bold}>UP TO -30%</Text>{' | ${cat}'}</Text><Ionicons name="information-circle-outline" size={20} color="#888888" /></View>
      <TouchableOpacity style={s.backRow} onPress={() => navigate('shopMenu')}><Ionicons name="arrow-back" size={16} color="#888888" /><Text style={s.backText}> Back</Text></TouchableOpacity>
      <View style={s.countRow}>
        <Text style={s.countText}>${count} products</Text>
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
`;

for (const scr of screens) {
    const content = template(scr.fn, scr.cat, scr.count, scr.products);
    fs.writeFileSync(path.join(shopDir, scr.file), content, 'utf8');
    console.log(`Created ${scr.file}`);
}

console.log('All shop screens generated!');
