import MuiTable from "@mui/material/Table";

import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

import type { User } from "../../../common/types/user";

interface TableProps {
  users: User[];
}

const Table = ({ users }: TableProps) => {
  return (
    <MuiTable sx={{ margin: "1rem 0" }}>
      <TableHeader />
      {users.map((user) => (
        <TableBody key={user.id} user={user} />
      ))}
    </MuiTable>
  );
};

export default Table;
