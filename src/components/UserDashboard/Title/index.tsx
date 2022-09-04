import UserAddButton from "./UserAddButton";

import { Container, HeaderText } from "./Title.styled";

const Title = () => {
  return (
    <Container>
      <HeaderText>Users</HeaderText>
      <UserAddButton />
    </Container>
  );
};

export default Title;
