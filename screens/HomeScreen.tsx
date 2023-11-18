import styled from "styled-components/native";
import { Body } from "../components/GLobalStyles";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import CategoryBtn from "../components/Home/CategoryBtn";

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
export default function HomeScreen() {
  const [category, setCategory] = useState<string>("All");

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
    </Body>
  );
}
