import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import MuiTableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";

import type { User } from "../../../../common/types/user";
import { getDate } from "./getDate";

interface TableBodyProps {
  user: User;
}

const TableBody = ({ user }: TableBodyProps) => {
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
          <Button />
        </TableCell>
      </TableRow>
    </MuiTableBody>
  );
};

export default TableBody;
