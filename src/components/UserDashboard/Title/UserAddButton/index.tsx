import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { Button } from "./UserAddButton.styled";

const UserAddButton = () => {
  return (
    <Button>
      <PersonAddIcon sx={{ paddingRight: "0.5rem" }} />
      Add User
    </Button>
  );
};

export default UserAddButton;
