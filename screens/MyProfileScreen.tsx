import React, { Fragment, useState } from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import UserData from "../components/Profile/UserData";
import { ScrollView } from "react-native";
import Filter from "../components/Profile/Filter";
import FoodItem from "../components/Profile/FoodItem";
export const FAKE_USER = {
  img: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  name: "Mohanad Badawy",
  recipeNumbers: 32,
  following: 782,
  followers: 1287,
  recipes: [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg",
      name: "Pancake",
      type: "food",
      duration: 60,
    },
    {
      id: 12,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YT1hq6BorY6Zgvx4RLGC3WDaYlAYovZNi_iFYM8SEA&s",
      name: "Orange Juice",
      type: "drink",
      duration: 10,
    },
    {
      id: 13,
      img: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg",
      name: "Pancake",
      type: "food",
      duration: 60,
    },
    {
      id: 14,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YT1hq6BorY6Zgvx4RLGC3WDaYlAYovZNi_iFYM8SEA&s",
      name: "Orange Juice",
      type: "drink",
      duration: 10,
    },
    {
      id: 15,
      img: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg",
      name: "Pancake",
      type: "food",
      duration: 60,
    },
    {
      id: 16,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YT1hq6BorY6Zgvx4RLGC3WDaYlAYovZNi_iFYM8SEA&s",
      name: "Orange Juice",
      type: "drink",
      duration: 10,
    },
  ],
};
export const UserDataContainer = styled.View`
  padding: 24px;
`;
export const UserImgContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
export const UserImg = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;
export const UserName = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  text-align: center;
  color: rgba(62, 84, 129, 1);
  margin-top: 25px;
`;
export const PageBreak = styled.View`
  background-color: rgba(244, 245, 247, 1);
  height: 8px;
`;
export const ItemsContainer = styled.View`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 25px;
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

export default function MyProfileScreen() {
  const [user, serUser] = useState<User>(FAKE_USER);
  const [filterBy, setFilterBy] = useState("Recipes");
  return (
    <AreaView>
      <ScrollView>
        <UserDataContainer>
          <Ionicons
            name="share-social"
            style={{ marginLeft: "auto", marginRight: 10 }}
            size={24}
          />
          <UserImgContainer>
            <UserImg source={{ uri: user.img }} />
            <UserName>{user.name}</UserName>
          </UserImgContainer>
          <UserData
            recipeNumbers={user.recipeNumbers}
            following={user.following}
            followers={user.followers}
          />
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
