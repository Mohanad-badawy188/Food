import { KeyboardAvoidingView, ScrollView, TextInput } from "react-native";
import styled from "styled-components/native";
import Input from "../components/Login/Input";
import Email from "../assets/Email.png";
import Password from "../assets/PasswordLock.png";
import { useState } from "react";
import Checked from "../assets/check.png";
import { AreaView, Body, PrimaryBtn } from "../components/GLobalStyles";
import PasswordValidation from "../components/Login/PasswordValidation";

const Header = styled.Text`
  color: rgba(62, 84, 129, 1);
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  margin-top: 40px;
`;
const SubHeader = styled.Text`
  margin-top: 15px;
  color: rgba(159, 165, 192, 1);
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
`;

const BtnText = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: white;
`;
export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<
    { title: string; message: string; value: boolean }[]
  >([
    { title: "length", message: "Atleast 6 characters", value: true },
    { title: "format", message: "Contains a number", value: true },
  ]);
  /// password must contain string and number
  const passwordFormat = new RegExp(
    "([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*"
  );
  const CheckingForErrors = (text: string) => {
    /// checking for the password and setting errors based on it
    if (text.length >= 6) {
      setError((per) =>
        per.map((err) =>
          err.title === "length" ? { ...err, value: false } : err
        )
      );
    } else {
      setError((per) =>
        per.map((err) =>
          err.title === "length" ? { ...err, value: true } : err
        )
      );
    }
    if (text.match(passwordFormat)) {
      setError((per) =>
        per.map((err) =>
          err.title === "format" ? { ...err, value: false } : err
        )
      );
    } else {
      setError((per) =>
        per.map((err) =>
          err.title === "format" ? { ...err, value: true } : err
        )
      );
    }
  };

  const handleSubmit = () => {
    if (email.length && password.length > 5) {
      /// getting all the erros value and if its all false proceed to the next step
      const errors = error.map((err) => err.value);
      if (!errors.includes(true)) {
        {
          navigation.navigate("TabNavigator");
        }
      }
    }
    // if(error)
  };
  return (
    <AreaView>
      <Body>
        <KeyboardAvoidingView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header>Welcome! </Header>
            <SubHeader>Please enter your account here</SubHeader>
            <Input
              setEmail={setEmail}
              type={"string"}
              icon={Email}
              validation={true}
              placeholder={"Email or phone number"}
            />
            <Input
              CheckingForErrors={CheckingForErrors}
              password={password}
              setPassword={setPassword}
              type={"password"}
              icon={Password}
              validation={true}
              placeholder={"Password"}
            />
            <PasswordValidation error={error} />

            <PrimaryBtn onPress={handleSubmit}>
              <BtnText>Sign Up</BtnText>
            </PrimaryBtn>
          </ScrollView>
        </KeyboardAvoidingView>
      </Body>
    </AreaView>
  );
}
