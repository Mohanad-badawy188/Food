import { StatusBar } from "react-native";
import styled from "styled-components/native";
const currentHeight = StatusBar.currentHeight;

export const Body = styled.View`
  padding: 25px 25px 0px 25px;
  background-color: white;
  flex: 1;
`;
export const PrimaryBtn = styled.TouchableOpacity`
  margin-top: 50px;
  background: rgba(31, 204, 121, 1);
  width: 360px;
  height: 60px;
  border-radius: 32px;
  gap: 10px;
  justify-content: center;
  display: flex;
  align-self: center;
  align-items: center;
`;
export const AreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding-top: ${currentHeight + "px"};
`;
