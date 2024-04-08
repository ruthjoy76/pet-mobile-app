import { View } from "react-native";
import PetNameScreenIOS from "../mobileScreen/PetNameScreen.ios"
import PetNameScreenAndroid from "../mobileScreen/PetNameScreen.android"  

export default function PetNameScreen ()  {
  return (
    <View>
      <PetNameScreenIOS/>
      <PetNameScreenAndroid />
    </View>
  )}
  