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

import LoginScreen       from './src/screens/LoginScreen';
import HomeScreen        from './src/screens/HomeScreen';
import ShopScreen        from './src/screens/ShopScreen';
import MagazineScreen    from './src/screens/MagazineScreen';
import RecipesScreen     from './src/screens/RecipesScreen';
import AccountScreen     from './src/screens/AccountScreen';
import AddHomeScreen     from './src/screens/AddHomeScreen';
import AutomationsScreen from './src/screens/AutomationsScreen';
import TapToRunScreen    from './src/screens/TapToRunScreen';
import CreateSceneScreen from './src/screens/CreateSceneScreen';
import AddDeviceScreen   from './src/screens/AddDeviceScreen';
import ShowAreaScreen    from './src/screens/ShowAreaScreen';

export default function App() {
  const [screen, setScreen] = useState('login');

  const navigate = (s) => setScreen(s);

  const renderScreen = () => {
    switch (screen) {
      case 'login':       return <LoginScreen       navigate={navigate} />;
      case 'home':        return <HomeScreen        navigate={navigate} />;
      case 'shop':        return <ShopScreen        navigate={navigate} />;
      case 'magazine':    return <MagazineScreen    navigate={navigate} />;
      case 'recipes':     return <RecipesScreen     navigate={navigate} />;
      case 'account':     return <AccountScreen     navigate={navigate} />;
      case 'addHome':     return <AddHomeScreen     navigate={navigate} />;
      case 'editHome':    return <AddHomeScreen     navigate={navigate} editMode />;
      case 'automations': return <AutomationsScreen navigate={navigate} />;
      case 'taptorun':    return <TapToRunScreen    navigate={navigate} />;
      case 'createscene': return <CreateSceneScreen navigate={navigate} />;
      case 'addDevice':   return <AddDeviceScreen   navigate={navigate} />;
      case 'showarea':    return <ShowAreaScreen    navigate={navigate} />;
      default:            return <HomeScreen        navigate={navigate} />;
    }
  };

  return (
    <View style={styles.root}>
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
