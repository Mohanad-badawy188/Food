import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Body } from "../components/GLobalStyles";
import SearchInput from "../components/SearchInput";
import CategoryBtn from "../components/Home/CategoryBtn";
import { Home_FAKE_DATA } from "../FakeData";
import FoodItem from "../components/Home/FoodItem";
import { ScrollView } from "react-native";

const Header = styled.Text`
  font-size: 19px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0.5px;
  margin-top: 25px;
  color: rgba(62, 84, 129, 1);
`;
const CategoryBtnContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
`;
const ItemsContainer = styled.View`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface item {
  name: string;
  id: string;
  img: string;
  AVGTime: number;
  category: string;
  author: author;
}
interface author {
  img: string;
  name: string;
}

export default function HomeScreen() {
  const [category, setCategory] = useState<string>("All");
  const [data, setData] = useState<item[]>(Home_FAKE_DATA);
  useEffect(() => {
    const filerItem = () => {
      if (category === "All") {
        setData(Home_FAKE_DATA);
      }
      if (category === "Food") {
        setData(Home_FAKE_DATA.filter((item) => item.category === "Food"));
      }
      if (category === "Drink") {
        setData(Home_FAKE_DATA.filter((item) => item.category === "Drink"));
      }
    };
    filerItem();
  }, [category]);

  return (
    <Body>
      <SearchInput />
      <Header>Category</Header>
      <CategoryBtnContainer>
        <CategoryBtn
          category={category}
          title={"All"}
          setCategory={setCategory}
        />
        <CategoryBtn
          category={category}
          title={"Food"}
          setCategory={setCategory}
        />
        <CategoryBtn
          category={category}
          title={"Drink"}
          setCategory={setCategory}
        />
      </CategoryBtnContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ItemsContainer>
          {data?.map((item: item) => (
            <React.Fragment key={item.id}>
              <FoodItem item={item} />
            </React.Fragment>
          ))}
        </ItemsContainer>
      </ScrollView>
    </Body>
  );
}
