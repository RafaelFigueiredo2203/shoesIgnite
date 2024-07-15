import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate(email:string){
  OneSignal.User.addTags({
    user_name: "Rafael",
    user_email: "rafaelfigueiredojunior7@gmail.com"
  })
}