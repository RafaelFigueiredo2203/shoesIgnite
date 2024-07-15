import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';

import { OneSignal } from 'react-native-onesignal';
import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';

import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserEmailCreate } from './src/notifications/notificationsTags';

OneSignal.initialize('5a5202b5-373c-4090-8459-c0ec983dd346')
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserEmailCreate("rafaelfigueiredojunior7@gmail.com")

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}