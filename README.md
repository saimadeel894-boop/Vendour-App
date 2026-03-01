# Vendour App — CREATE React Native UI

This repository contains the complete and updated source code for the Vendour App, built using React Native and Expo.

## Features
- **Login/Registration**: Clean onboarding flow.
- **Home Dashboard**: Smart device controls and FAB menu.
- **Shop**: Product listings and detailed views.
- **Magazine/Recipes**: Editorial content and structured recipe feeds.
- **Account**: User profile and wallet management.

## Project Structure
```text
├── App.js           # Main entry point and navigation logic
├── src/
│   ├── components/  # Shared UI components (Icons, Buttons, TabBar)
│   ├── data/        # Mock data for integration
│   ├── screens/     # Individual app screens
│   └── theme/       # Style tokens (Colors, Typography)
├── package.json     # Project dependencies
├── app.json         # Expo configuration
└── babel.config.js  # Babel configuration
```

## How to Run Local
1. **Clone the repository**:
   ```bash
   git clone https://github.com/saimadeel894-boop/Vendour-App.git
   cd Vendour-App
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the app**:
   ```bash
   npx expo start
   ```
4. **View the app**:
   - Use the **Expo Go** app on your phone to scan the QR code.
   - Or press `w` to open in the browser (requires `react-native-web`).

## Development
- All dummy data is located in `src/data/index.js`.
- Design tokens are centrally managed in `src/theme/index.js`.
