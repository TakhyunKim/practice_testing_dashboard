import { styled } from "@mui/system";
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)({
  padding: "0.5rem 1rem",
  background: "#eaedef",
  color: "#414141",
  borderRadius: "10px",
  textTransform: "none",
  "&:hover": {
    background: "#c8c9cb",
  },
});
