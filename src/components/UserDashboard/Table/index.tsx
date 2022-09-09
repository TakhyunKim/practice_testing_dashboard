import { useState } from "react";
import type { MouseEvent } from "react";
import MuiTable from "@mui/material/Table";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

import type { User } from "../../../common/types/user";

interface TableProps {
  users: User[];
  onEditClick: () => void;
  onDeleteClick: (id: string) => void;
}

const Table = ({ users, onEditClick, onDeleteClick }: TableProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleSettingClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };

  const closePopup = () => {
    setAnchorEl(null);
  };

  const handleDeleteButtonClick = (id: string) => {
    onDeleteClick(id);
    closePopup();
  };

  return (
    <MuiTable sx={{ margin: "1rem 0" }}>
      <TableHeader />
      {users.map((user) => (
        <TableBody
          key={user.id}
          user={user}
          anchorEl={anchorEl}
          onEditClick={closePopup}
          onDeleteClick={handleDeleteButtonClick}
          onSettingClick={handleSettingClick}
        />
      ))}
    </MuiTable>
  );
};

export default Table;
