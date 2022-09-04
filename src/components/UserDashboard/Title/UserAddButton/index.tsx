import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { Button } from "./UserAddButton.styled";

interface UserAddButtonProps {
  onAddUserButtonClick: () => void;
}

const UserAddButton = ({ onAddUserButtonClick }: UserAddButtonProps) => {
  return (
    <Button onClick={onAddUserButtonClick}>
      <PersonAddIcon sx={{ paddingRight: "0.5rem" }} />
      Add User
    </Button>
  );
};

export default UserAddButton;
