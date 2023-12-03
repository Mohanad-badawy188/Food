import React, { useState } from "react";
import styled from "styled-components/native";

const NotificationItemContainer = styled.View`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 50px;
`;
const NotificationImg = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  margin-right: 20px;
`;
const NotificationDataContainer = styled.View``;
const NotificationHeader = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  text-align: left;
  color: rgba(62, 84, 129, 1);
`;
const NotificationSubheader = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(159, 165, 192, 1);
`;
const NotificationButton = styled.TouchableOpacity<{ follow: boolean }>`
  background-color: ${(props) =>
    props.follow ? "rgba(244, 245, 247, 1)" : "rgba(31, 204, 121, 1)"};
  width: 90px;
  height: 40px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;
const NotificationButtonText = styled.Text<{ follow: boolean }>`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${(props) => (props.follow ? "black" : "white")};
`;

interface item {
  img: any;
  name: string[] | string;
  description: string;
  date: string;
}
export default function NotificationFollow({
  img,
  name,
  description,
  date,
}: item) {
  const [follow, setFollow] = useState(false);
  const handleClick = () => {
    setFollow((prev) => !prev);
  };
  return (
    <NotificationItemContainer>
      <NotificationImg source={{ uri: img }} />
      <NotificationDataContainer>
        <NotificationHeader>{name}</NotificationHeader>
        <NotificationSubheader>
          {description} ・ {date}
        </NotificationSubheader>
      </NotificationDataContainer>
      <NotificationButton follow={follow} onPress={handleClick}>
        <NotificationButtonText follow={follow}>
          {follow ? "followed" : "follow"}
        </NotificationButtonText>
      </NotificationButton>
    </NotificationItemContainer>
  );
}
