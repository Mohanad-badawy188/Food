import React, { useState } from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import FirstStep from "../components/Upload/FirstStep";
import SecondStep from "../components/Upload/SecondStep";
import { KeyboardAvoidingView } from "react-native";
const Container = styled.View`
  flex: 1;
  margin-top: 20px;
`;
const Headers = styled.View`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
`;

const CancelText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(255, 100, 100, 1);
`;
const HeaderItem = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(159, 165, 192, 1);
  padding-top: 5px;
`;
const PageNumber = styled.Text`
  color: rgba(62, 84, 129, 1);
`;
export default function UploadScreen({ navigation }: any) {
  const [curPage, setCurPage] = useState<number>(1);
  return (
    <AreaView>
      <KeyboardAvoidingView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container>
            <Headers>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <CancelText>Cancel</CancelText>
              </TouchableOpacity>
              <HeaderItem>
                <PageNumber>{curPage}</PageNumber>/2
              </HeaderItem>
            </Headers>
            {curPage === 1 && <FirstStep />}
            {curPage === 2 && <SecondStep />}
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </AreaView>
  );
}
