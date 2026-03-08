import React,{useState} from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
const W=Dimensions.get('window').width;
const CARD_W=W/2;
const SUBS=[{label:'FRYERS & OVENS',products:[
  {id:1,name:'AIR FRYER XL 5.5L',sub:'Digital air fryer, 8 presets',price:'89.95',was:'119.95',off:25,badge:null,bg:'#F0EDE8'},
  {id:2,name:'AIR FRYER COMPACT',sub:'2.5L air fryer for 1-2 people',price:'59.95',was:'79.95',off:25,badge:null,bg:'#EEF5E8'},
  {id:3,name:'MINI OVEN 20L',sub:'Countertop mini oven with grill',price:'79.95',was:'99.95',off:20,badge:null,bg:'#F5EEE8'},
  {id:4,name:'PIZZA OVEN ELECTRIC',sub:'Electric pizza oven 1200W',price:'69.95',was:'89.95',off:22,badge:null,bg:'#F5E8E8'}
]},
{label:'BLENDERS & MIXERS',products:[
  {id:5,name:'BLENDER PRO 1000W',sub:'Professional blender with jug',price:'69.95',was:'89.95',off:22,badge:null,bg:'#E8F0E8'},
  {id:6,name:'HAND BLENDER',sub:'Immersion blender 800W',price:'39.95',was:'54.95',off:27,badge:null,bg:'#E8EDF5'},
  {id:7,name:'STAND MIXER 1200W',sub:'Professional stand mixer + bowl',price:'149.95',was:'199.95',off:25,badge:null,bg:'#E8E8F5'},
  {id:8,name:'FOOD PROCESSOR',sub:'Multi-function food processor',price:'99.95',was:'129.95',off:23,badge:null,bg:'#F5F0E8'}
]},
{label:'COFFEE & TEA',products:[
  {id:9,name:'COFFEE MAKER DELUXE',sub:'Filter coffee machine with timer',price:'79.95',was:'99.95',off:20,badge:null,bg:'#F0E8E8'},
  {id:10,name:'ESPRESSO MACHINE',sub:'15-bar espresso machine',price:'149.95',was:'189.95',off:21,badge:null,bg:'#EDE8F0'},
  {id:11,name:'CAPSULE COFFEE',sub:'Compatible capsule coffee maker',price:'59.95',was:'79.95',off:25,badge:null,bg:'#F5EDE8'},
  {id:12,name:'FRENCH PRESS SET',sub:'Stainless steel french press 1L',price:'29.95',was:'39.95',off:25,badge:null,bg:'#E8F5EE'}
]},
{label:'TOASTERS & KETTLES',products:[
  {id:13,name:'TOASTER 4-SLICE',sub:'Wide slot stainless toaster',price:'49.95',was:'64.95',off:23,badge:null,bg:'#F5EDDE'},
  {id:14,name:'TOASTER 2-SLICE RETRO',sub:'Vintage style 2-slice toaster',price:'39.95',was:'54.95',off:27,badge:null,bg:'#EEE8F5'},
  {id:15,name:'KETTLE ELEGANCE 1.7L',sub:'Temperature control kettle',price:'59.95',was:'79.95',off:25,badge:null,bg:'#EDE8F5'},
  {id:16,name:'KETTLE RETRO',sub:'Vintage stainless kettle 1.7L',price:'49.95',was:'64.95',off:23,badge:null,bg:'#F5F5E8'}
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
export default function KitchenScreen({navigate}){
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
<View style={s.db}><Text style={s.dbt}><Text style={s.b}>UP TO -25%  |  KITCHEN</Text></Text>
<Ionicons name="information-circle-outline" size={18} color="#888"/></View>
<TouchableOpacity style={s.bk} onPress={()=>navigate('shopMenu')}>
<Ionicons name="arrow-back" size={15} color="#888"/><Text style={s.bkt}>  Back</Text></TouchableOpacity>
<View style={s.cr}><Text style={s.crt}>64 products</Text>
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
