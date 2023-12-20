import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import TabNavigator from "./BottonTab";
import {OnBoardingScreen} from "../screens";

export type RootStackParamList = {
  onBoarding: undefined;
  MainApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onBoarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
