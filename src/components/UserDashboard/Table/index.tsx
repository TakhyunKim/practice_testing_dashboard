import { useState } from "react";
import type { MouseEvent } from "react";
import MuiTable from "@mui/material/Table";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

import type { User } from "../../../common/types/user";

interface TableProps {
  users: User[];
}

const Table = ({ users }: TableProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleSettingClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
  };

  const closePopup = () => {
    setAnchorEl(null);
  };

  return (
    <MuiTable sx={{ margin: "1rem 0" }}>
      <TableHeader />
      {users.map((user) => (
        <TableBody
          key={user.id}
          user={user}
          anchorEl={anchorEl}
          closePopup={closePopup}
          onSettingClick={handleSettingClick}
        />
      ))}
    </MuiTable>
  );
};

export default Table;
