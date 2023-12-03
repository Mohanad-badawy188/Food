import React, { useState } from "react";
import styled from "styled-components/native";

const NotificationItemContainer = styled.View`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 50px;
`;
const NotificationImgContainer = styled.View`
  position: relative;
  height: 48px;
  width: 48px;
  margin-right: 20px;
`;
const NotificationImg = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
const NotificationMainImg = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  position: absolute;
  top: 10px;
  right: 2px;
`;
const NotificationDataContainer = styled.View``;
const NotificationHeader = styled.Text`
  font-weight: 700;
  text-align: left;
  color: rgba(62, 84, 129, 1);
  font-size: 15px;
  line-height: 25px;
  padding-top: 10px;
`;
const NotificationSubheader = styled.Text`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-align: left;
  color: rgba(159, 165, 192, 1);
`;
const PostImg = styled.Image`
  height: 62px;
  width: 62px;
  border-radius: 12px;
  margin-left: auto;
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
  img: string[] | string;
  name: string[] | string;
  description: string;
  date: string;
  recipeImg?: string;
}
export default function NotificationLike({
  img,
  name,
  description,
  date,
  recipeImg,
}: item) {
  return (
    <NotificationItemContainer>
      <NotificationImgContainer>
        <NotificationImg source={{ uri: img[0] }} />
        <NotificationMainImg source={{ uri: img[1] }} />
      </NotificationImgContainer>
      <NotificationDataContainer>
        <NotificationHeader>
          {name[1]} <NotificationSubheader>and </NotificationSubheader>
          {"\n"}
          {name[0]}
        </NotificationHeader>
        <NotificationSubheader>
          {description} ・ {date}
        </NotificationSubheader>
      </NotificationDataContainer>
      <PostImg source={{ uri: recipeImg }} />
      {/* <NotificationButton follow={follow} onPress={handleClick}>
        <NotificationButtonText follow={follow}>
          {follow ? "followed" : "follow"}
        </NotificationButtonText>
      </NotificationButton> */}
    </NotificationItemContainer>
  );
}
