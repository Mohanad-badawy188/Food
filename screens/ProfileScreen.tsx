import React, { Fragment, useState } from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserData from "../components/Profile/UserData";
import { ScrollView } from "react-native";
import Filter from "../components/Profile/Filter";
import FoodItem from "../components/Profile/FoodItem";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  FAKE_USER,
  ItemsContainer,
  PageBreak,
  UserDataContainer,
  UserImg,
  UserImgContainer,
  UserName,
} from "./MyProfileScreen";

const HeadersIcons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;
const FollowBtn = styled.TouchableOpacity<{ follow: boolean }>`
  width: 265px;
  height: 55px;
  border-radius: 32px;
  padding: 19px 32px;
  margin: 25px auto 0px;
  background-color: ${(props) =>
    props.follow ? "rgba(244, 245, 247, 1)" : "rgba(31, 204, 121, 1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const BtnText = styled.Text<{ follow: boolean }>`
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: ${(props) => (props.follow ? "black" : "white")};
`;
interface recipes {
  img: string;
  name: string;
  type: string;
  duration: number;
  id: number;
}
interface User {
  img: string;
  name: string;
  recipeNumbers: number;
  following: number;
  followers: number;
  recipes: recipes[];
}

export default function MyProfileScreen({ navigation }: any) {
  const [user, serUser] = useState<User>(FAKE_USER);
  const [filterBy, setFilterBy] = useState("Recipes");
  const [follow, setFollow] = useState(false);
  const handleClick = () => {
    setFollow((prev) => !prev);
  };
  return (
    <AreaView>
      <ScrollView>
        <UserDataContainer>
          <HeadersIcons>
            <Icon
              name="arrow-back-ios"
              size={24}
              onPress={() => navigation.goBack()}
            />
            <Ionicons
              name="share-social"
              style={{ marginLeft: "auto", marginRight: 10 }}
              size={24}
            />
          </HeadersIcons>
          <UserImgContainer>
            <UserImg source={{ uri: user.img }} />
            <UserName>{user.name}</UserName>
          </UserImgContainer>
          <UserData
            recipeNumbers={user.recipeNumbers}
            following={user.following}
            followers={user.followers}
          />
          <FollowBtn follow={follow} onPress={handleClick}>
            <BtnText follow={follow}>{follow ? "Followed" : "Follow"}</BtnText>
          </FollowBtn>
        </UserDataContainer>

        <PageBreak></PageBreak>
        <Filter filterBy={filterBy} setFilterBy={setFilterBy} />
        <ItemsContainer>
          {user.recipes.map((item) => (
            <Fragment key={item.id}>
              <FoodItem item={item} />
            </Fragment>
          ))}
        </ItemsContainer>
      </ScrollView>
    </AreaView>
  );
}
