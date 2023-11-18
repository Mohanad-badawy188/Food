import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import showPassword from "../../assets/Show.png";

const Container = styled.View`
  margin-top: 40px;
  text-align: center;
  width: 100%;
`;
const InputBody = styled.View`
  height: 65px;
  width: 100%;

  border: 1px solid rgba(208, 219, 234, 1);
  border-radius: 32px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px 25px;
`;
const LoginInput = styled.TextInput`
  color: rgba(159, 165, 192, 1);
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  padding: 0px 15px;
  height: 100%;
  width: 85%;
`;
const Icon = styled.Image`
  height: 25px;
  width: 25px;
`;
const ShowPassword = styled.TouchableOpacity`
  height: 20px;
  width: 20px;
`;
const ShowPasswordImage = styled.Image`
  height: 24px;
  width: 24px;
`;
interface test {
  type: string;
  icon: any;
  placeholder: string;
  validation?: Boolean;
  password?: string;
  setEmail?: any;
  setPassword?: any;
  CheckingForErrors?: any;
}
export default function Input({
  type,
  icon,
  placeholder,
  validation = false,
  setPassword = null,
  setEmail = null,
  CheckingForErrors = null,
}: test) {
  const [focus, setFocus] = useState<Boolean>(false);
  const [showThePassword, setShowThePassword] = useState<boolean>(
    type === "password" ? true : false
  );
  return (
    <Container>
      <InputBody
        style={
          focus
            ? { borderColor: "rgba(31, 204, 121, 1)", borderWidth: 2 }
            : null
        }>
        <Icon source={icon} />
        <LoginInput
          secureTextEntry={showThePassword}
          placeholder={placeholder}
          onChangeText={(newText) => {
            setPassword && setPassword(newText);
            setEmail && setEmail(newText);
            CheckingForErrors && CheckingForErrors(newText);
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {type === "password" ? (
          // simple show password only if the type passed in props is password
          <ShowPassword onPress={() => setShowThePassword((value) => !value)}>
            <ShowPasswordImage source={showPassword} />
          </ShowPassword>
        ) : null}
      </InputBody>
    </Container>
  );
}
