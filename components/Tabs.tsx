import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import UploadScreen from "../screens/UploadScreen";
import ScanScreen from "../screens/ScanScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Edit from "../assets/Edit.png";
import Profile from "../assets/Profile.png";
import Scan from "../assets/Scan.png";
import MyProfileScreen from "../screens/MyProfileScreen";
import { useNavigation } from "@react-navigation/native";
const TabContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const TabIcon = styled.Image<{ focused: boolean }>`
  height: 30px;

  width: 30px;
  tint-color: ${(props) =>
    props.focused ? "rgba(31, 204, 121, 1)" : "rgba(159, 165, 192, 1)"};
`;
const TabHeader = styled.Text<{ focused: boolean }>`
  margin-top: 7px;
  color: ${(props) =>
    props.focused ? "rgba(31, 204, 121, 1)" : "rgba(159, 165, 192, 1)"};
`;
const Btn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  top: -35px;
`;
const BtnItems = styled.View`
  color: white;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: "rgba(31, 204, 121, 1)";
  justify-content: center;
  align-items: center;
`;
const BtnIcon = styled.Image`
  height: 30px;
  justify-content: center;
  align-items: center;
  width: 30px;
  tint-color: white;
`;
const ScanContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
const ScanText = styled.Text<{ focused: boolean }>`
  top: -17px;
  color: ${(props) =>
    props.focused ? "rgba(31, 204, 121, 1)" : "rgba(159, 165, 192, 1)"};
`;
const ScanBtn = ({ children, onPress }: any) => (
  <Btn onPress={onPress}>
    <BtnItems>{children}</BtnItems>
  </Btn>
);

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 90,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabContainer>
                <Icon
                  name="home"
                  size={30}
                  color={
                    focused ? "rgba(31, 204, 121, 1)" : "rgba(159, 165, 192, 1)"
                  }
                />
                <TabHeader focused={focused}>Home</TabHeader>
              </TabContainer>
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={UploadScreen}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              // Prevent default action
              e.preventDefault();

              navigation.navigate("UploadItem");
            },
          })}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabContainer>
                <TabIcon resizeMode="contain" focused={focused} source={Edit} />
                <TabHeader focused={focused}>Upload</TabHeader>
              </TabContainer>
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <ScanContainer>
                <ScanBtn>
                  <BtnIcon resizeMode="contain" source={Scan} />
                </ScanBtn>

                <ScanText focused={focused}>Scan</ScanText>
              </ScanContainer>
            ),
            // tabBarButton: (props) => (

            // ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabContainer>
                <Ionicons
                  name="notifications"
                  size={30}
                  color={
                    focused ? "rgba(31, 204, 121, 1)" : "rgba(159, 165, 192, 1)"
                  }
                />
                <TabHeader focused={focused}>Notification</TabHeader>
              </TabContainer>
            ),
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabContainer>
                <TabIcon
                  resizeMode="contain"
                  focused={focused}
                  source={Profile}
                />

                <TabHeader focused={focused}>MyProfile</TabHeader>
              </TabContainer>
            ),
          }}
        />
      </>
    </Tab.Navigator>
  );
}
