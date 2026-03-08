import React,{useState} from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
const W=Dimensions.get('window').width;
const CARD_W=W/2;
const SUBS=[{label:'BEST SELLERS',products:[
  {id:1,name:'PATIO HEATER COMPACT',sub:'Infrared 1800W',price:'129.95',was:'159.95',off:18,badge:'SALE',bg:'#F0E8D8'},
  {id:2,name:'TOWER HEATER PRO',sub:'Ceramic tower remote',price:'89.95',was:'109.95',off:18,badge:'SALE',bg:'#F5F0E8'},
  {id:3,name:'WALL HEATER SLIM',sub:'Panel heater 1500W',price:'149.95',was:'179.95',off:17,badge:'SALE',bg:'#EDE5D8'},
  {id:4,name:'BATHROOM HEATER',sub:'Safe infrared heater',price:'109.95',was:'139.95',off:21,badge:'SALE',bg:'#E8EDF0'}
]},
{label:'NEW ARRIVALS',products:[
  {id:5,name:'HEATER FAN TOWER',sub:'New 2024 fan heater',price:'99.95',was:'129.95',off:23,badge:'SALE',bg:'#F5EEE8'},
  {id:6,name:'INFRARED PANEL',sub:'Slim infrared wall panel',price:'179.95',was:'229.95',off:22,badge:'SALE',bg:'#E8EDF5'},
  {id:7,name:'CONVECTOR HEATER',sub:'2000W convector with timer',price:'79.95',was:'99.95',off:20,badge:'SALE',bg:'#EEF5E8'},
  {id:8,name:'OIL RADIATOR',sub:'7-fin oil filled radiator',price:'89.95',was:'114.95',off:22,badge:'SALE',bg:'#F0EEE8'}
]},
{label:'CLEARANCE',products:[
  {id:9,name:'DESK HEATER MINI',sub:'Portable space heater',price:'39.95',was:'49.95',off:20,badge:'SALE',bg:'#F0EDE8'},
  {id:10,name:'HALOGEN HEATER',sub:'1200W halogen heater',price:'29.95',was:'44.95',off:33,badge:'SALE',bg:'#F5F0E8'},
  {id:11,name:'CERAMIC HEATER',sub:'Compact ceramic heater',price:'49.95',was:'69.95',off:29,badge:'SALE',bg:'#E8F0EE'},
  {id:12,name:'FAN HEATER BASIC',sub:'Basic 2000W fan heater',price:'24.95',was:'34.95',off:29,badge:'SALE',bg:'#EEE8F5'}
]},
{label:'BUNDLES',products:[
  {id:13,name:'HEATER + BLANKET',sub:'Heater with heated blanket',price:'159.95',was:'209.95',off:24,badge:'SALE',bg:'#F5EDE8'},
  {id:14,name:'2x TOWER HEATERS',sub:'Twin pack tower heaters',price:'149.95',was:'199.95',off:25,badge:'SALE',bg:'#E8EDF5'},
  {id:15,name:'BATHROOM SET',sub:'Heater + towel rail bundle',price:'169.95',was:'219.95',off:23,badge:'SALE',bg:'#F0E8F0'},
  {id:16,name:'WHOLE HOME SET',sub:'3 heaters bundle pack',price:'249.95',was:'329.95',off:24,badge:'SALE',bg:'#E8F5F0'}
]}];
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
export default function HeatingDealsScreen({navigate}){
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
<View style={s.db}><Text style={s.dbt}><Text style={s.b}>SALE — UP TO -30%  |  HEATING DEALS</Text></Text>
<Ionicons name="information-circle-outline" size={18} color="#888"/></View>
<TouchableOpacity style={s.bk} onPress={()=>navigate('shopMenu')}>
<Ionicons name="arrow-back" size={15} color="#888"/><Text style={s.bkt}>  Back</Text></TouchableOpacity>
<View style={s.cr}><Text style={s.crt}>72 products</Text>
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
