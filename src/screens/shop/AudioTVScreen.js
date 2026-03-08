import React,{useState} from 'react';
import {View,Text,ScrollView,TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
const W=Dimensions.get('window').width;
const CARD_W=W/2;
const SUBS=[{label:'SPEAKERS',products:[
  {id:1,name:'BLUETOOTH SPEAKER 360',sub:'360° surround portable',price:'79.95',was:'99.95',off:20,badge:null,bg:'#E8E8F5'},
  {id:2,name:'SOUNDBAR 2.1 120W',sub:'Soundbar with subwoofer',price:'149.95',was:'199.95',off:25,badge:null,bg:'#F5E8E8'},
  {id:3,name:'PARTY SPEAKER',sub:'Portable LED party speaker',price:'99.95',was:'129.95',off:23,badge:null,bg:'#E8F5E8'},
  {id:4,name:'BOOKSHELF SPEAKERS',sub:'Pair of bookshelf speakers',price:'119.95',was:'149.95',off:20,badge:null,bg:'#F5F0E8'}
]},
{label:'HEADPHONES',products:[
  {id:5,name:'WIRELESS HEADPHONES',sub:'Active noise cancelling',price:'99.95',was:'129.95',off:23,badge:null,bg:'#E8F5E8'},
  {id:6,name:'EARBUDS PRO',sub:'True wireless earbuds',price:'69.95',was:'89.95',off:22,badge:null,bg:'#F5EDE8'},
  {id:7,name:'GAMING HEADSET',sub:'7.1 surround gaming set',price:'79.95',was:'99.95',off:20,badge:null,bg:'#EDE8F5'},
  {id:8,name:'SPORT EARBUDS',sub:'Sweatproof sport earbuds',price:'49.95',was:'64.95',off:23,badge:null,bg:'#EEF5E8'}
]},
{label:'TV & PROJECTORS',products:[
  {id:9,name:'SMART TV 32" HD',sub:'Android smart TV WiFi',price:'299.95',was:'379.95',off:21,badge:null,bg:'#F5F0E8'},
  {id:10,name:'PORTABLE PROJECTOR',sub:'Mini LED 200 lumens',price:'129.95',was:'169.95',off:24,badge:null,bg:'#E8F0F5'},
  {id:11,name:'SMART TV 43" 4K',sub:'4K UHD Android TV',price:'449.95',was:'569.95',off:21,badge:null,bg:'#E8EDF5'},
  {id:12,name:'PROJECTOR SCREEN',sub:'100" portable screen',price:'59.95',was:'79.95',off:25,badge:null,bg:'#F5EDE8'}
]},
{label:'RADIOS',products:[
  {id:13,name:'DAB RADIO RETRO',sub:'DAB+ FM digital radio',price:'59.95',was:'79.95',off:25,badge:null,bg:'#F0F5E8'},
  {id:14,name:'INTERNET RADIO',sub:'WiFi internet radio',price:'79.95',was:'99.95',off:20,badge:null,bg:'#E8F0F5'},
  {id:15,name:'CLOCK RADIO',sub:'DAB alarm clock radio',price:'39.95',was:'54.95',off:27,badge:null,bg:'#F5F5E8'},
  {id:16,name:'PORTABLE RADIO',sub:'Pocket DAB/FM radio',price:'29.95',was:'39.95',off:25,badge:null,bg:'#EEF5E8'}
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
export default function AudioTVScreen({navigate}){
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
<View style={s.db}><Text style={s.dbt}><Text style={s.b}>UP TO -25%  |  AUDIO AND TV</Text></Text>
<Ionicons name="information-circle-outline" size={18} color="#888"/></View>
<TouchableOpacity style={s.bk} onPress={()=>navigate('shopMenu')}>
<Ionicons name="arrow-back" size={15} color="#888"/><Text style={s.bkt}>  Back</Text></TouchableOpacity>
<View style={s.cr}><Text style={s.crt}>40 products</Text>
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
