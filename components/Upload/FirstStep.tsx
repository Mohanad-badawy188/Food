import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import * as DocumentPicker from "expo-document-picker";
import Img from "../../assets/Image.png";
import test from "../../assets/test.png";
import Slider from "@react-native-community/slider";

const Container = styled.View`
  background-color: #fff;
  padding: 0 20px;
`;

const PicBtn = styled.TouchableOpacity`
  margin-top: 35px;
  width: 100%;
  height: 160px;
  border-width: 2px;
  border-radius: 16px;
  border-color: rgba(208, 219, 234, 1);
  border-style: dashed;
  border-spacing: 2px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const PicBtnImg = styled.Image`
  height: 54px;
  width: 54px;
`;
const PicBtnText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(62, 84, 129, 1);
  margin: 10px 0;
`;
const PicBtnSubText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(159, 165, 192, 1);
`;
const FieldHeader = styled.Text`
  margin: 20px 0 10px;
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(62, 84, 129, 1);
`;
const Input = styled.TextInput`
  min-height: 56px;
  border-radius: 32px;
  border: 1px solid rgba(208, 219, 234, 1);
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  margin-bottom: 10px;
`;
const SubHeader = styled.Text`
  font-size: 17px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(159, 165, 192, 1);
`;
export default function FirstStep() {
  const [fileResponse, setFileResponse] = useState([]);
  const [fromValue, setFromValue] = useState(0);

  const [value, setValue] = useState<number>(0);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: ["image/*"],
      });
    } catch (err) {}
  }, []);
  return (
    <Container>
      <PicBtn onPress={handleDocumentSelection}>
        <PicBtnImg source={Img} />
        <PicBtnText>Add Cover Photo</PicBtnText>
        <PicBtnSubText>(up to 12 Mb)</PicBtnSubText>
      </PicBtn>
      <FieldHeader>Food Name</FieldHeader>
      <Input placeholder="Enter food name" />
      <FieldHeader>Description</FieldHeader>
      <Input
        placeholder="Tell a little about your food"
        multiline={true}
        numberOfLines={5}
        style={{ textAlignVertical: "top" }}
      />
      <FieldHeader>
        Cooking Duration <SubHeader>(in minutes)</SubHeader>
      </FieldHeader>
      <Slider
        style={{ width: "auto", height: 40 }}
        minimumValue={0}
        maximumValue={4}
        minimumTrackTintColor="rgba(31, 204, 121, 1)"
        maximumTrackTintColor="#505154"
      />
    </Container>
  );
}
