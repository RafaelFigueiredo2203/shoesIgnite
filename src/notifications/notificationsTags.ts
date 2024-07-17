import { OneSignal } from 'react-native-onesignal'

export function tagUserInfoCreate(email:string){
  OneSignal.User.addTags({
    user_name: "Rafael",
    user_email: "rafaelfigueiredojunior7@gmail.com"
  })
}

export function tagCartUpdate(itemsCount:string){
  OneSignal.User.addTag("cart_items_count", itemsCount)
}