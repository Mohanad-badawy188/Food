import styled from "styled-components/native";
import { PrimaryBtn } from "../components/GLobalStyles";

// const Test = styled.Text`
//   color: "red";
//   background-color: "blue?";
// `;
const Body = styled.View`
  background-color: white;
  flex: 1;
`;
const Header = styled.Text`
  font-size: 22px;
  line-height: 32px;
  align-self: center;
  font-weight: 700;
  color: rgba(46, 62, 92, 1);
`;
const Img = styled.Image`
  margin-top: 60px;
  height: 500px;
  width: 100%;
`;
const SubHeader = styled.Text`
  align-self: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  margin-top: 20px;
  color: rgba(159, 165, 192, 1);
`;
const BtnText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: white;
`;

export default function OnBoardingScreen({ navigation }: any) {
  return (
    <Body>
      <Img source={require("../assets/Onboarding.png")} />
      <Header> Start Cooking</Header>
      <SubHeader>
        Let's join our community{"\n"}
        to cook better food!
      </SubHeader>
      <PrimaryBtn onPress={() => navigation.navigate("Login")}>
        <BtnText>Get Started</BtnText>
      </PrimaryBtn>
    </Body>
  );
}
