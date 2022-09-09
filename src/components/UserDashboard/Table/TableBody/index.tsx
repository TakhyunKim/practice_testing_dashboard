import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import MuiTableBody from "@mui/material/TableBody";
import SettingsIcon from "@mui/icons-material/Settings";

import EditPopup from "./EditPopup";

import type { User } from "../../../../common/types/user";
import { getDate } from "./getDate";

interface TableBodyProps {
  user: User;
  anchorEl: HTMLButtonElement | null;
  onEditClick: () => void;
  onDeleteClick: (id: string) => void;
  onSettingClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const TableBody = ({
  user,
  anchorEl,
  onEditClick,
  onDeleteClick,
  onSettingClick,
}: TableBodyProps) => {
  const open = Boolean(anchorEl);

  return (
    <MuiTableBody>
      <TableRow>
        <TableCell>
          <Box
            sx={{
              backgroundColor: "#eaedef",
              borderRadius: "50%",
              width: "2rem",
              height: "2rem",
            }}
          />
        </TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.country}</TableCell>
        <TableCell>{getDate(user.birthday)}</TableCell>
        <TableCell>{user.age}</TableCell>
        <TableCell>
          <Button
            aria-describedby={user.id}
            type="button"
            onClick={onSettingClick}
          >
            <SettingsIcon sx={{ color: "#414141" }} />
          </Button>
          <Popper
            placement="bottom-end"
            open={open}
            id={user.id}
            anchorEl={anchorEl}
          >
            <EditPopup
              onEditClick={onEditClick}
              onDeleteClick={() => onDeleteClick(user.name)}
            />
          </Popper>
        </TableCell>
      </TableRow>
    </MuiTableBody>
  );
};

export default TableBody;
