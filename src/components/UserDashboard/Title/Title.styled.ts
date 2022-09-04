import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center",
});

export const HeaderText = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#414141",
  fontSize: "1.5rem",
  fontWeight: "bold",
});
