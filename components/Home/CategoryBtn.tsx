import styled from "styled-components/native";

const CategoryBTN = styled.TouchableOpacity<{ active: boolean }>`
  height: 60px;
  background-color: ${(props) =>
    props.active ? "rgba(31, 204, 121, 1)" : "rgba(244, 245, 247, 1)"};
  width: 80px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 32px;
  margin-right: 15px;
`;
const CategoryText = styled.Text<{ active: boolean }>`
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  color: ${(props) => (props.active ? "white" : "rgba(159, 165, 192, 1)")};
`;
interface props {
  title: string;
  category: string;
  active?: boolean;
  setCategory: (category: string) => void;
}
export default function CategoryBtn({ title, setCategory, category }: props) {
  return (
    <CategoryBTN active={category === title} onPress={() => setCategory(title)}>
      <CategoryText active={category === title}>{title}</CategoryText>
    </CategoryBTN>
  );
}
