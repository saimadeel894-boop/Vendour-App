const fs = require('fs'), path = require('path');
const shopDir = path.join(__dirname, 'src', 'screens', 'shop');
if (!fs.existsSync(shopDir)) fs.mkdirSync(shopDir, { recursive: true });

function mkShop(file, fn, cat, deals, count, subs) {
    const subData = subs.map(s => `{label:'${s.label}',products:[\n${s.products.map(p => `  {id:${p.id},name:'${p.name}',sub:'${p.sub}',price:'${p.price}',was:'${p.was}',off:${p.off},badge:${p.badge ? `'${p.badge}'` : 'null'},bg:'${p.bg}'}`).join(',\n')}\n]}`).join(',\n');
    const code = `import React,{useState} from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
const W=Dimensions.get('window').width;
const CARD_W=W/2;
const SUBS=[${subData}];
function PC({item,navigate}){
const[liked,setLiked]=useState(false);
return(<TouchableOpacity style={s.card} onPress={()=>navigate('productDetail')} activeOpacity={0.8}>
<View style={[s.imgArea,{backgroundColor:item.bg}]}>
{item.badge?<View style={s.badge}><Text style={s.badgeTxt}>{item.badge}</Text></View>:null}
<TouchableOpacity style={s.heart} onPress={()=>setLiked(v=>!v)}>
<Ionicons name={liked?'heart':'heart-outline'} size={20} color={liked?'#E84E1B':'#888'}/>
</TouchableOpacity></View>
<View style={s.ci}><Text style={s.cn} numberOfLines={2}>{item.name}</Text>
<Text style={s.cs} numberOfLines={1}>{item.sub}</Text>
<View style={s.pr}><Text style={s.pp}>£ {item.price}</Text>
<Text style={s.pw}>£ {item.was}</Text>
<View style={s.dp}><Text style={s.dt}>-{item.off}%</Text></View></View></View>
</TouchableOpacity>);}
function ER({label,children}){
const[open,setOpen]=useState(false);
return(<View><TouchableOpacity style={s.er} onPress={()=>setOpen(v=>!v)}>
<Text style={s.el}>{label}</Text><Text style={s.ei}>{open?'−':'+'}</Text>
</TouchableOpacity>{open&&<View style={s.sg}>{children}</View>}</View>);}
export default function ${fn}({navigate}){
const[view,setView]=useState('grid');
return(<SafeAreaView style={s.root} edges={['top','bottom']}>
<StatusBar style="dark"/>
<View style={s.vb}><Text style={s.vt}>5% DISCOUNT-VOUCHER: <Text style={s.b}>CREATEAPP</Text></Text></View>
<View style={s.hd}><TouchableOpacity style={{width:44}} onPress={()=>navigate('shopMenu')}>
<Ionicons name="menu" size={26} color="#1A1A1A"/></TouchableOpacity>
<Text style={s.br}>VENDOM</Text>
<View style={s.hi}><TouchableOpacity onPress={()=>navigate('search')}><Ionicons name="search-outline" size={22} color="#1A1A1A"/></TouchableOpacity>
<TouchableOpacity onPress={()=>navigate('wishlist')}><Ionicons name="heart-outline" size={22} color="#1A1A1A"/></TouchableOpacity>
<TouchableOpacity onPress={()=>navigate('cart')}><View><Ionicons name="bag-outline" size={22} color="#1A1A1A"/>
<View style={s.cd}><Text style={s.cdt}>2</Text></View></View></TouchableOpacity></View></View>
<View style={s.db}><Text style={s.dbt}><Text style={s.b}>${deals}</Text></Text>
<Ionicons name="information-circle-outline" size={18} color="#888"/></View>
<TouchableOpacity style={s.bk} onPress={()=>navigate('shopMenu')}>
<Ionicons name="arrow-back" size={15} color="#888"/><Text style={s.bkt}>  Back</Text></TouchableOpacity>
<View style={s.cr}><Text style={s.crt}>${count} products</Text>
<View style={s.tw}><TouchableOpacity onPress={()=>setView('list')}>
<MaterialCommunityIcons name="view-sequential-outline" size={22} color={view==='list'?'#1A1A1A':'#AAA'}/></TouchableOpacity>
<TouchableOpacity onPress={()=>setView('grid')}>
<MaterialCommunityIcons name="view-grid-outline" size={22} color={view==='grid'?'#1A1A1A':'#AAA'}/></TouchableOpacity></View></View>
<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
{SUBS.map((sub,i)=>(<ER key={i} label={sub.label}>{sub.products.map(p=>(<PC key={p.id} item={p} navigate={navigate}/>))}</ER>))}
</ScrollView></SafeAreaView>);}
const s=StyleSheet.create({
root:{flex:1,backgroundColor:'#FFF'},
vb:{borderBottomWidth:1,borderColor:'#E0D8D0',paddingVertical:9,alignItems:'center',backgroundColor:'#FFF'},
vt:{fontSize:12,color:'#1A1A1A'},b:{fontWeight:'800'},
hd:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16,paddingVertical:14,borderBottomWidth:1,borderColor:'#E0D8D0',position:'relative'},
br:{position:'absolute',left:0,right:0,textAlign:'center',fontSize:22,fontWeight:'900',letterSpacing:6,color:'#1A1A1A',zIndex:-1},
hi:{flexDirection:'row',gap:16,alignItems:'center'},
cd:{position:'absolute',top:-5,right:-5,backgroundColor:'#1A1A1A',borderRadius:8,width:15,height:15,alignItems:'center',justifyContent:'center'},
cdt:{color:'#FFF',fontSize:8,fontWeight:'800'},
db:{backgroundColor:'#F5F0EB',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:12,paddingHorizontal:16},
dbt:{fontSize:13,color:'#1A1A1A'},
bk:{flexDirection:'row',alignItems:'center',paddingHorizontal:16,paddingVertical:11},
bkt:{fontSize:14,color:'#888'},
cr:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:16,paddingVertical:11,borderBottomWidth:1,borderColor:'#E8E0D6'},
crt:{fontSize:17,fontWeight:'700',color:'#1A1A1A'},
tw:{flexDirection:'row',gap:12},
er:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingVertical:16,paddingHorizontal:16,borderBottomWidth:1,borderColor:'#E8E0D6',backgroundColor:'#F8F5F0'},
el:{fontSize:13,fontWeight:'700',letterSpacing:1,color:'#1A1A1A'},
ei:{fontSize:22,color:'#888',fontWeight:'300'},
sg:{flexDirection:'row',flexWrap:'wrap'},
card:{width:CARD_W,borderRightWidth:1,borderBottomWidth:1,borderColor:'#E8E0D6'},
imgArea:{width:CARD_W,height:190,position:'relative'},
badge:{position:'absolute',top:0,left:0,backgroundColor:'rgba(255,255,255,0.92)',paddingHorizontal:8,paddingVertical:5},
badgeTxt:{fontSize:10,fontWeight:'700',color:'#1A1A1A'},
heart:{position:'absolute',top:8,right:8},
ci:{padding:10},cn:{fontSize:12,fontWeight:'700',color:'#1A1A1A',marginBottom:3},
cs:{fontSize:11,color:'#888',marginBottom:7},
pr:{flexDirection:'row',alignItems:'center',flexWrap:'wrap',gap:4},
pp:{fontSize:14,fontWeight:'800',color:'#1A1A1A'},
pw:{fontSize:11,color:'#AAA',textDecorationLine:'line-through'},
dp:{backgroundColor:'#E84E1B',paddingHorizontal:5,paddingVertical:2,borderRadius:3},
dt:{fontSize:10,fontWeight:'800',color:'#FFF'},
});
`;
    fs.writeFileSync(path.join(shopDir, file), code, 'utf8');
    console.log('Created ' + file);
}

// Data for all 14 screens
const P = (id, name, sub, price, was, off, badge, bg) => ({ id, name, sub, price, was, off, badge, bg });

mkShop('HeatersScreen.js', 'HeatersScreen', 'HEATERS', 'UP TO -30%  |  HEATERS', 48, [
    { label: 'PATIO HEATERS', products: [P(1, 'PATIO HEATER COMPACT', 'Infrared Heater 1800W', '129.95', '159.95', 18, 'UK ADAPTER', '#F0E8D8'), P(2, 'PATIO HEATER LARGE', 'Infrared patio heater 2200W', '199.95', '259.95', 23, 'UK ADAPTER', '#E8E0D0'), P(3, 'PATIO HEATER ULTRA', 'Weatherproof outdoor heater', '249.95', '299.95', 17, null, '#F5EDDE'), P(4, 'PATIO HEATER WALL', 'Wall-mounted infrared heater', '169.95', '209.95', 19, null, '#EDE5D8')] },
    { label: 'TOWER HEATERS', products: [P(5, 'TOWER HEATER PRO', 'Ceramic tower heater with remote', '89.95', '109.95', 18, null, '#F5F0E8'), P(6, 'TOWER HEATER SLIM', 'Slim design oscillating heater', '79.95', '99.95', 20, null, '#EDE8F0'), P(7, 'TOWER HEATER XL', '2500W extra large tower heater', '119.95', '149.95', 20, null, '#E8F0EE'), P(8, 'TOWER HEATER SMART', 'WiFi smart tower heater with app', '149.95', '189.95', 21, null, '#F0EEE8')] },
    { label: 'WALL HEATERS', products: [P(9, 'WALL HEATER SLIM', 'Electric panel wall heater 1500W', '149.95', '179.95', 17, 'UK ADAPTER', '#EDE5D8'), P(10, 'WALL HEATER COMPACT', 'Compact electric wall panel', '99.95', '124.95', 20, null, '#F5EDE8'), P(11, 'GLASS WALL HEATER', 'Stylish glass panel heater', '189.95', '239.95', 21, null, '#E8EDF5'), P(12, 'WALL HEATER WITH TIMER', 'Programmable wall heater 24h', '129.95', '159.95', 19, null, '#EEE8F5')] },
    { label: 'BATHROOM HEATERS', products: [P(13, 'BATHROOM HEATER', 'Infrared bathroom safe heater', '109.95', '139.95', 21, null, '#E8EDF0'), P(14, 'HEATED TOWEL RAIL', 'Electric heated towel rail 60W', '89.95', '114.95', 22, null, '#F0E8F0'), P(15, 'BATHROOM FAN HEATER', 'Wall-mount bathroom fan heater', '69.95', '89.95', 22, null, '#E8F5F0'), P(16, 'MIRROR HEATER', 'Demister heated bathroom mirror', '149.95', '189.95', 21, null, '#F5F0EE')] },
]);

mkShop('KitchenScreen.js', 'KitchenScreen', 'KITCHEN', 'UP TO -25%  |  KITCHEN', 64, [
    { label: 'FRYERS & OVENS', products: [P(1, 'AIR FRYER XL 5.5L', 'Digital air fryer, 8 presets', '89.95', '119.95', 25, null, '#F0EDE8'), P(2, 'AIR FRYER COMPACT', '2.5L air fryer for 1-2 people', '59.95', '79.95', 25, null, '#EEF5E8'), P(3, 'MINI OVEN 20L', 'Countertop mini oven with grill', '79.95', '99.95', 20, null, '#F5EEE8'), P(4, 'PIZZA OVEN ELECTRIC', 'Electric pizza oven 1200W', '69.95', '89.95', 22, null, '#F5E8E8')] },
    { label: 'BLENDERS & MIXERS', products: [P(5, 'BLENDER PRO 1000W', 'Professional blender with jug', '69.95', '89.95', 22, null, '#E8F0E8'), P(6, 'HAND BLENDER', 'Immersion blender 800W', '39.95', '54.95', 27, null, '#E8EDF5'), P(7, 'STAND MIXER 1200W', 'Professional stand mixer + bowl', '149.95', '199.95', 25, null, '#E8E8F5'), P(8, 'FOOD PROCESSOR', 'Multi-function food processor', '99.95', '129.95', 23, null, '#F5F0E8')] },
    { label: 'COFFEE & TEA', products: [P(9, 'COFFEE MAKER DELUXE', 'Filter coffee machine with timer', '79.95', '99.95', 20, null, '#F0E8E8'), P(10, 'ESPRESSO MACHINE', '15-bar espresso machine', '149.95', '189.95', 21, null, '#EDE8F0'), P(11, 'CAPSULE COFFEE', 'Compatible capsule coffee maker', '59.95', '79.95', 25, null, '#F5EDE8'), P(12, 'FRENCH PRESS SET', 'Stainless steel french press 1L', '29.95', '39.95', 25, null, '#E8F5EE')] },
    { label: 'TOASTERS & KETTLES', products: [P(13, 'TOASTER 4-SLICE', 'Wide slot stainless toaster', '49.95', '64.95', 23, null, '#F5EDDE'), P(14, 'TOASTER 2-SLICE RETRO', 'Vintage style 2-slice toaster', '39.95', '54.95', 27, null, '#EEE8F5'), P(15, 'KETTLE ELEGANCE 1.7L', 'Temperature control kettle', '59.95', '79.95', 25, null, '#EDE8F5'), P(16, 'KETTLE RETRO', 'Vintage stainless kettle 1.7L', '49.95', '64.95', 23, null, '#F5F5E8')] },
]);

mkShop('CeilingFansScreen.js', 'CeilingFansScreen', 'CEILING FANS', 'UP TO -20%  |  CEILING FANS', 32, [
    { label: 'DC MOTOR FANS', products: [P(1, 'CEILING FAN DC 52"', 'Silent DC motor with remote', '199.95', '249.95', 20, null, '#EDE8F5'), P(2, 'DC FAN WITH LIGHT', 'LED DC ceiling fan 52"', '229.95', '289.95', 21, null, '#E8F0F5'), P(3, 'DC FAN SILENT', 'Ultra quiet DC fan 48"', '249.95', '319.95', 22, null, '#F5EDE8'), P(4, 'DC FAN REMOTE', '6-speed DC fan with remote', '179.95', '224.95', 20, null, '#EEF5E8')] },
    { label: 'LED FANS', products: [P(5, 'LED FAN 42"', 'LED ceiling fan with dimmer', '169.95', '219.95', 23, null, '#E8F0F5'), P(6, 'LED FAN DIMMABLE', 'Adjustable LED light fan', '189.95', '239.95', 21, null, '#EDE8F5'), P(7, 'LED FAN RGB', 'Color changing LED fan', '219.95', '279.95', 21, null, '#F5EDE8'), P(8, 'LED FAN SLIM', 'Low profile LED fan', '149.95', '189.95', 21, null, '#EEF5E8')] },
    { label: 'OUTDOOR FANS', products: [P(9, 'OUTDOOR FAN 52"', 'Weatherproof outdoor fan', '229.95', '289.95', 21, null, '#E8F5EE'), P(10, 'OUTDOOR FAN IP44', 'IP44 rated patio fan', '249.95', '314.95', 21, null, '#F5EDE8'), P(11, 'OUTDOOR FAN TEAK', 'Teak blade outdoor fan', '279.95', '349.95', 20, null, '#EDE8F5'), P(12, 'OUTDOOR FAN MINI', 'Compact outdoor fan 36"', '179.95', '224.95', 20, null, '#E8F0F5')] },
    { label: 'SMART FANS', products: [P(13, 'SMART FAN WIFI', 'WiFi ceiling fan with app', '279.95', '349.95', 20, null, '#F5F0E8'), P(14, 'SMART FAN ALEXA', 'Alexa compatible smart fan', '299.95', '379.95', 21, null, '#E8EDF5'), P(15, 'SMART FAN GOOGLE', 'Google Home smart fan', '319.95', '399.95', 20, null, '#EEF5E8'), P(16, 'SMART FAN APP', 'App controlled smart fan', '259.95', '329.95', 21, null, '#F5EDE8')] },
]);

mkShop('FridgesScreen.js', 'FridgesScreen', 'FRIDGES', 'UP TO -22%  |  FRIDGES', 28, [
    { label: 'MINI FRIDGES', products: [P(1, 'MINI FRIDGE 60L', 'Compact fridge for bedroom', '149.95', '189.95', 21, null, '#E8F0F5'), P(2, 'MINI FRIDGE 45L', 'Tabletop mini fridge', '119.95', '149.95', 20, null, '#EEF5E8'), P(3, 'MINI FRIDGE BAR', 'Glass door bar fridge', '169.95', '214.95', 21, null, '#F5EDE8'), P(4, 'MINI FRIDGE SILENT', 'Silent operation mini fridge', '139.95', '179.95', 22, null, '#E8F5F0')] },
    { label: 'WINE COOLERS', products: [P(5, 'WINE COOLER 18', 'Dual zone 18 bottle cooler', '249.95', '319.95', 22, null, '#F0E8F5'), P(6, 'WINE COOLER 12', 'Single zone 12 bottle', '189.95', '239.95', 21, null, '#EDE8F5'), P(7, 'WINE COOLER 24', '24 bottle wine fridge', '299.95', '379.95', 21, null, '#E8F0F5'), P(8, 'WINE COOLER BUILT-IN', 'Built-in wine cooler', '349.95', '449.95', 22, null, '#F5EDE8')] },
    { label: 'RETRO FRIDGES', products: [P(9, 'RETRO FRIDGE 100L', 'Vintage style fridge', '349.95', '429.95', 19, null, '#F5EDE8'), P(10, 'RETRO MINI FRIDGE', 'Retro compact fridge 50L', '199.95', '249.95', 20, null, '#EEF5E8'), P(11, 'RETRO FRIDGE PASTEL', 'Pastel colour retro fridge', '379.95', '479.95', 21, null, '#E8F5EE'), P(12, 'RETRO FRIDGE BLACK', 'Matte black retro fridge', '399.95', '499.95', 20, null, '#E8EDF5')] },
    { label: 'DRINKS COOLERS', products: [P(13, 'DRINKS COOLER 45L', 'Glass door beverage cooler', '199.95', '249.95', 20, null, '#E8F5F0'), P(14, 'DRINKS COOLER 60L', 'Large drinks refrigerator', '229.95', '289.95', 21, null, '#F5F0E8'), P(15, 'CAMPING FRIDGE 25L', 'Portable cooler for travel', '129.95', '159.95', 19, null, '#EEF5E8'), P(16, 'COUNTERTOP FRIDGE', 'Small countertop fridge', '99.95', '129.95', 23, null, '#F5F5E8')] },
]);

mkShop('PersonalCareScreen.js', 'PersonalCareScreen', 'PERSONAL CARE', 'UP TO -27%  |  PERSONAL CARE', 56, [
    { label: 'HAIR CARE', products: [P(1, 'HAIR DRYER PRO 2200W', 'Professional ionic dryer', '59.95', '79.95', 25, null, '#F5E8EE'), P(2, 'HAIR STRAIGHTENER', 'Ceramic plates 230°C', '49.95', '64.95', 23, null, '#EEE8F5'), P(3, 'HAIR CURLER AUTO', 'Auto rotating curler', '54.95', '69.95', 21, null, '#EEF5E8'), P(4, 'HAIR TRIMMER SET', '10-piece trimmer kit', '39.95', '49.95', 20, null, '#F5EEE8')] },
    { label: 'SKIN CARE DEVICES', products: [P(5, 'FACE MASSAGER SONIC', 'Sonic facial brush', '39.95', '54.95', 27, null, '#F5F5E8'), P(6, 'LED FACE MASK', '7-colour LED mask', '79.95', '99.95', 20, null, '#F5E8F0'), P(7, 'MICRODERMABRASION', 'Diamond tip device', '89.95', '114.95', 22, null, '#E8F0F5'), P(8, 'EYE MASSAGER', 'Heated eye massager', '49.95', '64.95', 23, null, '#EEF5E8')] },
    { label: 'SHAVERS & EPILATORS', products: [P(9, 'ELECTRIC SHAVER', 'Wet and dry rotary', '79.95', '99.95', 20, null, '#E8EEF5'), P(10, 'EPILATOR PRECISION', 'Cordless 4-head epilator', '69.95', '89.95', 22, null, '#F5EEE8'), P(11, 'BODY GROOMER', 'Full body groomer kit', '49.95', '64.95', 23, null, '#E8F5EE'), P(12, 'LADY SHAVER', 'Gentle lady shaver wet/dry', '34.95', '44.95', 22, null, '#F5E8EE')] },
    { label: 'MASSAGE & WELLNESS', products: [P(13, 'MASSAGE GUN', 'Deep tissue percussion', '89.95', '119.95', 25, null, '#EDE8F5'), P(14, 'FOOT MASSAGER', 'Shiatsu foot massager', '79.95', '99.95', 20, null, '#F0E8F5'), P(15, 'NECK MASSAGER', 'Electric neck and shoulder', '59.95', '79.95', 25, null, '#E8F5F0'), P(16, 'SCALP MASSAGER', 'Electric scalp massager', '29.95', '39.95', 25, null, '#F5F0EE')] },
]);

mkShop('AudioTVScreen.js', 'AudioTVScreen', 'AUDIO AND TV', 'UP TO -25%  |  AUDIO AND TV', 40, [
    { label: 'SPEAKERS', products: [P(1, 'BLUETOOTH SPEAKER 360', '360° surround portable', '79.95', '99.95', 20, null, '#E8E8F5'), P(2, 'SOUNDBAR 2.1 120W', 'Soundbar with subwoofer', '149.95', '199.95', 25, null, '#F5E8E8'), P(3, 'PARTY SPEAKER', 'Portable LED party speaker', '99.95', '129.95', 23, null, '#E8F5E8'), P(4, 'BOOKSHELF SPEAKERS', 'Pair of bookshelf speakers', '119.95', '149.95', 20, null, '#F5F0E8')] },
    { label: 'HEADPHONES', products: [P(5, 'WIRELESS HEADPHONES', 'Active noise cancelling', '99.95', '129.95', 23, null, '#E8F5E8'), P(6, 'EARBUDS PRO', 'True wireless earbuds', '69.95', '89.95', 22, null, '#F5EDE8'), P(7, 'GAMING HEADSET', '7.1 surround gaming set', '79.95', '99.95', 20, null, '#EDE8F5'), P(8, 'SPORT EARBUDS', 'Sweatproof sport earbuds', '49.95', '64.95', 23, null, '#EEF5E8')] },
    { label: 'TV & PROJECTORS', products: [P(9, 'SMART TV 32" HD', 'Android smart TV WiFi', '299.95', '379.95', 21, null, '#F5F0E8'), P(10, 'PORTABLE PROJECTOR', 'Mini LED 200 lumens', '129.95', '169.95', 24, null, '#E8F0F5'), P(11, 'SMART TV 43" 4K', '4K UHD Android TV', '449.95', '569.95', 21, null, '#E8EDF5'), P(12, 'PROJECTOR SCREEN', '100" portable screen', '59.95', '79.95', 25, null, '#F5EDE8')] },
    { label: 'RADIOS', products: [P(13, 'DAB RADIO RETRO', 'DAB+ FM digital radio', '59.95', '79.95', 25, null, '#F0F5E8'), P(14, 'INTERNET RADIO', 'WiFi internet radio', '79.95', '99.95', 20, null, '#E8F0F5'), P(15, 'CLOCK RADIO', 'DAB alarm clock radio', '39.95', '54.95', 27, null, '#F5F5E8'), P(16, 'PORTABLE RADIO', 'Pocket DAB/FM radio', '29.95', '39.95', 25, null, '#EEF5E8')] },
]);

mkShop('TravelSuitcasesScreen.js', 'TravelSuitcasesScreen', 'TRAVEL SUITCASES', 'UP TO -25%  |  TRAVEL SUITCASES', 24, [
    { label: 'CABIN SIZE', products: [P(1, 'CABIN SUITCASE 36L', 'Hard shell spinner cabin', '89.95', '119.95', 25, null, '#EDE8F5'), P(2, 'CABIN SOFT 30L', 'Soft shell cabin bag', '69.95', '89.95', 22, null, '#F5EDE8'), P(3, 'CABIN ALUMINIUM', 'Premium aluminium cabin', '149.95', '189.95', 21, null, '#E8F0F5'), P(4, 'CABIN KIDS', 'Children cabin suitcase', '59.95', '79.95', 25, null, '#F5E8E8')] },
    { label: 'MEDIUM SIZE', products: [P(5, 'MEDIUM SUITCASE 65L', '4-wheel spinner medium', '119.95', '149.95', 20, null, '#F5EDE8'), P(6, 'MEDIUM SOFT 60L', 'Soft expandable medium', '99.95', '129.95', 23, null, '#E8F5ED'), P(7, 'MEDIUM ALUMINIUM', 'Premium aluminium medium', '199.95', '249.95', 20, null, '#EDE8F5'), P(8, 'MEDIUM LIGHTWEIGHT', 'Ultra-light medium case', '109.95', '139.95', 21, null, '#EEF5E8')] },
    { label: 'LARGE SIZE', products: [P(9, 'LARGE SUITCASE 95L', 'Expandable hard large', '149.95', '189.95', 21, null, '#E8F5ED'), P(10, 'LARGE SOFT 90L', 'Soft large suitcase', '129.95', '169.95', 24, null, '#F5F0E8'), P(11, 'LARGE PREMIUM', 'Premium large spinner', '179.95', '229.95', 22, null, '#EDE8F5'), P(12, 'LARGE FAMILY', 'Family size 100L case', '169.95', '214.95', 21, null, '#E8F0F5')] },
    { label: 'SETS & ACCESSORIES', products: [P(13, 'SET OF 3 SUITCASES', 'Cabin+medium+large set', '249.95', '319.95', 22, 'BEST VALUE', '#F5F0E8'), P(14, 'CARRY-ON BAG 30L', 'Flexible weekend bag', '69.95', '89.95', 22, null, '#E8EDF5'), P(15, 'PACKING CUBES SET', '6-piece packing cubes', '24.95', '34.95', 29, null, '#F5EDE8'), P(16, 'LUGGAGE TAG SET', 'Leather luggage tags x4', '14.95', '19.95', 25, null, '#EEF5E8')] },
]);

mkShop('GardenOutdoorScreen.js', 'GardenOutdoorScreen', 'GARDEN AND OUTDOOR', 'UP TO -24%  |  GARDEN & OUTDOOR', 36, [
    { label: 'GARDEN TOOLS', products: [P(1, 'ELECTRIC LAWNMOWER', 'Corded lawnmower 1400W', '149.95', '189.95', 21, null, '#E8F5E8'), P(2, 'HEDGE TRIMMER', 'Cordless trimmer 18V', '89.95', '114.95', 22, null, '#EEF5E8'), P(3, 'LEAF BLOWER', 'Cordless leaf blower 20V', '79.95', '99.95', 20, null, '#E8F0E8'), P(4, 'GRASS TRIMMER', 'Electric grass strimmer', '49.95', '64.95', 23, null, '#F5F5E8')] },
    { label: 'OUTDOOR LIGHTING', products: [P(5, 'SOLAR LIGHTS SET', '6 solar LED garden lights', '39.95', '54.95', 27, null, '#F5F5E8'), P(6, 'STRING LIGHTS', '20m outdoor string lights', '29.95', '39.95', 25, null, '#F0F5E8'), P(7, 'WALL LIGHT SOLAR', 'Solar wall light 2-pack', '24.95', '34.95', 29, null, '#E8F5F0'), P(8, 'PATHWAY LIGHTS', 'Solar pathway lights x8', '34.95', '44.95', 22, null, '#EEF5E8')] },
    { label: 'IRRIGATION', products: [P(9, 'PRESSURE WASHER', 'High pressure 130 bar', '129.95', '169.95', 24, null, '#E8EEF5'), P(10, 'GARDEN HOSE 30M', 'Expandable hose with gun', '29.95', '39.95', 25, null, '#E8F5E8'), P(11, 'SPRINKLER SYSTEM', 'Auto garden sprinkler', '39.95', '54.95', 27, null, '#F5F0E8'), P(12, 'WATER PUMP', 'Submersible pump 1000L/h', '49.95', '64.95', 23, null, '#E8F5F0')] },
    { label: 'OUTDOOR HEATING', products: [P(13, 'OUTDOOR HEATER', 'Free standing patio heater', '199.95', '249.95', 20, 'UK ADAPTER', '#F5EDE8'), P(14, 'FIRE PIT TABLE', 'Gas fire pit table', '299.95', '379.95', 21, null, '#EDE8E8'), P(15, 'CHIMINEA', 'Clay chiminea 90cm', '89.95', '114.95', 22, null, '#F5F0EE'), P(16, 'PATIO TORCH SET', 'Solar flame torches x4', '39.95', '54.95', 27, null, '#E8F5E8')] },
]);

mkShop('HomeCleaningScreen.js', 'HomeCleaningScreen', 'HOME AND CLEANING', 'UP TO -25%  |  HOME & CLEANING', 52, [
    { label: 'ROBOT VACUUMS', products: [P(1, 'ROBOT VACUUM S5', 'Smart robot with mapping', '249.95', '319.95', 22, null, '#F0F0F5'), P(2, 'ROBOT VACUUM BASIC', 'Entry level robot vacuum', '149.95', '189.95', 21, null, '#E8F5F5'), P(3, 'ROBOT MOP COMBO', 'Vacuum and mop 2-in-1', '299.95', '379.95', 21, null, '#F5F0E8'), P(4, 'ROBOT VACUUM PET', 'Pet hair specialist robot', '279.95', '349.95', 20, null, '#EEF5EE')] },
    { label: 'STEAM CLEANERS', products: [P(5, 'STEAM MOP PRO', 'Steam floor mop 1500W', '79.95', '99.95', 20, null, '#E8F5F5'), P(6, 'HANDHELD STEAMER', 'Portable steam cleaner', '49.95', '64.95', 23, null, '#F5E8F5'), P(7, 'STEAM CLEANER XL', 'Multi-surface steam system', '129.95', '169.95', 24, null, '#E8F0F5'), P(8, 'GARMENT STEAMER', 'Clothes steamer 1500W', '59.95', '79.95', 25, null, '#F5F5E8')] },
    { label: 'AIR PURIFIERS', products: [P(9, 'AIR PURIFIER HEPA', 'True HEPA purifier 50m²', '149.95', '189.95', 21, null, '#E8F0F5'), P(10, 'AIR PURIFIER MINI', 'Desktop air purifier', '69.95', '89.95', 22, null, '#F5EDE8'), P(11, 'AIR PURIFIER SMART', 'WiFi smart air purifier', '199.95', '259.95', 23, null, '#EDE8F5'), P(12, 'AIR PURIFIER CAR', 'Portable car air purifier', '39.95', '54.95', 27, null, '#EEF5E8')] },
    { label: 'WINDOW CLEANERS', products: [P(13, 'WINDOW VAC CLEANER', 'Electric window vac', '59.95', '79.95', 25, null, '#F5F0E8'), P(14, 'WINDOW ROBOT', 'Automatic window cleaner', '199.95', '259.95', 23, null, '#E8EDF5'), P(15, 'SQUEEGEE PRO SET', 'Professional squeegee kit', '19.95', '29.95', 33, null, '#F5F5E8'), P(16, 'CARPET CLEANER', 'Deep clean washer 800W', '199.95', '249.95', 20, null, '#EEF5EE')] },
]);

mkShop('ClimateAppliancesScreen.js', 'ClimateAppliancesScreen', 'CLIMATE APPLIANCES', 'UP TO -22%  |  CLIMATE', 30, [
    { label: 'AIR CONDITIONERS', products: [P(1, 'PORTABLE AC 9000', 'Portable AC with remote', '349.95', '449.95', 22, null, '#E8F0F5'), P(2, 'PORTABLE AC 12000', '12000 BTU portable AC', '449.95', '569.95', 21, null, '#E8EDF5'), P(3, 'WINDOW AC 7000', 'Window air conditioner', '299.95', '379.95', 21, null, '#EEF5E8'), P(4, 'SPLIT AC UNIT', 'Split system AC 9000 BTU', '599.95', '749.95', 20, null, '#F5F0E8')] },
    { label: 'DEHUMIDIFIERS', products: [P(5, 'DEHUMIDIFIER 12L', '12L/day with tank', '199.95', '249.95', 20, null, '#F5F0E8'), P(6, 'DEHUMIDIFIER 20L', '20L/day for large rooms', '249.95', '319.95', 22, null, '#E8F5F0'), P(7, 'DEHUMIDIFIER MINI', 'Small room dehumidifier', '89.95', '114.95', 22, null, '#EDE8F5'), P(8, 'DEHUMIDIFIER SMART', 'WiFi dehumidifier with app', '279.95', '349.95', 20, null, '#EEF5E8')] },
    { label: 'HUMIDIFIERS', products: [P(9, 'HUMIDIFIER ULTRA', 'Ultrasonic cool mist', '69.95', '89.95', 22, null, '#E8F5F0'), P(10, 'HUMIDIFIER WARM', 'Warm mist humidifier', '79.95', '99.95', 20, null, '#F5EDE8'), P(11, 'HUMIDIFIER LARGE', '6L large room humidifier', '99.95', '129.95', 23, null, '#E8F0F5'), P(12, 'HUMIDIFIER AROMA', 'Aroma diffuser humidifier', '39.95', '54.95', 27, null, '#F5F5E8')] },
    { label: 'FANS & COOLERS', products: [P(13, 'TOWER FAN SMART', 'WiFi smart tower fan', '99.95', '129.95', 23, null, '#F5EEE8'), P(14, 'AIR COOLER 65W', 'Evaporative air cooler', '129.95', '164.95', 21, null, '#F0E8F5'), P(15, 'DESK FAN METAL', 'Retro metal desk fan', '34.95', '44.95', 22, null, '#EEF5E8'), P(16, 'PEDESTAL FAN 16"', 'Oscillating pedestal fan', '44.95', '59.95', 25, null, '#E8F5F0')] },
]);

mkShop('HeatingDealsScreen.js', 'HeatingDealsScreen', 'HEATING DEALS', 'SALE — UP TO -30%  |  HEATING DEALS', 72, [
    { label: 'BEST SELLERS', products: [P(1, 'PATIO HEATER COMPACT', 'Infrared 1800W', '129.95', '159.95', 18, 'SALE', '#F0E8D8'), P(2, 'TOWER HEATER PRO', 'Ceramic tower remote', '89.95', '109.95', 18, 'SALE', '#F5F0E8'), P(3, 'WALL HEATER SLIM', 'Panel heater 1500W', '149.95', '179.95', 17, 'SALE', '#EDE5D8'), P(4, 'BATHROOM HEATER', 'Safe infrared heater', '109.95', '139.95', 21, 'SALE', '#E8EDF0')] },
    { label: 'NEW ARRIVALS', products: [P(5, 'HEATER FAN TOWER', 'New 2024 fan heater', '99.95', '129.95', 23, 'SALE', '#F5EEE8'), P(6, 'INFRARED PANEL', 'Slim infrared wall panel', '179.95', '229.95', 22, 'SALE', '#E8EDF5'), P(7, 'CONVECTOR HEATER', '2000W convector with timer', '79.95', '99.95', 20, 'SALE', '#EEF5E8'), P(8, 'OIL RADIATOR', '7-fin oil filled radiator', '89.95', '114.95', 22, 'SALE', '#F0EEE8')] },
    { label: 'CLEARANCE', products: [P(9, 'DESK HEATER MINI', 'Portable space heater', '39.95', '49.95', 20, 'SALE', '#F0EDE8'), P(10, 'HALOGEN HEATER', '1200W halogen heater', '29.95', '44.95', 33, 'SALE', '#F5F0E8'), P(11, 'CERAMIC HEATER', 'Compact ceramic heater', '49.95', '69.95', 29, 'SALE', '#E8F0EE'), P(12, 'FAN HEATER BASIC', 'Basic 2000W fan heater', '24.95', '34.95', 29, 'SALE', '#EEE8F5')] },
    { label: 'BUNDLES', products: [P(13, 'HEATER + BLANKET', 'Heater with heated blanket', '159.95', '209.95', 24, 'SALE', '#F5EDE8'), P(14, '2x TOWER HEATERS', 'Twin pack tower heaters', '149.95', '199.95', 25, 'SALE', '#E8EDF5'), P(15, 'BATHROOM SET', 'Heater + towel rail bundle', '169.95', '219.95', 23, 'SALE', '#F0E8F0'), P(16, 'WHOLE HOME SET', '3 heaters bundle pack', '249.95', '329.95', 24, 'SALE', '#E8F5F0')] },
]);

mkShop('SkincareScreen.js', 'SkincareScreen', 'SKINCARE', 'NEW IN  |  SKINCARE', 18, [
    { label: 'FACE DEVICES', products: [P(1, 'LED FACE MASK', '7-colour LED therapy', '79.95', '99.95', 20, 'NEW', '#F5E8F0'), P(2, 'FACIAL STEAMER', 'Nano ionic steamer', '39.95', '54.95', 27, 'NEW', '#F0F5E8'), P(3, 'MICRODERMABRASION', 'Diamond tip device', '89.95', '114.95', 22, 'NEW', '#E8F0F5'), P(4, 'GLOW SERUM WAND', 'EMS radio frequency', '59.95', '79.95', 25, 'NEW', '#F5F0E8')] },
    { label: 'BODY DEVICES', products: [P(5, 'BODY BRUSH SONIC', 'Sonic body brush', '49.95', '64.95', 23, 'NEW', '#EEF5E8'), P(6, 'CELLULITE MASSAGER', 'Anti-cellulite device', '69.95', '89.95', 22, 'NEW', '#F5EEE8'), P(7, 'FOOT FILE ELECTRIC', 'Electric foot file', '29.95', '39.95', 25, 'NEW', '#E8F5F0'), P(8, 'BODY TONER', 'EMS body toning device', '99.95', '129.95', 23, 'NEW', '#F5E8EE')] },
    { label: 'SETS & BUNDLES', products: [P(9, 'FACE CARE SET', 'Cleanser + mask + wand', '149.95', '199.95', 25, 'NEW', '#EDE8F5'), P(10, 'PAMPER BUNDLE', 'Full body care bundle', '179.95', '229.95', 22, 'NEW', '#F0E8F5'), P(11, 'TRAVEL BEAUTY KIT', 'Mini travel skincare set', '89.95', '119.95', 25, 'NEW', '#F5F5E8'), P(12, 'GIFT SET PREMIUM', 'Premium gift box', '129.95', '169.95', 24, 'NEW', '#E8EDF5')] },
]);

mkShop('BabyScreen.js', 'BabyScreen', 'BABY', 'NEW IN  |  BABY', 22, [
    { label: 'MONITORS & SAFETY', products: [P(1, 'BABY MONITOR HD', '720p WiFi monitor', '89.95', '114.95', 22, 'NEW', '#FFF0E8'), P(2, 'BABY MONITOR AUDIO', 'Audio only monitor', '39.95', '54.95', 27, 'NEW', '#F0FFF0'), P(3, 'MOVEMENT SENSOR', 'Breathing movement pad', '69.95', '89.95', 22, 'NEW', '#F0F0FF'), P(4, 'ROOM THERMOMETER', 'Digital nursery thermometer', '19.95', '29.95', 33, 'NEW', '#FFFAF0')] },
    { label: 'FEEDING', products: [P(5, 'BOTTLE STERILISER', 'Steam steriliser 6 bottles', '49.95', '64.95', 23, 'NEW', '#F0FFF0'), P(6, 'BABY FOOD MAKER', 'Steam blender baby food', '69.95', '89.95', 22, 'NEW', '#F0F0FF'), P(7, 'BOTTLE WARMER', 'Fast bottle warmer', '29.95', '39.95', 25, 'NEW', '#FFFAF0'), P(8, 'FORMULA MAKER', 'Auto formula dispenser', '99.95', '129.95', 23, 'NEW', '#FFF0E8')] },
    { label: 'NURSERY', products: [P(9, 'NIGHT LIGHT', 'Star projector with music', '34.95', '44.95', 22, 'NEW', '#FFF0F0'), P(10, 'BABY HUMIDIFIER', 'Cool mist for nursery', '44.95', '59.95', 24, 'NEW', '#F0FFF5'), P(11, 'WHITE NOISE', 'White noise sound machine', '29.95', '39.95', 25, 'NEW', '#F0F5FF'), P(12, 'BABY SCALE', 'Digital baby weighing scale', '49.95', '64.95', 23, 'NEW', '#FFFAF0')] },
]);

mkShop('NewInScreen.js', 'NewInScreen', 'NEW IN', 'JUST ARRIVED  |  NEW IN', 96, [
    { label: 'KITCHEN NEW IN', products: [P(1, 'AIR FRYER XL 5.5L', 'Digital air fryer', '89.95', '119.95', 25, 'NEW', '#F0EDE8'), P(2, 'ESPRESSO MACHINE', '15-bar espresso', '149.95', '189.95', 21, 'NEW', '#EDE8F0'), P(3, 'TOASTER 4-SLICE', 'Wide slot toaster', '49.95', '64.95', 23, 'NEW', '#F5EDDE'), P(4, 'STAND MIXER 1200W', 'Professional mixer', '149.95', '199.95', 25, 'NEW', '#E8E8F5')] },
    { label: 'HEATERS NEW IN', products: [P(5, 'TOWER HEATER SMART', 'WiFi smart heater', '149.95', '189.95', 21, 'NEW', '#F0EEE8'), P(6, 'INFRARED PANEL', 'Slim wall panel', '179.95', '229.95', 22, 'NEW', '#E8EDF5'), P(7, 'PATIO HEATER ULTRA', 'Weatherproof outdoor', '249.95', '299.95', 17, 'NEW', '#F5EDDE'), P(8, 'GLASS WALL HEATER', 'Stylish glass panel', '189.95', '239.95', 21, 'NEW', '#E8EDF5')] },
    { label: 'PERSONAL CARE NEW IN', products: [P(9, 'MASSAGE GUN', 'Deep tissue percussion', '89.95', '119.95', 25, 'NEW', '#EDE8F5'), P(10, 'LED FACE MASK', '7-colour LED therapy', '79.95', '99.95', 20, 'NEW', '#F5E8F0'), P(11, 'HAIR DRYER PRO', 'Professional ionic', '59.95', '79.95', 25, 'NEW', '#F5E8EE'), P(12, 'EPILATOR PRECISION', 'Cordless 4-head', '69.95', '89.95', 22, 'NEW', '#F5EEE8')] },
    { label: 'HOME & CLEANING NEW IN', products: [P(13, 'ROBOT VACUUM S5', 'Smart robot mapping', '249.95', '319.95', 22, 'NEW', '#F0F0F5'), P(14, 'STEAM MOP PRO', 'Steam mop 1500W', '79.95', '99.95', 20, 'NEW', '#E8F5F5'), P(15, 'AIR PURIFIER SMART', 'WiFi air purifier', '199.95', '259.95', 23, 'NEW', '#EDE8F5'), P(16, 'WINDOW ROBOT', 'Auto window cleaner', '199.95', '259.95', 23, 'NEW', '#E8EDF5')] },
    { label: 'FANS NEW IN', products: [P(17, 'SMART FAN WIFI', 'WiFi ceiling fan', '279.95', '349.95', 20, 'NEW', '#F5F0E8'), P(18, 'LED FAN RGB', 'Color changing LED fan', '219.95', '279.95', 21, 'NEW', '#F5EDE8'), P(19, 'TOWER FAN SMART', 'WiFi smart tower fan', '99.95', '129.95', 23, 'NEW', '#F5EEE8'), P(20, 'OUTDOOR FAN 52"', 'Weatherproof fan', '229.95', '289.95', 21, 'NEW', '#E8F5EE')] },
    { label: 'AUDIO NEW IN', products: [P(21, 'SOUNDBAR 2.1', '120W with subwoofer', '149.95', '199.95', 25, 'NEW', '#F5E8E8'), P(22, 'WIRELESS HEADPHONES', 'Noise cancelling', '99.95', '129.95', 23, 'NEW', '#E8F5E8'), P(23, 'SMART TV 43" 4K', '4K UHD Android TV', '449.95', '569.95', 21, 'NEW', '#E8EDF5'), P(24, 'DAB RADIO RETRO', 'Digital retro radio', '59.95', '79.95', 25, 'NEW', '#F0F5E8')] },
]);

console.log('All 14 shop screens generated with ExpandRow!');
