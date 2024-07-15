import { OneSignal } from 'react-native-onesignal'

export function tagUserEmailCreate(email:string){
  OneSignal.User.addTag("user-email", email)
}