import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { StatusBar } from 'react-native';

import { NotificationClickEvent, OneSignal } from 'react-native-onesignal';
import { Routes } from './src/routes';

import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';

import { useEffect } from 'react';
import { CartContextProvider } from './src/contexts/CartContext';
import { tagUserInfoCreate } from './src/notifications/notificationsTags';

OneSignal.initialize('5a5202b5-373c-4090-8459-c0ec983dd346')
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate("rafaelfigueiredojunior7@gmail.com")

  useEffect(() => {
    const handleNotificationClick = (event:NotificationClickEvent):void => {
      const {actionId} = event.result

      switch(actionId){
        case'1':
        break
        console.log("ver todos")
        case'2':
        break
        console.log("ver pedido")
        default: console.log("Nenhum selecionado ")
      }
    }

    OneSignal.Notifications.addEventListener("click", handleNotificationClick)
  
    return () => OneSignal.Notifications.removeEventListener("click",handleNotificationClick)
  },[])

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