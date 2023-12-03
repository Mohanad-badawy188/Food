import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Entypo";

const PasswordValidationHeader = styled.Text`
  font-size: 17px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;

  margin-top: 15px;
  color: rgba(62, 84, 129, 1);
`;
const PasswordValidationContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px 0px;
`;
const PasswordValidationIcon = styled.Text<{ completed: boolean }>`
  font-size: 15px;
  font-weight: 500;

  line-height: 25px;
  letter-spacing: 0.5px;
  color: ${(props) =>
    props.completed ? "rgba(159, 165, 192, 1)" : "rgba(46, 62, 92, 1)"};
`;
const IconContainer = styled.View<{ completed: boolean }>`
  background-color: ${(props) =>
    props.completed ? "rgba(159, 165, 192, 0.3) " : "rgba(227, 255, 241, 1)"};
  padding: 3px;
  /* border-radius: 50; */
  margin-right: 10px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
interface error {
  title: string;
  message: string;
  value: boolean;
}
interface errors {
  error: error[];
}

const PasswordValidation: React.FC<errors> = ({ error }) => {
  console.log(error);
  return (
    <>
      <PasswordValidationHeader>
        Your Password must contain:
      </PasswordValidationHeader>
      {/* {password length} */}
      {error.map(
        (error: { title: string; value: boolean; message: string }) => (
          <PasswordValidationContainer key={error.title}>
            <IconContainer completed={error.value}>
              <Icon
                name="check"
                color={
                  error.value
                    ? "rgba(159, 165, 192, 1)"
                    : "rgba(31, 204, 121, 1)"
                }
              />
            </IconContainer>
            <PasswordValidationIcon completed={error.value}>
              {" "}
              {error.message}
            </PasswordValidationIcon>
          </PasswordValidationContainer>
        )
      )}
    </>
  );
};
export default PasswordValidation;
