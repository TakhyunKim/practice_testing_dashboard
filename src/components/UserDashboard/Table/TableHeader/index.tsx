import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { TableHead } from "./TableHeader.styled";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <PeopleAltIcon />
        </TableCell>
        <TableCell>User</TableCell>
        <TableCell>Country</TableCell>
        <TableCell>Birthday</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>
          <div />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
