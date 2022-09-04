import UserAddButton from "./UserAddButton";

import { Container, HeaderText } from "./Title.styled";

interface TitleProps {
  onAddUserButtonClick: () => void;
}
const Title = ({ onAddUserButtonClick }: TitleProps) => {
  return (
    <Container>
      <HeaderText>Users</HeaderText>
      <UserAddButton onAddUserButtonClick={onAddUserButtonClick} />
    </Container>
  );
};

export default Title;
