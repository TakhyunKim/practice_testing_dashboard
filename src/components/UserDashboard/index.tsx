import { useState } from "react";

import Title from "./Title";
import Table from "./Table";

import { Container } from "./UserDashboard.styled";

import { users as intialUsers } from "../../common/mocks/users";
import type { User } from "../../common/types/user";

const UserDashboard = () => {
  const [users, setUsers] = useState<User[]>(intialUsers);

  return (
    <Container>
      <Title />
      <Table users={users} />
    </Container>
  );
};

export default UserDashboard;
