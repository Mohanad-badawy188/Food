import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabs } from "./components/Tabs";
import ProfileScreen from "./screens/ProfileScreen";
import UploadScreen from "./screens/UploadScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoarding" component={OnBoardingScreen} /> */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="TabNavigator" component={BottomTabs} />
        <Stack.Screen name="UploadItem" component={UploadScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
