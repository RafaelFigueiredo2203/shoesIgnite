import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'native-base';

import { useEffect } from 'react';
import { NotificationWillDisplayEvent, OneSignal } from 'react-native-onesignal';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  useEffect(() => {
    const handleNotification = (event:NotificationWillDisplayEvent):void => {
      event.preventDefault()
      const response = event.getNotification()
      
    }

    OneSignal.Notifications.addEventListener("foregroundWillDisplay",
      handleNotification
    )

    return () =>  OneSignal.Notifications.removeEventListener("foregroundWillDisplay",
      handleNotification
    )
  },[])

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}