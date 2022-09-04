import { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import ModalContainer from "../ModalContainer";

import { TextField } from "./UserAddModal.styled";

import type { User } from "../../../common/types/user";

type TypingUserInfo = Omit<User, "id">;

interface UserAddModalProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirmClick: (typingUserInfo: TypingUserInfo) => void;
}

const INITIAL_USER_INFO: TypingUserInfo = {
  age: 0,
  name: "",
  country: "",
  birthday: new Date(),
};

const UserAddModal = ({
  isOpen,
  closeModal,
  onConfirmClick,
}: UserAddModalProps) => {
  const [typingUserInfo, setUserTypingInfo] =
    useState<TypingUserInfo>(INITIAL_USER_INFO);

  const changeTypingInfo = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    target: keyof TypingUserInfo
  ) => {
    const userInfoValue =
      target === "birthday" ? new Date(event.target.value) : event.target.value;

    setUserTypingInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [target]: userInfoValue,
    }));
  };

  const handleConfirmClick = () => {
    onConfirmClick(typingUserInfo);
    closeModal();
  };

  return (
    <ModalContainer>
      <Dialog
        fullWidth
        maxWidth="sm"
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Enter User Info</DialogTitle>
        <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="user-name"
            label="name"
            variant="outlined"
            onChange={(event) => changeTypingInfo(event, "name")}
          />
          <TextField
            variant="outlined"
            id="user-country"
            label="country"
            onChange={(event) => changeTypingInfo(event, "country")}
          />
          <TextField
            variant="outlined"
            id="user-birthday"
            type="date"
            onChange={(event) => changeTypingInfo(event, "birthday")}
          />
          <TextField
            variant="outlined"
            id="user-age"
            label="age"
            onChange={(event) => changeTypingInfo(event, "age")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleConfirmClick}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </ModalContainer>
  );
};

export default UserAddModal;
