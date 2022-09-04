import { useState } from "react";

import Title from "./Title";
import Table from "./Table";
import UserAddModal from "../ModalPortal/UserAddModal";

import { Container } from "./UserDashboard.styled";

import { users as intialUsers } from "../../common/mocks/users";
import type { User } from "../../common/types/user";

const UserDashboard = () => {
  const [users, setUsers] = useState<User[]>(intialUsers);
  const [isAddUserModal, setIsAddUserModal] = useState<boolean>(false);

  const openAddUserModal = () => setIsAddUserModal(true);
  const closeUserModal = () => setIsAddUserModal(false);

  const addUser = (userInfo: Omit<User, "id">) => {
    const user: User = { ...userInfo, id: userInfo.name };

    setUsers((users) => [...users, user]);
  };

  return (
    <Container>
      <Title onAddUserButtonClick={openAddUserModal} />
      <Table users={users} />
      {isAddUserModal && (
        <UserAddModal
          isOpen={isAddUserModal}
          onConfirmClick={addUser}
          closeModal={closeUserModal}
        />
      )}
    </Container>
  );
};

export default UserDashboard;
