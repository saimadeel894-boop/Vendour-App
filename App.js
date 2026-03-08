/**
 * CREATE App — React Native
 * ──────────────────────────────────────────────────────────────
 * Single-file entry point with all screens and navigation.
 * Branch: ui-vendom5
 *
 * Screens:
 *   - LoginScreen      → Welcome / Sign in / Register
 *   - HomeScreen       → My Home + device control + FAB menu
 *   - ShopScreen       → Product list + product detail
 *   - MagazineScreen   → Editorial articles
 *   - RecipesScreen    → Recipe feed (structure only, ready for API)
 *   - AccountScreen    → User profile + wallet menu
 *
 * Data:
 *   All dummy data lives in src/data/index.js
 *   Replace with API calls — comments mark integration points.
 *
 * Theme:
 *   All design tokens in src/theme/index.js
 *   No magic numbers anywhere else.
 */

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ShopScreen from './src/screens/ShopScreen';
import MagazineScreen from './src/screens/MagazineScreen';
import RecipesScreen from './src/screens/RecipesScreen';
import AccountScreen from './src/screens/AccountScreen';
import AddHomeScreen from './src/screens/AddHomeScreen';
import AutomationsScreen from './src/screens/AutomationsScreen';
import TapToRunScreen from './src/screens/TapToRunScreen';
import CreateSceneScreen from './src/screens/CreateSceneScreen';
import AddDeviceScreen from './src/screens/AddDeviceScreen';
import ShowAreaScreen from './src/screens/ShowAreaScreen';
import ShopMenuScreen from './src/screens/ShopMenuScreen';
import ProductCategoryScreen from './src/screens/ProductCategoryScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import MyInformationScreen from './src/screens/account/MyInformationScreen';
import OrderHistoryScreen from './src/screens/account/OrderHistoryScreen';
import MyAddressesScreen from './src/screens/account/MyAddressesScreen';
import SettingsScreen from './src/screens/account/SettingsScreen';
import HeatersScreen from './src/screens/shop/HeatersScreen';
import KitchenScreen from './src/screens/shop/KitchenScreen';
import CeilingFansScreen from './src/screens/shop/CeilingFansScreen';
import FridgesScreen from './src/screens/shop/FridgesScreen';
import PersonalCareScreen from './src/screens/shop/PersonalCareScreen';
import AudioTVScreen from './src/screens/shop/AudioTVScreen';
import TravelSuitcasesScreen from './src/screens/shop/TravelSuitcasesScreen';
import GardenOutdoorScreen from './src/screens/shop/GardenOutdoorScreen';
import HomeCleaningScreen from './src/screens/shop/HomeCleaningScreen';
import ClimateAppliancesScreen from './src/screens/shop/ClimateAppliancesScreen';
import HeatingDealsScreen from './src/screens/shop/HeatingDealsScreen';
import SkincareScreen from './src/screens/shop/SkincareScreen';
import BabyScreen from './src/screens/shop/BabyScreen';
import NewInScreen from './src/screens/shop/NewInScreen';

export default function App() {
  const [screen, setScreen] = useState('login');

  const navigate = (s) => setScreen(s);

  const renderScreen = () => {
    switch (screen) {
      case 'login': return <LoginScreen navigate={navigate} />;
      case 'home': return <HomeScreen navigate={navigate} />;
      case 'shop': return <ShopScreen navigate={navigate} />;
      case 'magazine': return <MagazineScreen navigate={navigate} />;
      case 'recipes': return <RecipesScreen navigate={navigate} />;
      case 'account': return <AccountScreen navigate={navigate} />;
      case 'addHome': return <AddHomeScreen navigate={navigate} />;
      case 'editHome': return <AddHomeScreen navigate={navigate} editMode />;
      case 'automations': return <AutomationsScreen navigate={navigate} />;
      case 'taptorun': return <TapToRunScreen navigate={navigate} />;
      case 'createscene': return <CreateSceneScreen navigate={navigate} />;
      case 'addDevice': return <AddDeviceScreen navigate={navigate} />;
      case 'showarea': return <ShowAreaScreen navigate={navigate} />;
      case 'shopMenu': return <ShopMenuScreen navigate={navigate} />;
      case 'productCategory': return <ProductCategoryScreen navigate={navigate} />;
      case 'productDetail': return <ProductDetailScreen navigate={navigate} />;
      case 'myInformation': return <MyInformationScreen navigate={navigate} />;
      case 'orderHistory': return <OrderHistoryScreen navigate={navigate} />;
      case 'myAddresses': return <MyAddressesScreen navigate={navigate} />;
      case 'settings': return <SettingsScreen navigate={navigate} />;
      case 'heaters': return <HeatersScreen navigate={navigate} />;
      case 'kitchen': return <KitchenScreen navigate={navigate} />;
      case 'ceilingFans': return <CeilingFansScreen navigate={navigate} />;
      case 'fridges': return <FridgesScreen navigate={navigate} />;
      case 'personalCare': return <PersonalCareScreen navigate={navigate} />;
      case 'audioTV': return <AudioTVScreen navigate={navigate} />;
      case 'travelSuitcases': return <TravelSuitcasesScreen navigate={navigate} />;
      case 'gardenOutdoor': return <GardenOutdoorScreen navigate={navigate} />;
      case 'homeCleaning': return <HomeCleaningScreen navigate={navigate} />;
      case 'climateAppliances': return <ClimateAppliancesScreen navigate={navigate} />;
      case 'heatingDeals': return <HeatingDealsScreen navigate={navigate} />;
      case 'skincare': return <SkincareScreen navigate={navigate} />;
      case 'baby': return <BabyScreen navigate={navigate} />;
      case 'newIn': return <NewInScreen navigate={navigate} />;
      default: return <HomeScreen navigate={navigate} />;
    }
  };

  return (
    <SafeAreaProvider>
      {renderScreen()}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
