import styled from "styled-components/native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";

const PrevSearchWrap = styled.View`
  margin-top: 30px;
  background-color: rgba(244, 245, 247, 1);
  padding: 10px 0;
`;
const PrevSearchContainer = styled.View`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
  height: 70px;
`;
const PrevSearchText = styled.Text`
  color: rgba(62, 84, 129, 1);
  font-size: 17px;
  font-weight: 500;
  line-height: 27px;
  text-align: left;
`;

export default function PrevSearch() {
  return (
    <PrevSearchWrap>
      <PrevSearchContainer>
        <EvilIcons
          name="clock"
          size={30}
          style={{ marginRight: 17 }}
          color={"rgba(159, 165, 192, 1)"}
        />
        <PrevSearchText>Pancakes</PrevSearchText>
        <Feather
          name="arrow-up-left"
          size={20}
          style={{ marginLeft: "auto" }}
          color={"rgba(159, 165, 192, 1)"}
        />
      </PrevSearchContainer>
      <PrevSearchContainer>
        <EvilIcons
          name="clock"
          size={30}
          style={{ marginRight: 17 }}
          color={"rgba(159, 165, 192, 1)"}
        />
        <PrevSearchText>Salad</PrevSearchText>
        <Feather
          name="arrow-up-left"
          size={20}
          style={{ marginLeft: "auto" }}
          color={"rgba(159, 165, 192, 1)"}
        />
      </PrevSearchContainer>
    </PrevSearchWrap>
  );
}
