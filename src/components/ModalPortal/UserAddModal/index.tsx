import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import ModalContainer from "../ModalContainer";

import { TextField } from "./UserAddModal.styled";

interface UserAddModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UserAddModal = ({ isOpen, closeModal }: UserAddModalProps) => {
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
          <TextField id="user-name" label="name" variant="outlined" />
          <TextField id="user-country" label="country" variant="outlined" />
          <TextField id="user-birthday" label="birthday" variant="outlined" />
          <TextField id="user-age" label="age" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </ModalContainer>
  );
};

export default UserAddModal;
